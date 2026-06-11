import React from "react";
import StatBox from "../components/StatBox";
import { pointPolicy } from "../data/mockData";

export default function PointPolicy() {
    const percent = ((pointPolicy.used / pointPolicy.totalSupply) * 100).toFixed(2);

    return (
        <div>
            <h2 style={{ color: "#ffd21f", margin: 0, fontSize: "34px" }}>
                고객감사 포인트 정책
            </h2>

            <p style={{ color: "#8ea5d9", marginTop: "10px", marginBottom: "28px" }}>
                1000만개 한정 고객감사 포인트 운영
            </p>

            <div style={{ display: "flex", gap: "18px", marginBottom: "28px", flexWrap: "wrap" }}>
                <StatBox title="총 발행량" value={pointPolicy.totalSupply.toLocaleString()} />
                <StatBox title="지급 완료" value={pointPolicy.used.toLocaleString()} />
                <StatBox title="잔여 포인트" value={pointPolicy.remain.toLocaleString()} />
                <StatBox title="사용률" value={`${percent}%`} />
            </div>

            <div
                style={{
                    background: "#0b1730",
                    borderRadius: "28px",
                    padding: "30px",
                    border: "1px solid #223760",
                    marginBottom: "24px",
                }}
            >
                <h3 style={{ color: "#ffd21f", marginTop: 0 }}>정책 핵심</h3>

                <div style={{ color: "#d6e2ff", lineHeight: 2 }}>
                    ● 지급대상 : {pointPolicy.target}<br />
                    ● 운영규칙 : {pointPolicy.rule}<br />
                    ● 일반 고객 무분별 지급 금지<br />
                    ● 고객감사 목적의 한정 포인트<br />
                    ● 현금성 정산과 분리 관리
                </div>
            </div>

            <div
                style={{
                    background: "#0b1730",
                    borderRadius: "28px",
                    padding: "30px",
                    border: "1px solid #223760",
                }}
            >
                <h3 style={{ color: "#ffd21f", marginTop: 0 }}>포인트 소진 진행률</h3>

                <div
                    style={{
                        height: "18px",
                        background: "#13213d",
                        borderRadius: "999px",
                        overflow: "hidden",
                        marginTop: "22px",
                    }}
                >
                    <div
                        style={{
                            width: `${percent}%`,
                            height: "100%",
                            background: "#ffd21f",
                        }}
                    />
                </div>

                <p style={{ color: "#8ea5d9", marginTop: "18px" }}>
                    총 10,000,000개 중 {pointPolicy.used.toLocaleString()}개 지급 완료
                </p>
            </div>
        </div>
    );
}