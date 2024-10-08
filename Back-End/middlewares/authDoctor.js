import jwt from "jsonwebtoken";

//Doctor auth middleware
const authDoctor = async (req, res, next) => {
  try {
    // console.log("Middleware Working");
    
    const {dtoken}=req.headers;
    // console.log(token);
    
    if(!dtoken){
        return res.json({ success: false, message:"Not Authorized login Again" });
    }
    const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)
    // console.log("Im Middleware "+token_decode.id);
    // console.log(req.body.userId);
    
    req.body.docId=token_decode.id
    
    next()
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export default authDoctor