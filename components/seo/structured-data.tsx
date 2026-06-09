import {
  getSiteUrl,
  PAGE_SEO,
  SITE_EMAIL,
  SITE_LOCATION,
  SITE_LOGO_PATH,
  SITE_NAME,
  SITE_PHONE,
  SITE_ROUTES,
} from "@/lib/seo"

export function StructuredData() {
  const siteUrl = getSiteUrl()

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: siteUrl,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    logo: `${siteUrl}${SITE_LOGO_PATH}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    sameAs: [],
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: siteUrl,
    description: PAGE_SEO["/"].description,
    inLanguage: "en-AU",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: siteUrl,
    },
  }

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: siteUrl,
    image: `${siteUrl}${SITE_LOGO_PATH}`,
    description: PAGE_SEO["/"].description,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    priceRange: "$$",
    serviceType: [
      "Software Testing",
      "Quality Assurance",
      "Test Automation",
      "Manual Testing",
      "Accessibility Testing",
      "Security Testing",
      "Mobile Application Testing",
      "ETL Testing",
      "QA Outsourcing",
    ],
  }

  const services = SITE_ROUTES.filter((route) =>
    route.path.startsWith("/") && route.path !== "/" && route.path !== "/contact" && route.path !== "/about"
  ).map((route) => ({
    "@type": "Service",
    name: PAGE_SEO[route.path]?.title ?? route.path,
    description: PAGE_SEO[route.path]?.description,
    url: `${siteUrl}${route.path}`,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: siteUrl,
    },
    areaServed: SITE_LOCATION,
  }))

  const serviceCatalog = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_NAME} Services`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: service,
    })),
  }

  const payload = [organization, website, localBusiness, serviceCatalog]

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
