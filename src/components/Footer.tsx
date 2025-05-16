"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa"

export default function Footer() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

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
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com", label: "GitHub" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
  ]

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Lahore, Pakistan" },
    { icon: <FaPhone />, text: "+92-320-8468911" },
    { icon: <FaEnvelope />, text: "info@softlexsystems.com" },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 border-t border-gray-200 dark:border-gray-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Softlex Systems</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Empowering businesses with innovative software solutions and cutting-edge technology.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm hover:shadow-md transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "#3B82F6",
                    color: "#ffffff",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center"
                    >
                      <motion.span
                        animate={{
                          color: hoverIndex === index ? "#3B82F6" : "",
                          fontWeight: hoverIndex === index ? "600" : "400",
                        }}
                      >
                        {link.name}
                      </motion.span>
                      {hoverIndex === index && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="ml-2 text-blue-600 dark:text-blue-400"
                        >
                          →
                        </motion.span>
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h3>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.li key={index} className="flex items-start" whileHover={{ x: 5 }}>
                    <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">{item.icon}</span>
                    <span className="text-gray-600 dark:text-gray-300">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Softlex Systems. All rights reserved.
            </p>

            <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 text-white shadow-lg z-50"
        whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  )
}
