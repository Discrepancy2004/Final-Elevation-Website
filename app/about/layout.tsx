import type { ReactNode } from "react"
import { PageStructuredData } from "@/components/seo/page-structured-data"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata("/about")

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageStructuredData path="/about" />
      {children}
    </>
  )
}
