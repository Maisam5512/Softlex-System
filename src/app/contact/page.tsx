"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa"
import { sendContactForm } from "@/app/actions"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    budget: "",
    services: [] as string[],
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [activeField, setActiveField] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const services = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Solutions",
    "AI & Machine Learning",
    "DevOps Services",
    "Cybersecurity",
    "Consulting",
  ]

  const budgetOptions = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not sure yet",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleServiceToggle = (service: string) => {
    setFormState((prev) => {
      const services = [...prev.services]
      if (services.includes(service)) {
        return { ...prev, services: services.filter((s) => s !== service) }
      } else {
        return { ...prev, services: [...services, service] }
      }
    })
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    }

    if (formState.services.length === 0) {
      newErrors.services = "Please select at least one service"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await sendContactForm(formState)
      setSubmitStatus("success")

      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        budget: "",
        services: [],
      })

      // Scroll to top of form to show success message
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = (fieldName: string) => `
    w-full px-4 py-3 rounded-lg border 
    ${
      errors[fieldName]
        ? "border-red-500 dark:border-red-400 bg-red-50 dark:bg-red-900/10"
        : activeField === fieldName
          ? "border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/10"
          : "border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
    }
    text-gray-900 dark:text-white
    focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
    transition-all duration-300
  `

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
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let&apos;s discuss how we can bring your project to life
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Have a project in mind? Contact us today and let our team of experts help you bring your vision to
                  reality. We&apos;re here to answer any questions you may have.
                </p>

                <div className="space-y-6 mb-8">
                  <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">info@softlexsystems.com</p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                      <FaPhone />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Call Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </motion.div>

                  <motion.div className="flex items-start" whileHover={{ x: 5 }}>
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Visit Us</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        123 Tech Street, Suite 456
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
                      { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
                      { icon: <FaFacebook />, href: "https://facebook.com", label: "Facebook" },
                      { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                        aria-label={social.label}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>

                <AnimatePresence mode="wait">
                  {submitStatus === "success" ? (
                    <motion.div
                      className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 p-6 rounded-lg mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-green-200 dark:bg-green-800 rounded-full mr-3">
                          <FaCheck className="text-green-700 dark:text-green-300" />
                        </div>
                        <h3 className="text-lg font-semibold">Message Sent Successfully!</h3>
                      </div>
                      <p>Thank you for contacting us. We&apos;ve received your message and will get back to you shortly.</p>
                      <motion.button
                        className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                        onClick={() => setSubmitStatus("idle")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Send Another Message
                      </motion.button>
                    </motion.div>
                  ) : submitStatus === "error" ? (
                    <motion.div
                      className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 p-6 rounded-lg mb-6"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-red-200 dark:bg-red-800 rounded-full mr-3">
                          <FaExclamationTriangle className="text-red-700 dark:text-red-300" />
                        </div>
                        <h3 className="text-lg font-semibold">Something Went Wrong</h3>
                      </div>
                      <p>We couldn&apos;t send your message. Please try again or contact us directly via email or phone.</p>
                      <motion.button
                        className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                        onClick={() => setSubmitStatus("idle")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Try Again
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      ref={formRef}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              onFocus={() => setActiveField("name")}
                              onBlur={() => setActiveField(null)}
                              className={inputClasses("name")}
                              placeholder="John Doe"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                          </motion.div>
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleChange}
                              onFocus={() => setActiveField("email")}
                              onBlur={() => setActiveField(null)}
                              className={inputClasses("email")}
                              placeholder="john@example.com"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                          </motion.div>
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                            Phone Number
                          </label>
                          <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formState.phone}
                              onChange={handleChange}
                              onFocus={() => setActiveField("phone")}
                              onBlur={() => setActiveField(null)}
                              className={inputClasses("phone")}
                              placeholder="+1 (555) 123-4567"
                            />
                          </motion.div>
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                            Company Name
                          </label>
                          <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formState.company}
                              onChange={handleChange}
                              onFocus={() => setActiveField("company")}
                              onBlur={() => setActiveField(null)}
                              className={inputClasses("company")}
                              placeholder="Your Company"
                            />
                          </motion.div>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                          Subject
                        </label>
                        <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formState.subject}
                            onChange={handleChange}
                            onFocus={() => setActiveField("subject")}
                            onBlur={() => setActiveField(null)}
                            className={inputClasses("subject")}
                            placeholder="Project Inquiry"
                          />
                        </motion.div>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                          Budget Range
                        </label>
                        <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                          <select
                            id="budget"
                            name="budget"
                            value={formState.budget}
                            onChange={handleChange}
                            onFocus={() => setActiveField("budget")}
                            onBlur={() => setActiveField(null)}
                            className={inputClasses("budget")}
                          >
                            <option value="" disabled>
                              Select your budget range
                            </option>
                            {budgetOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        </motion.div>
                      </div>

                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                          Services You&apos;re Interested In <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                          {services.map((service) => (
                            <motion.div
                              key={service}
                              className={`
                                flex items-center p-3 rounded-lg cursor-pointer border
                                ${
                                  formState.services.includes(service)
                                    ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700"
                                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                                }
                                transition-colors duration-200
                              `}
                              onClick={() => handleServiceToggle(service)}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div
                                className={`w-5 h-5 mr-3 flex-shrink-0 rounded border ${
                                  formState.services.includes(service)
                                    ? "bg-blue-500 border-blue-500 dark:bg-blue-600 dark:border-blue-600"
                                    : "border-gray-300 dark:border-gray-600"
                                }`}
                              >
                                {formState.services.includes(service) && (
                                  <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M5 13l4 4L19 7"
                                    ></path>
                                  </svg>
                                )}
                              </div>
                              <span className="text-gray-700 dark:text-gray-300">{service}</span>
                            </motion.div>
                          ))}
                        </div>
                        {errors.services && <p className="text-red-500 text-sm mt-2">{errors.services}</p>}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                          Project Details <span className="text-red-500">*</span>
                        </label>
                        <motion.div whileFocus={{ scale: 1.01 }} className="relative">
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleChange}
                            onFocus={() => setActiveField("message")}
                            onBlur={() => setActiveField(null)}
                            className={`${inputClasses("message")} min-h-[150px] resize-y`}
                            placeholder="Tell us about your project, goals, and timeline..."
                            rows={5}
                          ></textarea>
                          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </motion.div>
                      </div>

                      <motion.button
                        type="submit"
                        className={`
                          w-full py-3 px-6 rounded-lg font-medium text-white
                          ${
                            isSubmitting
                              ? "bg-blue-400 dark:bg-blue-600 cursor-not-allowed"
                              : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                          }
                          transition-colors duration-300 flex items-center justify-center
                        `}
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Location</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Visit our office to discuss your project in person
            </p>
          </motion.div>

          <motion.div
            className="rounded-xl overflow-hidden shadow-lg h-[400px] relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968173775!2d-122.40058672393326!3d37.78774771469164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085d0cec7c5%3A0x75a0c2f7eb4c4b1e!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Softlex Systems Office Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about contacting us
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How quickly will you respond to my inquiry?",
                  answer:
                    "We typically respond to all inquiries within 24 business hours. For urgent matters, please call our office directly.",
                },
                {
                  question: "Do you work with clients internationally?",
                  answer:
                    "Yes, we work with clients from all over the world. Our team is experienced in remote collaboration and can accommodate different time zones.",
                },
                {
                  question: "What information should I include in my project inquiry?",
                  answer:
                    "To help us provide the most accurate response, please include details about your project goals, timeline, budget range, and any specific requirements or technologies you're interested in.",
                },
                {
                  question: "Can I schedule a consultation before committing to a project?",
                  answer:
                    "We offer free initial consultations to discuss your project needs and determine if we're a good fit for your requirements. You can request a consultation through our contact form.",
                },
                {
                  question: "Do you sign NDAs before discussing project details?",
                  answer:
                    "Yes, we're happy to sign a Non-Disclosure Agreement (NDA) before discussing sensitive project details. Just mention this in your inquiry, and we'll arrange it.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden"
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-blue-100 mb-8">Contact us today and let&apos;s turn your vision into reality.</p>

            <motion.a
              href="#contact-form"
              className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
