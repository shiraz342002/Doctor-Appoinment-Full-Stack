import validator from "validator";
import bcryptjs from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";

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

export { addDoctor, loginAdmin };
