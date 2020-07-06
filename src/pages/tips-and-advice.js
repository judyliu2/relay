import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import PageContextProvider from "../context/PageContext"

const TipsAndAdvice = props => {
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

export default TipsAndAdvice
export const query = graphql`
  query MyQuery {
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
