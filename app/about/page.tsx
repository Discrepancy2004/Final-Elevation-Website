"use client"

import { Button } from "@/components/ui/button"
import { AuroraBackground as Aurora } from "./aurora"
import { ArrowRight } from "lucide-react"
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

const EXPERTISE = [
  "Manual and exploratory testing",
  "Automation framework design and implementation",
  "Mobile, web, API, and enterprise application testing",
  "Non-functional testing (performance, security, scalability)",
  "ETL and data validation testing",
  "Accessibility and compliance testing",
  "AI-assisted test design and optimization",
]

const APPROACH = [
  {
    title: "Early involvement",
    detail: "Shift-left testing embedded from planning through release.",
  },
  {
    title: "Risk-based validation",
    detail: "Real-world scenarios prioritized by business and user impact.",
  },
  {
    title: "Collaborative partnership",
    detail: "Close alignment with development and business stakeholders.",
  },
  {
    title: "Continuous improvement",
    detail: "AI and automation applied to refine coverage and efficiency.",
  },
]

const WHY_US = [
  {
    title: "25+ Years of Proven Experience",
    body: "Deep expertise across industries, technologies, and complex systems.",
  },
  {
    title: "Platform & Domain Agnostic",
    body: "Capability to test any application—web, mobile, enterprise, or emerging technologies.",
  },
  {
    title: "Modern & Future-Ready Approach",
    body: "Leveraging AI, automation, and CI/CD integration for efficient delivery.",
  },
  {
    title: "Quality Driven Mindset",
    body: "Focused on delivering reliable, production-ready software that meets user and business expectations.",
  },
]

