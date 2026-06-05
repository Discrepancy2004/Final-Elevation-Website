"use client"

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "motion/react"
import { useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export const EASE_OUT = [0.23, 1, 0.32, 1] as const

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    transform: "translateY(10px) scale(0.98)",
  },
  show: {
    opacity: 1,
    transform: "translateY(0) scale(1)",
    transition: { duration: 0.45, ease: EASE_OUT },
  },
}

const reducedItemVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.2, ease: EASE_OUT },
  },
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  amount?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px", amount })
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        transform: reduceMotion ? "none" : "translateY(12px) scale(0.98)",
      }}
      animate={
        inView
          ? { opacity: 1, transform: "translateY(0) scale(1)" }
          : undefined
      }
      transition={{
        duration: reduceMotion ? 0.2 : 0.5,
        delay,
        ease: EASE_OUT,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type RevealStaggerProps = {
  children: ReactNode
  className?: string
  stagger?: number
}

export function RevealStagger({
  children,
  className,
  stagger = 0.06,
}: RevealStaggerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px", amount: 0.08 })
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: reduceMotion ? 0 : stagger },
        },
      }}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={reduceMotion ? reducedItemVariants : itemVariants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Pressable({
  children,
  className,
  as: Component = "div",
}: {
  children: ReactNode
  className?: string
  as?: "div" | "span"
}) {
  const reduceMotion = useReducedMotion()

  return (
    <Component
      className={cn(
        !reduceMotion &&
          "transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]",
        className
      )}
    >
      {children}
    </Component>
  )
}
