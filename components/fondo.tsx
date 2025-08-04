"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function FondoBeams({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-white relative flex flex-col items-center justify-center antialiased">
      {children}
      <BackgroundBeams />
    </div>
  );
}
