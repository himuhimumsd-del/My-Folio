import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-[24px] bg-surface-glass backdrop-blur-xl border-t border-l border-glass-light shadow-glass-md overflow-hidden",
        hoverEffect && "transition-all duration-300 hover:-translate-y-1 hover:shadow-glass-lg",
        className
      )}
      {...props}
    >
      {/* Optional inner subtle highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none rounded-[24px]" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
