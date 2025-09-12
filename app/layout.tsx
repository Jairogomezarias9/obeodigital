"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import { TypewriterEffect } from "@/components/ui/texto";
import { useState, useEffect } from "react";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>OBEO Digital - Scale Your Ads Profitably</title>
        <link rel="icon" type="image/png" href="/logo-removebg-preview.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-removebg-preview.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-removebg-preview.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-removebg-preview.png" />
        <meta name="description" content="Experts in Telegram Ads, Meta Ads & X Ads. Specialized in high-performance digital marketing campaigns. Over 50 million views delivered — proven results, no fluff." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950`}
      >
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
