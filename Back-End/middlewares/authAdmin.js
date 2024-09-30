import jwt from "jsonwebtoken";

//admin auth middleware
const authAdmin = async (req, res, next) => {
  try {
    // console.log("Middleware Working");
    
    const {adminToken}=req.headers.authorization;
    console.log(adminToken);
    
    if(!adminToken){
        res.json({ success: false, message:"Not Authorized login Again" });
    }
    const token_decode = jwt.verify(adminToken,process.env.JWT_SECRET)
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