import express from "express"
import { DoctorsList,loginDoctor,appointmentsDoctor,UpdatedoctorProfile,doctorProfile,appointmentCancel,appointmentCompleted,doctorDashboard } from "../controllers/doctorController.js"
import authDoctor from "../middlewares/authDoctor.js"
const doctorRouter=express.Router()


doctorRouter.get('/list',DoctorsList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)
doctorRouter.post('/complete-appointment',authDoctor,appointmentCompleted)
doctorRouter.post('/cancel-appointment',authDoctor,appointmentCancel)
doctorRouter.get('/dashboard',authDoctor,doctorDashboard)
doctorRouter.get('/profile',authDoctor,doctorProfile)
doctorRouter.post('/update-profile',authDoctor,UpdatedoctorProfile)



export default doctorRouter
