import express from "express"
const router = express.Router()

import { verifyToken } from "../middlewares/VerifyToken.js"
import { UploadItems, addTour, getTour, getTourDetails, getUserTours, tourDelete, tourUpdate } from "../controller/tourcrud.controller.js"
import { latestTours, mostViewdTours, tourAllListing,tourListing } from "../controller/Filtering.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
// All , search and Filter
router.get("/alltours",tourAllListing)
router.get('/search',tourListing)
router.get('/mostviewed',mostViewdTours)
router.get('/latestTours',latestTours)
router.get('/myTours',verifyToken,getUserTours)
// Crud
router.post("/add",verifyToken,addTour)
//get tour details for details & update
router.get('/details/:id',getTourDetails)
router.get('/:id',getTour)

router.put('/update/:id',verifyToken,tourUpdate)
router.delete('/delete/:id',verifyToken,tourDelete)


router.post('/upload',upload.array('photos', 10),UploadItems)



export default router