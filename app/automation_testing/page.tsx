"use client"

import { Button } from "@/components/ui/button"
import { AuroraBackground as Aurora } from "../about/aurora"
import { ArrowRight, Cog, Sparkles } from "lucide-react"
import Link from "next/link"
import { NavbarDemo } from "@/components/ui/navbar"
import { Footer } from "@/components/footer"
import {
  Reveal,
  RevealItem,
  RevealStagger,
  EASE_OUT,
} from "@/components/home/scroll-reveal"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { PipelineFlowDiagram } from "@/components/automation/pipeline-flow-diagram"

const SERVICES = [
  {
    title: "Automation Strategy & Framework Design",
    description:
      "Scalable, reusable automation frameworks aligned to your application architecture and business goals.",
    subitems: [
      "Architecture-aligned framework blueprints",
      "Reusable components and shared libraries",
      "Coverage strategy tied to release risk",
    ],
    span: "lg:col-span-2 lg:row-span-2",
    emphasis: true,
    icon: "featured" as const,
  },
  {
    title: "Web & Mobile Test Automation",
    description:
      "End-to-end automation for web and mobile platforms using modern open-source and cross-platform tools.",
    span: "lg:col-span-1",
    emphasis: false,
    icon: null,
  },
  {
    title: "Framework Development & Deployment",
    description:
      "Building and deploying automation frameworks with CI/CD integration and advanced reporting.",
    span: "lg:col-span-1",
    emphasis: false,
    icon: null,
  },
  {
    title: "AI-Driven Automation Implementation",
    description:
      "AI, MCP servers, and knowledge bases for intelligent test generation, self-healing scripts, and optimized coverage.",
    span: "lg:col-span-1",
    emphasis: false,
    icon: null,
  },
  {
    title: "Test Script Development & Execution",
    description:
      "Maintainable scripts with structured execution, reporting, and reusability built in from day one.",
    span: "lg:col-span-1",
    emphasis: false,
    icon: null,
  },
  {
    title: "CI/CD Integration & Continuous Testing",
    description:
      "Seamless pipeline integration enabling continuous testing and faster, more reliable releases.",
    span: "lg:col-span-4",
    emphasis: false,
    icon: "accent" as const,
  },
]

const PROCESS = [
  {
    step: "Strategy & design",
    detail:
      "Automation strategy, framework architecture, and coverage planning aligned to your stack.",
  },
  {
    step: "Build & automate",
    detail:
      "Web and mobile scripts, reusable modules, and data-driven flows across platforms.",
  },
  {
    step: "Pipeline integration",
    detail:
      "CI/CD hooks, continuous testing gates, and reporting wired into your delivery pipeline.",
  },
  {
    step: "Optimize & maintain",
    detail:
      "Self-healing scripts, AI-assisted updates, and ongoing framework refinement.",
  },
]

const TOOLS = [
  "Playwright / Selenium / Appium",
  "RestAssured / Postman (API Automation)",
  "C# / Python / JavaScript / Java",
  "Git / Azure DevOps / Jenkins / GitHub Actions",
]

const METHODOLOGIES = [
  "AI-Assisted Automation",
  "Reusable & Modular Frameworks",
  "Data-Driven & Keyword-Driven Testing",
  "Cross-Browser & Cross-Platform Testing",
  "Shift-Left & Continuous Testing",
]

const STRENGTHS = [
  {
    title: "Scalable & Maintainable Frameworks",
    body: "Built with clean architecture for long-term scalability and easy maintenance.",
  },
  {
    title: "AI-Enhanced Efficiency",
    body: "Reduced script maintenance with faster and smarter automation using AI.",
  },
  {
    title: "Faster Time to Market",
    body: "Accelerated release cycles through automation and continuous testing.",
  },
  {
    title: "Seamless Team Integration",
    body: "Fits smoothly into existing DevOps and QA workflows.",
  },
  {
    title: "Focus on Quality & ROI",
    body: "Maximizing test coverage while reducing cost and improving business outcomes.",
  },
]

