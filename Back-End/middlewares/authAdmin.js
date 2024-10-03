import jwt from "jsonwebtoken";

//admin auth middleware
const authAdmin = async (req, res, next) => {
  try {
    // console.log("Middleware Working");
    
    const {atoken}=req.headers;
    console.log(atoken);
    
    if(!atoken){
        res.json({ success: false, message:"Not Authorized login Again" });
    }
    const token_decode = jwt.verify(atoken,process.env.JWT_SECRET)
    if(token_decode!==process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
        res.json({ success: false, message:"Not Authorized login Again" });
    }
    next()
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export default authAdmin