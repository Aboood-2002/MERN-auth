import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
dotenv.config()
const app = express()



// routes
app.use(express.json())
app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)



mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("connected to database")
    })
    .catch((err)=>{
        console.log(err)
    })
app.listen(8000,()=>{
    console.log("server is running on port 8000")
})




app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
  });