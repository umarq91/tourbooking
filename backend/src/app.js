
import express, { urlencoded } from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import AuthRoutes from "./routes/auth.route.js"
import UserRoutes from "./routes/user.route.js"
import TourRoutes from "./routes/tour.route.js"
import TourModel from "./models/tour.model.js";
const app =express();
import dotenv from "dotenv"
dotenv.config();

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))




// Routes
app.use("/api/auth",AuthRoutes)
app.use("/api/user",UserRoutes)
app.use('/api/tour',TourRoutes)









app.use((err,req,res,next)=>{

    const statusCode = err.statusCode || 501;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success:"false",
        message,
        statusCode
    })

})


export {app}