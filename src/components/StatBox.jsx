import React from "react";

export default function StatBox({ title, value }) {
    return (
        <div
            style={{
                background: "#0b1730",
                padding: "24px",
                borderRadius: "22px",
                flex: 1,
                border: "1px solid #243d6b",
            }}
        >
            <div
                style={{
                    color: "#8ea5d9",
                    marginBottom: "10px",
                }}
            >
                {title}
            </div>

            <div
                style={{
                    color: "#ffd21f",
                    fontSize: "30px",
                    fontWeight: "bold",
                }}
            >
                {value}
            </div>
        </div>
    );
}