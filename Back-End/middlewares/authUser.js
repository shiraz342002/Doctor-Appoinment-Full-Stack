import jwt from "jsonwebtoken";

//user auth middleware
const authUser = async (req, res, next) => {
  try {
    // console.log("Middleware Working");
    
    const {token}=req.headers;
    console.log(token);
    
    if(!token){
        return res.json({ success: false, message:"Not Authorized login Again" });
    }
    const token_decode = jwt.verify(token,process.env.JWT_SECRET)
    console.log("Im Middleware "+token_decode.id);
    
    req.body.userId=token_decode.id
    if(token_decode!==process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
        res.json({ success: false, message:"Not Authorized login Again" });
    }
    next()
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

export default authUser