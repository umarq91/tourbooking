

import express from "express"
const router = express.Router()
import { verifyToken } from "../middlewares/VerifyToken.js"
import { getUserInfo, userUpdate } from "../controller/user.controller.js"

router.put("/update/:id",verifyToken,userUpdate)
router.get('/myaccount',verifyToken,getUserInfo)
export default router