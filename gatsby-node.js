const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const postTemplate = path.resolve('./src/templates/Post/index.tsx');
const tagTemplate = path.resolve('./src/templates/Tag/index.tsx');

function getPrevious(edges, index) {
  return index === 0 ? null : edges[index - 1].node;
}

function getNext(edges, index) {
  return index === edges.length - 1 ? null : edges[index + 1].node;
}

async function createPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }, limit: 1000) {
        distinct(field: frontmatter___tags)
        edges {
          node {
            fields {
              slug
            }
            id
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

  edges.forEach((edge, index) => {
    const {
      node: { fields, id },
    } = edge;
    const next = getNext(edges, index);
    const previous = getPrevious(edges, index);

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
