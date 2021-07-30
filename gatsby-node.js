const dayjs = require('dayjs');
const { createFilePath } = require('gatsby-source-filesystem');
const { resolve } = require('path');

const postTemplate = resolve('./src/templates/post.tsx');
const tagTemplate = resolve('./src/templates/tag.tsx');
const yearTemplate = resolve('./src/templates/year.tsx');

async function createPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }, limit: 1000) {
        tags: distinct(field: frontmatter___tags)
        years: distinct(field: fields___year)
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
    reporter.panicBuild('There was an error loading your blog posts', errors);

    return;
  }

  const {
    allMarkdownRemark: { edges, tags, years },
  } = data;

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
}

function onCreateNode({ node, actions, getNode }) {
  const { internal } = node;

  if (internal.type === 'MarkdownRemark') {
    const { frontmatter } = node;
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
}

module.exports = {
  createPages,
  onCreateNode,
};
