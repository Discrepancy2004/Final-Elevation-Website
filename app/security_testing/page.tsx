"use client"

import { Button } from "@/components/ui/button"
import { AuroraBackground as Aurora } from "../about/aurora"
import { ArrowRight, Shield, Sparkles } from "lucide-react"
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
    title: "Vulnerability Assessment",
    description:
      "Identifying security weaknesses, misconfigurations, and potential risks across applications and systems.",
    subitems: [
      "Automated and manual vulnerability scanning",
      "Configuration and exposure analysis",
      "Risk prioritization with severity ratings",
    ],
    span: "lg:col-span-2 lg:row-span-2",
    emphasis: true,
    icon: "featured" as const,
  },
  {
    title: "Penetration Testing (Ethical Hacking)",
    description:
      "Simulating real-world attacks to uncover exploitable vulnerabilities and security gaps.",
    span: "lg:col-span-1",
    emphasis: false,
    icon: null,
  },
  {
    title: "Web & API Security Testing",
    description:
      "Validating security of web applications and APIs against common threats such as OWASP Top 10 vulnerabilities.",
    span: "lg:col-span-1",
    emphasis: false,
    icon: null,
  },
  {
    title: "Mobile Application Security Testing",
    description:
      "Ensuring secure data storage, authentication, and communication in mobile apps.",
    span: "lg:col-span-1",
    emphasis: false,
    icon: null,
  },
  {
    title: "Authentication & Authorization Testing",
    description:
      "Verifying secure login mechanisms, access control, and role-based permissions.",
    span: "lg:col-span-1",
    emphasis: false,
    icon: null,
  },
  {
    title: "Security Audits & Compliance Testing",
    description:
      "Assessing applications against industry standards and compliance requirements.",
    span: "lg:col-span-4",
    emphasis: false,
    icon: "accent" as const,
  },
]

const PROCESS = [
  {
    step: "Assess & scope",
    detail:
      "Security scope definition, threat modeling, and risk-based test planning.",
  },
  {
    step: "Test & exploit",
    detail:
      "Vulnerability assessment and penetration testing across web, API, and mobile surfaces.",
  },
  {
    step: "Validate controls",
    detail:
      "Authentication, authorization, data protection, and compliance checks validated.",
  },
  {
    step: "Report & remediate",
    detail:
      "Actionable findings with severity, impact analysis, and remediation guidance.",
  },
]

const OPEN_SOURCE_TOOLS = [
  "OWASP ZAP",
  "Burp Suite",
  "Nikto",
  "Nmap",
  "SQLMap",
]

const CICD_INTEGRATION = [
  "Jenkins / Azure DevOps / GitHub Actions",
  "Continuous security testing in pipelines",
  "Early vulnerability detection in DevSecOps",
]

const TESTING_PRACTICES = [
  "OWASP Top 10 Validation",
  "Static & Dynamic Testing (SAST / DAST)",
  "Shift-Left Security Testing",
  "Continuous Security Monitoring",
]

const STRENGTHS = [
  {
    title: "Security-First Approach",
    body: "Prioritizing proactive identification and mitigation of vulnerabilities.",
  },
  {
    title: "DevSecOps Integration",
    body: "Embedding security testing into development pipelines for continuous protection.",
  },
  {
    title: "Real-World Threat Simulation",
    body: "Testing against real attack scenarios to uncover hidden risks.",
  },
  {
    title: "Actionable Security Insights",
    body: "Clear reporting with risk severity, impact analysis, and remediation guidance.",
  },
  {
    title: "Focus on Trust & Compliance",
    body: "Helping businesses build secure, compliant, and trustworthy applications.",
  },
]

