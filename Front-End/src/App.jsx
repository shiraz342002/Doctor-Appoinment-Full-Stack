import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Doctor from './pages/Doctor.jsx'
import MyProfile from './pages/MyProfile.jsx'
import Login from './pages/Login.jsx'
import Appointment from './pages/Appointments.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import MyAppointments from './pages/MyAppointments.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <ToastContainer/>
     <Navbar/>
      <Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/doctors' element={<Doctor/>}></Route>
        <Route path='/doctors/:speciality' element={<Doctor/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/appoinments' element={<Appointment/>}></Route>
        <Route path='/appointment/:docId' element={<Appointment/>}></Route>
        <Route path='/myprofile' element={<MyProfile/>}></Route>
        <Route path='/myAppointments' element={<MyAppointments/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
