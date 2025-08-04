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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="sticky top-0 z-50 w-full p-16">
            <nav className="container mx-auto max-w-4xl bg-white/80 backdrop-blur-sm shadow-xl rounded-full px-6 py-3 flex justify-between items-center dark:bg-slate-800/80">
              <div className="flex-1 flex justify-start">
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
              <div className="flex-1 flex justify-center whitespace-nowrap">
                {showTypewriter && <TypewriterEffect words={words} />}
              </div>
              <div className="flex-1"></div>
            </nav>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
