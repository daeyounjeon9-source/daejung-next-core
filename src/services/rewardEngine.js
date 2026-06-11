import { rewardPolicy } from "../config/rewardPolicy";

/**
 * 자동 리워드 계산 엔진
 * - 구매
 * - 활동
 * - VIP 등급
 * 기반으로 자동 지급
 */

export function calculateAutoReward({
    userLevel,
    orderAmount,
    isFirstPurchase,
    isVip,
    isEventDay,
}) {
    let reward = 0;

    // 1. 기본 구매 리워드 (0.5% ~ 2%)
    const baseRate =
        userLevel === "VIP"
            ? 0.02
            : userLevel === "PREMIUM"
                ? 0.015
                : 0.005;

    reward += Math.floor(orderAmount * baseRate);

    // 2. 첫 구매 보너스
    if (isFirstPurchase) {
        reward += 300;
    }

    // 3. VIP 추가 보너스
    if (isVip) {
        reward += Math.floor(orderAmount * 0.01);
    }

    // 4. 이벤트 데이 보너스
    if (isEventDay) {
        reward += Math.floor(orderAmount * 0.005);
    }

    // 5. 최종 제한 (안전장치)
    const maxReward = Math.floor(orderAmount * 0.1);

    if (reward > maxReward) {
        reward = maxReward;
    }

    return reward;
}