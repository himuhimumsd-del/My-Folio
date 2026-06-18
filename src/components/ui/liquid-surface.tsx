"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface LiquidSurfaceProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  intensity?: "light" | "heavy"
}

export function LiquidSurface({ children, className, intensity = "light", ...props }: LiquidSurfaceProps) {
  return (
    <motion.div
      className={cn(
        "rounded-full bg-surface-glass backdrop-blur-2xl border border-glass-light",
        intensity === "heavy" ? "shadow-glass-lg" : "shadow-glass-md",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 via-transparent to-white/5 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
