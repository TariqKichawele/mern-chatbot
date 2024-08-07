import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connect.js';
import appRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const PORT = process.env.PORT || 5001;

app.use("/api/v1", appRouter);

connectDB()
    .then(() => {
        app.listen(PORT, () => 
            console.log(`Server running on port ${PORT} and connected to MongoDB `)
        );
    })
.catch((error) => console.error(error));