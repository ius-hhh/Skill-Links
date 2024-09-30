import express from 'express';
import dotenv from 'dotenv'
import connectDB from './database/connectDB.js';
import userRoute from './routes/userRoute.js';
import messageRoute from './routes/messageRoute.js';
import conversationRoute from './routes/conversationRoute.js';
import serviceRoute from './routes/serviceRoute.js';
import reviewRoute from './routes/reviewRoute.js';
import orderRoute from './routes/orderRoute.js';

const app = express();
dotenv.config();
const PORT= process.env.PORT || 5000;

app.use('/api/users',userRoute)
app.use('/api/messages',messageRoute)
app.use('/api/conversations',conversationRoute)
app.use('/api/services',serviceRoute)
app.use('/api/orders',orderRoute)
app.use('/api/reviews',reviewRoute)

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});