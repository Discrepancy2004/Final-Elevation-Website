import type { ReactNode } from "react"
import { PageStructuredData } from "@/components/seo/page-structured-data"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata("/qa_outsourcing")

export default function QaOutsourcingLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <PageStructuredData path="/qa_outsourcing" />
      {children}
    </>
  )
}
