import jwt from "jsonwebtoken"
import {customError} from "../utils/CustomError.js"
import userModel from "../models/user.model.js"
export const verifyToken = async(req,res,next)=>{
    const token =req.cookies.token
    if(!token) return next(customError(404,"you are not authenticated!"))


    // jwt.verify(token,process.env.secret,(err,user)=>{
    //     if(err) return next(customError(403,"Token is not valid"))

    //     req.user= user
    //     next()
    // }
    // )
    
    const usertoken = jwt.verify(token, process.env.secret);
    const { name, email, _id, password, profile } = await userModel.findById(usertoken.id);

    // Attach user information to the request object for use in subsequent middleware or routes
    req.user = { name, email, _id, username: name, profile };
    next();
}