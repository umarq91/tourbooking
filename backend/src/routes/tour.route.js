import express from "express"
const router = express.Router()

import { verifyToken } from "../middlewares/VerifyToken.js"
import { UploadItems, addTour, getTour, tourDelete, tourUpdate } from "../controller/tourcrud.controller.js"
import { mostViewdTours, tourAllListing,tourListing } from "../controller/Filtering.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
// All , search and Filter
router.get("/alltours",tourAllListing)
router.get('/search',tourListing)
router.get('/mostviewed',mostViewdTours)
// Crud
router.post("/",verifyToken,addTour)
router.get('/:id',getTour)
router.put('/update/:id',verifyToken,tourUpdate)
router.delete('/delete/:id',verifyToken,tourDelete)


router.post('/upload',upload.array('photos', 10),UploadItems)



export default router