"use client"

import { Button } from "@/components/ui/button"
import { AuroraBackground as Aurora } from "../about/aurora"
import { ArrowRight, Bot, Sparkles } from "lucide-react"
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

const SERVICES = [
  {
    title: "Agentic AI Solution Design",
    description:
      "Intelligent AI agents that plan, generate, execute, and optimize testing workflows autonomously.",
    subitems: [
      "Autonomous test planning aligned to release goals",
      "Multi-agent orchestration across your QA stack",
      "Knowledge-driven decision making at each cycle",
    ],
    span: "lg:col-span-2 lg:row-span-2",
    emphasis: true,
    icon: "featured" as const,
  },
  {
    title: "Architecture & Framework Development",
    description:
      "Scalable AI-powered testing frameworks using modern architectures, MCP servers, and knowledge-driven systems.",
    span: "lg:col-span-1",
    emphasis: false,
    icon: null,
  },
  {
    title: "Deployment & Integration",
    description:
      "Seamless deployment of AI agents into your environments, integrated with CI/CD and test management tools.",
    span: "lg:col-span-1",
    emphasis: false,
    icon: null,
  },
  {
    title: "Continuous Learning & Optimization",
    description:
      "Feedback loops and knowledge bases that let agents learn from past runs and improve over time.",
    span: "lg:col-span-1",
    emphasis: false,
    icon: null,
  },
  {
    title: "AI-Driven Test Generation",
    description:
      "Automated test strategies, plans, scenarios, and cases that reduce manual effort and expand coverage.",
    span: "lg:col-span-1",
    emphasis: false,
    icon: null,
  },
  {
    title: "Maintenance & Support",
    description:
      "Ongoing monitoring, fine-tuning, and enhancement to keep AI systems reliable, accurate, and performant.",
    span: "lg:col-span-4",
    emphasis: false,
    icon: "accent" as const,
  },
]

const CAPABILITIES = [
  {
    step: "Autonomous planning",
    detail: "Test planning and execution driven by intelligent agents, not static scripts.",
  },
  {
    step: "Self-healing flows",
    detail: "Adaptive test scripts and flows that recover from UI and environment changes.",
  },
  {
    step: "Defect intelligence",
    detail: "Intelligent defect detection with root cause insights your team can act on.",
  },
  {
    step: "Knowledge integration",
    detail: "Connection to knowledge bases and domain data for context-aware testing.",
  },
  {
    step: "Impact analysis",
    detail: "AI-assisted regression and change-impact analysis before every release.",
  },
  {
    step: "Cross-platform scale",
    detail: "Orchestrated test execution across web, mobile, API, and data layers.",
  },
]

const AI_ARCHITECTURE = [
  "Agentic AI Systems",
  "MCP Servers",
  "Knowledge Base Integration (RAG)",
]

const TESTING_INTEGRATION = [
  "Playwright / Selenium / Appium",
  "API & Data Testing Tools",
  "CI/CD (Azure DevOps, GitHub Actions, Jenkins)",
]

const DATA_INTELLIGENCE = [
  "LLM Integration",
  "Test Data Generation",
  "Analytics & Reporting Dashboards",
]

const STRENGTHS = [
  {
    title: "Architect-Led AI Solutions",
    body: "Solutions designed with strong architectural principles ensuring scalability, reliability, and maintainability.",
  },
  {
    title: "True Agentic Capabilities",
    body: "Moving beyond automation into intelligent, decision-making testing systems.",
  },
  {
    title: "Accelerated QA Lifecycle",
    body: "Significantly reducing manual effort in test design, execution, and maintenance.",
  },
  {
    title: "Continuous Evolution",
    body: "AI systems that learn, adapt, and improve with every test cycle.",
  },
  {
    title: "Future-Ready Testing",
    body: "Helping organizations transition to next-generation QA powered by AI.",
  },
]

