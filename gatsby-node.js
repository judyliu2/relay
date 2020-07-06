const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      wordpress {
        posts {
          nodes {
            slug
            title
            content
          }
        }
        categories {
          nodes {
            name
            uri
          }
        }
      }
    }
  `).then(result => {
    result.data.wordpress.posts.nodes.forEach(({ slug, title, content }) => {
      console.log("title from node", title)
      createPage({
        path: slug,
        component: path.resolve(`./src/templates/post.js`),
        context: {
          title,
          slug,
          content,
        },
      })
    })
    result.data.wordpress.categories.nodes.forEach(({ uri, name }) => {
      createPage({
        path: uri,
        component: path.resolve(`./src/templates/category.js`),
        context: {
          uri,
          name
        }
      })
    })
  })
}
