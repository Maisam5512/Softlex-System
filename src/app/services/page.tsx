"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, AnimatePresence,} from "framer-motion"
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaUsersCog,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaCheck,
  FaRocket,
} from "react-icons/fa"
import {testimonials} from '@/data/Testimonials data'

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.2 })

  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, amount: 0.2 })

  const testimonialsRef = useRef(null)
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 })
  // Development process steps
  const processSteps = [
    {
      icon: <FaUsersCog className="text-blue-500 dark:text-blue-400 text-3xl" />,
      title: "Discovery & Planning",
      description:
        "We start by understanding your business goals, target audience, and project requirements to create a comprehensive roadmap.",
    },
    {
      icon: <FaLaptopCode className="text-blue-500 dark:text-blue-400 text-3xl" />,
      title: "Design & Development",
      description:
        "Our team designs and develops your solution using agile methodologies with regular updates and feedback.",
    },
    {
      icon: <FaCheck className="text-blue-500 dark:text-blue-400 text-3xl" />,
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing ensures your product meets the highest standards of quality, security, and performance.",
    },
    {
      icon: <FaRocket className="text-blue-500 dark:text-blue-400 text-3xl" />,
      title: "Deployment & Launch",
      description: "We deploy your solution and provide training and documentation for a smooth launch and adoption.",
    },
    {
      icon: <FaChartLine className="text-blue-500 dark:text-blue-400 text-3xl" />,
      title: "Maintenance & Growth",
      description:
        "Ongoing support, monitoring, and updates to ensure your solution continues to evolve with your business.",
    },
  ]



    const services = [
      {
        id: 1,
        icon: <FaLaptopCode className="text-blue-500 dark:text-blue-400 text-4xl" />,
        title: "Web Application Development",
        description:
          "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
        features: [
          "Responsive design for all devices",
          "Progressive Web Apps (PWA)",
          "Single Page Applications (SPA)",
          "E-commerce solutions",
          "Content Management Systems",
          "Custom dashboards and portals",
        ],
        technologies: ["React", "Next.js", "Angular", "Vue.js", "Node.js", "PHP", "Ruby on Rails"],
        image: "/web.png?height=400&width=600",
      },
      {
        id: 2,
        icon: <FaMobileAlt className="text-blue-500 dark:text-blue-400 text-4xl" />,
        title: "Mobile App Development",
        description:
          "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
        features: [
          "iOS and Android development",
          "Cross-platform solutions",
          "UI/UX design for mobile",
          "App Store optimization",
          "Push notifications",
          "Offline functionality",
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "Xamarin"],
        image: "/APP.png?height=400&width=600",
      },
      {
        id: 3,
        icon: <FaServer className="text-blue-500 dark:text-blue-400 text-4xl" />,
        title: "Backend Development",
        description: "Robust and scalable backend systems that power your applications with reliability and performance.",
        features: [
          "API development and integration",
          "Microservices architecture",
          "Authentication and authorization",
          "Payment gateway integration",
          "Third-party API integration",
          "Performance optimization",
        ],
        technologies: ["Node.js", "Python", "Java", "Go", "Ruby", ".NET", "PHP"],
        image: "/Backend.png?height=400&width=600",
      },
      {
        id: 4,
        icon: <FaDatabase className="text-blue-500 dark:text-blue-400 text-4xl" />,
        title: "Database Design & Management",
        description: "Optimized database architecture and management for efficient data storage and retrieval.",
        features: [
          "Database design and modeling",
          "Data migration and integration",
          "Performance tuning",
          "Backup and recovery solutions",
          "Database security",
          "Big data solutions",
        ],
        technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "SQL Server", "Oracle"],
        image: "/Database-design.png?height=400&width=600",
      },
      {
        id: 5,
        icon: <FaCloud className="text-blue-500 dark:text-blue-400 text-4xl" />,
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure and services that grow with your business needs.",
        features: [
          "Cloud migration strategies",
          "Infrastructure as Code (IaC)",
          "Serverless architecture",
          "Auto-scaling solutions",
          "Disaster recovery planning",
          "Cost optimization",
        ],
        technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform", "CloudFormation"],
        image: "/Cloud.png?height=400&width=600",
      },
      // {
      //   id: 6,
      //   icon: <FaRobot className="text-blue-500 dark:text-blue-400 text-4xl" />,
      //   title: "AI & Machine Learning",
      //   description: "Intelligent systems that learn and adapt to your business needs for smarter decision-making.",
      //   features: [
      //     "Predictive analytics",
      //     "Natural Language Processing",
      //     "Computer Vision",
      //     "Recommendation systems",
      //     "Chatbots and virtual assistants",
      //     "Anomaly detection",
      //   ],
      //   technologies: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI", "Hugging Face", "NLTK", "OpenCV"],
      //   image: "/AI.png?height=400&width=600",
      // },
      // {
      //   id: 7,
      //   icon: <FaCogs className="text-blue-500 dark:text-blue-400 text-4xl" />,
      //   title: "DevOps Services",
      //   description: "Streamlined development operations with continuous integration and deployment pipelines.",
      //   features: [
      //     "CI/CD pipeline setup",
      //     "Infrastructure automation",
      //     "Containerization",
      //     "Monitoring and logging",
      //     "Performance optimization",
      //     "Security integration",
      //   ],
      //   technologies: ["Jenkins", "GitHub Actions", "GitLab CI", "Docker", "Kubernetes", "Ansible", "Terraform"],
      //   image: "/Devops.png?height=400&width=600",
      // },
      // {
      //   id: 8,
      //   icon: <FaShieldAlt className="text-blue-500 dark:text-blue-400 text-4xl" />,
      //   title: "Cybersecurity Solutions",
      //   description: "Comprehensive security measures to protect your applications and data from threats.",
      //   features: [
      //     "Security assessment and auditing",
      //     "Penetration testing",
      //     "Secure coding practices",
      //     "Authentication and authorization",
      //     "Data encryption",
      //     "Compliance (GDPR, HIPAA, etc.)",
      //   ],
      //   technologies: ["OWASP", "OAuth", "JWT", "SSL/TLS", "WAF", "SIEM", "Encryption"],
      //   image: "/Cyber-Security.png?height=400&width=600",
      // },
    ]


  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`${star <= rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"} w-5 h-5`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-indigo-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 dark:bg-blue-700 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive software solutions tailored to your business needs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="#services"
                className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={servicesRef}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide end-to-end software development services to help businesses thrive in the digital world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Service List */}
            <div className="md:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Our Services</h3>
                <ul className="space-y-2">
                  {services.map((service, index) => (
                    <motion.li
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <button
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center ${
                          activeService === index
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                        }`}
                        onClick={() => setActiveService(index)}
                      >
                        <span className="mr-3">{service.icon}</span>
                        <span className="font-medium">{service.title}</span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service Details */}
            <div className="md:col-span-2 lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center mb-4">
                        <div className="mr-4">{services[activeService].icon}</div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {services[activeService].title}
                        </h3>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-6">{services[activeService].description}</p>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {services[activeService].features.map((feature, index) => (
                            <motion.li
                              key={index}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <FaCheck className="text-blue-500 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {services[activeService].technologies.map((tech, index) => (
                            <motion.span
                              key={index}
                              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/2 relative">
                      <div className="h-full min-h-[300px]">
                        <Image
                          src={services[activeService].image || "/placeholder.svg"}
                          alt={services[activeService].title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white dark:bg-gray-700 flex justify-between items-center">
                    <div className="text-gray-600 dark:text-gray-300">Interested in this service?</div>
                    <motion.button
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get a Quote
                      <FaArrowRight className="ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section ref={processRef} className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A streamlined approach to delivering high-quality software solutions
            </p>
          </motion.div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900/50 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 md:space-y-0 relative">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`flex-1 p-6 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>

                  <motion.div
                    className="relative flex items-center justify-center w-16 h-16 bg-blue-600 dark:bg-blue-700 rounded-full text-white z-10 my-4 md:my-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.icon}
                    <div className="absolute w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10 animate-pulse"></div>
                  </motion.div>

                  <div className="flex-1 p-6"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Don&apos;t just take our word for it - hear what our clients have to say
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Testimonial Slider */}
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 md:p-10 shadow-lg"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="md:flex items-start">
                      <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center text-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                          <Image
                            src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                            alt={testimonials[activeTestimonial].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {testimonials[activeTestimonial].name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {testimonials[activeTestimonial].position}
                        </p>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                          {testimonials[activeTestimonial].company}
                        </p>
                        <StarRating rating={testimonials[activeTestimonial].rating} />
                      </div>

                      <div className="md:w-2/3 md:pl-10">
                        <div className="relative">
                          <FaQuoteLeft className="text-blue-200 dark:text-blue-900/30 text-4xl absolute -top-2 -left-2" />
                          <p className="text-gray-600 dark:text-gray-300 text-lg italic pl-8 pt-4">
                            {testimonials[activeTestimonial].quote}
                          </p>
                        </div>

                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                          <p className="text-gray-500 dark:text-gray-400">
                            <span className="font-medium">Project:</span> {testimonials[activeTestimonial].project}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      activeTestimonial === index ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    onClick={() => setActiveTestimonial(index)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="absolute top-1/2 left-0 right-0 -mt-6 flex justify-between pointer-events-none">
                <motion.button
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-200 pointer-events-auto"
                  onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>

                <motion.button
                  className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-200 pointer-events-auto"
                  onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-indigo-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss how our software solutions can help you achieve your business goals.
            </p>

            <motion.button
              className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What is your development process?",
                  answer:
                    "Our development process follows an agile methodology with five key phases: Discovery & Planning, Design & Development, Testing & Quality Assurance, Deployment & Launch, and Maintenance & Growth. We emphasize collaboration, regular updates, and iterative improvements throughout the project lifecycle.",
                },
                {
                  question: "How long does it take to develop a custom application?",
                  answer:
                    "The timeline for developing a custom application varies depending on the complexity, features, and scope of the project. A simple web application might take 2-3 months, while a complex enterprise solution could take 6-12 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
                },
                {
                  question: "Do you provide ongoing support after the project is completed?",
                  answer:
                    "Yes, we offer various support and maintenance packages to ensure your application continues to run smoothly after launch. Our support services include bug fixes, security updates, performance optimization, and feature enhancements. We can tailor a support plan to meet your specific needs and budget.",
                },
                {
                  question: "How do you ensure the security of applications?",
                  answer:
                    "Security is a top priority in all our development projects. We implement industry best practices such as secure coding standards, regular security audits, encryption for sensitive data, authentication and authorization controls, and compliance with relevant regulations (GDPR, HIPAA, etc.). We also conduct thorough security testing before deployment.",
                },
                {
                  question: "Can you work with our existing systems and technologies?",
                  answer:
                    "Absolutely. We have extensive experience integrating with existing systems and technologies. Whether you need to connect with legacy systems, third-party APIs, or specific databases, our team can develop solutions that seamlessly integrate with your current infrastructure while adding new functionality and improving performance.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-6">
                      <span className="text-gray-900 dark:text-white">{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <motion.div
                      className="text-gray-600 dark:text-gray-300 p-6 pt-0"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
