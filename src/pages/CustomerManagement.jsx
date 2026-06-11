import React from "react";
import StatBox from "../components/StatBox";
import { customers } from "../data/mockData";

export default function CustomerManagement() {
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "24px",
                }}
            >
                <div>
                    <h2
                        style={{
                            color: "#ffd21f",
                            margin: 0,
                            fontSize: "34px",
                        }}
                    >
                        고객 관리 시스템
                    </h2>

                    <p
                        style={{
                            color: "#8ea5d9",
                            marginTop: "10px",
                        }}
                    >
                        고객 등급 · 포인트 · 활동상태 · 구매이력 통합 관리
                    </p>
                </div>

                <input
                    placeholder="고객명 검색"
                    style={{
                        background: "#0b1730",
                        border: "1px solid #223760",
                        padding: "14px 18px",
                        borderRadius: "14px",
                        color: "white",
                        width: "240px",
                        outline: "none",
                    }}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "18px",
                    marginBottom: "28px",
                    flexWrap: "wrap",
                }}
            >
                <StatBox title="전체 고객수" value="182,492" />
                <StatBox title="VIP 고객" value="1,284" />
                <StatBox title="활성 고객" value="98,281" />
                <StatBox title="휴면 고객" value="8,192" />
            </div>

            <div
                style={{
                    background: "#0b1730",
                    borderRadius: "28px",
                    padding: "30px",
                    border: "1px solid #223760",
                }}
            >
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                color: "#8ea5d9",
                                textAlign: "left",
                                borderBottom: "1px solid #223760",
                            }}
                        >
                            <th style={{ paddingBottom: "18px" }}>고객명</th>
                            <th style={{ paddingBottom: "18px" }}>등급</th>
                            <th style={{ paddingBottom: "18px" }}>주문수</th>
                            <th style={{ paddingBottom: "18px" }}>포인트</th>
                            <th style={{ paddingBottom: "18px" }}>상태</th>
                            <th style={{ paddingBottom: "18px" }}>관리</th>
                        </tr>
                    </thead>

                    <tbody>
                        {customers.map((customer) => (
                            <tr
                                key={customer.name}
                                style={{
                                    borderBottom: "1px solid #182946",
                                }}
                            >
                                <td
                                    style={{
                                        padding: "20px 0",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {customer.name}
                                </td>

                                <td>
                                    <span
                                        style={{
                                            background:
                                                customer.grade === "VIP"
                                                    ? "#3d2a00"
                                                    : "#112041",
                                            color:
                                                customer.grade === "VIP"
                                                    ? "#ffd21f"
                                                    : "#8ea5d9",
                                            padding: "8px 14px",
                                            borderRadius: "999px",
                                            fontSize: "13px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {customer.grade}
                                    </span>
                                </td>

                                <td
                                    style={{
                                        color: "#d6e2ff",
                                    }}
                                >
                                    {customer.orders}
                                </td>

                                <td
                                    style={{
                                        color: "#57ff98",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {customer.point.toLocaleString()}P
                                </td>

                                <td>
                                    <span
                                        style={{
                                            color:
                                                customer.status === "활성"
                                                    ? "#57ff98"
                                                    : "#ff7b7b",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {customer.status}
                                    </span>
                                </td>

                                <td>
                                    <button
                                        style={{
                                            background: "#112041",
                                            border: "1px solid #29406f",
                                            color: "white",
                                            padding: "10px 16px",
                                            borderRadius: "12px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        상세보기
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}