import type { ReactNode } from "react"
import { PageStructuredData } from "@/components/seo/page-structured-data"
import { buildPageMetadata } from "@/lib/seo"

export const metadata = buildPageMetadata("/ai_testing")

export default function AiTestingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PageStructuredData path="/ai_testing" />
      {children}
    </>
  )
}
