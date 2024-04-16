import dayjs from 'dayjs';
import type { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import { resolve } from 'path';

const postTemplate = resolve('./src/templates/post.tsx');
const tagTemplate = resolve('./src/templates/tag.tsx');
const yearTemplate = resolve('./src/templates/year.tsx');

interface Edge {
  next: {
    fields: {
      slug: string;
    };
  };
  node: {
    fields: {
      slug: string;
    };
    id: string;
  };
  previous: {
    fields: {
      slug: string;
    };
  };
}

interface Data {
  allMarkdownRemark: {
    tags: string[];
    years: string[];
    edges: Edge[];
  };
}

interface Node {
  frontmatter: {
    date: string;
  };
}

const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        tags: distinct(field: { frontmatter: { tags: SELECT } })
        years: distinct(field: { fields: { year: SELECT } })
        edges {
          next {
            fields {
              slug
            }
          }
          node {
            fields {
              slug
            }
            id
          }
          previous {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild('There was an error loading your blog posts', errors);

    return;
  }

  const {
    allMarkdownRemark: { edges, tags, years },
  } = data as Data;

  years.forEach((year) => {
    createPage({
      component: yearTemplate,
      context: {
        year: parseInt(year, 10),
      },
      path: `/blog/${year}`,
    });
  });

  edges.forEach((edge) => {
    const {
      next,
      node: { fields, id },
      previous,
    } = edge;

    createPage({
      component: postTemplate,
      context: {
        id,
        next,
        previous,
      },
      path: `/blog${fields.slug}`,
    });
  });

  tags.forEach((tag) => {
    createPage({
      component: tagTemplate,
      context: {
        tag,
      },
      path: `/tags/${tag}`,
    });
  });
};

const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { internal } = node;

  if (internal.type === 'MarkdownRemark') {
    const { frontmatter } = node as unknown as Node;
    const { createNodeField } = actions;

    createNodeField({
      name: 'slug',
      node,
      value: createFilePath({
        getNode,
        node,
        trailingSlash: false,
      }),
    });

    createNodeField({
      name: 'year',
      node,
      value: dayjs(frontmatter.date).year(),
    });
  }
};

export { createPages, onCreateNode };
