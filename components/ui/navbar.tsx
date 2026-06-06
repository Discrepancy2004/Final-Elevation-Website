"use client"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/header"
import { useState } from "react"
import {
  Wrench,
  Sparkles,
  Smartphone,
  Workflow,
  Users as UsersIcon,
  ClipboardCheck,
  Gauge,
  Shield as ShieldIcon,
  Accessibility,
} from "lucide-react"

export function NavbarDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Automation Testing",
          link: "/automation_testing",
          icon: <Wrench className='w-4 h-4' />,
        },
        {
          name: "AI Testing Solutions",
          link: "/ai_testing",
          icon: <Sparkles className='w-4 h-4' />,
        },
        {
          name: "Mobile Application",
          link: "/mobile_testing",
          icon: <Smartphone className='w-4 h-4' />,
        },
        {
          name: "ETL Testing",
          link: "/etl_testing",
          icon: <Workflow className='w-4 h-4' />,
        },
        {
          name: "Software QA Outsourcing",
          link: "/qa_outsourcing",
          icon: <UsersIcon className='w-4 h-4' />,
        },
        {
          name: "Manual Testing",
          link: "/manual_testing",
          icon: <ClipboardCheck className='w-4 h-4' />,
        },
        {
          name: "Non-Functional Testing",
          link: "/non_functional_testing",
          icon: <Gauge className='w-4 h-4' />,
        },
        {
          name: "Accessibility Testing",
          link: "/accessibility_testing",
          icon: <Accessibility className='w-4 h-4' />,
        },
        {
          name: "Security Testing",
          link: "/security_testing",
          icon: <ShieldIcon className='w-4 h-4' />,
        },
      ],
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  return (
    <div className='relative w-full'>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems
            items={navItems}
            onServicesDropdownToggle={(isOpen) =>
              setIsServicesDropdownOpen(isOpen)
            }
          />
          <div className='flex shrink-0 items-center'>
            <NavbarButton variant='primary' href='/contact'>Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Services Dropdown for Desktop */}
        {isServicesDropdownOpen && (
          <div
            className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[36rem] max-w-[90vw] bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-gray-200 dark:border-neutral-700 z-50'
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <div className='p-4'>
              <div className='grid grid-cols-3 gap-3'>
                {navItems
                  .find((item) => item.name === "Services")
                  ?.dropdownItems?.map((service, idx) => (
                    <a
                      key={`desktop-service-${idx}`}
                      href={service.link}
                      className='flex items-start gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                    >
                      <span className='shrink-0 mt-0.5'>{service.icon}</span>
                      <span className='break-words leading-tight'>{service.name}</span>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <div key={`mobile-link-${idx}`}>
                {item.hasDropdown ? (
                  <div className='space-y-2'>
                    <button
                      onClick={() =>
                        setIsServicesDropdownOpen(!isServicesDropdownOpen)
                      }
                      className='relative text-neutral-600 dark:text-neutral-300 w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md'
                    >
                      <span className='block'>{item.name}</span>
                    </button>
                    {isServicesDropdownOpen && (
                      <div className='ml-4 space-y-2'>
                        <div className='grid grid-cols-3 gap-2'>
                          {item.dropdownItems?.map((service, serviceIdx) => (
                            <a
                              key={`mobile-service-${serviceIdx}`}
                              href={service.link}
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setIsServicesDropdownOpen(false)
                              }}
                              className='flex items-start gap-2 px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-md'
                            >
                              <span className='shrink-0 mt-0.5'>{service.icon}</span>
                              <span className='break-words leading-tight'>{service.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='relative text-neutral-600 dark:text-neutral-300 block px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md'
                  >
                    <span className='block'>{item.name}</span>
                  </a>
                )}
              </div>
            ))}
            <div className='flex w-full flex-col gap-4'>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant='primary'
                className='w-full'
              >
                Login
              </NavbarButton>
              <NavbarButton
                href='/contact'
                onClick={() => setIsMobileMenuOpen(false)}
                variant='primary'
                className='w-full'
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}
