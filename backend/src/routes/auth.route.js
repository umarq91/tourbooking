import express from "express"
const router = express.Router()
import {signIn,signUp} from "../controller/auth.controller.js"
import { verifyToken } from "../middlewares/VerifyToken.js"

router.post('/signup',signUp)
router.post('/login',signIn)

router.get('/user',verifyToken,(req,res)=>{
    console.log(req.user);
    res.end()
})

export default router