export default function SecurityTestingPage() {
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
                Security
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
                <img
                  src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000&auto=format&fit=crop'
                  alt='Digital security interface on a laptop screen'
                  className='h-[320px] w-full object-cover md:h-[420px]'
                />
              </div>
            </Reveal>
            <div className='lg:col-span-7 lg:pl-4'>
              <Reveal delay={0.08}>
                <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700'>
                  Security testing services
                </p>
                <h2 className='mt-4 max-w-xl text-4xl font-light leading-tight tracking-tight text-neutral-900 sm:text-5xl'>
                  Secure applications,{" "}
                  <span className='font-extrabold text-emerald-800'>
                    resilient by design.
                  </span>
                </h2>
                <div className='mt-6 max-w-lg space-y-4 text-base leading-relaxed text-neutral-600 md:text-lg md:font-light'>
                  <p>
                    We provide comprehensive security testing services to identify
                    vulnerabilities, protect sensitive data, and ensure your
                    applications are secure against evolving threats.
                  </p>
                  <p>
                    Our approach focuses on proactive risk identification and
                    strengthening your application&apos;s security posture across
                    all platforms and technologies.
                  </p>
                  <p>
                    From vulnerability assessment through penetration testing and
                    compliance audits, we help you build applications users can
                    trust.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive security testing solutions — bento grid */}
      <section className='bg-emerald-50/70 py-20 lg:py-28'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal className='mb-14 max-w-2xl'>
            <h2 className='text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl'>
              Comprehensive{" "}
              <span className='font-light text-emerald-800'>
                Security Testing Solutions
              </span>
            </h2>
            <p className='mt-4 text-lg text-neutral-600 md:text-xl'>
              Full-spectrum security validation from vulnerability assessment
              through penetration testing, audits, and compliance.
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
                  <Shield
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
                Security lifecycle
              </p>
              <h2 className='mt-4 text-4xl font-extrabold leading-[1.1] text-neutral-900 sm:text-5xl'>
                Assess through
                <br />
                <span className='font-light text-emerald-800'>remediation.</span>
              </h2>
              <p className='mt-6 max-w-md text-base leading-relaxed text-neutral-600'>
                Every engagement covers the full security testing lifecycle so
                vulnerabilities are found, prioritized, and addressed.
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

      {/* Tools, technologies & CI/CD */}
      <section className='py-20 lg:py-28'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal className='mx-auto mb-14 max-w-3xl text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl'>
              Tools, Technologies
              <br />
              <span className='font-light text-emerald-800'>
                & CI/CD Integration
              </span>
            </h2>
            <p className='mt-4 text-lg text-neutral-600 md:text-xl'>
              Industry-standard security tools integrated into DevSecOps
              pipelines and modern testing practices.
            </p>
          </Reveal>

          <div className='grid gap-12 lg:grid-cols-3 lg:gap-10'>
            <Reveal>
              <p className='mb-6 text-sm font-bold uppercase tracking-wide text-emerald-800'>
                Open-source tools
              </p>
              <RevealStagger className='flex flex-wrap gap-2' stagger={0.04}>
                {OPEN_SOURCE_TOOLS.map((item) => (
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
                CI/CD & DevSecOps integration
              </p>
              <RevealStagger className='flex flex-wrap gap-2' stagger={0.04}>
                {CICD_INTEGRATION.map((item) => (
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
                Security testing practices
              </p>
              <RevealStagger className='flex flex-wrap gap-2' stagger={0.04}>
                {TESTING_PRACTICES.map((item) => (
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

      {/* Statement */}
      <section className='border-y border-emerald-200/60 bg-emerald-50/50 py-24 lg:py-32'>
        <Reveal className='container mx-auto max-w-4xl px-4 text-center md:px-6'>
          <p className='text-2xl font-light leading-snug text-neutral-800 sm:text-3xl md:text-4xl lg:text-5xl'>
            Identify threats early.
          </p>
          <p className='mt-4 text-3xl font-extrabold tracking-tight text-emerald-900 sm:text-4xl md:text-5xl lg:text-6xl'>
            Build applications users trust.
          </p>
          <p className='mx-auto mt-8 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg'>
            Proactive security testing that protects sensitive data and
            strengthens your posture against evolving threats.
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
                Ready to strengthen your security posture?
              </h2>
            </div>
            <div className='md:text-right'>
              <p className='text-base text-neutral-600 md:ml-auto md:max-w-sm md:text-lg'>
                Share your application stack and compliance requirements. We will
                propose a tailored security testing approach for your team.
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
