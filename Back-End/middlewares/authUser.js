import jwt from "jsonwebtoken";

//user auth middleware
const authUser = async (req, res, next) => {
  try {
    // console.log("Middleware Working");
    
    const {token}=req.headers;
    // console.log(token);
    
    if(!token){
        return res.json({ success: false, message:"Not Authorized login Again" });
    }
    const token_decode = jwt.verify(token,process.env.JWT_SECRET)
    // console.log("Im Middleware "+token_decode.id);
    // console.log(req.body.userId);
    
    req.body.userId=token_decode.id
    
    next()
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export default authUser