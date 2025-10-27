import dotevnv from 'dotenv';
dotevnv.config();
import express from 'express';
import mongoose from 'mongoose';
import UserRouter from './routes/userRoutes.js';
import ResumeRouter from './routes/resumeRoute.js';
const app = express();

app.use(express.json());

app.use("/api/v1/user" , UserRouter);
app.use("/api/v1/resume" , ResumeRouter);


async function main(){
    await mongoose.connect(process.env.MONGO_URL as any);

    app.listen(3000, () => {
        console.log("server running on port 3000");
    })
}

main();


