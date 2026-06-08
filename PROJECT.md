# PROJECT.md — eLevate Technologies QA Marketing Website

Specification for rebuilding this site from scratch in Cursor while preserving the same foundation: business purpose, information architecture, copy, and feature scope. Use this document as the single source of truth for content and structure; polish visuals, unify branding, and add backend only where noted as future work.

---

## 1. Project type and scope

| Attribute | Value |
|-----------|--------|
| **Type** | Static marketing / lead-generation website (B2B services) |
| **Domain** | Software Quality Assurance (QA) and software testing services |
| **Backend today** | **None** — no API routes, database, auth, or server actions |
| **Data** | All copy and structure are hardcoded in React components |
| **Contact form** | Presentational only — HTML form with no `action`, no submit handler, no email integration |
| **Deployment target** | Next.js app suitable for Vercel, Netlify, or static export patterns |

### What the site aims to do

1. **Position** the company as a professional QA and testing partner for web, mobile, and data platforms.
2. **Explain** service offerings (manual, automation, performance, security, accessibility, ETL, outsourcing, etc.).
3. **Build trust** via process explanation, stats, tool logos, testimonials, and company story.
4. **Convert** visitors to leads through CTAs: “Book a call”, “Get In Touch”, “Request Quote”, contact form.
5. **Educate** with FAQs and methodology breakdowns on Services and Contact pages.

### Out of scope (current codebase)

- User login (mobile nav shows “Login” with no route)
- Individual service detail pages for most navbar dropdown links (links point to non-existent paths)
- Blog, Careers (footer links are `#` placeholders)
- CMS, admin panel, analytics (unless you add them in the rebuild)

---

## 2. Brand and naming (resolve in rebuild)

The codebase uses **inconsistent** brand names. Pick one canonical identity for the polished version; this spec lists what exists today.

| Context | Name used |
|---------|-----------|
| Logo / navbar / footer title | **eLevate Technologies** |
| About hero | **eLevate** + **Technologies** (split lines) |
| About body copy | **Elevation Technologies** |
| About legal line | **Elevation Technologies Pty Ltd** |
| Contact section / copyright | **QualityPro** |
| Emails | `info@qualitypro.com`, `sales@qualitypro.com` |

**Recommended canonical brand for rebuild:** `eLevate Technologies` (matches logo/nav) with legal entity `Elevation Technologies Pty Ltd` in footer only if required.

**Tagline themes:** “Elevate” quality / performance; “Eliminating glitches”; “We Don’t Just Test Software — We Elevate Quality”.

---

## 3. Technology stack (frontend)

| Layer | Technology |
|-------|------------|
| Framework | **Next.js 15** (App Router) |
| UI | **React 19** |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v4**, `globals.css`, CSS variables |
| Components | **shadcn/ui** pattern (`components/ui/*`, Radix primitives) |
| Icons | **lucide-react**, **@tabler/icons-react** |
| Animation | **motion** (Framer Motion successor), custom scroll/globe effects |
| Theming | **next-themes** (light / dark / system) |
| Fonts | **Geist Sans / Geist Mono** (layout); contact form section uses **Poppins** via Google Fonts import |
| Forms (deps only) | react-hook-form, zod, @hookform/resolvers — **not wired** on contact form |
| Charts / particles | recharts, tsparticles — available in UI kit, minimal use on main pages |

### Key dependencies (behavioral)

- **cobe** — WebGL globe on homepage
- **embla-carousel-react** — carousel component available
- **three** — available; not central to main pages

### Build configuration

- `next.config.mjs`: ESLint and TypeScript errors ignored during build; `images.unoptimized: true`
- Package name in `package.json`: `my-v0-project` (placeholder from v0 generator)

### Suggested backend (for polished rebuild — not in repo)

If you want a production-ready contact flow, add one of:

- Next.js Route Handler `POST /api/contact` + Resend/SendGrid/SES
- Server Action + validation (zod) + rate limiting
- Third-party form (Formspree, Basin, etc.)

Until then, treat the form as **UI-only**.

---

## 4. Information architecture

### Routes (implemented pages)

