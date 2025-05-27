"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  ChevronUp,
  ExternalLink,
  Heart,
} from "lucide-react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  // Check scroll position to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/product" },
//{ name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { icon: <Twitter size={18} />, href: "https://twitter.com", label: "Twitter", color: "#1DA1F2" },
    { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn", color: "#0A66C2" },
    { icon: <Github size={18} />, href: "https://github.com", label: "GitHub", color: "#333" },
    { icon: <Instagram size={18} />, href: "https://instagram.com", label: "Instagram", color: "#E4405F" },
    { icon: <Facebook size={18} />, href: "https://facebook.com", label: "Facebook", color: "#1877F2" },
  ]

  const contactInfo = [
    { icon: <MapPin size={18} />, text: "Lahore, Pakistan" },
    { icon: <Phone size={18} />, text: "+92-320-8468911" },
    { icon: <Mail size={18} />, text: "softlexsystem.co@gmail.com" },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform translate-y-[-98%]">
        <svg
          className="relative block w-full h-[50px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-50 dark:fill-gray-900"
          ></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="md:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm overflow-hidden">
                  <Image
                    src="/favicon.ico"
                    alt="Softlex Systems"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  Softlex System
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with innovative software solutions and cutting-edge technology. We transform ideas
                into powerful digital experiences.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Connect With Us
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
                    aria-label={social.label}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: social.color,
                      color: "#ffffff",
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseEnter={() => setActiveSection("links")}
            onMouseLeave={() => setActiveSection(null)}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-black dark:text-gray-400 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ x: 0 }}
                  animate={{
                    x: activeSection === "links" ? 5 : 0,
                    transition: { delay: index * 0.05 },
                  }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:translate-y-[-100%]">
                        {link.name}
                      </span>
                      <span className="absolute top-0 left-0 translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0 text-blue-600 dark:text-blue-400">
                        {link.name}
                      </span>
                    </span>
                    <ExternalLink
                      size={14}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onMouseEnter={() => setActiveSection("contact")}
            onMouseLeave={() => setActiveSection(null)}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-black dark:text-gray-400 mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3 group"
                  initial={{ x: 0 }}
                  animate={{
                    x: activeSection === "contact" ? 5 : 0,
                    transition: { delay: index * 0.05 },
                  }}
                >
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-50 dark:bg-gray-800 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-gray-700 transition-colors duration-300">
                    <span className="text-blue-600 dark:text-blue-400">{item.icon}</span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-600 dark:text-gray-400 text-sm flex items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              © {new Date().getFullYear()} Softlex Systems. Made with
              <motion.span
                className="text-red-500 mx-1"
                animate={{
                  scale: [1, 1.2, 1],
                  transition: { repeat: Number.POSITIVE_INFINITY, repeatDelay: 1 },
                }}
              >
                <Heart size={14} fill="currentColor" />
              </motion.span>
              in Pakistan
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link
                href="/privacy"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
              >
                <span>Privacy Policy</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/terms"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
              >
                <span>Terms of Service</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative group"
              >
                <span>Sitemap</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg z-50 hover:bg-blue-700"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

