
import TourModel from "../models/tour.model.js"
import {customError} from "../utils/CustomError.js"




// All Listings
export const tourAllListing = async (req, res, next) => {

  let feefilter = {};
  let type;
  let days;

  try {
  
  
    // Check if type is provided in the query
    if (req.query.type === undefined || req.query.type === "all") {
      type = { $in: ['friends', 'family', 'Couple', 'culture', 'open'] };
    }else{
      type=req.query.type
    }
  
    if(req.query.days === undefined || req.query.days ==='nolimit'){
      days={$gt:0}
    }else{
      days = {$lte:req.query.days}
    }
  
    // Check if fee is provided in the query and is a valid number
    if (req.query.budget !== undefined && req.query.budget !== 'nolimit') {
      let queryfee = req.query.budget;
  
      // Use $lte to filter listings with a fee less than or equal to the provided value
      feefilter = { $lte: queryfee };
    }else{
      feefilter = { $gt: 0 };
    }
  
    const sort = req.query.sort || 'createdAt';
    const order = req.query.order || 'desc';
  
    // Build the query object conditionally based on the presence of query parameters
    let query = {};
  
    if (Object.keys(req.query).length > 0) {
  
      // If any query parameters are present, include them in the query
      query = {
      
        fee: feefilter,
        type,
        'duration.days': days
      };
    }
      const listings = await TourModel.find(query).sort({
        [sort]: order,
    
      })
      res.json(listings);
  } catch (error) {
    next(error);
  }
};





// Search and Filter
export const tourListing = async (req, res, next) => {
  let searchTerm;
  let feefilter = {};
  let type;
  let days;


try {
  
  if (req.query.searchTerm !== undefined) {
    searchTerm = req.query.searchTerm;
  }

  // Check if type is provided in the query
  if (req.query.type === undefined || req.query.type === "all") {
    type = { $in: ['friends', 'family', 'Couple', 'culture', 'open'] };
  }else{
    type=req.query.type
  }

  if(req.query.days === undefined || req.query.days ==='nolimit'){
    days={$gt:0}
  }else{
    days = {$lte:req.query.days}
  }

  // Check if fee is provided in the query and is a valid number
  if (req.query.budget !== undefined && req.query.budget !== 'nolimit') {
    let queryfee = req.query.budget;

    // Use $lte to filter listings with a fee less than or equal to the provided value
    feefilter = { $lte: queryfee };
  }else{
    feefilter = { $gt: 0 };
  }

  const sort = req.query.sort || 'createdAt';
  const order = req.query.order || 'desc';

  // Build the query object conditionally based on the presence of query parameters
  let query = {};

  if (Object.keys(req.query).length > 0) {

    // If any query parameters are present, include them in the query
    query = {
      $or: [
        { location: { $regex: searchTerm, $options: "i" } },
        { tourname: { $regex: searchTerm, $options: "i" } },
        { city: { $regex: searchTerm, $options: "i" } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
      fee: feefilter,
      type,
      'duration.days': days
    };
  }

    const listings = await TourModel.find(query).sort({
      [sort]: order,
  
    })
    res.json(listings);
  } catch (error) {
  next(error)
  }
 
};



// Most Viewed 
export const mostViewdTours = async(req,res,next)=>{
  try {
    // Find tours and sort by views in descending order
    const mostViewedTours = await TourModel.find()
      .sort({ views: -1 })
      .limit(6); // Adjust the limit as needed

    res.status(200).json(mostViewedTours);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export const latestTours = async (req, res, next) => {
  try {
    // Find tours and sort by creation date in descending order
    const latestTours = await TourModel.find()
      .sort({ createdAt: -1 }) // Assuming your tour model has a 'createdAt' field
      .limit(6); // Adjust the limit as needed

    res.status(200).json(latestTours);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
