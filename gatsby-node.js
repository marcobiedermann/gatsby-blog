const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const postTemplate = path.resolve('./src/templates/Post/index.tsx');

async function createPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicBuild('There was an error loading your blog posts', errors);

    return;
  }

  data.allMarkdownRemark.nodes.forEach((node) => {
    const { fields, id } = node;

    createPage({
      path: `/blog${fields.slug}`,
      component: postTemplate,
      context: {
        id,
      },
    });
  });
}

function onCreateNode({ node, actions, getNode }) {
  const { createNodeField } = actions;
  const { internal } = node;

  if (internal.type === 'MarkdownRemark') {
    const value = createFilePath({
      getNode,
      node,
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
