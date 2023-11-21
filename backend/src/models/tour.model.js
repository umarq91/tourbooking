import mongoose from "mongoose";

const TourSchema = new mongoose.Schema({
    tourname: String,
    location: String,
    city: String,
    fee: Number,
    description: String,
    type: String,
    duration: {
        days: {
          type: Number,
          required: true,
        },
        nights: {
          type: Number,
          required: true,
        },
      },
    views:{
        type:Number,
        default:0
    },
    hotel: String,
   groupSize: Number,
    included: [String],
    requirements: [String],
    mapLocation: String,
    highlights: [String],
    thingstokeepinMind:[String],
    views:Number,
    gallery: [String],
    comments: [{
        userid: String,
        comment: String
    }]
}
,{timestamps:true});

const TourModel = mongoose.model("Tours", TourSchema);

export default TourModel;
