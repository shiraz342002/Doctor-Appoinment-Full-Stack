import doctorModel from "../models/doctorModel.js";

const changeAvailability=async(req,res)=>{
    try {
        console.log("Change working");
        
        const {docId}=req.body
        const docData=await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId,{available:!docData.available})
        res.json({success:true,message:'Availability Changed'})
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}

const DoctorsList=async(req,res)=>{
    try {
        const doctors=await doctorModel.find({}).select(['-email,-password'])
        res.json({success:true,doctors})
    } catch (err) {
        console.log(err);
        res.json({ success: false, message: err.message });
    }
}

export {changeAvailability,DoctorsList}