import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

// pages import....
import Home from './pages/Home.jsx'
import Navbar from './Components/Navbar.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}
