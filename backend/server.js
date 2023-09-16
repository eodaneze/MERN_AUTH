import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use('/api/users', userRoutes)
app.get('/', (req, res) => {
     res.send("server is ready");
     console.log("HELLO FROM NODE JS");
})
app.listen(port, () => {
     console.log(`server is running on port ${port}`);
})