import React, { useEffect, useState } from "react";

export default function Header() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateClock = () => {
            setTime(
                new Date().toLocaleString("ko-KR", {
                    hour12: false,
                })
            );
        };

        updateClock();

        const timer = setInterval(updateClock, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <header
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "35px",
            }}
        >
            <div>
                

                <p
                    style={{
                        color: "#8ea5d9",
                        marginTop: "10px",
                    }}
                >
                    Premium AI Commerce Platform
                </p>
            </div>

            <div
                style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        background: "#112041",
                        padding: "14px 22px",
                        borderRadius: "14px",
                        border: "1px solid #29406f",
                        color: "#57ff98",
                        fontWeight: "bold",
                    }}
                >
                    ● LIVE ONLINE
                </div>

                <div
                    style={{
                        background: "#0b1730",
                        padding: "14px 22px",
                        borderRadius: "14px",
                        border: "1px solid #223760",
                        color: "#d6e2ff",
                    }}
                >
                    {time}
                </div>

                <div
                    style={{
                        background: "#ffd21f",
                        padding: "14px 20px",
                        borderRadius: "14px",
                        color: "#081225",
                        fontWeight: "bold",
                    }}
                >
                    MASTER ADMIN
                </div>
            </div>
        </header>
    );
}