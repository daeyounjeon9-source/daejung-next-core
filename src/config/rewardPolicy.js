export const rewardPolicy = {
    // 절대 규칙
    currency: "KRW",
    coinName: "DAEJUNG REWARD",

    rules: {
        priceType: "KRW_ONLY", // 상품 가격은 무조건 원화
        rewardType: "DISCOUNT_ONLY", // 코인은 할인용
        sellerSettlement: "KRW_ONLY", // 판매자 정산은 원화
    },

    limits: {
        maxRewardUsePercent: 30, // 최대 30%까지만 사용 가능
        minOrderAmount: 1000,
    },

    messages: {
        info: "리워드는 결제 할인용 보조 수단입니다.",
        warning: "코인은 현금이 아닌 플랫폼 혜택입니다.",
    },
};