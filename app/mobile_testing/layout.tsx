import type { ReactNode } from "react"
import { PageStructuredData } from "@/components/seo/page-structured-data"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata("/mobile_testing")

export default function MobileTestingLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <PageStructuredData path="/mobile_testing" />
      {children}
    </>
  )
}
