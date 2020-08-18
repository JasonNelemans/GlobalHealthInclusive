const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const informationTemplate = path.resolve("./src/templates/information.js")
  const res = await graphql(`
    query {
      allContentfulInformationContainer {
        edges {
          node {
            informationPosts {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allContentfulInformationContainer.edges[0].node.informationPosts.forEach(
    post => {
      createPage({
        component: informationTemplate,
        path: `/information/${post.slug}`,
        context: {
          slug: post.slug,
        },
      })
    }
  )
}
