"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  FaMobileAlt,
  FaGlobe,
  FaTicketAlt,
  FaPlane,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaPlay,
} from "react-icons/fa"
import { BsStar, BsStarFill } from "react-icons/bs"

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState(0)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const productsRef = useRef(null)
  const productsInView = useInView(productsRef, { once: true, amount: 0.2 })

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [activeProduct])

  const products = [
    {
      id: 1,
      title: "Rimsha Labs",
      category: "Healthcare",
      status: "Completed",
      icon: <FaMobileAlt className="text-white text-2xl" />,
      description:
        "RIMSHA LAB offers a seamless and compassionate healthcare experience, providing expert diagnostic testing and a comprehensive range of medical services. Our dedicated team is committed to delivering timely, personalized, and reliable care, ensuring clear communication and support at every step of your healthcare journey. Whether you need to book a sample collection or explore our services, we are here to assist you with professionalism and care.",
      images: [
         "/Rimsh-tumbnail.png",
        "/Rimsha-1.png",
        "/Rimsha-2.png",
        "/Rimsha-3.png",
      ],
      keyFeatures: [
        "Wide range of diagnostic tests",
        "Accurate and timely test reports",
        "State-of-the-art lab equipment",
        "Expert-certified analysis",
        "Online report access",
        "Home sample collection",
        "Affordable pricing",
        "Confidential and secure results",
      ],
      technologies: ["Next js", "Strapi", "Shadcn Ui", "Vercel"],
      rating: 4.8,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "PATHOLOGY LAB MANAGEMENT SYSTEM",
      category: "Government",
      status: "ongoing",
      progress: 30,
      icon: <FaGlobe className="text-white text-2xl" />,
      description:
        "PATHOLOGY LAB MANAGEMENT SYSTEM is a comprehensive digital solution designed to streamline diagnostic lab operations, from patient registration to report generation. Our system enhances efficiency, accuracy, and patient care with automated workflows, real-time data tracking, and secure record management—empowering healthcare providers to deliver faster, more reliable diagnostic services.",
      images: [
               "/Lab-tumbnail.webp",
        "/Lab-1.png",
        "/Lab-2.png",
        "/Lab-3.png",
        "/Lab-4.png",

      ],
      keyFeatures: [
        "End-to-end patient registration (demographics, contact, referring doctor)",
        "Automated report generation with standardized templates",
        "Real-time dashboard analytics (patient volume, test stats, gender distribution)",
        "Test management (tracking, scheduling, result entry)",
        "Secure patient data storage (HIPAA/GDPR compliant)",
        "Bulk/batch processing for high-volume labs",
        "Integration with lab equipment for direct result uploads",
        "Multi-user access with role-based permissions",
        "Trend visualization (e.g., patient gender ratios, test frequencies)",
        "Searchable patient/test database with filters",
      ],
      technologies: ["React", "Node.js", "MongoDB", "IoT", "AWS", "Docker"],
      rating: 4.9,
      color: "from-green-500 to-green-600",
    },
    {
      id: 3,
      title: "Ahmed Travel",
      category: "E-Commerce",
      status: "ongoing",
      progress: 40,
      icon: <FaTicketAlt className="text-white text-2xl" />,
      description:
        "Ahmed Travel provides a seamless and reliable online bus ticket booking platform, connecting travelers to their favorite destinations with ease. Enjoy hassle-free reservations, competitive prices, and real-time updates—all designed to make your journey smooth and convenient.",
      images: [
       "/Ahmed-tumbnail.webp",
        "/Ahmed-1.png",
        "/Ahmed-2.png",
        "/Ahmed-3.png",
      ],
      keyFeatures: [
        "Easy online bus ticket booking",
        "Real-time seat availability & selection",
        "Multiple payment options (cards, mobile wallets, cash)",
        "Instant e-tickets & SMS confirmations",
        "Route & schedule search with filters",
        "Customer support (24/7 helpline)",
        "Secure and user-friendly platform",
        "Discounts & promotional offers",
        "Cancellation & refund policy",
        "Multi-language support (if applicable)",
      ],
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Redis", "AWS", "Elasticsearch"],
      rating: 4.7,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 4,
      title: "Umrah Booking System",
      category: "SaaS",
      status: "ongoing",
      progress: 50,
      icon: <FaPlane className="text-white text-2xl" />,
      description:
        "Umrah Booking System is a specialized platform for travel agencies to manage Umrah/Hajj pilgrimages, streamlining flight/hotel bookings, group registrations, and payment tracking. It ensures compliance with Islamic travel requirements while offering real-time itinerary updates and cost management.",
      images: [
        "/Umrah-tumbnail.png",
        "/Umrah-1.jpeg",
        "/Umrah-2.jpeg",
        "/Umrah-3.jpeg",
        "/Umrah-4.jpeg",
      ],
      keyFeatures: [
        "End-to-end Umrah package bookings (flights + hotels)",
        "Group/Family traveler management (adults/youth/children)",
        "Visa processing & documentation support",
        "Real-time cost breakdowns (base fare, taxes, net total)",
        "Multi-city itinerary planning (Medina/Makkah)",
        "Payment tracking & refund management",
        "Admin dashboard for booking analytics",
        "Secure customer data (PCI-DSS compliant)",
        "Customizable packages (economy/luxury)",
        "24/7 customer support",
      ],
      technologies: ["Next js", "Strapi", "PostgreSQL", "Shadcn Ui", "Docker"],
      rating: 4.6,
      color: "from-orange-500 to-orange-600",
    },
  ]

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="relative">
            {star <= Math.floor(rating) ? (
              <BsStarFill className="text-yellow-400 w-5 h-5" />
            ) : star === Math.ceil(rating) && rating % 1 !== 0 ? (
              <div className="relative">
                <BsStar className="text-gray-300 w-5 h-5" />
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${(rating % 1) * 100}%` }}>
                  <BsStarFill className="text-yellow-400 w-5 h-5" />
                </div>
              </div>
            ) : (
              <BsStar className="text-gray-300 w-5 h-5" />
            )}
          </div>
        ))}
        <span className="ml-2 text-gray-600 dark:text-gray-400 font-medium">{rating}</span>
      </div>
    )
  }

  const getStatusBadge = (status: string, progress?: number) => {
    switch (status.toLowerCase()) {
      case "completed":
        return (
          <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold shadow-lg">
            Completed
          </span>
        )
      case "ongoing":
        return (
          <span className="px-4 py-2 bg-yellow-500 text-white rounded-full text-sm font-semibold shadow-lg">
            {progress ? `${progress}% Completed` : "In Progress"}
          </span>
        )
      default:
        return (
          <span className="px-4 py-2 bg-gray-500 text-white rounded-full text-sm font-semibold shadow-lg">
            {status}
          </span>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-indigo-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full filter blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Products
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover our innovative software solutions that transform businesses
            </motion.p>
            <motion.div
              className="flex items-center justify-center space-x-6 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm">Products</div>
              </div>
              <div className="w-px h-8 bg-blue-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Industries</div>
              </div>
              <div className="w-px h-8 bg-blue-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.7</div>
                <div className="text-sm">Avg Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Products Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-600 sticky top-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Products</h3>
                  <div className="space-y-3">
                    {products.map((product, index) => (
                      <motion.button
                        key={product.id}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                          activeProduct === index
                            ? "bg-gradient-to-r " + product.color + " text-white shadow-lg scale-105"
                            : "bg-gray-50 dark:bg-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-500 hover:scale-102"
                        }`}
                        onClick={() => setActiveProduct(index)}
                        onMouseEnter={() => setHoveredProduct(index)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={productsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div
                              className={`p-3 rounded-lg mr-3 ${
                                activeProduct === index
                                  ? "bg-white/20"
                                  : "bg-gradient-to-r " + product.color + " shadow-md"
                              }`}
                            >
                              {activeProduct === index ? (
                                product.icon
                              ) : (
                                <div className="text-white">{product.icon}</div>
                              )}
                            </div>
                            <div>
                              <div className="font-semibold text-sm">{product.title}</div>
                              <div className="text-xs opacity-75">{product.category}</div>
                            </div>
                          </div>
                          {activeProduct === index && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          )}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="lg:col-span-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct}
                    className="bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Product Header with Image Carousel */}
                    <div className="relative h-80 md:h-96 overflow-hidden">
                      <div className="relative w-full h-full">
                        <Image
                          src={
                            products[activeProduct].images[currentImageIndex] || "/placeholder.svg?height=400&width=600"
                          }
                          alt={`${products[activeProduct].title} - Image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Carousel Navigation */}
                        {products[activeProduct].images.length > 1 && (
                          <>
                            <button
                              onClick={() =>
                                setCurrentImageIndex((prev) =>
                                  prev === 0 ? products[activeProduct].images.length - 1 : prev - 1,
                                )
                              }
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm"
                            >
                              <FaChevronLeft className="text-lg" />
                            </button>
                            <button
                              onClick={() =>
                                setCurrentImageIndex((prev) =>
                                  prev === products[activeProduct].images.length - 1 ? 0 : prev + 1,
                                )
                              }
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all backdrop-blur-sm"
                            >
                              <FaChevronRight className="text-lg" />
                            </button>
                          </>
                        )}

                        {/* Image Indicators */}
                        {products[activeProduct].images.length > 1 && (
                          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {products[activeProduct].images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                  currentImageIndex === index ? "bg-white" : "bg-white/50 hover:bg-white/75"
                                }`}
                              />
                            ))}
                          </div>
                        )}

                        {/* Thumbnail Strip */}
                        {products[activeProduct].images.length > 1 && (
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
                              {products[activeProduct].images.map((image, index) => (
                                <button
                                  key={index}
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                                    currentImageIndex === index
                                      ? "border-white shadow-lg"
                                      : "border-white/50 hover:border-white/75"
                                  }`}
                                >
                                  <Image
                                    src={image || "/placeholder.svg?height=48&width=64"}
                                    alt={`Thumbnail ${index + 1}`}
                                    width={64}
                                    height={48}
                                    className="w-full h-full object-cover"
                                  />
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Floating Status Badge */}
                      <div className="absolute top-6 right-6">
                        {getStatusBadge(products[activeProduct].status, products[activeProduct].progress)}
                      </div>

                      {/* Product Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="flex items-center mb-4">
                              <div
                                className={`p-4 rounded-xl bg-gradient-to-r ${products[activeProduct].color} shadow-lg mr-4`}
                              >
                                {products[activeProduct].icon}
                              </div>
                              <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                  {products[activeProduct].title}
                                </h2>
                                <div className="flex items-center space-x-4">
                                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                                    {products[activeProduct].category}
                                  </span>
                                  <StarRating rating={products[activeProduct].rating} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <motion.button
                            className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaPlay className="text-lg" />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar for Ongoing Projects */}
                    {products[activeProduct].status === "ongoing" && (
                      <div className="px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            Development Progress
                          </span>
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                            {products[activeProduct].progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${products[activeProduct].color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${products[activeProduct].progress}%` }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                          ></motion.div>
                        </div>
                      </div>
                    )}

                    {/* Product Content */}
                    <div className="p-8">
                      {/* Description */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About This Product</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                          {products[activeProduct].description}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {products[activeProduct].keyFeatures.map((feature, index) => (
                            <motion.div
                              key={index}
                              className="flex items-center p-4 bg-gray-50 dark:bg-gray-600 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-500 transition-colors"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${products[activeProduct].color} mr-3`}>
                                <FaCheck className="text-white text-sm" />
                              </div>
                              <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Technologies Used</h3>
                        <div className="flex flex-wrap gap-3">
                          {products[activeProduct].technologies.map((tech, index) => (
                            <motion.span
                              key={index}
                              className={`px-4 py-2 bg-gradient-to-r ${products[activeProduct].color} text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow`}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our expertise in software development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                Start Your Project
              </motion.button>
             
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
