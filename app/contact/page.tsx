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
  Users,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { NavbarDemo } from "@/components/ui/navbar"

const FAQ_ITEMS = [
  {
    question: "What testing services do you offer?",
    answer:
      "We provide comprehensive testing services including manual testing, automated testing, accessibility testing, security testing, mobile and web testing, ETL testing, AI testing solutions, and QA outsourcing solutions.",
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

const CONNECT_CHANNELS = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our QA experts",
    primary: "+1 (555) 123-4567",
    secondary: "Mon-Fri: 9AM-6PM PST",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Detailed inquiries and documentation",
    primary: "info@qualitypro.com",
    secondary: "24-hour response time",
  },
  {
    icon: Users,
    title: "Video Consultation",
    description: "Face-to-face project discussions",
    primary: "Schedule Online",
    secondary: "30-60 minute sessions",
  },
  {
    icon: Clock,
    title: "Emergency Support",
    description: "Critical issue resolution",
    primary: "24/7 Hotline",
    secondary: "Enterprise clients only",
  },
]

const WHY_CHOOSE = [
  "24-hour response time guarantee",
  "Free initial consultation",
  "Flexible engagement models",
  "Experienced QA professionals",
  "Proven track record",
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
            <Card className="w-full max-w-lg border-neutral-200 bg-white shadow-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-neutral-900">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-base font-normal text-neutral-600">
                  Reach out to us directly through any of these channels.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    lines: ["info@qualitypro.com", "sales@qualitypro.com"],
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    lines: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    lines: [
                      "123 Tech Street, Suite 400",
                      "San Francisco, CA 94105",
                      "United States",
                    ],
                  },
                  {
                    icon: Clock,
                    label: "Business Hours",
                    lines: [
                      "Monday - Friday: 9:00 AM - 6:00 PM PST",
                      "Saturday: 10:00 AM - 2:00 PM PST",
                      "Sunday: Closed",
                    ],
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start justify-center gap-4"
                  >
                    <item.icon className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                    <div className="text-center">
                      <p className="text-sm font-bold uppercase tracking-wide text-neutral-900">
                        {item.label}
                      </p>
                      {item.lines.map((line) => (
                        <p
                          key={line}
                          className="text-sm font-normal text-neutral-600"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="w-full max-w-lg border-neutral-200 bg-white shadow-sm">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-neutral-900">
                  Why Choose Elevation Software Solutions?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {WHY_CHOOSE.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-center gap-3"
                  >
                    <span className="font-mono text-xs font-bold text-emerald-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-center text-base font-medium text-neutral-800">
                      {item}
                    </span>
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

      {/* 5 — White connect (contrast before dark footer) */}
      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Multiple Ways to{" "}
              <span className="font-light text-emerald-800">Connect</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-medium uppercase tracking-wide text-neutral-500">
              Pick the channel that fits your timeline
            </p>
          </div>

          <div className="grid justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CONNECT_CHANNELS.map((channel) => (
              <Card
                key={channel.title}
                className="group w-full max-w-xs border-neutral-200 bg-white text-center shadow-sm transition-shadow hover:border-emerald-200 hover:shadow-md"
              >
                <CardContent className="pt-8 pb-6">
                  <channel.icon className="mx-auto mb-5 h-11 w-11 text-emerald-700 transition-transform group-hover:scale-110" />
                  <h3 className="mb-2 text-lg font-bold text-neutral-900">
                    {channel.title}
                  </h3>
                  <p className="mb-5 text-xs font-normal leading-relaxed text-neutral-600">
                    {channel.description}
                  </p>
                  <div className="space-y-1.5">
                    <p className="text-base font-semibold text-neutral-900">
                      {channel.primary}
                    </p>
                    <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                      {channel.secondary}
                    </p>
                  </div>
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
