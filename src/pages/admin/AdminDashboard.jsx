import React, { useState } from "react";

export default function AdminDashboard() {
    const [totalReward] = useState(10000000); // 총 한정 리워드
    const [usedReward] = useState(1756432);
    const [issuedToday] = useState(12034);

    const remain = totalReward - usedReward;
    const usageRate = ((usedReward / totalReward) * 100).toFixed(2);

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>DAEJUNG NEXT ADMIN</h1>

            {/* 핵심 상태 */}
            <div style={styles.grid}>
                <div style={styles.card}>
                    <h3>총 리워드 한도</h3>
                    <p>{totalReward.toLocaleString()}</p>
                </div>

                <div style={styles.card}>
                    <h3>사용된 리워드</h3>
                    <p>{usedReward.toLocaleString()}</p>
                </div>

                <div style={styles.card}>
                    <h3>잔여 리워드</h3>
                    <p>{remain.toLocaleString()}</p>
                </div>

                <div style={styles.card}>
                    <h3>사용률</h3>
                    <p>{usageRate}%</p>
                </div>
            </div>

            {/* 오늘 발행 */}
            <div style={styles.cardFull}>
                <h2>오늘 지급된 리워드</h2>
                <p>{issuedToday.toLocaleString()}</p>
            </div>

            {/* 핵심 규칙 */}
            <div style={styles.notice}>
                ✔ 리워드는 반드시 한도 내에서만 지급
                ✔ 모든 지급은 자동 기록
                ✔ 이상 거래는 자동 감지 대상
                ✔ 판매자 정산에는 영향 없음 (원화 고정)
            </div>

            {/* 컨트롤 버튼 */}
            <div style={styles.actions}>
                <button style={styles.btnRed}>리워드 발행 중지</button>
                <button style={styles.btnYellow}>발행 제한 모드</button>
                <button style={styles.btnBlue}>자동 발행 활성화</button>
            </div>
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

    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        marginBottom: "20px",
    },

    card: {
        background: "#0f172a",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #334155",
    },

    cardFull: {
        background: "#111827",
        padding: "25px",
        borderRadius: "12px",
        border: "1px solid #475569",
        marginBottom: "20px",
    },

    notice: {
        color: "#94a3b8",
        fontSize: "14px",
        marginBottom: "20px",
        lineHeight: "1.8",
    },

    actions: {
        display: "flex",
        gap: "12px",
    },

    btnRed: {
        flex: 1,
        padding: "14px",
        background: "#ef4444",
        border: "none",
        color: "white",
        borderRadius: "10px",
        fontWeight: "bold",
    },

    btnYellow: {
        flex: 1,
        padding: "14px",
        background: "#facc15",
        border: "none",
        color: "#000",
        borderRadius: "10px",
        fontWeight: "bold",
    },

    btnBlue: {
        flex: 1,
        padding: "14px",
        background: "#38bdf8",
        border: "none",
        color: "#000",
        borderRadius: "10px",
        fontWeight: "bold",
    },
};