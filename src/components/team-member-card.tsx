"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {teamMembers} from '@/data/Team members'

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
                {/* <p className="text-blue-300 mb-4">{member.role}</p> */}

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
            {/* <p className="text-gray-600 dark:text-gray-400 mb-3">{member.role}</p> */}

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

// Example usage component
export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Talented individuals working together to create amazing experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
