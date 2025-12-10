import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import Home from "./pages/Home.jsx"
import Appointments from './pages/Appointments'
import User from './pages/user.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/appointments' element={<Appointments/>} />
          <Route path='/users' element={<User/>} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}
