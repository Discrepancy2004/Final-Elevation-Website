"use client"
import React from "react"
import { cn } from "@/lib/utils"
import createGlobe from "cobe"
import { useEffect, useRef, useState } from "react"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Shield,
  Zap,
  Users,
  ArrowRight,
  Star,
  Code,
  Smartphone,
  Gauge,
  Award,
  Globe,
  Accessibility,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NavbarDemo } from "@/components/ui/navbar"
import { Footer } from "@/components/footer"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import MarketingHeroCard from "@/components/ui/marketing_header"
import { StickyScroll } from "@/components/ui/process"
import { Compare } from "@/components/ui/compare"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { FocusCards } from "@/components/ui/focus-cards"
import {
  Reveal,
  RevealItem,
  RevealStagger,
  EASE_OUT,
} from "@/components/home/scroll-reveal"

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Test Planning & Strategy",
      description:
        "Comprehensive analysis of requirements and strategic test planning to ensure complete coverage and risk mitigation.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Test Execution & Analysis",
      description:
        "Systematic execution of test cases with detailed analysis of results, ensuring thorough validation of functionality.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Defect Tracking & Reporting",
      description:
        "Comprehensive defect documentation and management with clear reporting to facilitate swift resolution and quality improvement.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Deployment & Quality Assurance",
      description:
        "Final quality verification and seamless deployment with continuous monitoring to ensure production-ready software.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ]
  return (
    <div className='relative z-20 py-10 lg:py-40 max-w-7xl mx-auto'>
      <div className='px-8'>
        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700 text-center'>
          Our process
        </p>
        <h2 className='mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white text-center sm:text-5xl lg:text-6xl xl:text-7xl'>
          How We <span className='font-light text-emerald-800'>Work</span>
        </h2>

        <p className='text-lg md:text-xl max-w-2xl my-5 mx-auto text-neutral-600 text-center font-normal leading-relaxed dark:text-neutral-300'>
          From comprehensive test planning to seamless deployment, our QA process ensures
          quality at every stage of software development.
        </p>
      </div>

      <div className='relative'>
        <div className='mt-12 grid grid-cols-1 lg:grid-cols-6 xl:rounded-md xl:border dark:border-neutral-800'>
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className='h-full w-full'>{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  )
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <h3 className='max-w-5xl mx-auto mb-3 text-center text-xl font-bold leading-snug tracking-tight text-emerald-800 dark:text-emerald-400 md:text-2xl'>
      {children}
    </h3>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-center mx-auto",
        "text-neutral-600 font-normal dark:text-neutral-400",
        "max-w-md mx-auto leading-relaxed mb-4"
      )}
    >
      {children}
    </p>
  )
}

export const SkeletonOne = () => {
  return (
    <div className='relative flex py-8 px-2 gap-10 h-full'>
      <div className='w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full'>
        <div className='flex flex-1 w-full h-full flex-col space-y-2  '>
          <img
            src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop'
            alt='Test planning and strategy'
            width={800}
            height={800}
            className='h-full w-full aspect-square object-cover object-left-top rounded-sm'
          />
        </div>
      </div>

      <div className='absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none' />
      <div className='absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none' />
    </div>
  )
}

export const SkeletonThree = () => {
  return (
    <div className='relative flex gap-10  h-full group/image'>
      <div className='w-full  mx-auto bg-transparent dark:bg-transparent group h-full'>
        <div className='flex flex-1 w-full h-full flex-col space-y-2  relative'>
          <img
            src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop'
            alt='Defect tracking and reporting'
            width={800}
            height={800}
            className='h-full w-full aspect-square object-cover object-center rounded-sm'
          />
        </div>
      </div>
    </div>
  )
}

