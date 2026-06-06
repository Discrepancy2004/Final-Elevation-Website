export type SiteService = {
  label: string
  href: string
}

/** Canonical service order used across navbar, footer, home, contact, and services. */
export const SITE_SERVICES: SiteService[] = [
  { label: "AI Testing Solutions", href: "/ai_testing" },
  { label: "Automation Testing", href: "/automation_testing" },
  { label: "Manual Testing", href: "/manual_testing" },
  { label: "Accessibility Testing", href: "/accessibility_testing" },
  { label: "Mobile Application", href: "/mobile_testing" },
  { label: "ETL Testing", href: "/etl_testing" },
  { label: "Non-Functional Testing", href: "/non_functional_testing" },
  { label: "Security Testing", href: "/security_testing" },
  { label: "Software QA Outsourcing", href: "/qa_outsourcing" },
]

export const SITE_SERVICE_LABELS = SITE_SERVICES.map((service) => service.label)
