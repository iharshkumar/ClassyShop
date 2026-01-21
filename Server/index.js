import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()
import cookieParser from "cookie-parser";
import morgan from "morgan"
import helmet, { crossOriginResourcePolicy } from "helmet"
import connectDB from "./config/connectDB.js";
import userRouter from "./route/user.route.js";

const app = express();

// Configure CORS with options
app.use(cors({
    origin: true,
    credentials: true,
}));

app.use(express.json())
app.use(cookieParser());
app.use(morgan());
app.use(helmet({
    crossOriginResourcePolicy : false
}))

app.get("/",(request,response)=>{
    response.json({
        message : "Server is running " + process.env.PORT
    })
})


app.use('/api/user',userRouter)


connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("SERVER is running", process.env.PORT)
    })
})