| Path | Page | Purpose |
|------|------|---------|
| `/` | Home | Hero, services grid, process, stats, tech stack, testimonials, CTA |
| `/services` | Services | Service cards, methodology tabs, process steps, CTA |
| `/about` | About | Company story, philosophy, clients, tagline, CTA |
| `/contact` | Contact | Hero, form, contact info, FAQ, support channels |
| `/manual_testing` | Manual Testing | Dedicated service landing (mirrors About layout pattern) |

### Navbar structure

**Top-level**

- Home → `/`
- Services → dropdown (hover desktop, toggle mobile)
- About Us → `/about`
- Contact → `/contact`

**Desktop CTA:** “Book a call” → `/contact`

**Mobile extra:** “Login” button (no functionality)

**Services dropdown items** (many links are **placeholders** — no matching `app/` routes):

| Label | Link (as coded) |
|-------|-----------------|
| Automation Testing | `/services/web-development` |
| Accessibility Testing | `/services/mobile-development` |
| Mobile Application | `/services/ui-ux-design` |
| ETL Testing | `/services/qa-testing` |
| Software QA Outsourcing | `/services/devops` |
| Manual Testing | `/manual_testing` ✓ |
| Non-Functional Testing | `/services/database-design` |
| Performance Testing | `/services/api-development` |
| Security Testing | `/services/security-auditing` |

**Rebuild recommendation:** Either create 9 service subpages or point all dropdown items to `/services` with hash anchors / query params.

### Footer links

**Services column:** Automation Testing, Accessibility Testing, Mobile Application, Manual Testing, Software QA Outsourcing, Non-Functional Testing, Performance Testing, Security Testing (mostly → `/services` or `/manual_testing`)

**Company:** About Us, Contact, Careers (`#`), Blog (`#`)

**Contact info (placeholder):**

- Email: `info@qualitypro.com`
- Phone: `+61 48 555 0685`
- Location: San Francisco, CA

**Copyright:** `© {year} QualityPro. All rights reserved.`

---

## 5. Global UI patterns

- **Layout:** `app/layout.tsx` — `ThemeProvider`, Geist fonts, default metadata still says “v0 App” (update in rebuild)
- **Chrome:** `NavbarDemo` + `Footer` on all main pages
- **Container:** `max-w-7xl mx-auto`, responsive padding `px-4 md:px-6`
- **Sections:** Alternating `bg-muted/50`, cards with `Badge`, `Card`, gradient headings on contact page (white → green)
- **Motion:** Scroll-based navbar visibility, `ContainerScroll` hero, `FadeContent`, aurora backgrounds on About/Manual Testing
- **Images:** Unsplash URLs, Simple Icons CDN, `/scroll.jpg` local hero asset, Aceternity placeholder logo

### Default metadata (update in rebuild)

```text
title: v0 App
description: Created with v0
```

**Suggested:**

```text
title: eLevate Technologies | Software QA & Testing Services
description: Professional software testing and quality assurance for web, mobile, and data platforms.
```

---

## 6. Page-by-page content (all user-visible text)

### 6.1 Home (`/`)

#### Hero (scroll animation)

- **Headline line 1:** Eliminating glitches, We
- **Headline line 2:** Elevate Performance
- **Image alt:** hero
- **Asset:** `/scroll.jpg`

#### Marketing hero card

- **Headline:** Build, test, and deploy software **[rotating:]** better | faster | stronger | smarter
- **Body:** Ensure your applications reach users seamlessly with expert deployment and rigorous testing services. From automated quality checks to smooth rollouts, we help you save time, reduce risks, and deliver software that performs flawlessly in the real world.
- **CTA button:** Explore our services
- **Subtext:** Trusted by leading companies worldwide for comprehensive quality assurance and testing solutions
- **Tool labels:** Selenium, JIRA, TestRail, Postman

#### How We Work (`FeaturesSectionDemo`)

- **Section title:** How We Work
- **Section subtitle:** From comprehensive test planning to seamless deployment, our QA process ensures quality at every stage of software development.

