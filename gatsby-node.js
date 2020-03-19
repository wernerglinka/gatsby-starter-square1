// const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async function({ actions, graphql }) {
  const { createPage } = actions;
  await graphql(`
    {
      pages: allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    /** ********************************************************************************
     * Pages
     ********************************************************************************* */
    const pages = result.data.pages.edges;

    pages.forEach((edge, index) => {
      const id = edge.node.id;
      
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(`src/templates/page.js`),
        context: {
          id,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
