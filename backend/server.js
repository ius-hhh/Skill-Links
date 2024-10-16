import express from 'express';
import dotenv from 'dotenv'
import connectDB from './database/connectDB.js';
import authRoute from './routes/authRoute.js';
import conversationRoute from './routes/conversationRoute.js';
import messageRoute from './routes/messageRoute.js';
import orderRoute from './routes/orderRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import serviceRoute from './routes/serviceRoute.js';
import userRoute from './routes/userRoute.js';
import cookieParser from 'cookie-parser';
import cors from "cors"

const app = express();
dotenv.config();
const PORT= process.env.PORT || 5000;

//Middleware 
//Allows to put input from the user
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoute)
app.use('/api/conversations',conversationRoute)
app.use('/api/messages',messageRoute)
app.use('/api/orders',orderRoute)
app.use('/api/reviews',reviewRoute)
app.use('/api/services',serviceRoute)
app.use('/api/users',userRoute)

app.use((error,req,res,next)=>{
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong!";

  return res.status(errorStatus).send(errorMessage);
}) 

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});