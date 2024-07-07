// require ('dotenv').config({path: './path'})      see,this thing also works but it
// disrupts the consistency of our code as we are using module js and require belongs to common js
// so to avoid that we have diff way of doing it

import dotenv from "dotenv" // after writting this we also need to configure it

import connectDB from "./db/index.js";


// we need to configure the dotenv to use it in module js
dotenv.config({ // config is a method and it takes an object as parameter
    path: './env' // this tells us the path that take env from home directory
})

// below code approach is by making diff folders for diff functionalities
connectDB()



/* below code is of writting everything in same 
import express from "express";

const app = express()
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        app.on("Error",(error)=> {
            console.log("ERROR occured in express:", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("ERROR:", error)
        throw err 
    }
})() // arrow function made inside iife
*/