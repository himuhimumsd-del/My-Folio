"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Code2, Sparkles, Zap } from "lucide-react"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FadeUp, StaggerContainer } from "@/components/motion/wrappers"
import { H1, Body } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GlassCard } from "@/components/ui/glass-card"
import { LiquidSurface } from "@/components/ui/liquid-surface"

export function Hero() {
  return (
    <SectionWrapper id="hero" className="min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-secondary/10 blur-[120px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left Column: Content */}
        <StaggerContainer className="flex flex-col items-start gap-6 relative z-10 w-full">
          <FadeUp>
            <Badge variant="outline" className="rounded-full px-4 py-1.5 border-glass-light bg-surface-glass backdrop-blur-md">
              <span className="font-semibold tracking-wide text-xs">HIMANSHU SHARMA</span>
              <ChevronRight className="ml-1 w-3 h-3 text-accent-primary" />
            </Badge>
          </FadeUp>

          <FadeUp>
            <H1 className="flex flex-col gap-1">
              <span className="text-primary">DESIGN.</span>
              <span className="text-accent-primary">BUILD.</span>
              <span className="text-accent-secondary">AUTOMATE.</span>
            </H1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="font-display font-medium text-lg md:text-xl text-primary mt-2">
              Digital Designer • Creative Developer • AI Automation Specialist
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Body className="max-w-lg">
              Building premium websites, digital products, and intelligent automation systems for ambitious brands.
            </Body>
          </FadeUp>

          <FadeUp delay={0.3} className="flex flex-wrap items-center gap-4 mt-4">
            <Button size="lg" className="rounded-full bg-accent-primary hover:bg-accent-primary/90 text-white group h-12 px-8">
              VIEW PROJECTS
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-surface-glass backdrop-blur-md border-glass-light hover:bg-white/50 dark:hover:bg-black/50 group h-12 px-8">
              <Zap className="mr-2 w-4 h-4 text-accent-tertiary" />
              LET'S WORK TOGETHER
            </Button>
          </FadeUp>
        </StaggerContainer>

        {/* Right Column: Visuals & Mascot */}
        <div className="relative w-full h-[500px] lg:h-[700px] flex items-center justify-center pointer-events-none mt-10 lg:mt-0">
          
          {/* Base Pedestal (Liquid Surface) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateX: 60 }}
            animate={{ scale: 1, opacity: 1, rotateX: 60 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.2 }}
            className="absolute bottom-[5%] lg:bottom-[10%] w-[90%] lg:w-[80%] h-[200px] lg:h-[300px] rounded-[100%]"
          >
            <LiquidSurface intensity="heavy" className="w-full h-full border-t border-accent-secondary/30 shadow-[0_0_60px_rgba(47,158,68,0.15)]" />
          </motion.div>

          {/* Central Mascot Container */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 20, delay: 0.4 }}
            className="absolute z-10 w-[80%] h-[80%]"
          >
            {/* The WebP image object */}
            <div className="relative w-full h-full drop-shadow-2xl flex items-center justify-center">
              {/* Fallback styling for Mascot Image */}
              <div className="relative w-full h-full">
                <Image
                  src="/mascot-optimized.webp"
                  alt="Himanshu Sharma Mascot"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Floating Glass Card 1 (Clean Code) */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-[10%] lg:top-[20%] left-[-5%] lg:left-[5%] z-20 pointer-events-auto"
          >
            <GlassCard hoverEffect className="p-4 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-accent-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-secondary">Clean Code</span>
                <div className="w-16 h-1.5 bg-accent-primary/20 rounded-full mt-1">
                  <div className="w-3/4 h-full bg-accent-primary rounded-full" />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Floating Glass Card 2 (AI Automated) */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute top-[35%] lg:top-[40%] right-[-5%] lg:right-[5%] z-20 pointer-events-auto"
          >
            <GlassCard hoverEffect className="p-4 rounded-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-secondary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent-secondary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-secondary">AI Automated</span>
                <div className="w-16 h-1.5 bg-accent-secondary/20 rounded-full mt-1">
                  <div className="w-full h-full bg-accent-secondary rounded-full" />
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Floating Tech Orb 1 */}
          <motion.div
            animate={{ y: [-15, 15, -15], x: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute bottom-[20%] lg:bottom-[25%] left-[5%] lg:left-[10%] z-20 w-12 h-12 rounded-full bg-surface-glass backdrop-blur-xl border border-glass-light shadow-glass-md flex items-center justify-center text-xs font-bold text-primary"
          >
            JS
          </motion.div>

          {/* Floating Tech Orb 2 */}
          <motion.div
            animate={{ y: [15, -15, 15], x: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[25%] lg:bottom-[30%] right-[5%] lg:right-[15%] z-20 w-14 h-14 rounded-full bg-surface-glass backdrop-blur-xl border border-glass-light shadow-glass-md flex items-center justify-center font-bold text-accent-tertiary"
          >
            Aa
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}
