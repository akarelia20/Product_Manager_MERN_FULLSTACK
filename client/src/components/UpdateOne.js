import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const UpdateOne = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then(res => {
        console.log(res.data)
        setTitle(res.data.title)
        setPrice(res.data.price)
        setDescription(res.data.description)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const submitHandler = e => {
    e.preventDefault()
    axios
      .put(`http://localhost:8000/api/product/${id}`, {
        title,
        price,
        description
      })
      .then(res => {
        console.log(res.data)
        console.log('SUCCESS')
        navigate(`/product/${id}`)
      })
      .catch(err => {
        setErrors(err.response.data.error.errors)
        console.log(err.response.data.error.errors)
      })
  }

  return (
    <div className='App'>
      <h1>Update Product </h1>
      <form onSubmit={submitHandler} className='col-xl-5 App'>
        {errors.title ? (
          <p className='text-danger'>{errors.title.message}</p>
        ) : null}
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
        {errors.price ? (
          <p className='text-danger'>{errors.price.message}</p>
        ) : null}
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
        {errors.description ? (
          <p className='text-danger'>{errors.description.message}</p>
        ) : null}
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
          Save
        </button>
      </form>
      <hr />
    </div>
  )
}

export default UpdateOne
