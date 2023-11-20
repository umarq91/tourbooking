import express, { urlencoded } from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import AuthRoutes from "./routes/auth.route.js"
const app =express();

app.use(cors({
    origin:process.env.Cors_Origin,
    credentials:true
}))

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())

app.use("/api/auth",AuthRoutes)

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