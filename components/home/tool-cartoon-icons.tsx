type IconProps = {
  className?: string
  color?: string
}

/** Generic web automation — browser + friendly bot (not Selenium logo) */
export function CartoonWebAutomation({
  className,
  color = "currentColor",
}: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden
    >
      <rect
        x="6"
        y="10"
        width="28"
        height="22"
        rx="4"
        stroke={color}
        strokeWidth="2.5"
      />
      <path d="M6 16h28" stroke={color} strokeWidth="2" />
      <circle cx="11" cy="13" r="1.5" fill={color} />
      <circle cx="16" cy="13" r="1.5" fill={color} />
      <rect x="12" y="21" width="16" height="3" rx="1.5" fill={color} opacity="0.5" />
      <circle cx="36" cy="28" r="10" fill={color} opacity="0.2" />
      <circle cx="36" cy="28" r="10" stroke={color} strokeWidth="2.5" />
      <circle cx="33" cy="26" r="1.5" fill={color} />
      <circle cx="39" cy="26" r="1.5" fill={color} />
      <path
        d="M33 31c2 2 8 2 10 0"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36 18v-4M32 14h8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Modern web testing — cheerful browser window with sparkles */
export function CartoonModernWeb({ className, color = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect
        x="8"
        y="12"
        width="32"
        height="26"
        rx="5"
        stroke={color}
        strokeWidth="2.5"
      />
      <path d="M8 19h32" stroke={color} strokeWidth="2" />
      <circle cx="14" cy="15.5" r="1.5" fill={color} />
      <circle cx="19" cy="15.5" r="1.5" fill={color} />
      <circle cx="24" cy="15.5" r="1.5" fill={color} />
      <path
        d="M16 28c0-3 3-5 6-5s6 2 6 5"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="24" r="1.5" fill={color} />
      <circle cx="28" cy="24" r="1.5" fill={color} />
      <path
        d="M38 8l2 2M40 6v4M42 8h-4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Mobile app testing — smiling phone */
export function CartoonMobileApp({ className, color = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect
        x="14"
        y="6"
        width="20"
        height="36"
        rx="5"
        stroke={color}
        strokeWidth="2.5"
      />
      <rect x="20" y="10" width="8" height="2" rx="1" fill={color} opacity="0.5" />
      <circle cx="19" cy="24" r="1.5" fill={color} />
      <circle cx="29" cy="24" r="1.5" fill={color} />
      <path
        d="M19 30c2 2 8 2 10 0"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="36" r="2" stroke={color} strokeWidth="2" />
    </svg>
  )
}

/** Performance testing — cartoon speed gauge */
export function CartoonPerformance({ className, color = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M10 34a16 16 0 1 1 28 0"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="34" r="3" fill={color} />
      <path
        d="M24 34l8-10"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M14 34h4M30 34h4M24 18v-4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <circle cx="24" cy="14" r="2" fill={color} opacity="0.4" />
    </svg>
  )
}

/** Security testing — shield with lightning (not ZAP logo) */
export function CartoonSecurity({ className, color = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M24 6l14 6v12c0 10-6 16-14 18-8-2-14-8-14-18V12l14-6z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M24 16v12M20 22h8l-4 8"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Test management — clipboard with checks */
export function CartoonTestManagement({
  className,
  color = "currentColor",
}: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <rect
        x="12"
        y="10"
        width="24"
        height="32"
        rx="4"
        stroke={color}
        strokeWidth="2.5"
      />
      <rect
        x="18"
        y="6"
        width="12"
        height="8"
        rx="3"
        stroke={color}
        strokeWidth="2.5"
      />
      <path
        d="M18 22l3 3 6-7M18 30l3 3 6-7"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 22h4M30 30h4" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

/** API testing — paper plane + data nodes (not Postman logo) */
export function CartoonApiTesting({ className, color = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <path
        d="M8 28l28-12-8 20-4-8-8-4 12-4z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="34" r="4" stroke={color} strokeWidth="2" />
      <circle cx="14" cy="38" r="3" stroke={color} strokeWidth="2" />
      <path
        d="M18 36l12-4M30 34l2 2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  )
}

/** CI/CD — pipeline gears (not Jenkins mascot) */
export function CartoonCicd({ className, color = "currentColor" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <circle cx="18" cy="22" r="8" stroke={color} strokeWidth="2.5" />
      <circle cx="18" cy="22" r="3" fill={color} opacity="0.35" />
      <path
        d="M18 14v3M18 27v3M10 22h3M23 22h3M12.5 16.5l2 2M21.5 25.5l2 2M12.5 27.5l2-2M21.5 18.5l2-2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect
        x="28"
        y="28"
        width="14"
        height="10"
        rx="2"
        stroke={color}
        strokeWidth="2.5"
      />
      <path d="M31 33h8M31 36h5" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path
        d="M26 30h6"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export const TOOL_CARTOON_ICONS = {
  Selenium: CartoonWebAutomation,
  Cypress: CartoonModernWeb,
  Appium: CartoonMobileApp,
  JMeter: CartoonPerformance,
  "OWASP ZAP": CartoonSecurity,
  TestRail: CartoonTestManagement,
  Postman: CartoonApiTesting,
  Jenkins: CartoonCicd,
} as const
