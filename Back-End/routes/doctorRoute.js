import express from "express"
import { DoctorsList } from "../controllers/doctorController.js"
const doctorRouter=express.Router()
doctorRouter.get('/list',DoctorsList)

export default doctorRouter