"use client"

import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { StaggerContainer, FadeUp } from "@/components/motion/wrappers"
import { GlassCard } from "@/components/ui/glass-card"
import { H3, Body } from "@/components/ui/typography"

const statsData = [
  { value: "20+", label: "Projects Delivered" },
  { value: "AI-Powered", label: "Solutions" },
  { value: "Modern", label: "Tech Stack" },
  { value: "Client-Focused", label: "Approach" },
]

export function Stats() {
  return (
    <SectionWrapper id="stats" className="py-12 md:py-16 z-10 relative">
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <FadeUp key={index}>
            <GlassCard hoverEffect className="p-8 flex flex-col items-center justify-center text-center h-full min-h-[160px]">
              <H3 className="text-3xl md:text-4xl text-primary font-extrabold tracking-tight mb-2">
                {stat.value}
              </H3>
              <Body className="text-sm md:text-base font-medium text-secondary">
                {stat.label}
              </Body>
            </GlassCard>
          </FadeUp>
        ))}
      </StaggerContainer>
    </SectionWrapper>
  )
}
