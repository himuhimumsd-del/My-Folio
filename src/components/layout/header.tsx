"use client"

import * as React from "react"
import Link from "next/link"
import { navigationLinks } from "@/constants/navigation"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"

export function Header() {
  const { scrollY } = useScroll()
  const isScrolled = useTransform(scrollY, [0, 50], [0, 1])

  return (
    <motion.header
      className="fixed top-0 w-full z-sticky border-b border-transparent transition-colors duration-300"
      style={{
        backgroundColor: "var(--color-bg-surface-glass)",
        backdropFilter: "blur(24px)",
        borderBottomColor: "var(--color-border-glass-light)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-xl tracking-tight">
          HS<span className="text-accent-primary">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:inline-flex rounded-full">
            Let's Work Together
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
