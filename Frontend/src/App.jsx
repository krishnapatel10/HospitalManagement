import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

// pages import....
import Home from './pages/Home.jsx'
import Navbar from './Components/Navbar.jsx'
import About from './pages/About.jsx'
import Signup from './Components/signup.jsx'
import Doctors from './pages/Doctors.jsx'
import Appointment from "./pages/Appointment.jsx"

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/doctors" element={<Doctors/>} />
          <Route path="/bookappointments" element={<Appointment/>} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}