export default function AboutPage() {
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
            <h1 className='mx-auto max-w-4xl'>
              <span
                className='block text-[clamp(2.25rem,7vw,4.25rem)] font-extralight leading-[1.05] tracking-tight text-white'
                style={{
                  textShadow: "0 2px 24px rgba(0, 0, 0, 0.45)",
                }}
              >
                Elevation Software
              </span>
              <span
                className='-mt-1 block text-[clamp(3rem,11vw,6.5rem)] font-black leading-[0.95] tracking-[-0.03em] text-emerald-400'
                style={{
                  textShadow:
                    "0 0 48px rgba(16, 185, 129, 0.35), 0 0 96px rgba(220, 38, 38, 0.15)",
                }}
              >
                Solutions
              </span>
            </h1>
          </motion.div>
        </div>
      </Aurora>

      {/* Editorial opening */}
      <section className='border-b border-neutral-200/80 py-24 lg:py-32'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <div className='grid gap-16 lg:grid-cols-12 lg:gap-20'>
            <Reveal className='lg:col-span-4 lg:pt-6'>
              <p
                className='font-mono text-[clamp(5rem,14vw,9rem)] font-light leading-none tracking-tight text-emerald-800/20'
                aria-hidden
              >
                25+
              </p>
              <p className='mt-4 max-w-[12rem] text-sm font-medium leading-relaxed text-emerald-800'>
                Years shaping quality across evolving technology landscapes.
              </p>
            </Reveal>

            <div className='lg:col-span-8'>
              <Reveal delay={0.06}>
                <h2 className='max-w-3xl text-balance text-4xl font-light leading-[1.12] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl'>
                  Delivering quality through{" "}
                  <span className='font-extrabold text-emerald-800'>
                    experience, precision & innovation.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.12} className='mt-10 max-w-2xl space-y-6'>
                <p className='text-lg font-light leading-relaxed text-neutral-600 md:text-xl'>
                  With over 25 years of experience in Software Testing and
                  Quality Assurance, we are dedicated to helping businesses
                  deliver reliable, high-quality software across any platform,
                  technology, or domain.
                </p>
                <p className='text-lg font-light leading-relaxed text-neutral-600 md:text-xl'>
                  Our journey spans decades of evolving technologies—from
                  traditional testing practices to modern, AI-driven and
                  automation-led quality engineering. This enables a balanced
                  approach combining deep manual expertise with cutting-edge
                  solutions, ensuring comprehensive test coverage and business
                  confidence.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise — flowing list, not cards */}
      <section className='bg-neutral-50 py-24 lg:py-32'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <div className='grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24'>
            <Reveal className='lg:sticky lg:top-28 lg:self-start'>
              <h2 className='text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl'>
                Our{" "}
                <span className='block font-light text-emerald-800'>
                  Expertise
                </span>
              </h2>
              <p className='mt-6 max-w-md text-base leading-relaxed text-neutral-600 md:text-lg md:font-light'>
                End-to-end testing services spanning manual craft, automation,
                data, accessibility, and AI-assisted quality engineering.
              </p>
            </Reveal>

            <div>
              <RevealStagger
                className='divide-y divide-neutral-200/90 border-y border-neutral-200/90'
                stagger={0.05}
              >
                {EXPERTISE.map((item) => (
                  <RevealItem key={item}>
                    <p className='flex gap-5 py-5 text-base leading-relaxed text-neutral-700 md:py-6 md:text-lg md:font-light'>
                      <span
                        className='mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-600'
                        aria-hidden
                      />
                      {item}
                    </p>
                  </RevealItem>
                ))}
              </RevealStagger>

              <Reveal delay={0.1} className='mt-12 border-t border-emerald-200/70 pt-10'>
                <p className='max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg md:font-light'>
                  We also specialize in creating robust test strategies, test
                  plans, scenarios, and test cases, aligned with business goals
                  and modern delivery models.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Approach — pillar rows */}
      <section className='py-24 lg:py-32'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal className='mb-16 max-w-2xl'>
            <h2 className='text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl'>
              Our{" "}
              <span className='font-light text-emerald-800'>Approach</span>
            </h2>
            <p className='mt-5 text-lg font-light leading-relaxed text-neutral-600 md:text-xl'>
              Quality is not just a phase—it is embedded throughout the software
              lifecycle.
            </p>
          </Reveal>

          <RevealStagger
            className='grid gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2'
            stagger={0.08}
          >
            {APPROACH.map((item, idx) => (
              <RevealItem
                key={item.title}
                className={cn(
                  "bg-white p-8 md:p-10 lg:p-12",
                  idx === 0 && "sm:rounded-tl-2xl",
                  idx === 1 && "sm:rounded-tr-2xl",
                  idx === 2 && "sm:rounded-bl-2xl",
                  idx === 3 && "sm:rounded-br-2xl"
                )}
              >
                <h3 className='text-xl font-extrabold text-emerald-900 md:text-2xl'>
                  {item.title}
                </h3>
                <p className='mt-3 max-w-sm text-base leading-relaxed text-neutral-600 md:font-light'>
                  {item.detail}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Why choose us — refined 2×2 on dark band */}
      <section className='bg-emerald-950 py-24 text-emerald-50 lg:py-32'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal className='mb-14 lg:mb-20'>
            <h2 className='text-4xl font-extrabold tracking-tight sm:text-5xl'>
              Why Choose Us
            </h2>
          </Reveal>

          <RevealStagger
            className='grid gap-12 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-14'
            stagger={0.08}
          >
            {WHY_US.map((item, idx) => (
              <RevealItem
                key={item.title}
                className={cn(
                  "border-t border-emerald-800/80 pt-8",
                  idx % 2 === 1 && "lg:pl-8"
                )}
              >
                <div className='mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-800/60'>
                  <span className='text-sm font-bold text-emerald-100'>✓</span>
                </div>
                <h3
                  className={cn(
                    "text-emerald-50",
                    idx % 2 === 0
                      ? "text-2xl font-extrabold md:text-3xl"
                      : "text-xl font-semibold uppercase tracking-wide text-emerald-300"
                  )}
                >
                  {item.title}
                </h3>
                <p className='mt-4 max-w-md text-base leading-relaxed text-emerald-100/85 md:text-lg md:font-light'>
                  {item.body}
                </p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Mission */}
      <section className='border-y border-emerald-200/60 bg-emerald-50/50 py-28 lg:py-36'>
        <Reveal className='container mx-auto max-w-4xl px-4 text-center md:px-6'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700'>
            Our mission
          </p>
          <p className='mt-8 text-balance text-2xl font-light leading-snug text-neutral-800 sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.2]'>
            To empower organizations with high-quality, reliable, and scalable
            software through expert testing services, innovative solutions, and a
            commitment to excellence.
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className='py-24 lg:py-32'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal className='flex flex-col items-start justify-between gap-10 rounded-2xl border border-neutral-200 bg-white p-8 md:flex-row md:items-center md:p-14 lg:p-16'>
            <div className='max-w-xl'>
              <h2 className='text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl'>
                Partner with a team built on quality.
              </h2>
              <p className='mt-4 text-base leading-relaxed text-neutral-600 md:text-lg md:font-light'>
                Discuss your product, platform, and release goals. We will show
                you how our experience translates into confidence at every
                stage.
              </p>
            </div>
            <div className='flex w-full flex-col gap-3 min-[400px]:w-auto min-[400px]:flex-row'>
              <Button size='lg' asChild>
                <Link href='/contact'>
                  Get in touch
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button
                size='lg'
                asChild
                className='bg-emerald-700 text-white hover:bg-emerald-800'
              >
                <Link href='/services'>View our services</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
