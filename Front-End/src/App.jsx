import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Doctor from './pages/Doctor.jsx'
import MyProfile from './pages/MyProfile.jsx'
import Login from './pages/Login.jsx'
import MyAppointment from './pages/MyAppointments.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%] '>
     <Navbar/>
      <Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/doctors' element={<Doctor/>}></Route>
        <Route path='/doctors/:speciality' element={<Doctor/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/myappoinments' element={<MyAppointment/>}></Route>
        <Route path='/myappointments/:docId' element={<MyAppointment/>}></Route>
        <Route path='/myprofile' element={<MyProfile/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