export default function AutomationTestingPage() {
  return (
    <div className='min-h-screen bg-white text-neutral-900'>
      <NavbarDemo />

      <Aurora>
        <div className='container relative z-10 mx-auto max-w-7xl px-4 pt-28 md:px-6 md:pt-32'>
          <motion.div
            initial={{ opacity: 0, transform: "translateY(20px) scale(0.98)" }}
            animate={{ opacity: 1, transform: "translateY(0) scale(1)" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className='flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center pb-20 text-center lg:pb-28'
          >
            <h1 className='max-w-5xl'>
              <span
                className='block text-[clamp(4rem,14vw,7rem)] font-extralight leading-[0.92] tracking-tight text-white'
                style={{
                  textShadow: "0 2px 24px rgba(0, 0, 0, 0.45)",
                }}
              >
                Automation
              </span>
              <span
                className='-mt-1 block text-[clamp(4.5rem,16vw,8rem)] font-black leading-[0.88] tracking-[-0.03em] text-emerald-400'
                style={{
                  textShadow:
                    "0 0 48px rgba(16, 185, 129, 0.35), 0 0 96px rgba(220, 38, 38, 0.15)",
                }}
              >
                Testing
              </span>
            </h1>
          </motion.div>
        </div>
      </Aurora>

      {/* Intro */}
      <section className='border-b border-neutral-200 bg-white py-20 lg:py-28'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <div className='grid items-center gap-12 lg:grid-cols-12 lg:gap-16'>
            <Reveal className='lg:col-span-5'>
              <div className='overflow-hidden rounded-2xl border border-neutral-200'>
                <PipelineFlowDiagram />
              </div>
            </Reveal>
            <div className='lg:col-span-7 lg:pl-4'>
              <Reveal delay={0.08}>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700'>
                  Scalable automation
                </p>
                <h2 className='mt-4 max-w-xl text-4xl font-light leading-tight tracking-tight text-neutral-900 sm:text-5xl'>
                  Intelligent solutions,{" "}
                  <span className='font-extrabold text-emerald-800'>
                    consistent quality.
                  </span>
                </h2>
                <div className='mt-6 max-w-lg space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg md:font-light'>
                  <p>
                    We provide robust automation testing services to accelerate
                    delivery, improve coverage, and ensure consistent quality
                    across web and mobile applications.
                  </p>
                  <p>
                    Our solutions are scalable, maintainable, and aligned with
                    modern engineering practices—from framework design through
                    CI/CD integration and continuous testing.
                  </p>
                  <p>
                    Whether you are building from scratch or modernizing an
                    existing suite, we help you ship faster with automation that
                    lasts.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive automation solutions — bento grid */}
      <section className='bg-emerald-50/70 py-20 lg:py-28'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal className='mb-14 max-w-2xl'>
            <h2 className='text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl'>
              Comprehensive{" "}
              <span className='font-light text-emerald-800'>
                Automation Solutions
              </span>
            </h2>
            <p className='mt-4 text-lg text-neutral-600 md:text-xl'>
              Full-stack automation from strategy and frameworks through
              execution, AI enhancement, and pipeline integration.
            </p>
          </Reveal>

          <RevealStagger
            className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2'
            stagger={0.07}
          >
            {SERVICES.map((service) => (
              <RevealItem
                key={service.title}
                className={cn(
                  "rounded-2xl border border-emerald-200/80 bg-white p-6 md:p-8",
                  service.span,
                  (service.emphasis || service.icon === "accent") &&
                    "lg:flex lg:flex-col lg:justify-between",
                  service.icon === "accent" &&
                    "border-emerald-300/80 bg-emerald-50/50"
                )}
              >
                <div>
                  <h3
                    className={cn(
                      service.emphasis &&
                        "text-2xl font-extrabold tracking-tight text-emerald-800 md:text-3xl",
                      service.icon === "accent" &&
                        "text-lg font-extrabold tracking-tight text-emerald-900 md:text-xl",
                      !service.emphasis &&
                        service.icon !== "accent" &&
                        "text-base font-bold uppercase tracking-wide text-emerald-800"
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 leading-relaxed text-neutral-600",
                      service.emphasis ? "text-base md:text-lg" : "text-sm"
                    )}
                  >
                    {service.description}
                  </p>
                  {"subitems" in service && service.subitems && (
                    <ul className='mt-6 space-y-3 border-t border-emerald-100 pt-6'>
                      {service.subitems.map((item) => (
                        <li
                          key={item}
                          className='flex gap-3 text-sm leading-relaxed text-neutral-600 md:text-base'
                        >
                          <span
                            className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600'
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {service.icon === "featured" && (
                  <Cog
                    className='mt-8 h-10 w-10 text-emerald-700/40'
                    strokeWidth={1.25}
                  />
                )}
                {service.icon === "accent" && (
                  <Sparkles
                    className='mt-6 h-8 w-8 text-emerald-600'
                    strokeWidth={1.5}
                  />
                )}
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Process */}
      <section className='bg-neutral-100 py-20 lg:py-28'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <div className='grid gap-16 lg:grid-cols-2'>
            <Reveal className='lg:sticky lg:top-28 lg:self-start'>
              <p className='font-mono text-xs font-medium uppercase tracking-widest text-neutral-500'>
                End-to-end delivery
              </p>
              <h2 className='mt-4 text-4xl font-extrabold leading-[1.1] text-neutral-900 sm:text-5xl'>
                Design through
                <br />
                <span className='font-light text-emerald-800'>
                  continuous testing.
                </span>
              </h2>
              <p className='mt-6 max-w-md text-base leading-relaxed text-neutral-600'>
                Every engagement spans the full automation lifecycle so your
                suites stay reliable as your product evolves.
              </p>
            </Reveal>

            <RevealStagger
              className='space-y-0 border-t border-neutral-300'
              stagger={0.1}
            >
              {PROCESS.map((item, idx) => (
                <RevealItem
                  key={item.step}
                  className='border-b border-neutral-300 py-8 md:py-10'
                >
                  <div className='flex gap-6 md:gap-10'>
                    <span className='font-mono text-3xl font-bold tabular-nums text-emerald-800/30 md:text-4xl'>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className='text-xl font-bold text-neutral-900 md:text-2xl'>
                        {item.step}
                      </h3>
                      <p className='mt-2 max-w-md text-base text-neutral-600'>
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* Tools & modern practices */}
      <section className='py-20 lg:py-28'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal className='mx-auto mb-14 max-w-3xl text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl'>
              Tools, Technologies
              <br />
              <span className='font-light text-emerald-800'>
                & Modern Practices
              </span>
            </h2>
            <p className='mt-4 text-lg text-neutral-600 md:text-xl'>
              Industry-standard automation tools paired with proven practices
              for efficient, high-quality coverage.
            </p>
          </Reveal>

          <div className='grid gap-12 lg:grid-cols-2 lg:gap-16'>
            <Reveal>
              <p className='mb-6 text-sm font-bold uppercase tracking-wide text-emerald-800'>
                Automation tools & technologies
              </p>
              <RevealStagger className='flex flex-wrap gap-2' stagger={0.04}>
                {TOOLS.map((tool) => (
                  <RevealItem key={tool}>
                    <span className='inline-block rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-semibold text-neutral-700'>
                      {tool}
                    </span>
                  </RevealItem>
                ))}
              </RevealStagger>
            </Reveal>

            <Reveal delay={0.08}>
              <p className='mb-6 text-sm font-bold uppercase tracking-wide text-emerald-800'>
                Advanced practices
              </p>
              <RevealStagger className='flex flex-wrap gap-2' stagger={0.04}>
                {METHODOLOGIES.map((method) => (
                  <RevealItem key={method}>
                    <span className='inline-block rounded-full border border-emerald-200/80 bg-emerald-50/60 px-4 py-2.5 text-sm font-semibold text-neutral-700'>
                      {method}
                    </span>
                  </RevealItem>
                ))}
              </RevealStagger>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className='bg-emerald-950 py-20 text-emerald-50 lg:py-28'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal className='mb-14 text-center lg:text-left'>
            <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl'>
              What Sets Our Automation Apart
            </h2>
          </Reveal>
          <RevealStagger
            className='grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-10 lg:gap-y-12'
            stagger={0.08}
          >
            {STRENGTHS.map((item, idx) => (
              <RevealItem
                key={item.title}
                className={cn(
                  idx === STRENGTHS.length - 1
                    ? "sm:col-span-2 lg:col-span-2 lg:col-start-3"
                    : "lg:col-span-3"
                )}
              >
                <div className='border-t border-emerald-800 pt-6'>
                  <h3
                    className={cn(
                      "text-emerald-50",
                      idx % 2 === 0
                        ? "text-xl font-extrabold md:text-2xl"
                        : "text-lg font-semibold uppercase tracking-wide text-emerald-300"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className='mt-3 text-base leading-relaxed text-emerald-100/85 md:text-lg md:font-light'>
                    {item.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Statement */}
      <section className='border-y border-emerald-200/60 bg-emerald-50/50 py-24 lg:py-32'>
        <Reveal className='container mx-auto max-w-4xl px-4 text-center md:px-6'>
          <p className='text-2xl font-light leading-snug text-neutral-800 sm:text-3xl md:text-4xl lg:text-5xl'>
            Accelerate delivery.
          </p>
          <p className='mt-4 text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl md:text-5xl lg:text-6xl'>
            Automate with confidence.
          </p>
          <p className='mx-auto mt-8 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg'>
            Scalable frameworks, continuous testing, and consistent quality across
            every release cycle.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className='py-20 lg:py-28'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal className='grid gap-10 rounded-2xl border border-neutral-200 bg-white p-8 md:grid-cols-2 md:items-center md:p-12 lg:p-16'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700'>
                Start a conversation
              </p>
              <h2 className='mt-3 text-3xl font-extrabold text-neutral-900 sm:text-4xl'>
                Ready to scale your test automation?
              </h2>
            </div>
            <div className='md:text-right'>
              <p className='text-base text-neutral-600 md:ml-auto md:max-w-sm md:text-lg'>
                Share your stack, coverage goals, and timeline. We will propose a
                tailored automation approach for your team.
              </p>
              <div className='mt-8 flex flex-col gap-3 min-[400px]:flex-row md:justify-end'>
                <Button
                  size='lg'
                  asChild
                  className='transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]'
                >
                  <Link href='/contact'>
                    Request a consultation
                    <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
                <Button
                  size='lg'
                  asChild
                  className='bg-emerald-700 text-white transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-emerald-800 active:scale-[0.97]'
                >
                  <Link href='/services'>Browse all services</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
