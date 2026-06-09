"use client"
import { cn } from "@/lib/utils"
import { cinzel } from "@/lib/fonts/cinzel"
import { IconMenu2, IconX } from "@tabler/icons-react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react"

import React, { useRef, useState } from "react"
import Link from "next/link"
import { SITE_FAVICON_PATH } from "@/lib/seo"

interface NavbarProps {
  children: React.ReactNode
  className?: string
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface NavItemsProps {
  items: {
    name: string
    link: string
    hasDropdown?: boolean
    dropdownItems?: { name: string; link: string }[]
  }[]
  className?: string
  visible?: boolean
  onItemClick?: () => void
  onServicesDropdownToggle?: (isOpen: boolean) => void
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const [visible, setVisible] = useState<boolean>(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("fixed inset-x-0 top-0 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) && typeof child.type === "function"
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  )
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "min(78%, 52rem)" : "100%",
        y: visible ? 0 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: visible ? "min(40rem, 100%)" : "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center self-start rounded-full bg-transparent px-4 lg:flex dark:bg-transparent",
        visible ? "justify-between gap-2 py-1 px-3 xl:gap-3 xl:px-4" : "justify-between py-2",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        if (typeof child.type === "string") return child
        return React.cloneElement(
          child as React.ReactElement<{ visible?: boolean }>,
          { visible }
        )
      })}
    </motion.div>
  )
}

export const NavItems = ({
  items,
  className,
  visible,
  onItemClick,
  onServicesDropdownToggle,
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null)
        // Don't close dropdown on mouse leave - let the dropdown handle its own visibility
      }}
      className={cn(
        "hidden flex-row items-center font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex",
        visible
          ? "relative min-w-0 flex-1 justify-between gap-0.5 px-0.5 text-sm md:text-base"
          : "pointer-events-none absolute inset-y-0 left-[min(34%,20rem)] right-[12rem] flex-1 justify-center gap-1 text-base md:text-lg xl:left-[min(36%,22rem)] xl:right-[13rem] xl:gap-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`link-${idx}`}
          className={cn("relative", visible && "flex-1 text-center")}
          onMouseEnter={() => {
            setHovered(idx)
            if (item.hasDropdown) {
              onServicesDropdownToggle?.(true)
            } else {
              onServicesDropdownToggle?.(false)
            }
          }}
        >
          <a
            onClick={onItemClick}
            className={cn(
              "pointer-events-auto relative block text-neutral-600 dark:text-neutral-300",
              visible
                ? "whitespace-nowrap px-1 py-1.5 xl:px-1.5"
                : "px-4 py-2"
            )}
            href={item.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId='hovered'
                className='absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800'
              />
            )}
            <span className='relative z-20'>{item.name}</span>
          </a>
        </div>
      ))}
    </motion.div>
  )
}

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "84%" : "100%",
        paddingRight: visible ? "8px" : "0px",
        paddingLeft: visible ? "8px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 12 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 lg:hidden",
        visible ? "py-1" : "py-2",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        if (typeof child.type === "string") return child
        return React.cloneElement(
          child as React.ReactElement<{ visible?: boolean }>,
          { visible }
        )
      })}
    </motion.div>
  )
}

export const MobileNavHeader = ({
  children,
  className,
  visible,
}: MobileNavHeaderProps & { visible?: boolean }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child
        if (typeof child.type === "string") return child
        return React.cloneElement(
          child as React.ReactElement<{ visible?: boolean }>,
          { visible }
        )
      })}
    </div>
  )
}

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) => {
  return isOpen ? (
    <IconX className='text-black dark:text-white' onClick={onClick} />
  ) : (
    <IconMenu2 className='text-black dark:text-white' onClick={onClick} />
  )
}

export const NavbarLogo = ({ visible }: { visible?: boolean }) => {
  const scrolled = Boolean(visible)

  return (
    <Link
      href="/"
      className={cn(
        "relative z-30 min-w-0 max-w-[calc(100%-3rem)] shrink-0 sm:max-w-none",
        scrolled ? "mr-0" : "mr-2 xl:mr-4"
      )}
    >
      <span
        className={cn(
          "flex items-center rounded-[10px] border-[0.5px] backdrop-blur-[8px] [-webkit-backdrop-filter:blur(8px)]",
          "border-[rgba(201,162,39,0.35)] bg-[rgba(255,252,245,0.88)] shadow-[0_1px_10px_rgba(139,105,20,0.08)]",
          "dark:border-[rgba(201,162,39,0.2)] dark:bg-[rgba(10,8,4,0.35)] dark:shadow-none",
          scrolled ? "gap-2 py-1 pr-3 pl-1.5" : "gap-3 py-2 pr-4 pl-2 sm:pr-5"
        )}
      >
        <img
          src={`${SITE_FAVICON_PATH}?v=2`}
          alt="Elevation Software Solutions"
          className={cn(
            "shrink-0 rounded-[6px] object-cover",
            scrolled
              ? "h-11 w-11 md:h-12 md:w-12"
              : "h-20 w-20 md:h-24 md:w-24"
          )}
        />
        <span
          className={cn(
            cinzel.className,
            "hidden flex-col items-center justify-center border-l-2 border-[#8B6914] text-center leading-[1.1] sm:flex",
            scrolled ? "pl-2.5" : "pl-[14px]"
          )}
        >
          <span
            className={cn(
              "whitespace-nowrap font-semibold tracking-[0.06em] leading-[1.1] bg-[linear-gradient(90deg,#FFF0A0,#C9A227)] bg-clip-text text-transparent",
              scrolled ? "text-base lg:text-lg" : "text-2xl md:text-3xl"
            )}
          >
            ELEVATION
          </span>
          <span
            className={cn(
              "whitespace-nowrap font-semibold leading-[1.1] text-[#8B6914] dark:text-[#c9a84c]",
              scrolled
                ? "text-[9px] tracking-[0.16em] lg:text-[10px]"
                : "text-sm tracking-[0.2em] md:text-base"
            )}
          >
            SOFTWARE SOLUTIONS
          </span>
        </span>
      </span>
    </Link>
  )
}

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  visible,
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "dark" | "gradient"
  visible?: boolean
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles = cn(
    "rounded-md bg-white button bg-white text-black font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center",
    visible
      ? "px-3.5 py-1.5 text-sm md:text-base"
      : "px-5 py-2.5 text-base md:text-lg"
  )

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}
