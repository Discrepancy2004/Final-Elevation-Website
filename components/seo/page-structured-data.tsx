import { getSiteUrl, PAGE_SEO, SITE_NAME } from "@/lib/seo"

type PageStructuredDataProps = {
  path: string
  breadcrumbLabel?: string
}

export function PageStructuredData({
  path,
  breadcrumbLabel,
}: PageStructuredDataProps) {
  const siteUrl = getSiteUrl()
  const page = PAGE_SEO[path]

  if (!page) {
    return null
  }

  const pageUrl = `${siteUrl}${path}`
  const label = breadcrumbLabel ?? page.title

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      ...(path === "/services" || path === "/about" || path === "/contact"
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: label,
              item: pageUrl,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: "Services",
              item: `${siteUrl}/services`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: label,
              item: pageUrl,
            },
          ]),
    ],
  }

  const service =
    path !== "/" &&
    path !== "/about" &&
    path !== "/contact" &&
    path !== "/services"
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          name: page.title,
          description: page.description,
          url: pageUrl,
          provider: {
            "@type": "Organization",
            name: SITE_NAME,
            url: siteUrl,
          },
          areaServed: {
            "@type": "Country",
            name: "Australia",
          },
        }
      : null

  const payload = service ? [breadcrumb, service] : [breadcrumb]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
