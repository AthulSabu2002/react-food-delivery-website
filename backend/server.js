import express from "express";
import cors from "cors";
import dotenv from 'dotenv';


import connectDb from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

dotenv.config()

const app = express();
const port = process.env.PORT;



app.use(express.json());
app.use(cors());

connectDb();

app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));


app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});