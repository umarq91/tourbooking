import express from "express"
const router = express.Router()
import {signIn,signUp, userLogout, userVerification} from "../controller/auth.controller.js"
import { verifyToken } from "../middlewares/VerifyToken.js"

router.post('/signup',signUp)
router.post('/login',signIn)
router.get("/profile",userVerification)
router.get("/logout",userLogout)


export default router