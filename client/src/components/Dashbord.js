import { useEffect, useState } from 'react'
import axios from 'axios'
import DisplayAll from './DisplayAll'
import Form from './Form'

const Dashbord = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/products')
      .then(res => {
        setProducts(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <Form products={products} setProducts={setProducts} />
      <DisplayAll products={products} setProducts={setProducts} />
    </div>
  )
}

export default Dashbord
