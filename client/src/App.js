import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashbord from './components/Dashbord'
import DisplayOne from './components/DisplayOne'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashbord />} />
        <Route path='/product/:id' element={<DisplayOne />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
