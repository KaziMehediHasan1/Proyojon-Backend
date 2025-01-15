import express from "express";
import cors from "cors";
import userRouter from "./routers/userRouter.js";
import connectDB from "./config/database.js";
// INITIALIZE APP
const app = express();
// MIDDLEWARE
app.use(cors());
app.use(express.json());
// ROUTES
app.use("/", userRouter);
// START SERVER
connectDB();
app.get("/", (req, res) => {
    res.send("flie find");
});
app.listen(4000, () => {
    console.log("connected succesfull");
});
