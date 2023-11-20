import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        default:'user'
    },
    password:{
        type:String,
        required:true,
    },profile:{
        type:String
    }
},{timestamps:true})

export default mongoose.model("User",UserSchema)