import axios from 'axios'
import React, { useState } from 'react'

const Form = props => {
  const { products, setProducts } = props
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    axios
      .post('http://localhost:8000/api/products', {
        title,
        price,
        description
      })
      .then(res => {
        console.log(res.data)
        console.log('SUCCESS')
        setProducts([...products, res.data])
        setTitle('')
        setPrice('')
        setDescription('')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='App'>
      <h1> Product Manager </h1>
      <form onSubmit={submitHandler} className='col-xl-5 App'>
        <div className='d-flex justify-content-center align-items-center'>
          <p className='mb-0 col-3 '>Title</p>
          <input
            onChange={e => setTitle(e.target.value)}
            type='text'
            value={title}
            className='form-control'
          />
        </div>
        <hr className='mx-n3' />
        <div className='d-flex justify-content-center align-items-center'>
          <p className='mb-0 col-3'>Price</p>
          <input
            onChange={e => setPrice(e.target.value)}
            type='number'
            value={price}
            className='form-control'
          />
        </div>
        <hr className='mx-n3' />
        <div className='d-flex justify-content-center align-items-center'>
          <p className='mb-0 col-3'>Description</p>
          <input
            onChange={e => setDescription(e.target.value)}
            type='text'
            value={description}
            className='form-control'
          />
        </div>
        <button className='btn btn-primary btn-lg mt-3' type='submit'>
          Create
        </button>
      </form>
      <hr />
    </div>
  )
}

export default Form
