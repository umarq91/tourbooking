import mongoose from "mongoose"
import {DB_name} from "../constants.js"

const dbConnection = async()=>{
try {
      const connectionInstance= await  mongoose.connect(`${process.env.DB}`)
    
      console.log("Db Connected , host : " + connectionInstance.connection.host);
} catch (error) {
    console.error("Error" + error)
}
}
export default dbConnection;