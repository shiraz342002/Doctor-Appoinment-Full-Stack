import express from "express"
import { getProfile, loginUser, registerUser,listAppointment,updateProfile,bookAppointment,cancelAppointment,paymentRazorPay } from "../controllers/userController.js"
import authUser from "../middlewares/authUser.js"
import upload from "../middlewares/multer.js"
const userRouter=express.Router()
userRouter.post('/register',registerUser)
userRouter.post('/login',loginUser)
userRouter.get('/get-profile',authUser,getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
userRouter.post('/book-appointment',authUser,bookAppointment)
userRouter.get('/appointments',authUser,listAppointment)
userRouter.get('/appointments',authUser,listAppointment)
userRouter.post('/cancel-appointments',authUser,cancelAppointment)
userRouter.post('/pay-online',authUser,paymentRazorPay)


export default userRouter  