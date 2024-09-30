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

const app = express();
dotenv.config();
const PORT= process.env.PORT || 5000;

//Allows to put input from the user
app.use(express.json());

app.use('/api/auth',authRoute)
app.use('/api/conversations',conversationRoute)
app.use('/api/messages',messageRoute)
app.use('/api/orders',orderRoute)
app.use('/api/reviews',reviewRoute)
app.use('/api/services',serviceRoute)
app.use('/api/users',userRoute)

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});