import express from "express"
import cors from "cors"
import 'dotenv/config'

//config
const app = express()
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json())
app.use(cors())

// api endpoint
app.get('/',(req,res)=>{
    res.send("Working")
})

app.listen(port,()=>console.log("Server Working on "+port));
