import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const DisplayOne = props => {
  const { id } = useParams()
  const [product, setProduct] = useState('')
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='card-columns card p-3'>
      <h1> {product.title}</h1>
      <p> Price: {product.price}</p>
      <p> Description : {product.description} </p>
    </div>
  )
}

export default DisplayOne
