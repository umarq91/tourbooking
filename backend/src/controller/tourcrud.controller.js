
import TourModel from "../models/tour.model.js"
import {customError} from "../utils/CustomError.js"
import {upload} from "../middlewares/multer.middleware.js"
import { uploadOnCloudinary } from "../utils/Cloudinary.js"
import {ApiResonse} from "../utils/ApiResponse.js"

// Add Tour

export const addTour = async (req, res, next) => {
  const { id } = req.user;
  console.log(id);
  let {
    tourname,
    location,
    city,
    fee,
    description,
    type,
    departure,
    groupSize,
    included,
    thingstokeepinMind,
    requirements,
    mapLocation,
    highlights,
    addedPhotos,
    duration,
  } = req.body;

  try {
    
    let requirementsUpdated = requirements.split(',').map((term) => term.trim());
    let highlightsUpdated = highlights.split(',').map((term) => term.trim());
    let thingstokeepinMindUpdated = thingstokeepinMind.split(',').map((term) => term.trim());
    let includedUpdated = included.split(',').map((term) => term.trim());
console.log(req.body);
    const added = await TourModel.create({
      ...req.body,
      gallery: addedPhotos,
      requirements: requirementsUpdated,
      highlights: highlightsUpdated,
      thingstokeepinMind: thingstokeepinMindUpdated,
      included: includedUpdated,
      postedBy: id,
      duration: {
        days: duration.days,
        nights: duration.nights,
      },
    });

    res.json(new ApiResonse(200, added, "Tour added"));
  } catch (error) {
    next(error);
  }
};



// Update Tour

export const tourUpdate = async(req,res,next)=>{
  const {id} = req.params;
console.log("update req");
  
  try {
    const checkUser = await TourModel.findById(id);
    // Check if user is valid
    if(req.user.id !== checkUser.postedBy){
       return next(customError(401,"You can Only Update your Tour"))
    }

    
      let {tourname,location,city,fee,description,type,departure,groupSize,included,thingstokeepinMind,requirements,mapLocation,highlights,gallery,duration} = req.body;
   let   requirementsupdated= req.body.requirements.split(',').map((term) => term.trim());
     let   highlightsupdated= req.body.requirements.split(',').map((term) => term.trim());
     let  thingstokeepinMindupdated= req.body.thingstokeepinMind.split(',').map((term) => term.trim());
    let   includedupdated = req.body.included.split(',').map((term) => term.trim());


    const updated = await TourModel.findByIdAndUpdate(id,{
      $set:{
        ...req.body,requirements:requirementsupdated,highlights:highlightsupdated,thingstokeepinMind:thingstokeepinMindupdated,included:includedupdated
      }
    },{ new : true}
    );
    res.json(new ApiResonse(200, updated, "Tour updated"));


   
  } catch (error) {
      next(error)
  }
}



// Delete Tour

  export const tourDelete = async(req,res,next)=>{

    const {id} = req.params;
    
    try {
      const checkUser = await TourModel.findById(id);
      // Check if user is valid
      if(req.user.id !== checkUser.postedBy){
         return next(customError(401,"You can Only Delete your Tour"))
      }

      const updated = await TourModel.findByIdAndDelete(id)

   
    res.status(200).json(new ApiResonse(200, "Tour added"));

    
    
  } catch (error) {
    next(error)
  }
}


// Get Tour 


export const getTour = async(req,res,next)=>{
  // const {name} = req.params;
  const {id} = req.params
  try {
    // const tourname =  decodeURIComponent(name.replace(/-/g, ' ')).trim()


    const data = await TourModel.findById(id);
    
   // Increment the views property by 1
   data.views += 1;
      
   // Save the updated tour
   await data.save();
  
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
 

}


export const getTourDetails = async(req,res,next)=>{
  try {
    const {id} = req.params;

    const data = await TourModel.findById(id)
    if(!data) return next(customError(404, "Tour not Found"));

    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
 

}


export const UploadItems = async (req, res, next) => {
  const uploadedFiles = [];
  const files = req.files;

  if (!files || files.length === 0) {
    return res.status(400).json({ error: "No images were provided" });
  }

  const cloudinaryUrls = [];

  try {
    for (const file of files) {
      const localPath = file.path;
      console.log(localPath);

      const cloudinaryUrl = await uploadOnCloudinary(localPath);

      if (cloudinaryUrl) {
        cloudinaryUrls.push(cloudinaryUrl);
      }
    }
  } catch (error) {
    console.log("error");
  }

  // Send the array of Cloudinary URLs in the response

  res.status(200).json(cloudinaryUrls);
};



export const getUserTours=async(req,res,next)=>{

  try {
    
   const data=  await TourModel.find({postedBy:req.user.id}).sort({ createdAt: -1 })
   res.json(data)
  } catch (error) {
    
  }

}