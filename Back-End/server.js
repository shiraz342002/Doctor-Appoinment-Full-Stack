import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectCloudinary from "./config/cloudinary.js"
import connectDB from "./config/mongodb.js"
import adminRouter from "./routes/adminRoute.js"



//config
const app = express()
const port = process.env.PORT || 3000;
connectDB()
connectCloudinary()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// api endpoint
app.use('/api/admin',adminRouter)


app.get('/',(req,res)=>{
    res.send("Working")
})

app.listen(port,()=>console.log("Server Working on "+port));
