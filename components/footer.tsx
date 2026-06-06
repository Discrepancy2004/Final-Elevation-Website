import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { SITE_SERVICES } from "@/lib/site-services"

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid justify-items-center gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center justify-center space-x-2"
            >
              {/* Native img preserves PNG alpha reliably */}
              <img
                src="/images/elevation-logo-green.png?v=2"
                alt="Elevation Software Solutions"
                className="h-14 w-auto shrink-0 md:h-16"
              />
              <span className="text-xl font-bold text-white">
                Elevation Software Solutions
              </span>
            </Link>
            <p className="text-center text-sm text-neutral-400">
              Professional software testing and quality assurance services for
              modern applications.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-center font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              {SITE_SERVICES.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block text-center text-neutral-400 hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-center font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block text-center text-neutral-400 hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-center font-semibold text-white">
              Contact Info
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                hello@elevationsoftwaresolutions.com.au
              </li>
              <li className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                +61 48 555 0685
              </li>
              <li className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" />
                Sydney, Australia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-800 pt-8 text-center text-sm text-neutral-500">
          <p>
            &copy; {new Date().getFullYear()} Elevation Software Solutions. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
