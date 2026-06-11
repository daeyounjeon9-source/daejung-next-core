import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role,
        },
        "DAEJUNG_SECRET_KEY",
        { expiresIn: "1d" }
    );

    res.json({
        token,
        user: {
            id: user._id,
            role: user.role,
            level: user.level,
        },
    });
};