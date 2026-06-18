"use client"

import * as React from "react"
import { Layout, Code2, Bot, Palette, PlayCircle, Sparkles } from "lucide-react"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { StaggerContainer, FadeUp } from "@/components/motion/wrappers"
import { H2, H3, Body } from "@/components/ui/typography"
import { GlassCard } from "@/components/ui/glass-card"
import { services } from "@/data/services"

// Map string icon names from data to actual Lucide components
const iconMap: Record<string, React.ElementType> = {
  Layout,
  Code2,
  Bot,
  Palette,
  PlayCircle,
  Sparkles,
}

export function Services() {
  return (
    <SectionWrapper id="services" className="py-24 relative">
      <StaggerContainer className="flex flex-col gap-16">
        
        {/* Header */}
        <FadeUp className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
          <H2>Capabilities & Expertise</H2>
          <Body>
            Comprehensive digital services designed to elevate brands, streamline operations, and deliver exceptional user experiences.
          </Body>
        </FadeUp>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Sparkles

            return (
              <FadeUp key={service.id} delay={index * 0.1} className="h-full">
                <GlassCard hoverEffect className="flex flex-col h-full p-8 group">
                  <div className="w-12 h-12 rounded-2xl bg-surface-glass border border-glass-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  
                  <H3 className="mb-3 text-xl group-hover:text-accent-primary transition-colors">
                    {service.title}
                  </H3>
                  
                  <Body className="text-sm">
                    {service.description}
                  </Body>
                </GlassCard>
              </FadeUp>
            )
          })}
        </div>
      </StaggerContainer>
    </SectionWrapper>
  )
}
