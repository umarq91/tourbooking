import express from "express"
const router = express.Router()

import { verifyToken } from "../middlewares/VerifyToken.js"
import { addTour } from "../controller/tourcrud.controller.js"
import { tourAllListing,tourListing } from "../controller/Filtering.controller.js"


router.post("/",addTour)
router.get("/alltours",tourAllListing)

export default router