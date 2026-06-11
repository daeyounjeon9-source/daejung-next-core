import { rewardPolicy } from "../config/rewardPolicy";

export function calculatePayment(price, rewardBalance, useReward = 0) {
    const maxUse = Math.floor(
        price * (rewardPolicy.limits.maxRewardUsePercent / 100)
    );

    const rewardUsed = Math.min(useReward, rewardBalance, maxUse);

    const finalPrice = price - rewardUsed;

    return {
        originalPrice: price,
        rewardUsed,
        finalPrice,
    };
}