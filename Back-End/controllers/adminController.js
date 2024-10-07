import validator from "validator";
import bcryptjs from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";
import appointmentModel from "../models/appointmentModel.js";

//for adding doctor
const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experiance,
      about,
      fees,
      address,
    } = req.body;
    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(speciality);
    // console.log(degree);
    // console.log(experiance);
    // console.log(about);
    // console.log(fees);
    // console.log(address);
    
    const imageFile = req.file;
    if(!name || !email || !password || !speciality || !degree || !experiance || !about || !fees || !address ){
      return res.json({ success: false, message: "Missing Details" });
    }
    //validate email
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid Email" });
    }

    //validate pass
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }
    //hashing pw
    const salt = await bcryptjs.genSalt(10);
    const hashedpw = await bcryptjs.hash(password, salt);

    // upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageurl = imageUpload.secure_url;

    const docData = {
      name,
      email,
      image: imageurl,
      password: hashedpw,
      speciality,
      degree,
      experiance,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };
    const newDoctor = new doctorModel(docData);
    await newDoctor.save();
    res.json({ success: true, message: "Doctor Added Successfully" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

//Api for Admin login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // console.log("if true");
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
     
      res.json({ success: false, message: "Invalid Credentials" });
    }
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};
//Api to get all doc list for admin panel
const allDoctor=async(req,res)=>{
  try {
    const doctors = await doctorModel.find({}).select('-password')
    res.json({success:true,doctors})
  } catch (error) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
}
//Api to get All appointment list
const appointmentsAdmin=async(req,res)=>{
  try {
    const appointments=await appointmentModel.find({})
    return res.json({success:true,appointments})

  } catch (err) {
     console.log(err);
    res.json({ success: false, message: err.message });
  }
}
//api to cancel appointment
const appointmentCancel = async (req, res) => {
  try {
    const { appointmentId } = req.body;
    const appointmentData = await appointmentModel.findById(appointmentId);

   
    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });
    // clearing doctor slot

    const { docId, slotDate, slotTime } = appointmentData;
    const doctorData = await doctorModel.findById(docId);
    let slots_booked = doctorData.slots_booked;
    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e !== slotTime
    );
    await doctorModel.findByIdAndUpdate(docId, { slots_booked });
    res.json({ success: true, message: "Appointment Cancelled" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export { addDoctor, loginAdmin,allDoctor,appointmentsAdmin,appointmentCancel };
