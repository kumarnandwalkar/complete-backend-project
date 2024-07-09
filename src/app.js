import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import e from "cors"

const app = express()

app.use(cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }))  // this is used for all middlewares and configurations 

app.use(express.json({limit: "16kb"})) 
app.use(express.urlencoded({
    extended: true, limit: "16kb"
}))
app.use(express.static("public"))
app.use(cookieParser()) // this is for storing, accessing cookies
// stored in users browser 


export {app}