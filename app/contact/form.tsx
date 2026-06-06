"use client"

import { useState, type FormEvent } from "react"
import { Loader2 } from "lucide-react"
import { SITE_SERVICE_LABELS } from "@/lib/site-services"

type FormStatus = "idle" | "submitting" | "success" | "error"

const SERVICE_OPTIONS = [...SITE_SERVICE_LABELS, "Other"]

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!formId) {
      setStatus("error")
      return
    }

    setStatus("submitting")
    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="relative flex flex-col justify-center gap-14 bg-emerald-50/70 px-4 py-20 md:flex-row md:gap-20 md:px-6">
      <div className="mt-8 text-center md:mt-12 md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
          Get in touch
        </p>
        <h2 className="mt-4 max-w-[480px] text-3xl font-bold leading-[1.1] tracking-tight text-neutral-900 md:text-[2.75rem] lg:text-5xl">
          Ship Faster.
          <br />
          <span className="font-semibold text-emerald-800">Test Smarter.</span>
          <br />
          <span className="text-2xl font-light text-neutral-700 md:text-4xl lg:text-[2.5rem]">
            Deliver Better.
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-[360px] text-base font-normal leading-relaxed text-neutral-600 md:mx-0 md:text-lg">
          From functional to automation testing, we safeguard your product&apos;s
          quality. Talk to our QA specialists today.
        </p>
      </div>

      <div className="w-full max-w-lg rounded-2xl border border-emerald-100 bg-white p-8 shadow-sm ring-1 ring-emerald-50">
        {status === "success" ? (
          <div className="space-y-3 py-8 text-center">
            <p className="text-2xl font-bold text-neutral-900">
              Thank you for reaching out!
            </p>
            <p className="text-sm font-normal text-neutral-600">
              We&apos;ve received your message and will get back to you within 24
              hours.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-4 cursor-pointer rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <p className="text-lg font-semibold text-neutral-900">
              Send us a message
            </p>

            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-700"
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Eden Johnson"
                disabled={status === "submitting"}
                className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition focus:border-emerald-600 focus:bg-white focus:outline-none disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-700"
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="Eden@example.com"
                disabled={status === "submitting"}
                className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition focus:border-emerald-600 focus:bg-white focus:outline-none disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="contact-company"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-700"
              >
                Company Name
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                required
                placeholder="Your company"
                disabled={status === "submitting"}
                className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition focus:border-emerald-600 focus:bg-white focus:outline-none disabled:opacity-60"
              />
            </div>

            <div>
              <label
                htmlFor="contact-service"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-700"
              >
                Service Required
              </label>
              <select
                id="contact-service"
                name="service"
                required
                defaultValue=""
                disabled={status === "submitting"}
                className="w-full rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-3 text-base text-neutral-900 transition focus:border-emerald-600 focus:bg-white focus:outline-none disabled:opacity-60"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICE_OPTIONS.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-semibold uppercase tracking-wide text-neutral-700"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Write your message here..."
                rows={4}
                required
                disabled={status === "submitting"}
                className="w-full resize-none rounded-lg border border-neutral-300 bg-neutral-50 px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition focus:border-emerald-600 focus:bg-white focus:outline-none disabled:opacity-60"
              />
            </div>

            {status === "error" && (
              <p className="text-sm font-medium text-red-600">
                {!formId
                  ? "Form is not configured. Set NEXT_PUBLIC_FORMSPREE_FORM_ID in your environment."
                  : "Something went wrong. Please try again or email us directly."}
              </p>
            )}

            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p className="max-w-xs text-xs font-normal leading-relaxed text-neutral-600">
                By submitting, you agree to our{" "}
                <span className="font-semibold text-neutral-900">Terms</span> and{" "}
                <span className="font-semibold text-neutral-900">
                  Privacy Policy
                </span>
                .
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="flex shrink-0 cursor-pointer items-center gap-2 rounded-full bg-emerald-700 px-8 py-3.5 text-sm font-bold tracking-wide text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-60 md:px-14"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
