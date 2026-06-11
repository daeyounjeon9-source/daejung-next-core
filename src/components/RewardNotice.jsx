import React from "react";
import { rewardPolicy } from "../config/rewardPolicy";

export default function RewardNotice() {
    return (
        <div style={{
            padding: "16px",
            border: "1px solid #334155",
            borderRadius: "12px",
            background: "#0f172a",
            color: "#cbd5e1",
            marginTop: "12px"
        }}>
            <strong style={{ color: "#facc15" }}>
                DAEJUNG NEXT 결제 안내
            </strong>

            <p>{rewardPolicy.messages.info}</p>

            <ul>
                <li>✔ 상품 가격 = 원화 기준</li>
                <li>✔ 리워드 = 할인 수단</li>
                <li>✔ 판매자 정산 = 원화 지급</li>
            </ul>
        </div>
    );
}