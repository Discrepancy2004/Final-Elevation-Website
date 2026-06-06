"use client"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion, useInView } from "motion/react"
import { EASE_OUT } from "@/components/home/scroll-reveal"

import { useRef, useState } from "react"

export type HoverEffectItem = {
  title: string
  description: string
  link: string
  image?: string
  color?: string
}

export const HoverEffect = ({
  items,
  className,
}: {
  items: HoverEffectItem[]
  className?: string
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const inView = useInView(gridRef, { once: true, margin: "-60px", amount: 0.1 })

  return (
    <div
      ref={gridRef}
      className={cn(
        "grid grid-cols-1 gap-4 py-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <motion.a
          href={item?.link}
          key={item?.link}
          initial={{ opacity: 0, transform: "translateY(12px) scale(0.98)" }}
          animate={
            inView
              ? { opacity: 1, transform: "translateY(0) scale(1)" }
              : undefined
          }
          transition={{
            duration: 0.45,
            delay: idx * 0.06,
            ease: EASE_OUT,
          }}
          className="group relative block h-full w-full transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.015] motion-reduce:transition-none motion-reduce:hover:scale-100"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute -inset-1 block rounded-2xl bg-amber-400/20 ring-1 ring-amber-400/40"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.25, ease: EASE_OUT },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, ease: EASE_OUT },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image} color={item.color}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </motion.a>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
  image,
  color,
}: {
  className?: string
  children: React.ReactNode
  image?: string
  color?: string
}) => {
  return (
    <div
      className={cn(
        "relative z-20 flex h-full min-h-[480px] w-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-neutral-950 shadow-[0_8px_32px_rgba(0,0,0,0.18)] ring-1 ring-white/[0.06] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:border-amber-400/25 group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.28)] md:min-h-[520px]",
        className
      )}
    >
      {color && (
        <>
          <div className="absolute inset-0" style={{ backgroundColor: color }} />
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-black/30" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
        </>
      )}
      {image && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </>
      )}
      <div className="relative z-50 flex flex-1 flex-col justify-end">
        <div className="flex flex-1 flex-col justify-end px-8 py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
          {children}
        </div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4
      className={cn(
        "text-center text-2xl font-extrabold tracking-tight text-white md:text-3xl",
        className
      )}
    >
      {children}
    </h4>
  )
}

export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        "mt-6 text-center text-lg font-normal leading-relaxed tracking-wide text-white/85 md:mt-8 md:text-xl md:leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  )
}
