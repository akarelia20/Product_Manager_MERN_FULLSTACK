import React from 'react'
import { Link } from 'react-router-dom'

const DisplayAll = props => {
  const { products, setProducts } = props
  return (
    <div className='App'>
      <h2> All Products </h2>
      <ul>
        {products.map(product => (
          <div key={product._id}>
            <li>
              <Link to={`/product/${product._id}`}> {product.title}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default DisplayAll
