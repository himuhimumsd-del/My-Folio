"use client"

import * as React from "react"
import { motion } from "framer-motion"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { StaggerContainer, FadeUp } from "@/components/motion/wrappers"
import { H2, H3, Body } from "@/components/ui/typography"
import { GlassCard } from "@/components/ui/glass-card"

import { techStack } from "@/data/tech-stack"
import { processSteps } from "@/constants/navigation"

export function BentoGrid() {
  return (
    <SectionWrapper id="about" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-[20%] right-0 w-[50%] h-[50%] rounded-full bg-accent-primary/5 blur-[100px] pointer-events-none -z-10" />

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto]">
        
        {/* About Me - Large Card */}
        <FadeUp className="md:col-span-12 lg:col-span-7 h-full">
          <GlassCard className="h-full p-8 md:p-12 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-secondary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <span className="text-xs font-bold tracking-widest text-accent-primary mb-4 uppercase">About Me</span>
            <H2 className="mb-6 leading-tight">
              Driven by <span className="text-accent-secondary">logic</span>. <br className="hidden md:block"/>
              Designed with <span className="text-accent-primary">purpose</span>.
            </H2>
            <Body className="max-w-xl text-secondary">
              I blend technical precision with high-end aesthetic design to solve complex business problems. Whether it's architecting a scalable Next.js application, designing a converting marketing site, or automating workflows with AI, my focus is always on delivering measurable value wrapped in a beautiful, intuitive interface.
            </Body>
          </GlassCard>
        </FadeUp>

        {/* Tech Stack - Smaller Card */}
        <FadeUp delay={0.1} className="md:col-span-12 lg:col-span-5 h-full">
          <GlassCard className="h-full p-8 flex flex-col justify-between">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest text-accent-tertiary mb-2 block uppercase">Arsenal</span>
              <H3>Tech Stack</H3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full bg-surface-glass border border-glass-light text-sm font-medium text-primary shadow-glass-sm"
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </FadeUp>

        {/* Process Timeline - Spans full width below */}
        <FadeUp delay={0.2} className="md:col-span-12 h-full" id="process">
          <GlassCard className="p-8 md:p-12">
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs font-bold tracking-widest text-accent-primary mb-2 block uppercase">Methodology</span>
              <H3>The Process</H3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <div key={step.id} className="relative flex flex-col">
                  {/* Connector Line for Desktop */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-[60px] w-[calc(100%-20px)] h-[1px] bg-gradient-to-r from-glass-dark to-transparent z-0" />
                  )}
                  
                  <div className="relative z-10 flex flex-col md:items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-surface-glass border border-glass-light shadow-glass-sm flex items-center justify-center font-display font-bold text-accent-primary text-lg">
                      {step.stepNumber}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-primary mb-2">{step.title}</h4>
                      <p className="text-sm text-secondary leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </FadeUp>

      </StaggerContainer>
    </SectionWrapper>
  )
}
