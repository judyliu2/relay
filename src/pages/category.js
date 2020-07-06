import React from 'react'
import useWordpress from '../hooks/useWordpress'
import { Link } from 'gatsby'

const Categories = () => {
  const { categories } = useWordpress()
  return (
    <div>
      {categories.nodes.map(node => {
        return <div key={node.id}>
          <Link to={node.uri}>{node.name}</Link>

        </div>
      })}
    </div>
  )
}

export default Categories
export const query = graphql`
{
  wordpress {
    categories {
      nodes {
        name
        id
        uri
      }
    }
  }
}
`


