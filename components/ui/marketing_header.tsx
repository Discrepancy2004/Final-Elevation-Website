"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContainerTextFlip } from "@/components/ui/text_shift"
import {
  Reveal,
  RevealItem,
  RevealStagger,
  EASE_OUT,
} from "@/components/home/scroll-reveal"
import { motion } from "motion/react"

const MarketingHeroCard = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100 p-4'>
      <Card className='w-full max-w-4xl rounded-3xl bg-white shadow-2xl'>
        <CardContent className='space-y-8 p-12 text-center'>
          <RevealStagger className='space-y-6' stagger={0.08}>
            <RevealItem>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700'>
                Quality assurance, end to end
              </p>
            </RevealItem>
            <RevealItem>
              <h2 className='text-4xl font-light leading-[1.15] tracking-tight text-neutral-800 sm:text-5xl md:text-6xl lg:text-7xl'>
                Build, test, and deploy software{" "}
                <span className='font-extrabold text-neutral-950'>
                  <ContainerTextFlip
                    words={["better", "faster", "stronger", "smarter"]}
                  />
                </span>
              </h2>
            </RevealItem>
            <RevealItem>
              <p className='mx-auto max-w-2xl text-lg font-normal leading-relaxed text-neutral-600 md:text-xl md:font-light'>
                Ensure your applications reach users seamlessly with expert
                deployment and rigorous testing services. From automated quality
                checks to smooth rollouts, we help you save time, reduce risks,
                and deliver software that performs flawlessly in the real world.
              </p>
            </RevealItem>
          </RevealStagger>

          <motion.div
            initial={{ opacity: 0, transform: "translateY(8px) scale(0.98)" }}
            whileInView={{ opacity: 1, transform: "translateY(0) scale(1)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.2, ease: EASE_OUT }}
            className='flex flex-col items-center justify-center gap-4 sm:flex-row'
          >
            <Button
              size='lg'
              className='rounded-lg bg-black px-8 py-3 font-medium text-white transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-gray-800 active:scale-[0.97]'
            >
              Explore our services
            </Button>
          </motion.div>

          <div className='space-y-6 pt-8'>
            <Reveal>
              <p className='mx-auto max-w-2xl text-base font-semibold uppercase tracking-wide text-neutral-500'>
                Trusted by leading companies worldwide for comprehensive quality
                assurance and testing solutions
              </p>
            </Reveal>

            <RevealStagger
              className='flex flex-wrap justify-center gap-2 pt-4'
              stagger={0.05}
            >
              {[
                "Web Automation",
                "API Testing",
                "Mobile QA",
                "Accessibility",
                "Security",
                "CI/CD",
              ].map((label) => (
                <RevealItem key={label}>
                  <span className='inline-block rounded-full border border-emerald-200/80 bg-emerald-100 px-4 py-2 text-base font-semibold uppercase tracking-wide text-emerald-800 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-emerald-200/80 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100'>
                    {label}
                  </span>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MarketingHeroCard
