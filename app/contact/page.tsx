"use client"

import ContactForm from "./form"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Check,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { NavbarDemo } from "@/components/ui/navbar"

const FAQ_ITEMS = [
  {
    question: "What testing services do you offer?",
    answer:
      "We provide comprehensive testing services including AI testing solutions, automation testing, manual testing, accessibility testing, mobile application testing, ETL testing, non-functional testing, security testing, and software QA outsourcing.",
  },
  {
    question: "How quickly can you start testing our project?",
    answer:
      "We can typically begin testing within 1-2 weeks of project kickoff, depending on the scope and complexity of your requirements. For urgent projects, we offer expedited onboarding.",
  },
  {
    question: "Do you work with agile and DevOps teams?",
    answer:
      "Yes, we're experienced in agile methodologies, CI/CD pipelines, and can integrate seamlessly with your existing development processes and tools like JIRA, Azure DevOps, and TestRail.",
  },
  {
    question: "What testing tools and technologies do you use?",
    answer:
      "We work with industry-standard tools including Selenium, Postman, TestRail, JIRA, and various automation frameworks. We adapt to your preferred tools and can recommend the best solutions for your needs.",
  },
  {
    question: "Can you help with test automation setup?",
    answer:
      "Absolutely! We provide end-to-end test automation services including framework setup, script development, CI/CD integration, and ongoing maintenance to ensure your automated tests remain effective.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible engagement models including project-based, dedicated team, and hourly rates. Contact us for a free consultation and customized quote based on your specific requirements.",
  },
]

const WHY_CHOOSE = [
  "25+ years of QA and testing expertise",
  "Flexible and scalable engagement models",
  "Strong focus on quality, reliability, and speed",
  "Experience across all platforms and domains",
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <NavbarDemo />

      {/* 1 — Dark hero (navbar contrast) */}
      <section className="bg-gradient-to-b from-neutral-950 via-emerald-950 to-emerald-900 pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Contact Us
            </p>
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Discuss
              <br />
              <span className="font-light text-neutral-300">Your </span>
              <span className="font-extrabold text-emerald-400">
                Testing Needs
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-neutral-300 md:text-xl md:font-light">
              Ready to improve your software quality? Get in touch with our
              experts for a free consultation and customized testing solution.
            </p>
          </div>
        </div>
      </section>

      {/* 2 — White form */}
      <ContactForm />

      {/* 3 — Light grey direct channels */}
      <section className="bg-neutral-100 py-20">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 text-center md:mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Direct channels
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Reach us anytime
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl justify-items-center gap-8 md:grid-cols-2">
            <Card className="w-full max-w-lg overflow-hidden border-emerald-200/80 bg-white shadow-sm">
              <CardHeader className="border-b border-emerald-100 bg-emerald-50/70 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
                  Get in touch
                </p>
                <CardTitle className="mt-2 text-3xl font-bold text-neutral-900">
                  Contact{" "}
                  <span className="font-light text-emerald-800">Information</span>
                </CardTitle>
                <CardDescription className="text-lg font-normal text-neutral-600">
                  Reach out to us directly through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="divide-y divide-emerald-100/80 px-6 pt-2 pb-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    lines: ["hello@elevationsoftwaresolutions.com.au"],
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    lines: ["+61 48 555 0685"],
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    lines: ["Melbourne, Australia"],
                  },
                  {
                    icon: Clock,
                    label: "Business Hours",
                    lines: [
                      "Monday – Friday: 9:00 AM – 5:00 PM AEST",
                      "Saturday – Sunday: Closed",
                    ],
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 py-5 first:pt-6"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <item.icon className="h-4 w-4 text-emerald-700" />
                    </span>
                    <div className="text-left">
                      <p className="text-base font-bold uppercase tracking-wide text-neutral-900">
                        {item.label}
                      </p>
                      {item.lines.map((line) => (
                        <p
                          key={line}
                          className="mt-1.5 text-base font-normal leading-relaxed text-neutral-600"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="w-full max-w-lg overflow-hidden border-emerald-200/80 bg-white shadow-sm">
              <CardHeader className="border-b border-emerald-100 bg-emerald-50/70 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
                  Our difference
                </p>
                <CardTitle className="mt-2 text-3xl font-bold text-neutral-900">
                  Why Choose{" "}
                  <span className="font-light text-emerald-800">
                    Elevation Software Solutions?
                  </span>
                </CardTitle>
                <CardDescription className="text-lg font-normal text-neutral-600">
                  Trusted QA partners focused on quality, speed, and scale.
                </CardDescription>
              </CardHeader>
              <CardContent className="divide-y divide-emerald-100/80 px-6 pt-2 pb-6">
                {WHY_CHOOSE.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 py-5 first:pt-6"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <Check
                        className="h-4 w-4 text-emerald-700"
                        strokeWidth={2.5}
                      />
                    </span>
                    <p className="text-left text-base font-medium leading-relaxed text-neutral-800">
                      {item}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4 — Light green FAQ */}
      <section className="bg-emerald-50/50 py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Common questions
            </p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
              FAQ
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base font-normal text-neutral-600 md:text-lg">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="grid justify-items-center gap-6 md:grid-cols-2">
            {FAQ_ITEMS.map((faq) => (
              <Card
                key={faq.question}
                className="w-full max-w-md border-emerald-100 bg-white shadow-sm"
              >
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-center text-base font-bold leading-snug text-neutral-900 md:text-lg">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm font-normal leading-relaxed text-neutral-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
