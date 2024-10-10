import express from "express"
import { DoctorsList,loginDoctor,appointmentsDoctor,appointmentCancel,appointmentCompleted } from "../controllers/doctorController.js"
import authDoctor from "../middlewares/authDoctor.js"
const doctorRouter=express.Router()


doctorRouter.get('/list',DoctorsList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)
doctorRouter.post('/complete-appointment',authDoctor,appointmentCompleted)
doctorRouter.post('/cancel-appointment',authDoctor,appointmentCancel)
export default doctorRouter