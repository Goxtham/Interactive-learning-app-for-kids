import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';

dotenv.config();


const allowedOrigins = [
    "http://localhost:5173"
];

// mongoose.connect(process.env.Mongo, {useNewUrlParser:true,
//    useUnifiedTopology:true}).then(() => {
    //     console.log("Connected to MongoDB");    
    // }).catch((err) => {
    
//     console.log(err);
// });

const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true
};
try {
    mongoose.connect(process.env.MONGO,connectionParams)
    console.log("connected to database")
} catch (error) {
    console.log(err.message);
    throw error
}

const app = express();

app.use(express.json());
app.use(cors({
    origin: allowedOrigins,
    methods: "GET,POST,PUT,DELETE",
}))

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
})


app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
});