"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundBeams = ({
  className,
}: {
  className?: string;
}) => {
  const random = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full z-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`beam-${i}`}
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: random(2, 10),
              delay: random(0, 10),
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              position: "absolute",
              top: 0,
              left: `${i * 7}%`,
              width: "1px",
              height: "100%",
              backgroundImage:
                "linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.5), transparent)",
            }}
          />
        ))}
      </div>
    </div>
  );
};
