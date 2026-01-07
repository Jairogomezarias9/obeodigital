"use client";

import { ThemeProvider } from "next-themes";
import { TypewriterEffect } from "@/components/ui/texto";
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Image from "next/image";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showTypewriter, setShowTypewriter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTypewriter(true);
        }, 100); // 100ms delay

        return () => clearTimeout(timer); // Cleanup on unmount
    }, []);

    const words = [
        {
            text: "We",
            className: "text-black dark:text-white font-sans",
        },
        {
            text: "Scale",
            className: "text-black dark:text-white font-sans",
        },
        {
            text: "Your",
            className: "text-black dark:text-white font-sans",
        },
        {
            text: "Ads",
            className: "text-black dark:text-white font-sans",
        },
        {
            text: "Profitably.",
            className: "text-blue-500 dark:text-blue-500 font-sans",
        },
    ];

    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            <header className="sticky top-0 z-50 w-full p-4 sm:p-6">
                <nav className="container mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl rounded-full px-6 py-3 flex justify-center md:justify-between items-center dark:bg-slate-800/80">
                    <div className="md:flex-1 flex md:justify-start">
                        <a href="/">
                            <Image
                                src="/logo-removebg-preview.png"
                                alt="Meta Ads Expert Logo"
                                width={40}
                                height={15}
                                className="object-contain"
                                priority
                            />
                        </a>
                    </div>
                    <div className="hidden md:flex flex-1 justify-center whitespace-nowrap">
                        {showTypewriter && <TypewriterEffect words={words} />}
                    </div>
                    <div className="hidden md:flex flex-1 justify-end">
                        <a
                            href="https://t.me/obeodigital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/30"
                        >
                            💬 Contact Us
                        </a>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
            <Footer />
            <CookieBanner />
        </ThemeProvider>
    );
}
