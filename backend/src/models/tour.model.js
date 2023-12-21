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
   groupSize: Number,
    requirements: [String],
    mapLocation: String,
    included:[String],
    highlights: [String],
    thingstokeepinMind:[String],
    gallery: [String],
    departure:String,
    comments: [{
        userid: String,
        comment: String
    }],
    postedBy: String
}
,{timestamps:true});

const TourModel = mongoose.model("Tours", TourSchema);

export default TourModel;
