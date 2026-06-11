export const products = [
    {
        id: "PD-1001",
        name: "AI Commerce Kit",
        price: 129000,
        stock: 382,
        status: "판매중",
        tag: "LIVE 특가",
    },
    {
        id: "PD-1002",
        name: "VIP 멤버십",
        price: 49000,
        stock: 1284,
        status: "판매중",
        tag: "포인트 적립",
    },
    {
        id: "PD-1003",
        name: "프리미엄 패키지",
        price: 299000,
        stock: 52,
        status: "한정판매",
        tag: "한정판매",
    },
];

export const orders = [
    {
        id: "DN-10291",
        customer: "김대정",
        product: "프리미엄 LIVE 패키지",
        payment: "결제완료",
        shipping: "배송준비",
        grade: "VIP",
    },
    {
        id: "DN-10292",
        customer: "이수현",
        product: "VIP 멤버십",
        payment: "결제완료",
        shipping: "배송중",
        grade: "우수고객",
    },
    {
        id: "DN-10293",
        customer: "박민우",
        product: "AI Commerce Kit",
        payment: "환불요청",
        shipping: "중지",
        grade: "VIP",
    },
];

export const customers = [
    {
        name: "김대정",
        grade: "VIP",
        orders: 128,
        point: 82000,
        status: "활성",
    },
    {
        name: "이수현",
        grade: "우수고객",
        orders: 82,
        point: 31200,
        status: "활성",
    },
    {
        name: "박민우",
        grade: "일반",
        orders: 12,
        point: 2800,
        status: "휴면",
    },
];

export const pointPolicy = {
    totalSupply: 10000000,
    used: 157882,
    remain: 9842118,
    target: "VIP 이상 고객 우선 지급",
    rule: "총 발행량 초과시 자동 지급 중단",
};