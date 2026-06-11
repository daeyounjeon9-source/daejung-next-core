import React, { useState } from "react";
import { calculatePayment } from "../utils/calcPayment";
import RewardNotice from "../components/RewardNotice";

export default function Payment() {
    const productPrice = 14200;

    const [rewardUse, setRewardUse] = useState(0);

    const result = calculatePayment(productPrice, 3000, rewardUse);

    return (
        <div style={styles.container}>

            <h1 style={styles.title}>결제 페이지</h1>

            {/* 상품 정보 */}
            <div style={styles.box}>
                <h2>상품 금액</h2>
                <p style={styles.price}>{productPrice.toLocaleString()}원</p>
            </div>

            {/* 리워드 사용 */}
            <div style={styles.box}>
                <h2>리워드 사용</h2>

                <input
                    type="range"
                    min="0"
                    max="3000"
                    value={rewardUse}
                    onChange={(e) => setRewardUse(Number(e.target.value))}
                />

                <p>{rewardUse.toLocaleString()} 사용</p>
            </div>

            {/* 결제 결과 */}
            <div style={styles.resultBox}>
                <h2>최종 결제 금액</h2>

                <p style={styles.final}>
                    {result.finalPrice.toLocaleString()}원
                </p>

                <small style={{ color: "#94a3b8" }}>
                    리워드 사용: {result.rewardUsed.toLocaleString()}원
                </small>
            </div>

            {/* 정책 안내 */}
            <RewardNotice />

            {/* 결제 버튼 */}
            <button style={styles.button}>
                결제하기
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

    box: {
        background: "#0f172a",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
        border: "1px solid #334155",
    },

    price: {
        fontSize: "28px",
        color: "#facc15",
        fontWeight: "bold",
    },

    resultBox: {
        background: "#111827",
        padding: "25px",
        borderRadius: "12px",
        border: "1px solid #475569",
        marginBottom: "20px",
    },

    final: {
        fontSize: "34px",
        color: "#facc15",
        fontWeight: "bold",
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
    },
};