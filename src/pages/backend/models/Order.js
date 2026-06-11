import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId: String,
    sellerId: String,
    price: Number,
    rewardUsed: Number,
    finalPrice: Number,
    status: { type: String, default: "paid" },
});

export default mongoose.model("Order", OrderSchema);