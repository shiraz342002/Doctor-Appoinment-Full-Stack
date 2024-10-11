import doctorModel from "../models/doctorModel.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import appointmentModel from "../models/appointmentModel.js";
//change doc availablity
const changeAvailability = async (req, res) => {
  try {
    console.log("Change working");

    const { docId } = req.body;
    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    res.json({ success: true, message: "Availability Changed" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

//get all doctors list
const DoctorsList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-email,-password"]);
    res.json({ success: true, doctors });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

//api to login doctor
const loginDoctor = async (req, res) => {
    try {
        const {email,password}=req.body
        const doctor=await doctorModel.findOne({email})
        if(!doctor){
            res.json({ success: false, message:"Invalid Credentials" });
        }
        const isMatch=await bcryptjs.compare(password,doctor.password)
        if(isMatch){
            const token=jwt.sign({id:doctor._id},process.env.JWT_SECRET)
            res.json({success:true,token})
        }else{
            res.json({ success: false, message:"Invalid Credentials" });
        }

    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}
// api to get all appointments for doctor panel
const appointmentsDoctor=async(req,res)=>{
  try {
    const {docId} = req.body;
    const appointments=await appointmentModel.find({docId})
    res.json({ success: true,appointments});

  } catch (err) {
    console.log(err);
        res.json({ success: false, message: err.message });
  }
}

//Api to cancel appointment  
const appointmentCompleted=async(req,res)=>{
 
  
  try {
    const {docId,appointmentId} =req.body
    console.log(docId,appointmentId);
    
    const appointmentdata=await appointmentModel.findById(appointmentId)
    if(appointmentdata && appointmentdata.docId===docId){
      await appointmentModel.findByIdAndUpdate(appointmentId,{isCompleted:true})
     
      
      return res.json({success:true,message:"Appointment Completed"})
    }else{
      return res.json({success:false,message:"Mark Failed"})
    }

  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
}
const appointmentCancel=async(req,res)=>{
  try {
    const {docId,appointmentId} =req.body
    const appointmentdata=await appointmentModel.findById(appointmentId)
    if(appointmentdata && appointmentdata.docId===docId){
      await appointmentModel.findByIdAndUpdate(appointmentId,{cancelled:true})
      return res.json({success:true,message:"Appointment Cancelled"})
    }else{
      return res.json({success:false,message:"Cacellation Failed"})
    }

  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
}

// Api to get doctor dashboard data
const doctorDashboard=async(req,res)=>{
  try {
    const {docId} = req.body
    const appointments = await appointmentModel.find({docId})
    let earnings=0
    appointments.map((item)=>{
      if(item.isCompleted || item.payment){
        earnings+=item.amount
      }
    })
    let patients=[]
    appointments.map((item)=>{
      if(!patients.includes(item.userId)){
        patients.push(item.userId)
      }
    })
    const dashData={
      earnings,
      appointments:appointments.length,
      patients:patients.length,
      latestAppointments:appointments.reverse().slice(0,5)
    }
      
    res.json({success:true,dashData})

  } catch (err) {
    console.log(err);
    res.json({ success: false, message:err.message });
  }
}

// Api to get Doctor profile for Doc panel
const doctorProfile=async(req,res)=>{
  try {
    const {docId}=req.body
    const profileData=await doctorModel.findById(docId).select('-password')
    res.json({success:true,profileData})
  } catch (err) {
    console.log(err);
    res.json({ success: false, message:err.message });
  }
}

// Api to update Profile Data from Doc Panel


const UpdatedoctorProfile=async(req,res)=>{
  try {
    const {docId,fees,address,available}=req.body
    await doctorModel.findByIdAndUpdate(docId,{fees,address,available})
    res.json({success:true,message:"Profile Updated"})
  } catch (err) {
    console.log(err);
    res.json({ success: false, message:err.message });
  }
}


export { changeAvailability
        ,DoctorsList
        ,loginDoctor
        ,appointmentsDoctor
        ,appointmentCompleted
        ,appointmentCancel
        ,doctorDashboard,
        doctorProfile,
        UpdatedoctorProfile
       };
