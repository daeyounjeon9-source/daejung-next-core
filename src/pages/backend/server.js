import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import orderRoutes from "./routes/orderRoutes.js";
import rewardRoutes from "./routes/rewardRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/order", orderRoutes);
app.use("/api/reward", rewardRoutes);
app.use("/api/seller", sellerRoutes);

// DB 연결
mongoose.connect("mongodb://localhost:27017/daejung_next");

app.listen(5000, () => {
    console.log("DAEJUNG NEXT SERVER RUNNING ON 5000");
});