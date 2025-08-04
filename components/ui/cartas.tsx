"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { memo, useCallback, useEffect, useRef } from "react";
import { animate } from "motion/react";

export interface GlowingEffectProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const GlowingEffect = ({
  children,
  className,
  containerClassName,
}: GlowingEffectProps) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative h-full w-full rounded-lg border border-black/5 bg-white dark:bg-black/20",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(37, 99, 235, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className={cn("relative h-full", className)}>{children}</div>
    </div>
  );
};