| Feature | Description |
|---------|-------------|
| Test Planning & Strategy | Comprehensive analysis of requirements and strategic test planning to ensure complete coverage and risk mitigation. |
| Test Execution & Analysis | Systematic execution of test cases with detailed analysis of results, ensuring thorough validation of functionality. |
| Defect Tracking & Reporting | Comprehensive defect documentation and management with clear reporting to facilitate swift resolution and quality improvement. |
| Deployment & Quality Assurance | Final quality verification and seamless deployment with continuous monitoring to ensure production-ready software. |

#### Stats row

| Value | Label |
|-------|--------|
| 3x | Faster Time-to-Market |
| 99.9% | Bug Detection Rate |
| 25+ | QA Engineers |
| 24/7 | Support Available |

#### Services grid (`HoverEffect` / `projects`)

- **Badge:** Our Services
- **Title:** Comprehensive Testing Solutions
- **Subtitle:** From manual testing to automated CI/CD integration, we provide end-to-end quality assurance services.

| Service | Description |
|---------|-------------|
| Automation Testing | Streamline your testing process with cutting-edge automation tools and frameworks. |
| Accessibility Testing | Ensure your applications meet WCAG standards and create inclusive digital experiences. |
| Mobile Application | Comprehensive testing for iOS and Android applications across all devices and platforms. |
| ETL Testing | Validate data transformation processes ensuring integrity and accuracy throughout pipelines. |
| Software QA Outsourcing | Scale your QA capabilities with dedicated testing teams that integrate seamlessly. |
| Manual Testing | Expert manual testing services to catch issues automated tests might miss. |
| Non-Functional Testing | Comprehensive testing of performance, scalability, reliability, and usability requirements. |
| Performance Testing | Identify bottlenecks and optimize performance under various load conditions. |
| Security Testing | Protect applications from vulnerabilities with penetration testing and security assessments. |

#### Testimonials

- **Badge:** Testimonials
- **Title:** What Our Clients Say

**Marquee cards** (same quote on all):

| Name | Handle | Quote |
|------|--------|-------|
| Briar Martin | @neilstellar | Radiant made undercutting all of our competitors an absolute breeze. |
| Avery Johnson | @averywrites | (same quote) |
| Jordan Lee | @jordantalks | (same quote) |
| Avery Johnson | @averywrites | (duplicate) |

> Note: Testimonial copy references “Radiant” — likely template leftover; replace with QA-relevant quotes in rebuild.

#### Technology stack

- **Badge:** Technology Stack
- **Title:** Cutting-Edge Testing Tools & Frameworks
- **Subtitle:** We use the latest tools and technologies to deliver comprehensive testing solutions.

| Tool | Subtitle |
|------|----------|
| Selenium | Web automation testing |
| Cypress | Modern web testing |
| Appium | Mobile app testing |
| JMeter | Performance testing |
| OWASP ZAP | Security testing |
| TestRail | Test management |
| Postman | API testing |
| Jenkins | CI/CD integration |

#### Final CTA

- **Title:** Ready to Improve Your Software Quality?
- **Body:** Get started with a free consultation and see how our QA experts can help your project succeed.
- **Primary CTA:** Start Free Consultation → `/contact`
- **Secondary CTA:** Learn More About Us → `/about`

#### Commented-out / unused copy (optional for parity)

Includes: “Trusted by 500+ Companies”, “Quality Assurance That Delivers Excellence”, “4.9/5 from 200+ reviews”, industry cards (Healthcare, FinTech, E-commerce, Enterprise), case studies (60% Faster Deployments, Zero Security Incidents, FDA Approval Success), and placeholder `StickyScroll` content (“Collaborative Editing”, “Real time changes”, etc.) — **not rendered** today.

---

### 6.2 Services (`/services`)

#### Hero

- **Badge:** Our Services
- **Title:** Comprehensive Testing Solutions
- **Body:** From manual testing to automated CI/CD integration, we provide end-to-end quality assurance services tailored to your specific needs.

#### Service cards (9)

