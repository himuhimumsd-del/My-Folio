import * as React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1 className={cn("font-display font-extrabold text-5xl md:text-[88px] tracking-tightest leading-none text-primary", className)} {...props}>
      {children}
    </h1>
  )
}

export function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2 className={cn("font-display font-bold text-3xl md:text-5xl tracking-tight text-primary", className)} {...props}>
      {children}
    </h2>
  )
}

export function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3 className={cn("font-display font-semibold text-xl md:text-2xl text-primary", className)} {...props}>
      {children}
    </h3>
  )
}

export function Body({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("font-body text-base md:text-lg text-secondary leading-relaxed", className)} {...props}>
      {children}
    </p>
  )
}
