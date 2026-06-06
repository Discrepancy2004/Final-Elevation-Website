"use client"

import { Reveal, RevealItem, RevealStagger } from "@/components/home/scroll-reveal"
import { TOOL_CARTOON_ICONS } from "@/components/home/tool-cartoon-icons"
import { cn } from "@/lib/utils"

type AccentKey = "cyan" | "purple" | "amber" | "coral"

const ACCENT = {
  cyan: {
    color: "#00BFFF",
    iconBg: "bg-[#00BFFF]/15",
    hover:
      "hover:border-[#00BFFF] hover:bg-[#00BFFF]/30 hover:shadow-[0_0_24px_rgba(0,191,255,0.35),0_8px_32px_rgba(0,191,255,0.15)]",
  },
  purple: {
    color: "#7B3FE4",
    iconBg: "bg-[#7B3FE4]/15",
    hover:
      "hover:border-[#7B3FE4] hover:bg-[#7B3FE4]/30 hover:shadow-[0_0_24px_rgba(123,63,228,0.35),0_8px_32px_rgba(123,63,228,0.15)]",
  },
  amber: {
    color: "#F5A623",
    iconBg: "bg-[#F5A623]/15",
    hover:
      "hover:border-[#F5A623] hover:bg-[#F5A623]/30 hover:shadow-[0_0_24px_rgba(245,166,35,0.35),0_8px_32px_rgba(245,166,35,0.15)]",
  },
  coral: {
    color: "#E8524A",
    iconBg: "bg-[#E8524A]/15",
    hover:
      "hover:border-[#E8524A] hover:bg-[#E8524A]/30 hover:shadow-[0_0_24px_rgba(232,82,74,0.35),0_8px_32px_rgba(232,82,74,0.15)]",
  },
} as const

const ACCENT_CYCLE: AccentKey[] = ["cyan", "purple", "amber", "coral"]

const TOOLS = [
  {
    name: "Selenium",
    description:
      "Cross-browser UI automation for regression and functional test suites. Integrates with Grid, WebDriver, and your existing CI pipelines.",
  },
  {
    name: "Cypress",
    description:
      "Fast, reliable end-to-end testing in the browser with time-travel debugging. Ideal for modern JavaScript frameworks and component-driven apps.",
  },
  {
    name: "Appium",
    description:
      "Native and hybrid mobile testing on iOS and Android from a single API. Supports real devices, emulators, and parallel execution.",
  },
  {
    name: "JMeter",
    description:
      "Load, stress, and volume testing to find bottlenecks before release. Models concurrent users and measures response times under pressure.",
  },
  {
    name: "OWASP ZAP",
    description:
      "Automated vulnerability scanning and penetration-style security checks. Surfaces common web app risks during development and staging.",
  },
  {
    name: "TestRail",
    description:
      "Centralized test case design, execution tracking, and reporting. Links coverage to requirements with audit-ready history.",
  },
  {
    name: "Postman",
    description:
      "REST and GraphQL API validation, collections, and automated contract checks. Runs in CI or as part of manual exploratory flows.",
  },
  {
    name: "Jenkins",
    description:
      "Build pipelines that trigger automated test gates on every commit. Publishes results and blocks broken builds from reaching production.",
  },
] as const

export function ToolsFrameworksSection() {
  return (
    <section className="bg-neutral-50 py-24 transition-colors duration-300 dark:bg-[#111111] md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mb-14 text-center md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-500">
            Technology Stack
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-emerald-50 sm:text-5xl md:text-6xl">
            Cutting-Edge Testing{" "}
            <span className="font-light text-emerald-800 dark:text-emerald-400">
              Tools & Frameworks
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg font-light leading-relaxed text-neutral-600 dark:text-emerald-100/85 md:text-xl">
            We use the latest tools and technologies to deliver comprehensive
            testing solutions.
          </p>
        </Reveal>

        <RevealStagger
          className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"
          stagger={0.05}
        >
          {TOOLS.map((item, index) => {
            const accentKey = ACCENT_CYCLE[index % ACCENT_CYCLE.length]
            const accent = ACCENT[accentKey]
            const CartoonIcon = TOOL_CARTOON_ICONS[item.name]

            return (
              <RevealItem key={item.name} className="h-full">
                <div
                  className={cn(
                    "group flex h-full min-h-[320px] flex-col items-center rounded-xl border-2 border-neutral-200 bg-white px-8 py-10 dark:border-[#1A1A1A] dark:bg-[#1A1A1A] md:min-h-[380px] md:px-9 md:py-12",
                    "transition-all duration-[250ms] ease-out",
                    "hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
                    accent.hover
                  )}
                >
                  <div
                    className={cn(
                      "mb-8 flex h-28 w-28 shrink-0 items-center justify-center rounded-xl border-2 border-transparent md:h-32 md:w-32",
                      "transition-all duration-[250ms] ease-out group-hover:border-neutral-900 dark:group-hover:border-white",
                      accent.iconBg
                    )}
                  >
                    <CartoonIcon
                      className="h-[4.5rem] w-[4.5rem] md:h-20 md:w-20"
                      color={accent.color}
                    />
                  </div>
                  <h3 className="w-full text-center text-[1.75rem] font-extrabold leading-snug tracking-tight text-neutral-900 dark:text-white md:text-3xl">
                    {item.name}
                  </h3>
                  <p className="mt-5 w-full flex-1 text-center text-base font-normal leading-relaxed text-neutral-600 dark:text-emerald-100/85 md:text-lg">
                    {item.description}
                  </p>
                </div>
              </RevealItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