| Title | Description | Features |
|-------|-------------|----------|
| Manual Testing | Comprehensive manual testing by experienced QA professionals | Functional Testing, Usability Testing, Exploratory Testing, Regression Testing, User Acceptance Testing, Cross-browser Testing |
| Automated Testing | Scalable automated testing solutions for faster delivery | API Testing, UI Automation, CI/CD Integration, Test Framework Setup, Maintenance & Updates, Custom Test Scripts |
| Performance Testing | Ensure your applications perform under any load | Load Testing, Stress Testing, Volume Testing, Scalability Testing, Endurance Testing, Performance Monitoring |
| Security Testing | Comprehensive security assessment and vulnerability testing | Penetration Testing, Vulnerability Assessment, Security Code Review, Authentication Testing, Data Protection Testing, Compliance Verification |
| Mobile Testing | Complete testing solutions for iOS and Android applications | Device Compatibility, OS Version Testing, Performance Testing, Battery Usage Testing, Network Testing, App Store Compliance |
| Web Testing | Comprehensive web application testing across all browsers | Cross-browser Testing, Responsive Design Testing, Accessibility Testing, SEO Testing, Performance Optimization, Progressive Web App Testing |
| Accessibility Testing | Ensure your applications meet WCAG standards and create inclusive digital experiences | WCAG Compliance Testing, Screen Reader Testing, Keyboard Navigation Testing, Color Contrast Analysis, ARIA Implementation Review, Accessibility Audit Reports |
| ETL Testing | Validate data transformation processes ensuring integrity and accuracy throughout pipelines | Data Validation Testing, Transformation Logic Testing, Data Completeness Testing, Data Quality Checks, Performance Testing, Error Handling Validation |
| Software QA Outsourcing | Scale your QA capabilities with dedicated testing teams that integrate seamlessly | Dedicated QA Teams, Flexible Engagement Models, 24/7 Testing Support, Knowledge Transfer, Process Integration, Scalable Resources |

#### Testing Methodologies (tabs)

- **Section title:** Testing Methodologies
- **Section subtitle:** We employ a wide range of testing methodologies to ensure comprehensive coverage.
- **Tab labels:** Functional | Non-Functional | Specialized

| Category | Tests listed |
|----------|----------------|
| Functional Testing | Unit Testing, Integration Testing, System Testing, Acceptance Testing, Smoke Testing, Sanity Testing |
| Non-Functional Testing | Performance Testing, Security Testing, Usability Testing, Compatibility Testing, Reliability Testing, Scalability Testing |
| Specialized Testing | API Testing, Database Testing, Localization Testing, Accessibility Testing, Migration Testing, Recovery Testing |

> **Known issue:** Tab `value` attributes may not match `TabsTrigger` values (`functional` vs `functional-testing`) — fix in rebuild so all three tabs work.

#### Our Testing Process

- **Title:** Our Testing Process
- **Subtitle:** A systematic approach that ensures thorough testing and quality delivery.

| Step | Title | Description |
|------|-------|-------------|
| 1 | Analysis | We analyze your requirements and create a comprehensive testing strategy. |
| 2 | Planning | Detailed test planning with timelines, resources, and deliverables. |
| 3 | Execution | Systematic test execution with real-time reporting and communication. |
| 4 | Reporting | Comprehensive reports with actionable insights and recommendations. |

#### CTA

- **Title:** Ready to Get Started?
- **Body:** Contact us today to discuss your testing needs and get a customized quote.
- **Primary:** Request Quote → `/contact`
- **Secondary:** Learn About Our Team → `/about`

---

### 6.3 About (`/about`)

#### Hero (aurora)

- **Display:** eLevate / Technologies (large split heading)

#### Section: About Us

- **Badge:** About Us
- **Title:** Specialised Testing Services
- **Paragraph 1:** We specialise in end-to-end testing services across web, mobile, and data platforms, combining deep testing expertise with modern tools and industry best practices.
- **Paragraph 2:** Our approach ensures that applications not only function as expected but also meet today's demands for performance, accessibility, security, and user experience.

#### Section: Our Service Offerings

- **Badge:** Our Service Offerings
- **Title:** Comprehensive Testing Solutions
- **Paragraph 1:** Our service offerings include functional and non-functional testing, manual and automated testing, ETL and data validation testing, mobile and web automation framework setup, performance and load testing, and accessibility testing aligned with global standards such as WCAG.
- **Paragraph 2:** We work with the latest technologies, cloud-based platforms, CI/CD pipelines, and open-source and enterprise testing tools to deliver scalable and future-ready solutions.

