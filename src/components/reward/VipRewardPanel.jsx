import React from "react";

export default function VipRewardPanel() {
    const remain = 8243561;
    const total = 10000000;

    const percent = ((remain / total) * 100).toFixed(1);

    return (
        <section className="w-full py-20 px-6 bg-gradient-to-b from-black to-zinc-950 text-white">

            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-14 text-center">

                    <div className="inline-flex items-center px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 text-sm tracking-[0.25em] mb-6">
                        DAEJUNG NEXT VIP SYSTEM
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
                        LIMITED
                        <span className="text-yellow-400"> REWARD</span>
                    </h2>

                    <p className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        플랫폼 성장에 기여한 고객에게만 제공되는
                        프리미엄 한정 감사 리워드 시스템
                    </p>

                </div>

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* LEFT */}
                    <div className="lg:col-span-2 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-8">

                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <div className="text-zinc-400 text-sm mb-2">
                                    현재 남은 리워드 수량
                                </div>

                                <div className="text-5xl font-black text-yellow-400">
                                    {remain.toLocaleString()}
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="text-zinc-500 text-sm">
                                    TOTAL LIMIT
                                </div>

                                <div className="text-2xl font-bold">
                                    10,000,000
                                </div>
                            </div>
                        </div>

                        {/* BAR */}
                        <div className="w-full h-5 rounded-full bg-zinc-800 overflow-hidden mb-4">

                            <div
                                className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full transition-all duration-700"
                                style={{ width: `${percent}%` }}
                            />

                        </div>

                        <div className="flex justify-between text-sm text-zinc-500">
                            <span>잔여 비율 {percent}%</span>
                            <span>소진 시 추가 지급 종료</span>
                        </div>

                        {/* INFO */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

                            <div className="rounded-2xl bg-black/40 border border-zinc-800 p-6">
                                <div className="text-blue-400 text-lg font-bold mb-3">
                                    VIP 고객
                                </div>

                                <p className="text-zinc-400 leading-relaxed text-sm">
                                    구매 및 활동 기반
                                    우수 회원 대상
                                </p>
                            </div>

                            <div className="rounded-2xl bg-black/40 border border-zinc-800 p-6">
                                <div className="text-green-400 text-lg font-bold mb-3">
                                    TOP 0.5%
                                </div>

                                <p className="text-zinc-400 leading-relaxed text-sm">
                                    최고 활동 고객
                                    프리미엄 보상
                                </p>
                            </div>

                            <div className="rounded-2xl bg-black/40 border border-zinc-800 p-6">
                                <div className="text-red-400 text-lg font-bold mb-3">
                                    LIMITED
                                </div>

                                <p className="text-zinc-400 leading-relaxed text-sm">
                                    한정 수량 구조로
                                    희소성 유지
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-yellow-500/10 to-black p-8">

                        <div className="text-yellow-400 text-sm tracking-[0.2em] mb-4">
                            PREMIUM POLICY
                        </div>

                        <h3 className="text-3xl font-black leading-tight mb-6">
                            단순 포인트가 아닌
                            <br />
                            VIP 감사 시스템
                        </h3>

                        <div className="space-y-5">

                            <div className="flex gap-4">
                                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-2" />

                                <p className="text-zinc-300 leading-relaxed">
                                    무한 지급 구조 제거
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-2" />

                                <p className="text-zinc-300 leading-relaxed">
                                    플랫폼 기여 기반 지급
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-2" />

                                <p className="text-zinc-300 leading-relaxed">
                                    우수 고객 중심 운영
                                </p>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-3 h-3 rounded-full bg-yellow-400 mt-2" />

                                <p className="text-zinc-300 leading-relaxed">
                                    소진 시 지급 종료
                                </p>
                            </div>

                        </div>

                        <button className="w-full mt-10 py-4 rounded-2xl bg-yellow-400 text-black font-black hover:scale-[1.02] transition-all">
                            VIP 혜택 확인
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}