
import TourModel from "../models/tour.model.js"
import {customError} from "../utils/CustomError.js"



// Add Tour

export const addTour = async(req,res,next)=>{
 
  const {id} = req.user
  console.log(id);
    try {
        
        let {tourname,location,city,fee,description,type,hotel,groupSize,included,thingstokeepinMind,requirements,mapLocation,highlights,gallery,duration} = req.body;
     let   requirementsupdated= req.body.requirements.split(',').map((term) => term.trim());
       let   highlightsupdated= req.body.requirements.split(',').map((term) => term.trim());
       let  thingstokeepinMindupdated= req.body.thingstokeepinMind.split(',').map((term) => term.trim());
      let   includedupdated = req.body.included.split(',').map((term) => term.trim());

  
      const added =await TourModel.create({
       ...req.body,requirements:requirementsupdated,highlights:highlightsupdated,thingstokeepinMind:thingstokeepinMindupdated,included:includedupdated,postedBy:id
      });
      res.status(200).json({message:"Tour is Added"});


     
    } catch (error) {
        next(error)
    }
}


// Update Tour

export const tourUpdate = async(req,res,next)=>{
  const {id} = req.params;

  
  try {
    const checkUser = await TourModel.findById(id);
    // Check if user is valid
    if(req.user.id !== checkUser.postedBy){
       return next(customError(401,"You can Only Update your Tour"))
    }

    
      let {tourname,location,city,fee,description,type,hotel,groupSize,included,thingstokeepinMind,requirements,mapLocation,highlights,gallery,duration} = req.body;
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
    res.status(200).json({message:"Tour is Updated"});


   
  } catch (error) {
      next(error)
  }
}



// Delete Tour

  export const tourDelete = async(req,res)=>{

    const {id} = req.params;
    try {
      const checkUser = await TourModel.findById(id);
      // Check if user is valid
      if(req.user.id !== checkUser.postedBy){
         return next(customError(401,"You can Only Delete your Tour"))
      }

      const updated = await TourModel.findByIdAndDelete(id)

    res.status(200).json({message:"Tour is Deleted"});

    
    
  } catch (error) {
    next(error)
  }
}


// Get Tour 


export const getTour = async(req,res)=>{
  const {id} = req.params;

  const data = await TourModel.findById(id);

  res.status(200).json(data)

}