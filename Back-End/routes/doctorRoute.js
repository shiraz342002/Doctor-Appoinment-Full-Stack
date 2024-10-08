import express from "express"
import { DoctorsList,loginDoctor,appointmentsDoctor } from "../controllers/doctorController.js"
import authDoctor from "../middlewares/authDoctor.js"
const doctorRouter=express.Router()


doctorRouter.get('/list',DoctorsList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctor,appointmentsDoctor)
export default doctorRouter