import userModel from "../models/user.model.js"
import { customError } from "../utils/CustomError.js"
let  salt = bcrypt.genSaltSync(10)
import bcrypt from "bcrypt"


export const userUpdate = async (req, res, next) => {
  console.log(req.body);
  if (req.user.id !== req.params.id) return next(customError(401, "You can only update Your Account"));
console.log("req coming");
  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, salt);
    }

    const userUpdated = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profile: req.body.profile,
        },
      },
      { new: true }
    );
    res.json({ message: "User Updated!" });
  } catch (error) {
    next(error);
  }
};


export const userDelete=async(req,res,next)=>{
  if (req.user.id !== req.params.id) return next(customError(401, "You can only delete Your Account"));


  try {
    await userModel.findByIdAndUpdate(req.params.id)
    res.status(200).json({message:"User Deleted!"})
  } catch (error) {
    next(error)
  }
}

export const getUserInfo = async(req,res,next)=>{
 let {id} = req.user
try {
  const user = await userModel.findById(id)
  if(!user) returnnext(customError(404, "User not Found"));

  const {email,profile,username,_id,role} = user;
  const userDataToSend = { email, profile, username, _id,role };
  res.json(userDataToSend)
} catch (error) {
  next(error)
}

}