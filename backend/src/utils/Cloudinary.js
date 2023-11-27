import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'          
import dotenv from "dotenv"
dotenv.config();

const uploadOnCloudinary = async (localfilePath) => {
    try {
      if (!localfilePath) return null;
  
      // Upload on Cloudinary
      const response = await cloudinary.uploader.upload(localfilePath, {
        resource_type: 'auto',
      });
  
      // File has been uploaded successfully 
      console.log('File is uploaded on Cloudinary ', response.url);
  
      // // Use fs.promises.unlink for asynchronous file deletion
      await fs.promises.unlink(localfilePath);
  
      return response.url;
    } catch (error) {
      console.error('Error uploading file or deleting local file:', error);
      fs.unlinkSync(localfilePath)
      return null;
    }
  };

cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.apikey, 
    api_secret:process.env.apisecret
  });

  export {uploadOnCloudinary}