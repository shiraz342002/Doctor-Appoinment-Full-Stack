import express from "express"
import { DoctorsList,loginDoctor } from "../controllers/doctorController.js"
const doctorRouter=express.Router()


doctorRouter.get('/list',DoctorsList)
doctorRouter.post('/login',loginDoctor)
export default doctorRouter