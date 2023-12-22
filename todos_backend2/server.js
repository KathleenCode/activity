import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import todoRoutes from './routes/todo_routes.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;
const URI = process.env.MONGO_URI;

//middlewares
app.use((err, req, res, next) => {
    console.log(err.stack);
    
    const statusCode = err.status || 500;
    res.status(statusCode).json({error: err.message})
    // res.status(500).send('Something went wrong')
    next(err)
})

app.use(cors({ origin: "http://localhost:3001"}));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/todos', todoRoutes);

//connect to the db
mongoose.connect(URI).then((results) => {
    if(results) console.log('mongoDB database connection successful')
}).catch(err => console.log(err))

app.listen(PORT, console.log(`Server runs on port ${PORT}`));