export const SkeletonTwo = () => {
  const images = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
  ]

  // Generate rotations only on client to avoid hydration mismatch
  const [firstRowRotations, setFirstRowRotations] = useState<number[]>([])
  const [secondRowRotations, setSecondRowRotations] = useState<number[]>([])

  useEffect(() => {
    // Generate random rotations only on client side
    setFirstRowRotations(images.map(() => Math.random() * 20 - 10))
    setSecondRowRotations(images.map(() => Math.random() * 20 - 10))
  }, [images.length])

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  }
  return (
    <div className='relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden'>
      {/* TODO */}
      <div className='flex flex-row -ml-20'>
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: firstRowRotations[idx] || 0,
            }}
            whileHover='whileHover'
            whileTap='whileTap'
            className='rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden'
          >
            <img
              src={image}
              alt='QA testing process'
              width='500'
              height='500'
              className='rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0'
            />
          </motion.div>
        ))}
      </div>
      <div className='flex flex-row'>
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: secondRowRotations[idx] || 0,
            }}
            variants={imageVariants}
            whileHover='whileHover'
            whileTap='whileTap'
            className='rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden'
          >
            <img
              src={image}
              alt='QA testing process'
              width='500'
              height='500'
              className='rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0'
            />
          </motion.div>
        ))}
      </div>

      <div className='absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none' />
      <div className='absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none' />
    </div>
  )
}

export const SkeletonFour = () => {
  return (
    <div className='h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10'>
      <CobeGlobe className='absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72' />
    </div>
  )
}

export const CobeGlobe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let phi = 0

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi
        phi += 0.01
      },
    })

    return () => {
      globe.destroy()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  )
}

const cards = [
  {
    title: "Forest Adventure",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Valley of life",
    src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sala behta hi jayega",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Camping is for pros",
    src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The road not taken",
    src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The First Rule",
    src: "https://assets.aceternity.com/the-first-rule.png",
  },
]

export const projects = [
  {
    title: "Automation Testing",
    description:
      "Streamline your testing process with cutting-edge automation tools and frameworks.",
    link: "/automation_testing",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "AI Testing Solutions",
    description:
      "AI-generated test plans, scenarios, and cases that accelerate delivery and strengthen coverage.",
    link: "/ai_testing",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Mobile Application",
    description:
      "Comprehensive testing for iOS and Android applications across all devices and platforms.",
    link: "/mobile_testing",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "ETL Testing",
    description:
      "Validate data transformation processes ensuring integrity and accuracy throughout pipelines.",
    link: "/etl_testing",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Software QA Outsourcing",
    description:
      "Scale your QA capabilities with dedicated testing teams that integrate seamlessly.",
    link: "/qa_outsourcing",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Manual Testing",
    description:
      "Expert manual testing services to catch issues automated tests might miss.",
    link: "/manual_testing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Non-Functional Testing",
    description:
      "Comprehensive testing of performance, scalability, reliability, and usability requirements.",
    link: "/non_functional_testing",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Accessibility Testing",
    description:
      "Ensure your applications are usable by everyone with WCAG-aligned accessibility validation.",
    link: "/accessibility_testing",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95f43633508?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Security Testing",
    description:
      "Protect applications from vulnerabilities with penetration testing and security assessments.",
    link: "/security_testing",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop",
  },
]

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className='flex h-full w-full items-center justify-center text-white'>
        <img
          src='/linear.webp'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white'>
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        Running out of content
      </div>
    ),
  },
]



