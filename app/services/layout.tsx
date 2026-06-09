import type { ReactNode } from "react"
import { PageStructuredData } from "@/components/seo/page-structured-data"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata("/services")

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageStructuredData path="/services" />
      {children}
    </>
  )
}
