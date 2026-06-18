"use client"

import * as React from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/animations"

export function FadeUp({ children, className, delay = 0, ...props }: HTMLMotionProps<"div"> & { delay?: number }) {
  const variants = {
    ...fadeUp,
    hidden: { ...fadeUp.hidden },
    visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay } }
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