export default function HomePage() {
  return (
    <div className='min-h-screen bg-background'>
      <NavbarDemo />

      {/* Hero Section */}
      <div className='flex flex-col overflow-hidden'>
        <ContainerScroll
          titleComponent={
            <motion.div
              initial={{ opacity: 0, transform: "translateY(16px) scale(0.98)" }}
              animate={{ opacity: 1, transform: "translateY(0) scale(1)" }}
              transition={{ duration: 0.55, ease: EASE_OUT }}
              className='space-y-4 text-left md:text-center'
            >
              <p className='text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700'>
                Elevation Software Solutions
              </p>
              <h1 className='text-4xl font-light leading-[1.1] tracking-tight text-neutral-800 dark:text-neutral-200 sm:text-5xl md:text-6xl'>
                Eliminating glitches,
                <br />
                <span className='text-4xl font-extrabold text-neutral-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl'>
                  we{" "}
                  <span className='text-emerald-800 dark:text-emerald-400'>
                    Elevate Quality
                  </span>
                </span>
              </h1>
            </motion.div>
          }
        >
          <motion.div
            initial={{ clipPath: "inset(0 0 12% 0 round 1rem)" }}
            animate={{ clipPath: "inset(0 0 0 0 round 1rem)" }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
            className='h-full w-full overflow-hidden rounded-2xl'
          >
            <img
              src={"/scroll.jpg"}
              alt='hero'
              height={720}
              width={1400}
              className='mx-auto h-full w-full rounded-2xl object-cover object-left-top'
              draggable={false}
            />
          </motion.div>
        </ContainerScroll>
      </div>
      <MarketingHeroCard />

      <FeaturesSectionDemo />

      {/* <FadeContent
        blur={true}
        duration={1000}
        easing='ease-out'
        initialOpacity={0.1}
      >
        <section className='relative py-20 lg:py-32 overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5' />
          <div className='container relative px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <Badge variant='outline' className='w-fit'>
                    Trusted by 500+ Companies
                  </Badge>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                    Quality Assurance That{" "}
                    <span className='text-primary'>Delivers Excellence</span>
                  </h1>
                  <p className='max-w-[600px] text-muted-foreground md:text-xl'>
                    Comprehensive software testing and QA services that ensure
                    your applications perform flawlessly. From manual testing to
                    automated solutions, we've got you covered.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Button size='lg' asChild>
                    <Link href='/contact'>
                      Get Started Today
                      <ArrowRight className='ml-2 h-4 w-4' />
                    </Link>
                  </Button>
                  <Button variant='outline' size='lg' asChild>
                    <Link href='/services'>View Our Services</Link>
                  </Button>
                </div>
                <div className='flex items-center gap-4 pt-4'>
                  <div className='flex items-center gap-1'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className='h-4 w-4 fill-yellow-400 text-yellow-400'
                      />
                    ))}
                  </div>
                  <span className='text-sm text-muted-foreground'>
                    4.9/5 from 200+ reviews
                  </span>
                </div>
              </div>
              <div className='p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4'>
                <Compare
                  firstImage='https://assets.aceternity.com/code-problem.png'
                  secondImage='https://assets.aceternity.com/code-solution.png'
                  firstImageClassName='object-cover object-left-top'
                  secondImageClassname='object-cover object-left-top'
                  className='h-[250px] w-[200px] md:h-[500px] md:w-[500px]'
                  slideMode='hover'
                />
              </div>
            </div>
          </div>
        </section>
      </FadeContent> */}

      {/* Stats Section */}
      <section className='border-y border-neutral-200/80 bg-neutral-50 py-16 dark:bg-neutral-900/40'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal>
            <p className='mb-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500'>
              By the numbers
            </p>
          </Reveal>
          <RevealStagger className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4' stagger={0.08}>
            {[
              { value: "3x", label: "Faster Time-to-Market" },
              { value: "99.9%", label: "Bug Detection Rate" },
              { value: "50+", label: "Expert QA Engineers" },
              { value: "24/7", label: "Support Available" },
            ].map((stat) => (
              <RevealItem key={stat.label}>
                <div className='border-t border-neutral-200 pt-6 text-center dark:border-neutral-700'>
                  <div className='font-mono text-5xl font-bold tracking-tight text-emerald-800 dark:text-emerald-400 md:text-6xl'>
                    {stat.value}
                  </div>
                  <div className='mt-2 text-base font-semibold uppercase tracking-wide text-neutral-900 dark:text-white'>
                    {stat.label}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Services Section */}

      <div className='container mx-auto max-w-7xl px-4 pb-10 pt-20 md:px-6'>
        <Reveal className='mb-12 text-center'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700'>
            Our Services
          </p>
          <h2 className='mt-3 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl'>
            Comprehensive
            <br />
            <span className='font-light text-emerald-800 dark:text-emerald-400'>
              Testing Solutions
            </span>
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg font-normal leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-xl md:font-light'>
            From manual testing to automated CI/CD integration, we provide
            end-to-end quality assurance services.
          </p>
        </Reveal>

        <div className='mx-auto max-w-5xl px-4 md:px-8'>
          <HoverEffect items={projects} />
        </div>
      </div>

      {/* Services Preview 
      <section className='min-h-screen flex items-center justify-center py-20'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className=' mb-12 text-center'>
            <Badge variant='outline' className='mb-4'>
              Our Services
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Comprehensive Testing Solutions
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto'>
              From manual testing to automated CI/CD integration, we provide
              end-to-end quality assurance services.
            </p>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center'>
            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <Shield className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Manual Testing</CardTitle>
                <CardDescription>
                  Comprehensive manual testing by experienced QA professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Functional Testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Usability Testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Exploratory Testing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <Zap className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Automated Testing</CardTitle>
                <CardDescription>
                  Scalable automated testing solutions for faster delivery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    API Testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    UI Automation
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    CI/CD Integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <Users className='h-10 w-10 text-primary mb-2' />
                <CardTitle>Accessibility Testing</CardTitle>
                <CardDescription>
                  Ensure your applications are usable by everyone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2 text-sm'>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    WCAG Compliance Testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Screen Reader Testing
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCircle className='h-4 w-4 text-primary' />
                    Keyboard Navigation Testing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className='text-center mt-8'>
            <Button asChild>
              <Link href='/services'>
                View All Services
                <ArrowRight className='ml-2 h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      */}

      {/* Industry Solutions 
      <section className='min-h-screen flex items-center justify-center py-20'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Industry Solutions
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Specialized Testing for Every Industry
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto'>
              We understand that different industries have unique requirements
              and compliance needs.
            </p>
          </div>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>🏥</span>
                </div>
                <CardTitle>Healthcare</CardTitle>
                <CardDescription>
                  HIPAA compliant testing for medical software
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-1 text-sm text-muted-foreground'>
                  <li>• FDA validation testing</li>
                  <li>• Patient data security</li>
                  <li>• Medical device integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>💰</span>
                </div>
                <CardTitle>FinTech</CardTitle>
                <CardDescription>
                  Secure testing for financial applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-1 text-sm text-muted-foreground'>
                  <li>• PCI DSS compliance</li>
                  <li>• Transaction security</li>
                  <li>• Regulatory compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>🛒</span>
                </div>
                <CardTitle>E-commerce</CardTitle>
                <CardDescription>
                  Comprehensive testing for online stores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-1 text-sm text-muted-foreground'>
                  <li>• Payment gateway testing</li>
                  <li>• Load testing for sales</li>
                  <li>• Mobile commerce</li>
                </ul>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4'>
                  <span className='text-2xl'>🏢</span>
                </div>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>
                  Scalable testing for large organizations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className='space-y-1 text-sm text-muted-foreground'>
                  <li>• Legacy system integration</li>
                  <li>• Enterprise security</li>
                  <li>• Multi-platform testing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      {/* Technology Stack */}
      <section className='min-h-screen flex items-center justify-center py-20 bg-muted/50'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <Reveal className='mb-12 text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500'>
              Technology Stack
            </p>
            <h2 className='mt-3 text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl'>
              Tools & <span className='font-light text-emerald-800 dark:text-emerald-400'>Frameworks</span>
            </h2>
            <p className='mx-auto mt-4 max-w-3xl text-lg font-normal text-neutral-600 dark:text-neutral-400 md:text-xl'>
              We use the latest tools and technologies to deliver comprehensive
              testing solutions.
            </p>
          </Reveal>
          <RevealStagger className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' stagger={0.05}>
            {[
              { title: "Web Automation", description: "Cross-browser UI & regression suites", icon: Globe },
              { title: "API Testing", description: "REST, GraphQL & contract validation", icon: Code },
              { title: "Mobile Testing", description: "iOS, Android & responsive validation", icon: Smartphone },
              { title: "Accessibility", description: "WCAG audits & inclusive UX validation", icon: Accessibility },
              { title: "Security", description: "Vulnerability scans & penetration testing", icon: Shield },
              { title: "Test Management", description: "Case design, traceability & reporting", icon: Award },
              { title: "CI/CD Pipelines", description: "Automated gates in your release flow", icon: Zap },
              { title: "Manual QA", description: "Exploratory, usability & acceptance testing", icon: Users },
            ].map((item, idx) => (
              <RevealItem key={item.title}>
              <Card className='text-center'>
                <CardContent className='px-6 pt-10 pb-8'>
                  <div className='mx-auto mb-5 flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-50 dark:bg-emerald-950/40'>
                    <item.icon
                      className='h-7 w-7 shrink-0 text-emerald-800 dark:text-emerald-400'
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3
                    className={cn(
                      "mb-2 text-neutral-900 dark:text-white",
                      idx % 2 === 0
                        ? "text-lg font-extrabold tracking-tight md:text-xl"
                        : "text-base font-semibold uppercase tracking-wide md:text-lg"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className='text-sm font-medium leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base'>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Case Studies Preview 
      <section className='min-h-screen flex items-center justify-center py-20'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <Badge variant='outline' className='mb-4'>
              Success Stories
            </Badge>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Real Results for Real Clients
            </h2>
            <p className='mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto'>
              See how we've helped companies improve their software quality and
              reduce time to market.
            </p>
          </div>
          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <Badge variant='secondary' className='w-fit mb-2'>
                  E-commerce
                </Badge>
                <CardTitle>60% Faster Deployments</CardTitle>
                <CardDescription>
                  Major retailer reduces testing time with automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-primary'>60%</div>
                      <div className='text-xs text-muted-foreground'>
                        Faster Testing
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        99.9%
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Uptime
                      </div>
                    </div>
                  </div>
                  <p className='text-xs font-medium uppercase tracking-wide text-neutral-500'>
                    Implemented comprehensive automated testing suite covering
                    500+ test cases.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <Badge variant='secondary' className='w-fit mb-2'>
                  FinTech
                </Badge>
                <CardTitle>Zero Security Incidents</CardTitle>
                <CardDescription>
                  Banking app passes rigorous security testing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-primary'>0</div>
                      <div className='text-xs text-muted-foreground'>
                        Security Issues
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        100%
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        Compliance
                      </div>
                    </div>
                  </div>
                  <p className='text-xs font-medium uppercase tracking-wide text-neutral-500'>
                    Comprehensive security testing including penetration testing
                    and compliance validation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className='group hover:shadow-lg transition-shadow'>
              <CardHeader>
                <Badge variant='secondary' className='w-fit mb-2'>
                  Healthcare
                </Badge>
                <CardTitle>FDA Approval Success</CardTitle>
                <CardDescription>
                  Medical device software meets all regulatory requirements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4 text-center'>
                    <div>
                      <div className='text-2xl font-bold text-primary'>
                        100%
                      </div>
                      <div className='text-xs text-muted-foreground'>
                        FDA Compliance
                      </div>
                    </div>
                    <div>
                      <div className='text-2xl font-bold text-primary'>6mo</div>
                      <div className='text-xs text-muted-foreground'>
                        Faster Approval
                      </div>
                    </div>
                  </div>
                  <p className='text-xs font-medium uppercase tracking-wide text-neutral-500'>
                    Rigorous validation testing ensuring patient safety and
                    regulatory compliance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className='flex items-center justify-center bg-emerald-50/60 py-16 md:py-24 dark:bg-emerald-950/20'>
        <div className='container mx-auto max-w-7xl px-4 md:px-6'>
          <Reveal className='mx-auto max-w-3xl space-y-6 text-center'>
            <p className='text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800'>
              Get started
            </p>
            <h2 className='text-4xl font-light leading-tight tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl'>
              Ready to improve your{" "}
              <span className='font-extrabold text-emerald-900 dark:text-emerald-400'>
                software quality?
              </span>
            </h2>
            <p className='mx-auto max-w-xl text-lg font-normal leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-xl'>
              Get started with a free consultation and see how our QA experts
              can help your project succeed.
            </p>
            <div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
              <Button
                size='lg'
                asChild
                className='transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]'
              >
                <Link href='/contact'>
                  Start Free Consultation
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button
                variant='outline'
                size='lg'
                asChild
                className='transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]'
              >
                <Link href='/about'>Learn More About Us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
