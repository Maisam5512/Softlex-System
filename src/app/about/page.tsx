"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaLightbulb,
  FaRocket,
  FaHandshake,
} from "react-icons/fa"
import { Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import{team} from '@/data/Team members'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  linkedin?: string
  github?: string
  bio?: string
}

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      key={member.id}
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
        <CardContent className="p-0">
          <div className="relative overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={member.image || "/placeholder.svg?height=400&width=400"}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay with social links */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="transform"
                initial={{ y: 20 }}
                animate={{ y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-blue-300 mb-4">{member.role}</p>

                {/* Social Links */}
                <div className="flex gap-3">
                  {member.linkedin && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
                      onClick={() => window.open(member.linkedin, "_blank")}
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  )}
                  {member.github && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm"
                      onClick={() => window.open(member.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Card Footer */}
          <div className="p-6 text-center bg-white dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-3">{member.role}</p>

            {member.bio && <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{member.bio}</p>}

            {/* Social Links for non-hover state */}
            <div className="flex justify-center gap-2">
              {member.linkedin && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(member.linkedin, "_blank")}
                  className="hover:bg-blue-50 hover:border-blue-300"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              )}
              {member.github && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(member.github, "_blank")}
                  className="hover:bg-gray-50 hover:border-gray-300"
                >
                  <Github className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission")

  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const tabs = [
    { id: "mission", label: "Our Mission" },
    { id: "vision", label: "Our Vision" },
    { id: "values", label: "Our Values" },
  ]

  const tabContent = {
    mission: {
      title: "Empowering Businesses Through Technology",
      description:
        "At Softlex Systems, our mission is to empower businesses of all sizes with innovative software solutions that drive growth, efficiency, and competitive advantage. We believe that technology should be an enabler, not a barrier, and we work tirelessly to create solutions that are both powerful and accessible.",
      icon: <FaRocket className="text-blue-500 dark:text-blue-400 text-4xl mb-4" />,
    },
    vision: {
      title: "Shaping the Digital Future",
      description:
        "We envision a world where every business can harness the full potential of technology to achieve their goals. Our vision is to be at the forefront of digital transformation, constantly innovating and pushing the boundaries of what's possible with software development.",
      icon: <FaLightbulb className="text-blue-500 dark:text-blue-400 text-4xl mb-4" />,
    },
    values: {
      title: "Our Core Values",
      description:
        "Excellence, innovation, integrity, and client success are the pillars of our company culture. We believe in building lasting relationships with our clients based on trust, transparency, and delivering exceptional results that exceed expectations.",
      icon: <FaHandshake className="text-blue-500 dark:text-blue-400 text-4xl mb-4" />,
    },
  }

  const expertise = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom web applications built with React, Next.js, and other modern frameworks.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <FaServer />,
      title: "Backend Systems",
      description: "Scalable and secure backend systems using Node.js, Python, and Java.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      description: "Optimized database architecture using SQL and NoSQL technologies.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Cloud-native applications and migration services for AWS, Azure, and GCP.",
    },
    {
      icon: <FaRobot />,
      title: "AI & Machine Learning",
      description: "Intelligent systems that learn and adapt to your business needs.",
    },
  ]

  // const team: TeamMember[] = [
  //   {
  //     id: 1,
  //     name: "Alex Johnson",
  //     role: "Founder & CEO",
  //     image: "/placeholder.svg?height=400&width=400",
  //     linkedin: "https://linkedin.com/in/alex-johnson",
  //     github: "https://github.com/alex-johnson",
  //     bio: "Visionary leader with 10+ years of experience in software development and business strategy.",
  //   },
  //   {
  //     id: 2,
  //     name: "Sarah Chen",
  //     role: "CTO",
  //     image: "/placeholder.svg?height=400&width=400",
  //     linkedin: "https://linkedin.com/in/sarah-chen",
  //     github: "https://github.com/sarah-chen",
  //     bio: "Technical expert specializing in scalable architecture and emerging technologies.",
  //   },
  //   {
  //     id: 3,
  //     name: "Michael Rodriguez",
  //     role: "Lead Developer",
  //     image: "/placeholder.svg?height=400&width=400",
  //     linkedin: "https://linkedin.com/in/michael-rodriguez",
  //     github: "https://github.com/michael-rodriguez",
  //     bio: "Full-stack developer passionate about clean code and innovative solutions.",
  //   },
  //   {
  //     id: 4,
  //     name: "Emily Patel",
  //     role: "UX Director",
  //     image: "/placeholder.svg?height=400&width=400",
  //     linkedin: "https://linkedin.com/in/emily-patel",
  //     github: "https://github.com/emily-patel",
  //     bio: "Creative designer focused on user-centered design and exceptional user experiences.",
  //   },
  // ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 opacity-90"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <motion.div
          className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center"
          style={{ opacity, scale, y }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-blue-600 dark:text-blue-400">Softlex Systems</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We&apos;re a team of passionate technologists dedicated to creating innovative software solutions that
            transform businesses and drive digital success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>

              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Soflex Systems was founded in 2024 by three close friends and passionate tech enthusiasts during our
                  undergraduate journey at COMSATS University Lahore. What began as small freelance gigs and late-night
                  coding sessions quickly grew into a vision: to build a company that delivers world-class digital
                  solutions from Pakistan to the rest of the world.
                </p>
                <p>
                  Driven by innovation, teamwork, and an unshakable belief in our skills, we transformed our dorm-room
                  startup into a full-service software development company. Today, Soflex Systems partners with clients
                  across the globe—from startups to enterprise brands—offering high-quality web, mobile, and custom
                  software solutions designed to solve real-world problems and fuel business growth.
                </p>
                <p>
                  At our core, we believe in continuous learning, adaptability, and putting people first. Our journey is
                  built on trust, collaboration, and a relentless pursuit of excellence. As we grow, our mission remains
                  clear: to empower businesses worldwide through cutting-edge technology, all proudly built from Lahore,
                  Pakistan.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl bg-black">
                <Image src="/story.png" alt="Softlex Systems Team" fill className="object-cover" />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-5 -right-5 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <FaCode className="text-blue-500 text-2xl" />
              </motion.div>

              <motion.div
                className="absolute -bottom-5 -left-5 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
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
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">What Drives Us</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our mission, vision, and values form the foundation of everything we do at Softlex Systems.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center mb-8">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`px-6 py-3 mx-2 mb-4 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center">
                {tabContent[activeTab as keyof typeof tabContent].icon}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {tabContent[activeTab as keyof typeof tabContent].title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {tabContent[activeTab as keyof typeof tabContent].description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We specialize in a wide range of technologies and services to deliver comprehensive software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  backgroundColor: "#EFF6FF",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Updated with Interactive Cards */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our talented team of experts is passionate about creating innovative software solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let&apos;s discuss how our software solutions can help you achieve your business goals.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.button
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
              >
                Schedule a Consultation
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

