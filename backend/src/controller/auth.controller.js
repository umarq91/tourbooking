import UserModel from "../models/user.model.js"
import { customError} from "../utils/CustomError.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
let  salt = bcrypt.genSaltSync(10)



export const signUp = async (req, res, next) => {
  const { username, password, email ,name} = req.body;

  try {

  let hashedpassword = bcrypt.hashSync(password, salt);

    const user = await UserModel.create({
      username,
      email,
      password: hashedpassword,
      name
    });
    res.json({ success:"true", user});
  } catch (error) {
    next(error);
  }
};

export const signIn = async(req,res,next)=>{
   let { email,password }= req.body;
try {
  
   let validUser = await UserModel.findOne({email})
   if(!validUser) return next(CustomError(401,"User not Found"))

   let validpassword = bcrypt.compareSync(password,validUser.password)
   if(!validpassword) return next(CustomError(401,"passord did not matched"))
//  its not safe to send validUser array complete because there is a password field too so we get the password field out from that
const {password:hashedpassword,...rest} = validUser._doc
   

   // Generate a token 
  const token= jwt.sign({id:validUser._id},process.env.secret,{expiresIn:'1h'});
  console.log("signed in");
res.cookie('token',token,{
    httpOnly:true
}).json(rest)

} catch (error) {
  next(error)
}

  
}


export const userVerification=(req,res)=>{
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, usertoken) => {
      if (err) throw err;
      const { name, email, _id,password,profile} = await UserModel.findById(usertoken.id);

      res.json({ name, email, _id,username,profile });
    });
  } else {
    res.json(null);
  }
}