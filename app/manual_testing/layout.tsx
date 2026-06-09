import type { ReactNode } from "react"
import { PageStructuredData } from "@/components/seo/page-structured-data"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata("/manual_testing")

export default function ManualTestingLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <PageStructuredData path="/manual_testing" />
      {children}
    </>
  )
}
