import type { MetadataRoute } from "next"
import { SITE_NAME, SITE_TAGLINE } from "@/lib/seo"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Elevation QA",
    description: SITE_TAGLINE,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#047857",
    lang: "en-AU",
    icons: [
      {
        src: "/images/elevation-logo-stairs.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
