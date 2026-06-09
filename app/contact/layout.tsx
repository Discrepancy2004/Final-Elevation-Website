import type { ReactNode } from "react"
import { PageStructuredData } from "@/components/seo/page-structured-data"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata("/contact")

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageStructuredData path="/contact" />
      {children}
    </>
  )
}