#### Section: Our Approach

- **Badge:** Our Approach
- **Title:** Quality Built Into Every Stage
- **Body:** At Elevation Technologies, we believe quality should be built into every stage of the software development lifecycle. We collaborate closely with our clients to understand their business goals, mitigate risks early, and accelerate time-to-market without compromising on quality.

#### Section: Technology & Tools

- **Badge:** Technology & Tools
- **Title:** Modern Tools & Platforms
- **Body:** (same cloud/CI/CD/tools paragraph as above)
- **Labels:** Cloud Platforms, CI/CD Pipelines, Open-source Tools, Enterprise Tools

#### Section: Our Philosophy

- **Badge:** Our Philosophy
- **Title:** What Sets Us Apart

| Pillar | Description |
|--------|-------------|
| Quality-Driven | Quality built into every stage of the software development lifecycle |
| Client Collaboration | We work closely with clients to understand business goals and mitigate risks early |
| Accelerate Time-to-Market | Deliver faster without compromising on quality standards |
| Measurable Outcomes | Ensure improved customer satisfaction and long-term value |

#### Section: Our Clients

- **Badge:** Our Clients
- **Title:** From Startups to Enterprises
- **Intro:** Whether you are a startup launching a new product or an enterprise modernising complex systems, our flexible engagement models and experienced testing professionals ensure measurable quality outcomes, improved customer satisfaction, and long-term value.

| Segment | Description |
|---------|-------------|
| Startups | Launch your product with confidence using our comprehensive testing services |
| Enterprises | Modernise complex systems with our scalable testing solutions |

#### Tagline block

- **Line 1:** We Don't Just Test Software
- **Line 2:** We Elevate Quality
- **Body:** At Elevation Technologies Pty Ltd, we are committed to helping businesses deliver reliable, secure, and high-performing digital products.

#### CTA

- **Title:** Ready to Elevate Your Software Quality?
- **Body:** Let's discuss how our expertise can help ensure your software meets the highest quality standards and accelerates your time-to-market.
- **Primary:** Get In Touch → `/contact`
- **Secondary:** View Our Services → `/services`

---

### 6.4 Manual Testing (`/manual_testing`)

#### Hero

- **Title:** Manual Testing

#### About

- **Badge:** About
- **Title:** Expert Manual Testing Services
- **Body:** We provide expert manual testing services to help teams deliver high-quality software. Our approach focuses on thorough test planning, execution, and defect tracking to ensure reliability and user satisfaction.

#### Services Offered

- **Badge:** Services Offered
- **Title:** Comprehensive Testing Solutions

| Item | Subtext |
|------|---------|
| Test Planning and Requirement Analysis | Comprehensive analysis of requirements and strategic test planning |
| Functional, Regression, and Exploratory Testing | Thorough testing across all functional areas with systematic approaches |
| Defect Reporting and Management | Detailed defect documentation and lifecycle management |
| Test Case Design and Execution | Creating comprehensive test cases and systematic execution |
| Collaboration with Development and QA Teams | Seamless integration with existing teams to enhance quality processes |

#### Tools & Techniques

- **Badge:** Tools & Techniques
- **Title:** Industry-Standard Tools and Proven Techniques
- **Intro:** We utilize industry-standard tools and proven techniques to deliver comprehensive testing solutions.
- **Items:** JIRA, Azure DevOps, TestRail, Agile Methodologies, Waterfall Methodologies, Risk-Based Testing, User Acceptance Testing (UAT)

#### Why Choose Us?

- **Badge:** Why Choose Us?
- **Title:** What Sets Us Apart

| Title | Description |
|-------|-------------|
| Strong Attention to Detail and Analytical Skills | Meticulous approach to identifying even the smallest issues that could impact user experience |
| Clear Communication and Documentation Practices | Comprehensive reporting and transparent communication throughout the testing lifecycle |
| Experience Across Diverse Domains and Platforms | Broad experience spanning multiple industries and technology platforms |
| Commitment to Delivering Defect-Free Software | Unwavering focus on delivering defect-free software that exceeds expectations |

#### Tagline

