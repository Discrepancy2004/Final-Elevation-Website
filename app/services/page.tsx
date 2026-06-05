import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Zap,
  Lock,
  Smartphone,
  Globe,
  CheckCircle,
  ArrowRight,
  Bug,
  Gauge,
  Code,
  Users,
  Sparkles,
  Accessibility,
} from "lucide-react"
import Link from "next/link"
// import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NavbarDemo } from "@/components/ui/navbar"

export default function ServicesPage() {
  const services = [
    {
      icon: Shield,
      title: "Manual Testing",
      description:
        "Comprehensive manual testing by experienced QA professionals",
      features: [
        "Functional Testing",
        "Usability Testing",
        "Exploratory Testing",
        "Regression Testing",
        "User Acceptance Testing",
        "Cross-browser Testing",
      ],
    },
    {
      icon: Zap,
      title: "Automated Testing",
      description: "Scalable automated testing solutions for faster delivery",
      features: [
        "API Testing",
        "UI Automation",
        "CI/CD Integration",
        "Test Framework Setup",
        "Maintenance & Updates",
        "Custom Test Scripts",
      ],
    },
    {
      icon: Accessibility,
      title: "Accessibility Testing",
      description: "Ensure your applications are usable by everyone",
      features: [
        "WCAG Compliance Testing",
        "Screen Reader Testing",
        "Keyboard Navigation Testing",
        "Color Contrast Validation",
        "ARIA & Semantic HTML Audits",
        "Accessibility Reporting",
      ],
    },
    {
      icon: Lock,
      title: "Security Testing",
      description:
        "Comprehensive security assessment and vulnerability testing",
      features: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Security Code Review",
        "Authentication Testing",
        "Data Protection Testing",
        "Compliance Verification",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Testing",
      description:
        "Complete testing solutions for iOS and Android applications",
      features: [
        "Device Compatibility",
        "OS Version Testing",
        "Accessibility Testing",
        "Battery Usage Testing",
        "Network Testing",
        "App Store Compliance",
      ],
    },
    {
      icon: Globe,
      title: "Web Testing",
      description: "Comprehensive web application testing across all browsers",
      features: [
        "Cross-browser Testing",
        "Responsive Design Testing",
        "AI Testing Solutions",
        "SEO Testing",
        "Performance Optimization",
        "Progressive Web App Testing",
      ],
    },
    {
      icon: Sparkles,
      title: "AI Testing Solutions",
      description:
        "Leverage AI to generate test plans, scenarios, and cases that integrate with your test management tools and accelerate delivery.",
      features: [
        "AI-Generated Test Plans",
        "Automated Test Scenario Design",
        "Test Case Import & Management",
        "Coverage Gap Analysis",
        "Hybrid Manual + AI Workflows",
        "Accelerated Test Design Cycles",
      ],
    },
    {
      icon: Code,
      title: "ETL Testing",
      description: "Validate data transformation processes ensuring integrity and accuracy throughout pipelines",
      features: [
        "Data Validation Testing",
        "Transformation Logic Testing",
        "Data Completeness Testing",
        "Data Quality Checks",
        "Accessibility Testing",
        "Error Handling Validation",
      ],
    },
    {
      icon: Users,
      title: "Software QA Outsourcing",
      description: "Scale your QA capabilities with dedicated testing teams that integrate seamlessly",
      features: [
        "Dedicated QA Teams",
        "Flexible Engagement Models",
        "24/7 Testing Support",
        "Knowledge Transfer",
        "Process Integration",
        "Scalable Resources",
      ],
    },
  ]

  const testingTypes = [
    {
      category: "Functional Testing",
      icon: Bug,
      tests: [
        "Unit Testing",
        "Integration Testing",
        "System Testing",
        "Acceptance Testing",
        "Smoke Testing",
        "Sanity Testing",
      ],
    },
    {
      category: "Non-Functional Testing",
      icon: Gauge,
      tests: [
        "Accessibility Testing",
        "Security Testing",
        "Usability Testing",
        "Compatibility Testing",
        "Reliability Testing",
        "Scalability Testing",
      ],
    },
    {
      category: "Specialized Testing",
      icon: Code,
      tests: [
        "API Testing",
        "Database Testing",
        "Localization Testing",
        "AI Testing Solutions",
        "Migration Testing",
        "Recovery Testing",
      ],
    },
  ]

  return (
    <div className='min-h-screen bg-background'>
      {/* <Header /> */}
      <NavbarDemo />
      {/* Hero Section */}
      <section className='py-20 lg:py-32'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center space-y-4 max-w-3xl mx-auto'>
            <Badge variant='outline'>Our Services</Badge>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
              Comprehensive Testing Solutions
            </h1>
            <p className='text-muted-foreground md:text-xl text-center'>
              From manual testing to automated CI/CD integration, we provide
              end-to-end quality assurance services tailored to your specific
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className='py-20'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center'>
            {services.map((service, index) => (
              <Card
                key={index}
                className='group hover:shadow-lg transition-all duration-300 w-full max-w-md'
              >
                <CardHeader className='text-center'>
                  <service.icon className='h-12 w-12 text-primary mb-4 mx-auto group-hover:scale-110 transition-transform' />
                  <CardTitle className='text-xl text-center'>{service.title}</CardTitle>
                  <CardDescription className='text-center'>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <ul className='space-y-2'>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className='flex items-center gap-2 text-sm text-center justify-center'>
                        <CheckCircle className='h-4 w-4 text-primary flex-shrink-0' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Types */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-4'>
              Testing Methodologies
            </h2>
            <p className='text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              We employ a wide range of testing methodologies to ensure
              comprehensive coverage.
            </p>
          </div>

          <Tabs defaultValue='functional' className='w-full'>
            <TabsList className='grid w-full grid-cols-3'>
              <TabsTrigger value='functional'>Functional</TabsTrigger>
              <TabsTrigger value='non-functional'>Non-Functional</TabsTrigger>
              <TabsTrigger value='specialized'>Specialized</TabsTrigger>
            </TabsList>

            {testingTypes.map((type, index) => (
              <TabsContent
                key={index}
                value={type.category.toLowerCase().replace(" ", "-")}
              >
                <Card>
                  <CardHeader className='text-center'>
                    <type.icon className='h-12 w-12 text-primary mx-auto mb-4' />
                    <CardTitle>{type.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 justify-items-center'>
                      {type.tests.map((test, idx) => (
                        <div
                          key={idx}
                          className='flex items-center gap-2 p-3 rounded-lg bg-muted/50 text-center justify-center'
                        >
                          <CheckCircle className='h-4 w-4 text-primary' />
                          <span className='text-sm font-medium'>{test}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Process Section */}
      <section className='py-20'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-4'>
              Our Testing Process
            </h2>
            <p className='text-muted-foreground md:text-xl max-w-2xl mx-auto'>
              A systematic approach that ensures thorough testing and quality
              delivery.
            </p>
          </div>

          <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className='text-center space-y-4'>
              <div className='w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold'>
                1
              </div>
              <h3 className='font-semibold'>Analysis</h3>
              <p className='text-sm text-muted-foreground'>
                We analyze your requirements and create a comprehensive testing
                strategy.
              </p>
            </div>

            <div className='text-center space-y-4'>
              <div className='w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold'>
                2
              </div>
              <h3 className='font-semibold'>Planning</h3>
              <p className='text-sm text-muted-foreground'>
                Detailed test planning with timelines, resources, and
                deliverables.
              </p>
            </div>

            <div className='text-center space-y-4'>
              <div className='w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold'>
                3
              </div>
              <h3 className='font-semibold'>Execution</h3>
              <p className='text-sm text-muted-foreground'>
                Systematic test execution with real-time reporting and
                communication.
              </p>
            </div>

            <div className='text-center space-y-4'>
              <div className='w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto font-bold'>
                4
              </div>
              <h3 className='font-semibold'>Reporting</h3>
              <p className='text-sm text-muted-foreground'>
                Comprehensive reports with actionable insights and
                recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-muted/50'>
        <div className='container px-4 md:px-6 max-w-7xl mx-auto'>
          <div className='text-center space-y-4'>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              Ready to Get Started?
            </h2>
            <p className='mx-auto max-w-[600px] text-muted-foreground md:text-xl'>
              Contact us today to discuss your testing needs and get a
              customized quote.
            </p>
            <div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
              <Button size='lg' asChild>
                <Link href='/contact'>
                  Request Quote
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button variant='outline' size='lg' asChild>
                <Link href='/about'>Learn About Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Removed sections: Detailed Service Packages through Success Stories */}

      <Footer />
    </div>
  )
}
