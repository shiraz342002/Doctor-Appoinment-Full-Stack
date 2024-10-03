import validator from "validator"
import bcryptjs from "bcryptjs"
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
//api for user registration
const registerUser=async(req,res)=>{
    
    try {
        console.log("Register User");
        const {name,email,password}=req.body
        if(!name || !email || !password){
            return res.json({success:false,message:"Missing Details"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Invalid Email"})            
        }
        if(password.length<8){
            return res.json({success:false,message:"Enter a Strong password"})
        }
        //hashing pw
        const salt=await bcryptjs.genSalt(10)
        const hashed_pw=await bcryptjs.hash(password,salt)

        const userData={
            name,
            email,
            password:hashed_pw
        }
        const newUser=new userModel(userData)
        const user = await newUser.save()
        
        //gen token
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        
        res.json({success:true,token})
    } catch (err) { 
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}
//api for user login
const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await userModel.findOne({email})
        if(!user){
         return res.json({success:false,message:"User Does not exsist"})
        }
        const isMatched=await bcryptjs.compare(password,user.password)
        if(isMatched){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            res.json({success:true,token})
        }else{
            res.json({success:false,message:"Invalid Credentials"})
        }
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}

export {registerUser,loginUser}