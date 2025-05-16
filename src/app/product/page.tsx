"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { FaCode, FaMobileAlt, FaDesktop, FaServer, FaClock } from "react-icons/fa"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"
import { BsArrowRight } from "react-icons/bs"

export default function ProductsPage() {
  type ProjectWithType =  { type: "ongoing" | "completed" };
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState <ProjectWithType | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 6

  const ongoingRef = useRef(null)
  const ongoingInView = useInView(ongoingRef, { once: true, amount: 0.2 })

  const completedRef = useRef(null)
  const completedInView = useInView(completedRef, { once: true, amount: 0.2 })

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "desktop", name: "Desktop Software" },
    { id: "cloud", name: "Cloud Solutions" },
  ]

  // Ongoing projects data
  const ongoingProjects = [
    {
      id: 1,
      title: "HealthTrack Pro",
      category: "mobile",
      progress: 75,
      eta: "Q3 2023",
      description:
        "A comprehensive health tracking mobile application with AI-powered insights and personalized recommendations.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Firebase", "TensorFlow"],
      client: "MediCorp Inc.",
      features: [
        "Real-time health monitoring",
        "AI-powered health insights",
        "Integration with wearable devices",
        "Personalized health recommendations",
      ],
    },
    {
      id: 2,
      title: "FinanceFlow",
      category: "web",
      progress: 60,
      eta: "Q4 2023",
      description:
        "An enterprise-grade financial management platform with advanced reporting and forecasting capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "PostgreSQL", "AWS"],
      client: "Global Finance Partners",
      features: [
        "Real-time financial dashboards",
        "Advanced reporting tools",
        "Predictive analytics",
        "Compliance management",
      ],
    },
    {
      id: 3,
      title: "LogisticsHub",
      category: "desktop",
      progress: 40,
      eta: "Q1 2024",
      description:
        "A comprehensive logistics management system for tracking, managing, and optimizing supply chain operations.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Electron", "Node.js", "MongoDB"],
      client: "Global Shipping Co.",
      features: ["Real-time shipment tracking", "Route optimization", "Inventory management", "Supplier portal"],
    },
    {
      id: 4,
      title: "CloudSync Enterprise",
      category: "cloud",
      progress: 85,
      eta: "Q3 2023",
      description: "A scalable cloud synchronization solution for enterprise data management and collaboration.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Azure", "Kubernetes", "Go"],
      client: "TechCorp Solutions",
      features: ["Multi-cloud support", "End-to-end encryption", "Automated backups", "Enterprise-grade security"],
    },
    {
      id: 5,
      title: "RetailAnalytics",
      category: "web",
      progress: 30,
      eta: "Q2 2024",
      description: "An advanced analytics platform for retail businesses to optimize operations and increase sales.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Python", "TensorFlow"],
      client: "Global Retail Association",
      features: ["Customer behavior analysis", "Inventory optimization", "Sales forecasting", "Personalized marketing"],
    },
  ]

  // Completed projects data
  const completedProjects = [
    {
      id: 101,
      title: "SmartCity Platform",
      category: "web",
      description:
        "A comprehensive smart city management platform that integrates IoT devices, data analytics, and citizen services.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Node.js", "MongoDB", "IoT"],
      client: "Metropolitan City Council",
      outcome: "Reduced operational costs by 30% and improved citizen satisfaction by 45%",
      year: 2023,
    },
    {
      id: 102,
      title: "MediConnect",
      category: "mobile",
      description:
        "A telemedicine application connecting patients with healthcare providers for virtual consultations and follow-ups.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Flutter", "Firebase", "WebRTC"],
      client: "National Healthcare Network",
      outcome: "Enabled 10,000+ virtual consultations monthly, reducing in-person visits by 35%",
      year: 2022,
    },
    {
      id: 103,
      title: "SupplyChain Pro",
      category: "desktop",
      description:
        "An end-to-end supply chain management software for manufacturing companies with real-time tracking and analytics.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Electron", "React", "PostgreSQL"],
      client: "Global Manufacturing Inc.",
      outcome: "Improved inventory accuracy by 28% and reduced logistics costs by 22%",
      year: 2022,
    },
    {
      id: 104,
      title: "CloudSecure",
      category: "cloud",
      description:
        "A cloud security solution providing advanced threat detection, compliance monitoring, and automated remediation.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["AWS", "Kubernetes", "Python"],
      client: "Financial Services Group",
      outcome: "Reduced security incidents by 75% and achieved compliance with industry regulations",
      year: 2023,
    },
    {
      id: 105,
      title: "EduLearn Platform",
      category: "web",
      description: "A comprehensive e-learning platform with interactive courses, assessments, and progress tracking.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Next.js", "GraphQL", "MongoDB"],
      client: "National Education Association",
      outcome: "Increased student engagement by 40% and improved course completion rates by 35%",
      year: 2021,
    },
    {
      id: 106,
      title: "RetailPOS Pro",
      category: "desktop",
      description: "A modern point-of-sale system with inventory management, customer loyalty, and analytics features.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["C#", ".NET", "SQL Server"],
      client: "Retail Chain Group",
      outcome: "Streamlined checkout process by 65% and improved inventory accuracy by 40%",
      year: 2022,
    },
    {
      id: 107,
      title: "TravelCompanion",
      category: "mobile",
      description:
        "A comprehensive travel app with itinerary management, local recommendations, and real-time updates.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React Native", "Node.js", "MongoDB"],
      client: "Global Travel Services",
      outcome: "Achieved 500,000+ downloads with a 4.8/5 user rating",
      year: 2023,
    },
    {
      id: 108,
      title: "IndustrialIoT",
      category: "cloud",
      description: "An industrial IoT platform for monitoring, analyzing, and optimizing manufacturing operations.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Azure IoT", "React", "Time Series Insights"],
      client: "Manufacturing Consortium",
      outcome: "Reduced downtime by 45% and improved operational efficiency by 30%",
      year: 2022,
    },
    {
      id: 109,
      title: "FinTech Portal",
      category: "web",
      description:
        "A secure financial technology portal for investment management, portfolio tracking, and financial planning.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["Angular", "Java Spring", "PostgreSQL"],
      client: "Investment Management Group",
      outcome: "Processed over $2 billion in transactions with 99.99% uptime",
      year: 2021,
    },
  ]

  // Filter completed projects based on category
  const filteredProjects =
    activeCategory === "all"
      ? completedProjects
      : completedProjects.filter((project) => project.category === activeCategory)

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  // Category icon mapping
  const getCategoryIcon = (category : string) => {
    switch (category) {
      case "web":
        return <FaDesktop className="text-blue-500" />
      case "mobile":
        return <FaMobileAlt className="text-blue-500" />
      case "desktop":
        return <FaCode className="text-blue-500" />
      case "cloud":
        return <FaServer className="text-blue-500" />
      default:
        return <FaCode className="text-blue-500" />
    }
  }

  const ProjectDetailModal = ({ project, onClose, type } : { project: any; onClose: () => void; type: "ongoing" | "completed" }) => {
    const isOngoing = type === "ongoing";

    return (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={onClose}
          >
            ✕
          </button>

          <div className="relative h-64 sm:h-80">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 text-white">
                <div className="flex items-center mb-2">
                  {getCategoryIcon(project.category)}
                  <span className="ml-2 text-sm font-medium uppercase tracking-wider text-blue-300">
                    {categories.find((c) => c.id === project.category)?.name}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">{project.title}</h2>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-wrap items-center mb-4 text-sm">
              <div className="flex items-center mr-4 mb-2">
                <span className="font-semibold text-gray-700 dark:text-gray-300 mr-2">Client:</span>
                <span className="text-gray-600 dark:text-gray-400">{project.client}</span>
              </div>

              {isOngoing ? (
                <div className="flex items-center mr-4 mb-2">
                  <span className="font-semibold text-gray-700 dark:text-gray-300 mr-2">Expected Completion:</span>
                  <span className="text-gray-600 dark:text-gray-400">{project.eta}</span>
                </div>
              ) : (
                <div className="flex items-center mr-4 mb-2">
                  <span className="font-semibold text-gray-700 dark:text-gray-300 mr-2">Completed:</span>
                  <span className="text-gray-600 dark:text-gray-400">{project.year}</span>
                </div>
              )}
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

            {isOngoing ? (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((feature : string, index : number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Outcome</h3>
                <p className="text-gray-600 dark:text-gray-400 italic">{project.outcome}</p>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech : string, index : number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {isOngoing && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Current Progress</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
                  <div
                    className="bg-blue-600 h-4 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="text-right text-sm text-gray-600 dark:text-gray-400">{project.progress}% Complete</div>
              </div>
            )}

            <div className="flex justify-end">
              <motion.button
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOngoing ? "Request Updates" : "View Case Study"}
                <BsArrowRight className="ml-2" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
              Our Products & Projects
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover our innovative software solutions and ongoing development projects
            </motion.p>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section ref={ongoingRef} className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={ongoingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Projects Under Development
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get a sneak peek at our exciting projects currently in development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={ongoingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                
                onClick={() => setSelectedProject({ ...project, type: "ongoing"} )}
              >
                <div className="relative">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-0 right-0 m-4 px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full flex items-center">
                      <FaClock className="mr-1" />
                      <span>In Progress</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-600">
                    <motion.div
                      className="h-1 bg-blue-600"
                      initial={{ width: 0 }}
                      animate={ongoingInView ? { width: `${project.progress}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    ></motion.div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {getCategoryIcon(project.category)}
                    <span className="ml-2 text-xs font-medium uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {categories.find((c) => c.id === project.category)?.name}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex justify-between items-center text-sm">
                    <div className="text-gray-500 dark:text-gray-400">
                      <span className="font-medium">{project.progress}%</span> Complete
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                      ETA: <span className="font-medium">{project.eta}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects Section */}
      <section ref={completedRef} className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={completedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Completed Products</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful software solutions
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={completedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => {
                  setActiveCategory(category.id)
                  setCurrentPage(1)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedProject({ ...project, type: "completed" })}
                  layout
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-4">
                        <div className="flex items-center mb-1">
                          {getCategoryIcon(project.category)}
                          <span className="ml-2 text-xs font-medium uppercase tracking-wider text-blue-300">
                            {categories.find((c) => c.id === project.category)?.name}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between items-center text-sm">
                      <div className="text-gray-500 dark:text-gray-400">{project.year}</div>
                      <motion.button
                        className="text-blue-600 dark:text-blue-400 font-medium flex items-center"
                        whileHover={{ x: 5 }}
                      >
                        View Details
                        <BsArrowRight className="ml-1" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <motion.button
                  className={`p-2 rounded-full ${
                    currentPage === 1
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  whileHover={currentPage > 1 ? { scale: 1.1 } : {}}
                  whileTap={currentPage > 1 ? { scale: 0.9 } : {}}
                >
                  <IoIosArrowBack size={20} />
                </motion.button>

                {Array.from({ length: totalPages }).map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-10 h-10 rounded-full ${
                      currentPage === index + 1
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {index + 1}
                  </motion.button>
                ))}

                <motion.button
                  className={`p-2 rounded-full ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  whileHover={currentPage < totalPages ? { scale: 1.1 } : {}}
                  whileTap={currentPage < totalPages ? { scale: 0.9 } : {}}
                >
                  <IoIosArrowForward size={20} />
                </motion.button>
              </div>
            </div>
          )}
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Next Digital Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss how we can help bring your ideas to life with our expertise in software development.
            </p>

            <motion.button
              className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            type={selectedProject.type}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
