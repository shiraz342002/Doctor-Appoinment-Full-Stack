import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectCloudinary from "./config/cloudinary.js"
import connectDB from "./config/mongodb.js"



//config
const app = express()
const port = process.env.PORT || 3000;
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(cors())

// api endpoint
app.get('/',(req,res)=>{
    res.send("Working")
})

app.listen(port,()=>console.log("Server Working on "+port));
