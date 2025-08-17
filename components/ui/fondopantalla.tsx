import { cn } from "@/lib/utils";
import React from "react";
import { BackgroundBeams } from "./background-beams";
import { Timeline } from "./liniadetiempo";
import Image from "next/image";

export function GridBackgroundDemo() {
    const timelineData = [
        {
            title: "Strategy & Planning",
            content: (
                <div className="w-full">
                    <div className="relative h-96 w-full mb-6 rounded-2xl overflow-hidden bg-white shadow-lg">
                        <Image
                            src="/one.png"
                            alt="Strategy & Planning"
                            layout="fill"
                            objectFit="contain"
                            className="p-4"
                        />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            Strategic Analysis
                        </h3>
                        <p className="text-slate-200 leading-relaxed text-lg">
                            We start by understanding your goals, target audience,
                            and market to build a{" "}
                            <span className="text-blue-400 font-semibold">
                                data-driven
                            </span>{" "}
                            ad strategy that{" "}
                            <span className="text-green-400 font-semibold">
                                delivers results
                            </span>
                            .
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <div className="bg-blue-500/20 px-4 py-2 rounded-full border border-blue-500/30">
                                <span className="text-blue-300 text-sm font-medium">
                                    Market Analysis
                                </span>
                            </div>
                            <div className="bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
                                <span className="text-green-300 text-sm font-medium">
                                    Data-Driven
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Creative Development",
            content: (
                <div className="w-full">
                    <div className="relative h-80 w-full mb-6 rounded-2xl overflow-hidden shadow-lg" style={{backgroundColor: '#181818'}}>
                        <Image
                            src="/two.png"
                            alt="Creative Development"
                            layout="fill"
                            objectFit="contain"
                            className="p-4"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 rounded-2xl"></div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            Compelling Creatives
                        </h3>
                        <p className="text-slate-200 leading-relaxed text-lg">
                            Our team designs compelling ad copy and visuals that capture
                            attention and drive action with{" "}
                            <span className="text-purple-400 font-semibold">
                                creative excellence
                            </span>{" "}
                            and{" "}
                            <span className="text-cyan-400 font-semibold">
                                engaging content
                            </span>
                            .
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <div className="bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30">
                                <span className="text-purple-300 text-sm font-medium">
                                    Creative Design
                                </span>
                            </div>
                            <div className="bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-500/30">
                                <span className="text-cyan-300 text-sm font-medium">
                                    High Impact
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Launch & Optimization",
            content: (
                <div className="w-full">
                    <div className="relative h-96 w-full mb-6 rounded-2xl overflow-hidden bg-white shadow-lg">
                        <Image
                            src="/three.png"
                            alt="Launch & Optimization"
                            layout="fill"
                            objectFit="contain"
                            className="p-4"
                        />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            Launch & Scale
                        </h3>
                        <p className="text-slate-200 leading-relaxed text-lg">
                            We launch your campaigns and continuously monitor performance,
                            A/B test creatives, and optimize for{" "}
                            <span className="text-yellow-400 font-semibold">
                                maximum ROI
                            </span>{" "}
                            to{" "}
                            <span className="text-orange-400 font-semibold">
                                scale your success
                            </span>
                            .
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <div className="bg-yellow-500/20 px-4 py-2 rounded-full border border-yellow-500/30">
                                <span className="text-yellow-300 text-sm font-medium">
                                    ROI Optimization
                                </span>
                            </div>
                            <div className="bg-orange-500/20 px-4 py-2 rounded-full border border-orange-500/30">
                                <span className="text-orange-300 text-sm font-medium">
                                    Scalable Growth
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="relative flex w-full flex-col items-center justify-center bg-gray-950 py-24 sm:py-32">
            <BackgroundBeams />
            {/* Content */}
            <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                    <span className="block">Ads That Actually Scale Channels</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-400">
                    Experts in Telegram Ads, Meta Ads & X Ads. Specialized in
                    high-risk niches: betting, trading, casino, and crypto. Over 50
                    million views delivered — no bans, no fluff.
                </p>
                <div className="mt-8">
                    <a
                        href="https://t.me/obeodigital"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-blue-500/50 hover:scale-105 transition-all duration-300"
                    >
                        🚀 Get Free Audit - DM us on Telegram
                    </a>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="relative z-10 mt-32 sm:mt-12 w-full max-w-6xl">
                <Timeline data={timelineData} />
            </div>
        </div>
    );
}
