import type { Metadata } from "next"

export const SITE_NAME = "Elevation Software Solutions"
export const SITE_LEGAL_NAME = "Elevation Software Solutions Pty Ltd"
export const SITE_TAGLINE =
  "Professional software testing and quality assurance services for modern applications."
export const SITE_EMAIL = "hello@elevationsoftwaresolutions.com.au"
export const SITE_PHONE = "+61 48 555 0685"
export const SITE_LOCATION = "Melbourne, Australia"
export const SITE_COUNTRY = "AU"

const DEFAULT_SITE_URL = "https://www.elevationsoftwaresolutions.com.au"

export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL
  return url.replace(/\/$/, "")
}

export const DEFAULT_KEYWORDS = [
  "software testing Melbourne",
  "QA services Australia",
  "quality assurance",
  "automation testing",
  "manual testing",
  "AI testing",
  "accessibility testing",
  "mobile app testing",
  "ETL testing",
  "security testing",
  "software QA outsourcing",
  "non-functional testing",
  "test automation",
  "CI/CD testing",
  "Elevation Software Solutions",
] as const

export const SITE_ROUTES = [
  { path: "/", changeFrequency: "weekly" as const, priority: 1 },
  { path: "/services", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/ai_testing", changeFrequency: "monthly" as const, priority: 0.85 },
  {
    path: "/automation_testing",
    changeFrequency: "monthly" as const,
    priority: 0.85,
  },
  { path: "/manual_testing", changeFrequency: "monthly" as const, priority: 0.85 },
  {
    path: "/accessibility_testing",
    changeFrequency: "monthly" as const,
    priority: 0.85,
  },
  { path: "/mobile_testing", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/etl_testing", changeFrequency: "monthly" as const, priority: 0.85 },
  {
    path: "/non_functional_testing",
    changeFrequency: "monthly" as const,
    priority: 0.85,
  },
  {
    path: "/security_testing",
    changeFrequency: "monthly" as const,
    priority: 0.85,
  },
  { path: "/qa_outsourcing", changeFrequency: "monthly" as const, priority: 0.85 },
]

type PageSeo = {
  title: string
  description: string
  keywords?: string[]
}

export const PAGE_SEO: Record<string, PageSeo> = {
  "/": {
    title: "QA & Software Testing Services Melbourne",
    description:
      "Elevation Software Solutions delivers end-to-end QA and software testing in Melbourne — automation, manual, AI, mobile, accessibility, ETL, security, and QA outsourcing for production-ready releases.",
    keywords: [
      "software testing company Melbourne",
      "QA testing services Australia",
      "hire QA engineers Melbourne",
    ],
  },
  "/services": {
    title: "Software Testing Services",
    description:
      "Explore comprehensive QA services: automation, manual, AI-assisted testing, mobile, accessibility, ETL, non-functional, security testing, and dedicated QA outsourcing.",
  },
  "/about": {
    title: "About Us",
    description:
      "Learn how Elevation Software Solutions helps teams ship reliable software with expert QA engineers, proven methodologies, and quality-first delivery across Australia.",
  },
  "/contact": {
    title: "Contact",
    description:
      "Contact Elevation Software Solutions in Melbourne for a free QA consultation. Speak with our testing experts about automation, manual QA, and end-to-end quality assurance.",
  },
  "/ai_testing": {
    title: "AI Testing Solutions",
    description:
      "AI-assisted test planning, scenario design, and coverage analysis to accelerate QA delivery without sacrificing rigour. AI testing solutions by Elevation Software Solutions.",
  },
  "/automation_testing": {
    title: "Automation Testing",
    description:
      "Scalable test automation for UI, API, and CI/CD pipelines. Build maintainable regression suites with industry-leading frameworks and expert QA engineers.",
  },
  "/manual_testing": {
    title: "Manual Testing",
    description:
      "Expert manual QA including functional, exploratory, usability, and regression testing to catch issues automated suites miss.",
  },
  "/accessibility_testing": {
    title: "Accessibility Testing",
    description:
      "WCAG-aligned accessibility testing for inclusive digital experiences — screen readers, keyboard navigation, contrast, and compliance reporting.",
  },
  "/mobile_testing": {
    title: "Mobile App Testing",
    description:
      "iOS and Android mobile application testing across devices, OS versions, networks, and real-world usage conditions.",
  },
  "/etl_testing": {
    title: "ETL Testing",
    description:
      "Validate data pipelines with rigorous ETL testing — source-to-target mappings, reconciliation, transformation logic, and data quality checks.",
  },
  "/non_functional_testing": {
    title: "Non-Functional Testing",
    description:
      "Performance, load, scalability, stress, and reliability testing to validate systems before production incidents occur.",
  },
  "/security_testing": {
    title: "Security Testing",
    description:
      "Vulnerability assessments and penetration-style security testing to identify authentication, injection, and compliance risks before release.",
  },
  "/qa_outsourcing": {
    title: "Software QA Outsourcing",
    description:
      "Extend your QA capacity with dedicated testing teams that integrate into your sprints, tools, and release workflows.",
  },
}

export function buildPageMetadata(path: string): Metadata {
  const siteUrl = getSiteUrl()
  const page = PAGE_SEO[path]

  if (!page) {
    return {
      title: SITE_NAME,
      description: SITE_TAGLINE,
    }
  }

  const canonical = `${siteUrl}${path === "/" ? "" : path}`
  const keywords = [...DEFAULT_KEYWORDS, ...(page.keywords ?? [])]

  return {
    title: page.title,
    description: page.description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "website",
      locale: "en_AU",
      url: canonical,
      siteName: SITE_NAME,
      title: `${page.title} | ${SITE_NAME}`,
      description: page.description,
      countryName: SITE_COUNTRY,
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${SITE_NAME}`,
      description: page.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export function buildRootMetadata(): Metadata {
  const siteUrl = getSiteUrl()
  const home = PAGE_SEO["/"]

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${home.title} | ${SITE_NAME}`,
      template: `%s | ${SITE_NAME}`,
    },
    description: home.description,
    keywords: [...DEFAULT_KEYWORDS, ...(home.keywords ?? [])],
    applicationName: SITE_NAME,
    authors: [{ name: SITE_NAME, url: siteUrl }],
    creator: SITE_NAME,
    publisher: SITE_LEGAL_NAME,
    category: "Software Quality Assurance",
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_AU",
      url: siteUrl,
      siteName: SITE_NAME,
      title: `${home.title} | ${SITE_NAME}`,
      description: home.description,
      countryName: SITE_COUNTRY,
    },
    twitter: {
      card: "summary_large_image",
      title: `${home.title} | ${SITE_NAME}`,
      description: home.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  }
}
