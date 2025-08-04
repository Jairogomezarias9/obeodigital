import { cn } from "@/lib/utils";
import React from "react";
import { BackgroundBeams } from "./background-beams";

export function GridBackgroundDemo() {
    return (
        <div className="relative flex h-[50rem] w-full flex-col items-center justify-center bg-gray-950">
            <BackgroundBeams />
            {/* Content */}
            <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    <span className="block">Ads That Actually Scale Channels</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-slate-600 dark:text-slate-300">
                    Experts in Telegram Ads, Meta Ads & X Ads. Specialized in
                    high-risk niches: betting, trading, casino, and crypto. Over 50
                    million views delivered — no bans, no fluff.
                </p>
            </div>

            {/* Video with Blue Glow */}
            <div className="relative z-10 mt-12 w-full max-w-4xl h-[28rem]">
                <div className="relative w-full h-full rounded-xl overflow-hidden [box-shadow:0_0_70px_rgba(59,130,246,0.6)]">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/Zcb8yPEItwA?autoplay=1&mute=1&loop=1&playlist=Zcb8yPEItwA&controls=0&showinfo=0&autohide=1"
                        title="YouTube video background"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