- **Lines:** We Don't Just Test Software / We Elevate Quality
- **Body:** Ensuring software quality through detailed analysis and hands-on testing to deliver reliable, secure, and high-performing digital products.

#### CTA

- **Title:** Ready to Elevate Your Software Quality?
- **Body:** Let's discuss how our manual testing expertise can help ensure your software meets the highest quality standards and delivers exceptional user experiences.
- **Primary:** Get In Touch → `/contact`
- **Secondary:** View Our Services → `/services`

---

### 6.5 Contact (`/contact`)

#### Hero

- **Badge:** Contact Us
- **Title:** Let's Discuss Your Testing Needs
- **Body:** Ready to improve your software quality? Get in touch with our experts for a free consultation and customized testing solution.

#### Contact form block (`app/contact/form.tsx`)

- **Headline:** Ship Faster. Test Smarter. Deliver Better.
- **Subtext:** From functional to automation testing, we safeguard your product's quality. Talk to our QA specialists today.
- **Fields:** Name (placeholder: Eden Johnson), Email (placeholder: Eden@example.com), Message (placeholder: Write your message here...)
- **Legal:** By submitting, you agree to our Terms and Privacy Policy.
- **Submit:** Submit

#### Contact Information card

- **Title:** Contact Information
- **Subtitle:** Reach out to us directly through any of these channels.

| Channel | Content |
|---------|---------|
| Email | info@qualitypro.com, sales@qualitypro.com |
| Phone | +61 48 555 0685 |
| Office | 123 Tech Street, Suite 400, San Francisco, CA 94105, United States |
| Business Hours | Monday - Friday: 9:00 AM - 6:00 PM PST; Saturday: 10:00 AM - 2:00 PM PST; Sunday: Closed |

#### Why Choose QualityPro?

- 24-hour response time guarantee
- Free initial consultation
- Flexible engagement models
- Experienced QA professionals
- Proven track record

#### FAQ

- **Title:** Frequently Asked Questions
- **Subtitle:** Quick answers to common questions about our services.

| Question | Answer |
|----------|--------|
| What testing services do you offer? | We provide comprehensive testing services including manual testing, automated testing, performance testing, security testing, mobile and web testing, ETL testing, accessibility testing, and QA outsourcing solutions. |
| How quickly can you start testing our project? | We can typically begin testing within 1-2 weeks of project kickoff, depending on the scope and complexity of your requirements. For urgent projects, we offer expedited onboarding. |
| Do you work with agile and DevOps teams? | Yes, we're experienced in agile methodologies, CI/CD pipelines, and can integrate seamlessly with your existing development processes and tools like JIRA, Azure DevOps, and TestRail. |
| What testing tools and technologies do you use? | We work with industry-standard tools including Selenium, Postman, TestRail, JIRA, and various automation frameworks. We adapt to your preferred tools and can recommend the best solutions for your needs. |
| Can you help with test automation setup? | Absolutely! We provide end-to-end test automation services including framework setup, script development, CI/CD integration, and ongoing maintenance to ensure your automated tests remain effective. |
| What is your pricing model? | We offer flexible engagement models including project-based, dedicated team, and hourly rates. Contact us for a free consultation and customized quote based on your specific requirements. |

#### Multiple Ways to Connect

- **Title:** Multiple Ways to Connect
- **Subtitle:** Choose the communication method that works best for your needs.

| Channel | Title | Description | Details |
|---------|-------|-------------|---------|
| Phone | Phone Support | Speak directly with our QA experts | +61 48 555 0685 — Mon-Fri: 9AM-6PM PST |
| Email | Email Support | Detailed inquiries and documentation | info@qualitypro.com — 24-hour response time |
| Video | Video Consultation | Face-to-face project discussions | Schedule Online — 30-60 minute sessions |
| Emergency | Emergency Support | Critical issue resolution | 24/7 Hotline — Enterprise clients only |

---

### 6.6 Footer (global)

- **Brand:** eLevate Technologies
- **Blurb:** Professional software testing and quality assurance services for modern applications.
- **Columns:** Services (8 links), Company (About, Contact, Careers, Blog), Contact Info
- **Copyright:** © {year} QualityPro. All rights reserved.

