"use client"

import * as React from "react"
import { Send, Sparkles } from "lucide-react"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { StaggerContainer, FadeUp } from "@/components/motion/wrappers"
import { H2, Body } from "@/components/ui/typography"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  return (
    <SectionWrapper id="contact" className="py-24 relative">
      {/* Background soft glow */}
      <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-accent-primary/10 blur-[120px] pointer-events-none -z-10" />

      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Content */}
        <div className="flex flex-col items-start gap-6 relative z-10">
          <FadeUp>
            <Badge variant="outline" className="rounded-full px-4 py-1.5 border-glass-light bg-surface-glass backdrop-blur-md">
              <Sparkles className="mr-2 w-3 h-3 text-accent-tertiary" />
              <span className="font-semibold tracking-wide text-xs">LET'S CONNECT</span>
            </Badge>
          </FadeUp>

          <FadeUp delay={0.1}>
            <H2 className="leading-tight">
              Let's Create Something <span className="text-accent-primary">Extraordinary.</span>
            </H2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Body className="max-w-md">
              Have a project in mind? Let's bring your ideas to life with precision and style.
            </Body>
          </FadeUp>
        </div>

        {/* Right Column: Glass Contact Form */}
        <FadeUp delay={0.3} className="w-full">
          <GlassCard className="p-8 md:p-12 w-full">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-secondary text-sm font-medium">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    className="bg-white/5 border-glass-light focus-visible:ring-accent-primary rounded-xl h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-secondary text-sm font-medium">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-white/5 border-glass-light focus-visible:ring-accent-primary rounded-xl h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType" className="text-secondary text-sm font-medium">Project Type</Label>
                <Input 
                  id="projectType" 
                  placeholder="e.g. Next.js Website, AI Automation..." 
                  className="bg-white/5 border-glass-light focus-visible:ring-accent-primary rounded-xl h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-secondary text-sm font-medium">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project goals..." 
                  className="bg-white/5 border-glass-light focus-visible:ring-accent-primary rounded-xl min-h-[120px] resize-y"
                />
              </div>

              <Button size="lg" className="w-full rounded-full bg-accent-primary hover:bg-accent-primary/90 text-white mt-2 group h-14">
                SEND MESSAGE
                <Send className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </GlassCard>
        </FadeUp>

      </StaggerContainer>
    </SectionWrapper>
  )
}
