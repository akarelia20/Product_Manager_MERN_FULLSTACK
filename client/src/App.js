import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashbord from './components/Dashbord'
import DisplayOne from './components/DisplayOne'
import UpdateOne from './components/UpdateOne'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashbord />} />
        <Route path='/product/:id' element={<DisplayOne />} />
        <Route path='/edit/:id' element={<UpdateOne />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
