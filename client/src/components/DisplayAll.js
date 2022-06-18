import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const DisplayAll = props => {
  const navigate = useNavigate()
  const { products, setProducts } = props
  const handleDelete = id => {
    axios
      .delete(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        console.log(res.data)
        const fileterd = products.filter((products, idx) => {
          return id !== products._id
        })
        setProducts(fileterd)
        navigate('/')
      })
      .catch(err => console.log(err))
  }
  return (
    <div className='App container d-flex align-items-center justify-content-between'>
      <h2 className='container'> All Products </h2>
      <table className='table container'>
        <tbody>
          {products.map(product => (
            <tr scope='row' key={product._id}>
              <td>
                <Link to={`/product/${product._id}`}> {product.title}</Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(product._id)}
                  className='btn btn-danger'
                >
                  Delete
                </button>
              </td>
              <td>
                <Link to={`/edit/${product._id}`}>
                  <button className='btn'>Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayAll
