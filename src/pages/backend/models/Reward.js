import mongoose from "mongoose";

const RewardSchema = new mongoose.Schema({
    userId: String,
    type: String,
    amount: Number,
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Reward", RewardSchema);