import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: "customer", // customer / seller / admin
    },
    level: {
        type: String,
        default: "NORMAL",
    },
    rewardBalance: {
        type: Number,
        default: 0,
    },
});

export default mongoose.model("User", UserSchema);