"use client"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion, useInView } from "motion/react"
import { EASE_OUT } from "@/components/home/scroll-reveal"

import { useRef, useState } from "react"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
    image?: string
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const inView = useInView(gridRef, { once: true, margin: "-60px", amount: 0.1 })

  return (
    <div
      ref={gridRef}
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
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
          className='group relative block h-full w-full p-2 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.01] motion-reduce:transition-none motion-reduce:hover:scale-100'
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className='absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl'
                layoutId='hoverBackground'
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2, ease: EASE_OUT },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, ease: EASE_OUT },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
            <CardTitle
              className={cn(
                idx % 2 === 0
                  ? "text-xl font-extrabold tracking-tight"
                  : "text-lg font-light tracking-wide"
              )}
            >
              {item.title}
            </CardTitle>
            <CardDescription
              className={cn(
                idx % 3 === 0 ? "text-sm font-medium" : "text-base font-normal"
              )}
            >
              {item.description}
            </CardDescription>
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
}: {
  className?: string
  children: React.ReactNode
  image?: string
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      {image && (
        <>
          <div
            className='absolute inset-0 bg-cover bg-center bg-no-repeat'
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70' />
        </>
      )}
      <div className='relative z-50'>
        <div className='p-4'>{children}</div>
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
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 text-center", className)}>
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
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-base text-center",
        className
      )}
    >
      {children}
    </p>
  )
}
