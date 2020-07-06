import React from 'react'
import useWordpress from '../hooks/useWordpress'

const Categories = () => {
  const { categories } = useWordpress()
  return (
    <div>
      {categories.nodes.map(node => {
        return <div key={node.id}>
          {node.name}
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
      }
    }
  }
}
`


