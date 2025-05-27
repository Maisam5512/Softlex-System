"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaLaptopCode, FaMobileAlt, FaServer, FaRocket, FaChartLine, FaUsersCog } from "react-icons/fa"
import Image from "next/image"

export default function Home() {
  const [activeService, setActiveService] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 6)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: <FaLaptopCode className="text-blue-500 dark:text-blue-400 text-4xl md:text-5xl" />,
      title: "Web Development",
      description:
        "Custom web applications built with cutting-edge technologies for optimal performance and user experience.",
    },
    {
      icon: <FaMobileAlt className="text-blue-500 dark:text-blue-400 text-4xl md:text-5xl" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    },
    {
      icon: <FaServer className="text-blue-500 dark:text-blue-400 text-4xl md:text-5xl" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services that grow with your business needs.",
    },
    {
      icon: <FaRocket className="text-blue-500 dark:text-blue-400 text-4xl md:text-5xl" />,
      title: "DevOps",
      description: "Streamlined development operations with continuous integration and deployment pipelines.",
    },
    {
      icon: <FaChartLine className="text-blue-500 dark:text-blue-400 text-4xl md:text-5xl" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions.",
    },
    {
      icon: <FaUsersCog className="text-blue-500 dark:text-blue-400 text-4xl md:text-5xl" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to help your business leverage the right tools and processes.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 opacity-80"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-12"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div className="flex-1 text-center md:text-left" variants={itemVariants}>
              <motion.div
                className="inline-block mb-4 px-4 py-1 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-600 dark:text-blue-300 font-medium text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Innovative Software Solutions
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Empowering Your <span className="text-blue-600 dark:text-blue-400">Business</span> With Technology
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                We build custom software solutions that transform your ideas into digital success stories, helping your
                business grow and thrive in the digital age.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.button
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started
                </motion.button>

                <motion.button
                  className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 font-medium rounded-lg shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/services'}
                >
                  Our Services
                </motion.button>
              </div>
            </motion.div>

            <motion.div className="flex-1 relative" variants={itemVariants}>
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src="/Hero.png?height=500&width=500"
                  alt="Softlex Systems - Software Development"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 -left-10 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <FaLaptopCode className="text-blue-500 text-2xl" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 -right-5 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <FaMobileAlt className="text-blue-500 text-2xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of software development and IT services to meet your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeService === index
                    ? "bg-blue-50 dark:bg-blue-900/20 shadow-lg scale-105 border-2 border-blue-200 dark:border-blue-800"
                    : "bg-gray-50 dark:bg-gray-700/30 hover:shadow-md"
                }`}
                onClick={() => setActiveService(index)}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">How We Work</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our proven development process ensures high-quality results and client satisfaction.
            </p>
          </motion.div>

          <div className="relative">
            {/* Process line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900/50 transform -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 md:space-y-0 relative">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description:
                    "We start by understanding your business goals, target audience, and project requirements.",
                },
                {
                  number: "02",
                  title: "Planning",
                  description:
                    "Our team creates a detailed roadmap with timelines, milestones, and resource allocation.",
                },
                {
                  number: "03",
                  title: "Development",
                  description: "We build your solution using agile methodologies with regular updates and feedback.",
                },
                {
                  number: "04",
                  title: "Testing",
                  description: "Rigorous quality assurance ensures your product meets the highest standards.",
                },
                {
                  number: "05",
                  title: "Deployment",
                  description: "We launch your solution and provide training and documentation for smooth adoption.",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`flex-1 p-6 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>

                  <div className="relative flex items-center justify-center w-16 h-16 bg-blue-600 dark:bg-blue-700 rounded-full text-white font-bold text-xl z-10 my-4 md:my-0">
                    {step.number}
                    <div className="absolute w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full -z-10 animate-pulse"></div>
                  </div>

                  <div className="flex-1 p-6"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-indigo-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let&apos;s discuss how our software solutions can help you achieve your business goals.
            </p>

            <a href="/contact"><motion.button
              className="px-8 py-4 cursor-pointer bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             Schedule a Consultation
            </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
