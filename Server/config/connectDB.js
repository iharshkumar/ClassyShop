import mongoose, { connect } from "mongoose"
import dotenv from "dotenv"
dotenv.config()

if(!process.env.MONGODB_URL){
    throw new Error(
        "Please provide MONGODB_URL in the .env file"
    )
}

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connect db")
    }catch(error){
        console.log("Mongodb connect error", error)
        process.exit(1)
    }
}

export default connectDB