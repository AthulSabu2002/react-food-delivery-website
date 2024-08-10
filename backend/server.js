import express from "express";
import cors from "cors";
import dotenv from 'dotenv';


import connectDb from "./config/db.js";

dotenv.config()

const app = express();
const port = process.env.PORT;



app.use(express.json());
app.use(cors());

connectDb();

app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});