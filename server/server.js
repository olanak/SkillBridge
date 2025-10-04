import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";


dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("SkillBridge API Running..."));

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch(err => console.error(err));