export default function AiTestingPage() {
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
                Agentic
              </span>
              <span
                className='-mt-1 block text-[clamp(4.5rem,16vw,8rem)] font-black leading-[0.88] tracking-[-0.03em] text-emerald-400'
                style={{
                  textShadow:
                    "0 0 48px rgba(16, 185, 129, 0.35), 0 0 96px rgba(220, 38, 38, 0.15)",
                }}
              >
                AI Testing
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
                <img
                  src='https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop'
                  alt='AI-powered software testing visualization'
                  className='h-[320px] w-full object-cover md:h-[420px]'
                />
              </div>
            </Reveal>
            <div className='lg:col-span-7 lg:pl-4'>
              <Reveal delay={0.08}>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700'>
                  Intelligent, autonomous QA
                </p>
                <h2 className='mt-4 max-w-xl text-4xl font-light leading-tight tracking-tight text-neutral-900 sm:text-5xl'>
                  Testing ecosystems that{" "}
                  <span className='font-extrabold text-emerald-800'>
                    learn and scale.
                  </span>
                </h2>
                <div className='mt-6 max-w-lg space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg md:font-light'>
                  <p>
                    We provide cutting-edge Agentic AI solutions for software
                    testing, enabling organizations to move beyond traditional QA
                    into intelligent, autonomous, and self-improving testing
                    ecosystems.
                  </p>
                  <p>
                    As architects with deep testing expertise, we design and
                    deliver AI-driven systems that scale with your development
                    lifecycle and integrate with the tools your teams already use.
                  </p>
                  <p>
                    From autonomous planning to continuous optimization, we help
                    you reduce manual effort, increase coverage, and release with
                    greater confidence.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What we offer — bento grid */}
      <section className='bg-emerald-50/70 py-20 lg:py-28'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal className='mb-14 max-w-2xl'>
            <h2 className='text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl'>
              What We{" "}
              <span className='font-light text-emerald-800'>Offer</span>
            </h2>
            <p className='mt-4 text-lg text-neutral-600 md:text-xl'>
              End-to-end Agentic AI capabilities from solution design through
              deployment, learning, and support.
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
                  <Bot
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

      {/* Key capabilities */}
      <section className='bg-neutral-100 py-20 lg:py-28'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <div className='grid gap-16 lg:grid-cols-2'>
            <Reveal className='lg:sticky lg:top-28 lg:self-start'>
              <p className='font-mono text-xs font-medium uppercase tracking-widest text-neutral-500'>
                Key capabilities
              </p>
              <h2 className='mt-4 text-4xl font-extrabold leading-[1.1] text-neutral-900 sm:text-5xl'>
                Intelligent systems,
                <br />
                <span className='font-light text-emerald-800'>
                  measurable outcomes.
                </span>
              </h2>
              <p className='mt-6 max-w-md text-base leading-relaxed text-neutral-600'>
                Agentic AI that plans, adapts, and improves across every layer of
                your quality pipeline.
              </p>
            </Reveal>

            <RevealStagger
              className='space-y-0 border-t border-neutral-300'
              stagger={0.08}
            >
              {CAPABILITIES.map((item, idx) => (
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

      {/* Technologies & ecosystem */}
      <section className='py-20 lg:py-28'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal className='mx-auto mb-14 max-w-3xl text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl'>
              Technologies &{" "}
              <span className='font-light text-emerald-800'>Ecosystem</span>
            </h2>
            <p className='mt-4 text-lg text-neutral-600 md:text-xl'>
              Modern AI architecture paired with proven testing and integration
              platforms.
            </p>
          </Reveal>

          <div className='grid gap-12 lg:grid-cols-3 lg:gap-10'>
            <Reveal>
              <p className='mb-6 text-sm font-bold uppercase tracking-wide text-emerald-800'>
                AI & architecture
              </p>
              <RevealStagger className='flex flex-wrap gap-2' stagger={0.04}>
                {AI_ARCHITECTURE.map((item) => (
                  <RevealItem key={item}>
                    <span className='inline-block rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-semibold text-neutral-700'>
                      {item}
                    </span>
                  </RevealItem>
                ))}
              </RevealStagger>
            </Reveal>

            <Reveal delay={0.06}>
              <p className='mb-6 text-sm font-bold uppercase tracking-wide text-emerald-800'>
                Testing & integration
              </p>
              <RevealStagger className='flex flex-wrap gap-2' stagger={0.04}>
                {TESTING_INTEGRATION.map((item) => (
                  <RevealItem key={item}>
                    <span className='inline-block rounded-full border border-emerald-200/80 bg-emerald-50/60 px-4 py-2.5 text-sm font-semibold text-neutral-700'>
                      {item}
                    </span>
                  </RevealItem>
                ))}
              </RevealStagger>
            </Reveal>

            <Reveal delay={0.12}>
              <p className='mb-6 text-sm font-bold uppercase tracking-wide text-emerald-800'>
                Data & intelligence
              </p>
              <RevealStagger className='flex flex-wrap gap-2' stagger={0.04}>
                {DATA_INTELLIGENCE.map((item) => (
                  <RevealItem key={item}>
                    <span className='inline-block rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-semibold text-neutral-700'>
                      {item}
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
              What Sets Us Apart
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

      {/* Vision */}
      <section className='border-y border-emerald-200/60 bg-emerald-50/50 py-24 lg:py-32'>
        <Reveal className='container mx-auto max-w-4xl px-4 text-center md:px-6'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700'>
            Our vision
          </p>
          <p className='mt-6 text-2xl font-light leading-snug text-neutral-800 sm:text-3xl md:text-4xl lg:text-5xl'>
            Redefine software testing through autonomous, intelligent QA.
          </p>
          <p className='mt-4 text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl md:text-5xl lg:text-6xl'>
            Faster. Smarter. With confidence.
          </p>
          <p className='mx-auto mt-8 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg'>
            We empower businesses to deliver with scalable, self-improving testing
            ecosystems built for the next generation of software delivery.
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
                Ready for Agentic AI testing?
              </h2>
            </div>
            <div className='md:text-right'>
              <p className='text-base text-neutral-600 md:ml-auto md:max-w-sm md:text-lg'>
                Tell us about your stack and QA goals. We will outline an
                architect-led Agentic AI roadmap for your organization.
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
                  <Link href='/manual_testing'>Explore manual testing</Link>
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
