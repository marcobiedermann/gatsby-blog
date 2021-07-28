const { resolve } = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const postTemplate = resolve('./src/templates/post.tsx');
const tagTemplate = resolve('./src/templates/tag.tsx');

async function createPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }, limit: 1000) {
        distinct(field: frontmatter___tags)
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
    allMarkdownRemark: { distinct, edges },
  } = data;

  distinct.forEach((tag) => {
    createPage({
      component: tagTemplate,
      context: {
        tag,
      },
      path: `/tags/${tag}`,
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
}

function onCreateNode({ node, actions, getNode }) {
  const { internal } = node;

  if (internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions;
    const value = createFilePath({
      getNode,
      node,
      trailingSlash: false,
    });

    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
}

module.exports = {
  createPages,
  onCreateNode,
};
