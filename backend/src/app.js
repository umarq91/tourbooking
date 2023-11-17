import express, { urlencoded } from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
const app =express();

app.use(cors({
    origin:process.env.Cors_Origin,
    credentials:true
}))

app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(express.static("public"))
app.use(cookieParser())
export {app}