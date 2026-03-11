import express from "express";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import authRoutes from "../routes/authRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api", authRoutes);

export default app;