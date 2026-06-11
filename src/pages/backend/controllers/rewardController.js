import Reward from "../models/Reward.js";

export const applyReward = async (req, res) => {
    const { userId, amount } = req.body;

    const reward = await Reward.create({
        userId,
        type: "earn",
        amount,
    });

    res.json(reward);
};