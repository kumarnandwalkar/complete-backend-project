import mongoose, {Schema} from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcrypt"
const userSchema = new Schema({

    username: {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true, // trim removes the whitespaces 
        index : true,
    },
    email: {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        trim : true,
    },
    fullname: {
        type : String,
        required : true, // we have removed fullname cuz ek naam
        // ke bohot sare log ho sakte 
        trim : true,
        index: true,
    },
    avatar: {
        type : String,  // here this string will contain a url of
        // hosting platform that we will be using to store our avatar
        required : true, 
    },
    avatar: {
        type : String,  // here this string will contain a url of
        // hosting platform that we will be using to store our avatar
    },
    watchHistory: [ // this will contain an array of objectid of videos
        { // here we've created object inside this array,
            // cuz agar array nhi banaoge to store kese karoge?, 
            // array ke andar object store hoga jiske andar objectid hogi
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String, // here we are not exactly storing the password in db
        // but we'll discuss this later
        required: [true, "Password is required"]
    },
    refreshToken: {
        type: String,
    }

}, {timestamps: true})

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) // ismodified is an inbuilt method
    // which tells wheather any given field is updated or not, 
    // and we have used negation here, i.e it will tell if the field is not updated
    // then we dont need to trigger the encrypt just raise next flag
        {
            return next()
        }
    this.password = bcrypt.hash(this.password, 10)
    next()
})   // pre is a method and
// is same as app.listen, app.onerror 

userSchema.methods.isPasswordCorrect = async function (password)
    {   
        return await bcrypt.compare("password", this.password)
        // compare returns true or false
    }

userSchema.methods.generateAccessToken = function () 
    {
        jwt.sign(
            {
              // first we will give the paylod (data) 
              _id: this._id, // this is an id provided by mongoDb
              email: this.email,
              username: this.userSchema,
              fullname: this.fullname,
            },
            process.env.
        )
    }    
userSchema.methods.generateRefreshToken = function () {}    

// import mongoose from "mongoose";
// this is one way of writting the schema and the other one is by directly
// writting the schema with mongoose
// const userSchema = new mongoose.Schema({}, {timestamps: true})

export const User = mongoose.model("user", userSchema)