---

### 6.7 Error UI

- **Message:** Something went wrong!
- **Button:** Try again

---

## 7. Component inventory (for parity)

| Component / area | Role |
|------------------|------|
| `components/ui/navbar.tsx` | Site navigation + services mega-menu |
| `components/header.tsx` | Navbar primitives, logo, buttons |
| `components/footer.tsx` | Site footer |
| `components/ui/marketing_header.tsx` | Rotating-word hero card |
| `components/ui/container-scroll-animation.tsx` | Parallax scroll hero |
| `components/ui/card-hover-effect.tsx` | Services grid on home |
| `components/ui/fade.tsx` | Fade-in sections |
| `app/testimonials.tsx` | Marquee testimonials |
| `app/about/aurora.tsx` | Aurora background |
| `app/about/highlight.tsx` | Highlighted tagline text |
| `components/ui/process.tsx` | StickyScroll (imported on home; main features use custom grid) |
| `components/ui/compare.tsx` | Before/after image compare (commented out on home) |
| `components/ui/focus-cards.tsx` | Imported on home (verify usage) |
| `components/theme-provider.tsx` | Dark mode |

---

## 8. Assets and external URLs

| Asset | Location / URL |
|-------|----------------|
| Hero scroll image | `/scroll.jpg` (public) |
| Logo | `https://assets.aceternity.com/logo-dark.png` |
| Compare demo images | Aceternity CDN (commented section) |
| Stock photos | images.unsplash.com |
| Tool icons | cdn.simpleicons.org |

---

## 9. Rebuild checklist (polished version)

### Must keep (foundation)

- [ ] 5 routes: Home, Services, About, Contact, Manual Testing
- [ ] Same service taxonomy (9 core offerings + methodologies + process steps)
- [ ] All marketing copy in Section 6 (or improved equivalents)
- [ ] Primary CTAs to Contact
- [ ] Stats, tool stack, FAQ content
- [ ] Company story arc on About

### Should fix

- [ ] Unify brand: eLevate vs Elevation vs QualityPro
- [ ] Replace placeholder testimonial (“Radiant”) with QA-specific quotes
- [ ] Wire contact form or integrate email service
- [ ] Fix Services page tabs
- [ ] Create real service subpages OR fix navbar links
- [ ] Update `metadata` in layout
- [ ] Remove or implement Login, Careers, Blog
- [ ] Align footer copyright with brand
- [ ] Point “Explore our services” button to `/services`
- [ ] Logo `href` should be `/` not `#`

### Nice to have

- [ ] CMS for copy (MDX, Contentlayer, Sanity)
- [ ] SEO: Open Graph, structured data (Organization, Service)
- [ ] Analytics
- [ ] Accessibility audit (WCAG — on-brand for this business)
- [ ] `loading.tsx` / proper error boundaries with branded copy

---

## 10. Suggested file structure (greenfield Next.js)

```text
app/
  layout.tsx
  page.tsx                 # Home
  services/page.tsx
  about/page.tsx
  contact/page.tsx
  manual-testing/page.tsx  # optional: rename from manual_testing for SEO
  api/contact/route.ts     # optional: form handler
components/
  layout/Header.tsx
  layout/Footer.tsx
  sections/                # Hero, Stats, ServicesGrid, FAQ, etc.
content/
  copy.ts                  # or JSON/MDX — all strings from Section 6
lib/
  utils.ts
public/
  scroll.jpg
  logo.svg
```

---

## 11. Cursor starter prompt (copy-paste)

```text
Build a polished marketing site for eLevate Technologies (software QA & testing)
using Next.js 15 App Router, TypeScript, Tailwind, and shadcn/ui.

Follow PROJECT.md in the repo for:
- All routes, page structure, and complete frontend copy
- Service list and FAQ content
- No backend initially; contact form UI with zod validation, submit to /api/contact stub

Unify branding to "eLevate Technologies". Fix broken nav links (either anchor on /services
or create service pages). Implement dark mode. Replace placeholder testimonials.
Make visual design premium and distinct from generic AI templates.
```

---

*Generated from repository audit. Last updated to match codebase as of project export.*
