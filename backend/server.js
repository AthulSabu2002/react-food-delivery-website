import express from "express";
import cors from "cors";
import dotenv from 'dotenv';


import connectDb from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

dotenv.config()

const app = express();
const port = process.env.PORT;



app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));


connectDb();

app.use('/api/food', foodRouter);
app.use('/images', express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});