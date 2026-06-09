import type { ReactNode } from "react"
import { PageStructuredData } from "@/components/seo/page-structured-data"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata("/non_functional_testing")

export default function NonFunctionalTestingLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <>
      <PageStructuredData path="/non_functional_testing" />
      {children}
    </>
  )
}
