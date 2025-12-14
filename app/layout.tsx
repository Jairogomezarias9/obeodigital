import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OBEO Digital - Scale Your Ads Profitably",
  description: "Experts in Telegram Ads, Meta Ads & X Ads. Specialized in high-performance digital marketing campaigns. Over 50 million views delivered — proven results, no fluff.",
  icons: {
    icon: [
      { url: "/logo-removebg-preview.png", type: "image/png" },
      { url: "/logo-removebg-preview.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-removebg-preview.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo-removebg-preview.png", sizes: "180x180" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
