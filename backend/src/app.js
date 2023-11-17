import express, { urlencoded } from "express"
import cookieParser from "cookie-parser";
const app =express();



app.use(cors({
    origin:process.env.Cors_Origin,
    credentials:true
}))
app.use(express.json())
app.use(urlencoded())
app.use(express.static("public"))
app.use(cookieParser())
export {app}