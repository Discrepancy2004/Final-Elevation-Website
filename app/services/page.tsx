"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AuroraBackground as Aurora } from "../about/aurora"
import { Footer } from "@/components/footer"
import { NavbarDemo } from "@/components/ui/navbar"
import {
  Reveal,
  RevealItem,
  RevealStagger,
  EASE_OUT,
} from "@/components/home/scroll-reveal"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "motion/react"
import {
  ArrowRight,
  Bug,
  Gauge,
  Code,
  ClipboardCheck,
  Zap,
  Accessibility,
  Lock,
  Smartphone,
  Globe,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type ServiceEntry = {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  href?: string
}

const SERVICES: ServiceEntry[] = [
  {
    title: "Manual Testing",
    description:
      "Comprehensive manual testing by experienced QA professionals",
    icon: ClipboardCheck,
    href: "/manual_testing",
    features: [
      "Functional Testing",
      "Usability Testing",
      "Exploratory Testing",
      "Regression Testing",
      "User Acceptance Testing",
      "Cross-browser Testing",
    ],
  },
  {
    title: "Automated Testing",
    description: "Scalable automated testing solutions for faster delivery",
    icon: Zap,
    href: "/automation_testing",
    features: [
      "API Testing",
      "UI Automation",
      "CI/CD Integration",
      "Test Framework Setup",
      "Maintenance & Updates",
      "Custom Test Scripts",
    ],
  },
  {
    title: "Accessibility Testing",
    description: "Ensure your applications are usable by everyone",
    icon: Accessibility,
    href: "/accessibility_testing",
    features: [
      "WCAG Compliance Testing",
      "Screen Reader Testing",
      "Keyboard Navigation Testing",
      "Color Contrast Validation",
      "ARIA & Semantic HTML Audits",
      "Accessibility Reporting",
    ],
  },
  {
    title: "Security Testing",
    description:
      "Comprehensive security assessment and vulnerability testing",
    icon: Lock,
    href: "/security_testing",
    features: [
      "Penetration Testing",
      "Vulnerability Assessment",
      "Security Code Review",
      "Authentication Testing",
      "Data Protection Testing",
      "Compliance Verification",
    ],
  },
  {
    title: "Mobile Testing",
    description:
      "Complete testing solutions for iOS and Android applications",
    icon: Smartphone,
    href: "/mobile_testing",
    features: [
      "Device Compatibility",
      "OS Version Testing",
      "Accessibility Testing",
      "Battery Usage Testing",
      "Network Testing",
      "App Store Compliance",
    ],
  },
  {
    title: "Web Testing",
    description: "Comprehensive web application testing across all browsers",
    icon: Globe,
    href: "/contact",
    features: [
      "Cross-browser Testing",
      "Responsive Design Testing",
      "AI Testing Solutions",
      "SEO Testing",
      "Performance Optimization",
      "Progressive Web App Testing",
    ],
  },
  {
    title: "AI Testing Solutions",
    description:
      "Leverage AI to generate test plans, scenarios, and cases that integrate with your test management tools and accelerate delivery.",
    icon: Sparkles,
    href: "/ai_testing",
    features: [
      "AI-Generated Test Plans",
      "Automated Test Scenario Design",
      "Test Case Import & Management",
      "Coverage Gap Analysis",
      "Hybrid Manual + AI Workflows",
      "Accelerated Test Design Cycles",
    ],
  },
  {
    title: "ETL Testing",
    description:
      "Validate data transformation processes ensuring integrity and accuracy throughout pipelines",
    icon: Workflow,
    href: "/etl_testing",
    features: [
      "Data Validation Testing",
      "Transformation Logic Testing",
      "Data Completeness Testing",
      "Data Quality Checks",
      "Accessibility Testing",
      "Error Handling Validation",
    ],
  },
  {
    title: "Software QA Outsourcing",
    description:
      "Scale your QA capabilities with dedicated testing teams that integrate seamlessly",
    icon: Users,
    href: "/qa_outsourcing",
    features: [
      "Dedicated QA Teams",
      "Flexible Engagement Models",
      "24/7 Testing Support",
      "Knowledge Transfer",
      "Process Integration",
      "Scalable Resources",
    ],
  },
]

const METHODOLOGIES = [
  {
    id: "functional",
    category: "Functional Testing",
    icon: Bug,
    tests: [
      "Unit Testing",
      "Integration Testing",
      "System Testing",
      "Acceptance Testing",
      "Smoke Testing",
      "Sanity Testing",
    ],
  },
  {
    id: "non-functional",
    category: "Non-Functional Testing",
    icon: Gauge,
    tests: [
      "Accessibility Testing",
      "Security Testing",
      "Usability Testing",
      "Compatibility Testing",
      "Reliability Testing",
      "Scalability Testing",
    ],
  },
  {
    id: "specialized",
    category: "Specialized Testing",
    icon: Code,
    tests: [
      "API Testing",
      "Database Testing",
      "Localization Testing",
      "AI Testing Solutions",
      "Migration Testing",
      "Recovery Testing",
    ],
  },
]

const PROCESS = [
  {
    step: "Analysis",
    detail:
      "We analyze your requirements and create a comprehensive testing strategy.",
  },
  {
    step: "Planning",
    detail:
      "Detailed test planning with timelines, resources, and deliverables.",
  },
  {
    step: "Execution",
    detail:
      "Systematic test execution with real-time reporting and communication.",
  },
  {
    step: "Reporting",
    detail:
      "Comprehensive reports with actionable insights and recommendations.",
  },
]

export default function ServicesPage() {
  const [activeMethodology, setActiveMethodology] = useState("functional")
  const activeMeta = METHODOLOGIES.find((m) => m.id === activeMethodology)!

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <NavbarDemo />

      {/* Aurora hero — unchanged */}
      <Aurora className="min-h-[85vh] lg:min-h-[90vh]">
        <div className="container relative z-10 mx-auto max-w-7xl px-4 pt-28 md:px-6 md:pt-32">
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateY(20px) scale(0.98)",
            }}
            animate={{ opacity: 1, transform: "translateY(0) scale(1)" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="flex min-h-[calc(85vh-7rem)] flex-col items-center justify-center pb-16 text-center lg:pb-24"
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400/90">
              Our Services
            </p>
            <h1 className="mx-auto max-w-5xl text-balance">
              <span className="block text-[clamp(2rem,6vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-white">
                Comprehensive Testing
              </span>
              <span className="-mt-1 block text-[clamp(2.75rem,10vw,5.5rem)] font-light leading-[0.95] tracking-[-0.02em] text-emerald-400">
                Solutions
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-neutral-300 md:text-xl">
              From manual testing to automated CI/CD integration, we provide
              end-to-end quality assurance services tailored to your specific
              needs.
            </p>
          </motion.div>
        </div>
      </Aurora>

      {/* Services — card grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <RevealStagger
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
            stagger={0.06}
          >
            {SERVICES.map((service) => {
              const card = (
                <>
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <service.icon
                      className="h-8 w-8 shrink-0 text-emerald-700"
                      strokeWidth={1.35}
                    />
                    {service.href && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-emerald-700 opacity-0 transition-all duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-0.5 group-hover:opacity-100 motion-reduce:transition-none" />
                    )}
                  </div>
                  <h2 className="text-xl font-extrabold tracking-tight text-neutral-900 md:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 md:text-base">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-neutral-100 pt-5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-neutral-700"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600"
                          aria-hidden
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </>
              )

              return (
                <RevealItem key={service.title}>
                  {service.href ? (
                    <Link
                      href={service.href}
                      className="group flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-emerald-300 hover:bg-emerald-50/30 md:p-7"
                    >
                      {card}
                    </Link>
                  ) : (
                    <div className="flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 md:p-7">
                      {card}
                    </div>
                  )}
                </RevealItem>
              )
            })}
          </RevealStagger>
        </div>
      </section>

      {/* Methodologies — sidebar navigator + detail panel */}
      <section className="bg-emerald-950 py-24 text-emerald-50 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="mb-14 max-w-2xl lg:mb-16">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Testing Methodologies
            </h2>
            <p className="mt-5 text-base leading-relaxed text-emerald-100/85 md:text-lg md:font-light">
              We employ a wide range of testing methodologies to ensure
              comprehensive coverage.
            </p>
          </Reveal>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16">
            <Reveal className="flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
              {METHODOLOGIES.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setActiveMethodology(type.id)}
                  className={cn(
                    "shrink-0 rounded-lg border px-5 py-4 text-left transition-colors duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] lg:w-full",
                    activeMethodology === type.id
                      ? "border-emerald-400/40 bg-emerald-900/80 text-white"
                      : "border-emerald-800/60 bg-transparent text-emerald-200/80 hover:border-emerald-600/50 hover:text-emerald-50"
                  )}
                >
                  <type.icon className="mb-3 h-6 w-6" strokeWidth={1.35} />
                  <span className="block text-sm font-bold md:text-base">
                    {type.category}
                  </span>
                </button>
              ))}
            </Reveal>

            <Reveal delay={0.08}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMethodology}
                  initial={{ opacity: 0, transform: "translateY(8px)" }}
                  animate={{ opacity: 1, transform: "translateY(0)" }}
                  exit={{ opacity: 0, transform: "translateY(-6px)" }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                  className="border-t border-emerald-800 pt-8 lg:pt-0 lg:border-t-0 lg:border-l lg:border-emerald-800 lg:pl-16"
                >
                  <activeMeta.icon
                    className="mb-5 h-10 w-10 text-emerald-300"
                    strokeWidth={1.25}
                  />
                  <h3 className="text-2xl font-extrabold text-white md:text-3xl">
                    {activeMeta.category}
                  </h3>
                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {activeMeta.tests.map((test) => (
                      <div
                        key={test}
                        className="flex items-center gap-3 border-b border-emerald-800/80 pb-4 text-sm font-medium text-emerald-100/90 md:text-base"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400"
                          aria-hidden
                        />
                        {test}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process — horizontal timeline */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl">
              Our Testing Process
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
              A systematic approach that ensures thorough testing and quality
              delivery.
            </p>
          </Reveal>

          <RevealStagger
            className="relative grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
            stagger={0.08}
          >
            <div
              className="absolute top-8 right-[12.5%] left-[12.5%] hidden h-px bg-emerald-200 lg:block"
              aria-hidden
            />
            {PROCESS.map((item, idx) => (
              <RevealItem key={item.step} className="relative text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-emerald-600 bg-white text-lg font-bold text-emerald-800">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 md:text-xl">
                  {item.step}
                </h3>
                <p className="mx-auto mt-3 max-w-[14rem] text-sm leading-relaxed text-neutral-600 md:text-base">
                  {item.detail}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CTA — full-width emerald band */}
      <section className="bg-emerald-900 py-24 text-white lg:py-32">
        <Reveal className="container mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-emerald-100/90 md:text-lg">
            Contact us today to discuss your testing needs and get a customized
            quote.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 min-[400px]:flex-row">
            <Button
              size="lg"
              asChild
              className="bg-white text-emerald-900 transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-emerald-50 active:scale-[0.97]"
            >
              <Link href="/contact">
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-emerald-400/50 bg-transparent text-white transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-emerald-800/50 hover:text-white active:scale-[0.97]"
            >
              <Link href="/about">Learn About Our Team</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  )
}
