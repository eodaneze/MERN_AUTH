import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
dotenv.config();

connectDB()
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json())
// this we allow form data to be sent
app.use(express.urlencoded({extended: true}))
app.use('/api/users', userRoutes)
app.get('/', (req, res) => {
     res.send("server is ready");
     console.log("HELLO FROM NODE JS");
})

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
     console.log(`server is running on port ${port}`);
})