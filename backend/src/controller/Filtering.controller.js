
import TourModel from "../models/tour.model.js"
import {customError} from "../utils/CustomError.js"




// Done
export const tourAllListing = async (req, res, next) => {
  let feefilter = {};
  let type;
  let days;

  // Check if type is provided in the query
  if (req.query.type === undefined || req.query.type === "all") {
    type = { $in: ['friends', 'family', 'Couple', 'culture', 'open'] };
  }else{
    type=req.query.type
  }

  if(req.query.days === undefined || req.query.days ==='all'){
    days={$gt:0}
  }else{
    days = {$lte:req.query.days}
  }

  // Check if fee is provided in the query and is a valid number
  if (req.query.fee !== undefined) {
    let queryfee = req.query.fee;

    // Validate req.query.fee
    if (isNaN(queryfee) || queryfee < 0) {
      // Handle the case when req.query.fee is not a valid number
      res.status(400).json({ error: 'Invalid fee value' });
      return;
    }

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
  console.log(query);

  try {
    const listings = await TourModel.find(query).sort({
      [sort]: order,
    });

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



  if (req.query.searchTerm !== undefined) {
    searchTerm = req.query.searchTerm;
  }

  // Check if type is provided in the query
  if (req.query.type === undefined || req.query.type === "all") {
    type = { $in: ['friends', 'family', 'Couple', 'culture', 'open'] };
  }else{
    type=req.query.type
  }

  if(req.query.days === undefined || req.query.days ==='all'){
    days={$gt:0}
  }else{
    days = {$lte:req.query.days}
  }

  // Check if fee is provided in the query and is a valid number
  if (req.query.fee !== undefined) {
    let queryfee = req.query.fee;

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
  console.log(query);

  try {
    const listings = await TourModel.find(query).sort({
      [sort]: order,
    });

    res.json(listings);
  } catch (error) {
    next(error);
  }
};