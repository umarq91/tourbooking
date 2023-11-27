import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'          



const uploadOnCloudinary = async(localfilePath)=>{
    try {
        if(!localfilePath) return null

        // upload on cloudinary 
       const response = await cloudinary.v2.uploader.upload(localfilePath,{
        resource_type:'auto'
        })

        //file has been upload successfully 
        console.log("File us uploaded on cloudinary " , response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localfilePath);
        // Remove the local file Temporaryly 
        return null;
    }
}

cloudinary.config({ 
    cloud_name: 'dpqjhzvar', 
    api_key: '884272158485155', 
    api_secret: '***************************' 
  });