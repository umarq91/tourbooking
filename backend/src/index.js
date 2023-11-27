
import { app } from "./app.js";
import ConnectDb from "./db/db.js"

ConnectDb()
.then(()=>app.listen(process.env.PORT || 3000 ,()=>{
    console.log("App Is Listeing to Port");
}))
.catch((err)=>{
    console.log("Err in Db Connection" , err);
})
