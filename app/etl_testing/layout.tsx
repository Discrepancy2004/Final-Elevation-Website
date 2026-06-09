import type { ReactNode } from "react"
import { PageStructuredData } from "@/components/seo/page-structured-data"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata("/etl_testing")

export default function EtlTestingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageStructuredData path="/etl_testing" />
      {children}
    </>
  )
}
