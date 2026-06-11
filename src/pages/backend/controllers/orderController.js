import Order from "../models/Order.js";
import { calculateAutoReward } from "../services/rewardEngine.js";

export const createOrder = async (req, res) => {
    const { userId, price, sellerId, userLevel } = req.body;

    const reward = calculateAutoReward({
        userLevel,
        orderAmount: price,
        isFirstPurchase: false,
        isVip: userLevel === "VIP",
        isEventDay: false,
    });

    const order = await Order.create({
        userId,
        sellerId,
        price,
        rewardUsed: reward,
        finalPrice: price - reward,
    });

    res.json(order);
};