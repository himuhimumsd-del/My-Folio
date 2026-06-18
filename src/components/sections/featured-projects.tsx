"use client"

import * as React from "react"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"

import { SectionWrapper } from "@/components/layout/section-wrapper"
import { StaggerContainer, FadeUp } from "@/components/motion/wrappers"
import { H2, H3, Body } from "@/components/ui/typography"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { projects } from "@/data/projects"

export function FeaturedProjects() {
  return (
    <SectionWrapper id="work" className="py-24 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-accent-secondary/5 blur-[120px] pointer-events-none -z-10" />

      <StaggerContainer className="flex flex-col gap-16">
        
        {/* Header */}
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <H2 className="mb-4">Featured Work</H2>
            <Body>
              A selection of my most recent work, ranging from premium marketing websites to complex AI automation systems.
            </Body>
          </div>
          <Button variant="outline" className="rounded-full bg-surface-glass backdrop-blur-md shrink-0 h-12 px-6">
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </FadeUp>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.1} className="h-full flex">
              <GlassCard hoverEffect className="group flex flex-col w-full h-full p-3">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-white/5 border border-glass-light mb-6">
                  {/* Using unoptimized or dummy placeholders until actual assets exist, but syntax handles production ready. */}
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="secondary" className="bg-surface-glass backdrop-blur-md text-primary hover:bg-white/90 border border-glass-light">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-3 pb-5">
                  <H3 className="mb-2 group-hover:text-accent-primary transition-colors">
                    {project.title}
                  </H3>
                  
                  <Body className="text-sm md:text-sm mb-6 flex-1">
                    {project.description}
                  </Body>

                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-transparent border-glass-dark text-xs font-medium text-secondary rounded-md">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button variant="ghost" className="p-0 h-auto font-semibold text-accent-primary hover:bg-transparent hover:text-accent-primary/80 flex items-center gap-2 group/btn">
                      View Project 
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </FadeUp>
          ))}
        </div>

      </StaggerContainer>
    </SectionWrapper>
  )
}
