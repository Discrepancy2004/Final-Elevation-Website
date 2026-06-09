import type { ReactNode } from "react"
import { PageStructuredData } from "@/components/seo/page-structured-data"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata("/automation_testing")

export default function AutomationTestingLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <PageStructuredData path="/automation_testing" />
      {children}
    </>
  )
}
