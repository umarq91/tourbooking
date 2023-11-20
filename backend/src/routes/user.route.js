

import express from "express"
const router = express.Router()
import { verifyToken } from "../middlewares/VerifyToken.js"
import { userUpdate } from "../controller/user.controller.js"

router.put("/update/:id",verifyToken,userUpdate)
export default router