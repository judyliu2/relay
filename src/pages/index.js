import React from "react"
import { Link } from "gatsby"

const Index = props => {
  const posts = props.data.wordpress.posts.nodes

  return (
    <ul>
      {posts.map(post => {
        return (
          <li key={post.id}>
            <Link to={`/${post.slug}`}>{post.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Index
export const query = graphql`
  {
    wordpress {
      posts {
        nodes {
          title
          id
          slug
        }
      }
    }
  }
`

