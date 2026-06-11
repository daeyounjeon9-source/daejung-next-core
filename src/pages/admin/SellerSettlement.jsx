import React, { useState } from "react";

export default function SellerSettlement() {
    const [orders] = useState([
        { id: 1, product: "상품 A", price: 14200, fee: 10 },
        { id: 2, product: "상품 B", price: 5000, fee: 10 },
        { id: 3, product: "상품 C", price: 30000, fee: 10 },
    ]);

    const totalSales = orders.reduce((sum, o) => sum + o.price, 0);
    const totalFee = orders.reduce((sum, o) => sum + (o.price * o.fee) / 100, 0);
    const settlement = totalSales - totalFee;

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>판매자 정산 시스템</h1>

            {/* 요약 */}
            <div style={styles.card}>
                <h2>이번 정산 요약</h2>

                <p>총 매출: {totalSales.toLocaleString()}원</p>
                <p>수수료: {totalFee.toLocaleString()}원 (10%)</p>

                <h3 style={{ color: "#facc15" }}>
                    정산 금액: {settlement.toLocaleString()}원
                </h3>
            </div>

            {/* 주문 리스트 */}
            <div style={styles.card}>
                <h2>주문 내역</h2>

                {orders.map((o) => (
                    <div key={o.id} style={styles.row}>
                        <span>{o.product}</span>
                        <span>{o.price.toLocaleString()}원</span>
                    </div>
                ))}
            </div>

            {/* 안내 */}
            <div style={styles.notice}>
                ✔ 모든 정산은 원화 기준으로 처리됩니다
                ✔ 코인/리워드는 판매자 정산에 영향을 주지 않습니다
            </div>

            <button style={styles.button}>
                정산 요청
            </button>
        </div>
    );
}

const styles = {
    container: {
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "40px",
    },

    title: {
        fontSize: "32px",
        marginBottom: "30px",
    },

    card: {
        background: "#0f172a",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
        border: "1px solid #334155",
    },

    row: {
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 0",
        borderBottom: "1px solid #1f2937",
    },

    notice: {
        marginTop: "20px",
        color: "#94a3b8",
        fontSize: "14px",
    },

    button: {
        width: "100%",
        padding: "18px",
        background: "#facc15",
        border: "none",
        borderRadius: "12px",
        fontWeight: "bold",
        fontSize: "18px",
        cursor: "pointer",
        marginTop: "20px",
    },
};