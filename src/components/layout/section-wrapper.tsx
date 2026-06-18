import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id: string
  children: React.ReactNode
  className?: string
  innerClassName?: string
}

export function SectionWrapper({
  id,
  children,
  className,
  innerClassName,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("w-full py-24 md:py-32 relative", className)}
      {...props}
    >
      <div className={cn("max-w-[1440px] mx-auto px-6", innerClassName)}>
        {children}
      </div>
    </section>
  )
}
