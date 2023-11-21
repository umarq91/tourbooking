
import TourModel from "../models/tour.model.js"
import {customError} from "../utils/CustomError.js"



// Add Tour
export const addTour = async(req,res,next)=>{
    try {
        
        let {tourname,location,city,fee,description,type,hotel,groupSize,included,thingstokeepinMind,requirements,mapLocation,highlights,gallery,duration} = req.body;
     let   requirementsupdated= req.body.requirements.split(',').map((term) => term.trim());
       let   highlightsupdated= req.body.requirements.split(',').map((term) => term.trim());
       let  thingstokeepinMindupdated= req.body.thingstokeepinMind.split(',').map((term) => term.trim());
      let   includedupdated = req.body.included.split(',').map((term) => term.trim());

  
      const done = TourModel.create({
        tourname,
        location,
        city,
        fee,
        description,
        type,
        hotel,
        groupSize,
        included: includedupdated,
        thingstokeepinMind: thingstokeepinMindupdated,
        requirements: requirementsupdated,
        mapLocation,
        highlights: highlightsupdated,
        gallery,
        duration,
      });
      res.status(200).json({message:"Tour is Added"});


     
    } catch (error) {
        next(error)
    }
}


// Update Tour




// Delete Tour