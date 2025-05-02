"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  delay: number
  color: string
  hoverColor: string
}

export default function FeatureCard({ title, description, icon: Icon, delay, color, hoverColor }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl border border-cinematic-blue/20 bg-rich-black/40 backdrop-blur-sm p-6 transition-all duration-500 hover:border-cinematic-blue/50 hover:shadow-lg hover:shadow-cinematic-blue/10"
      whileHover={{ y: -5 }}
    >
      {/* Background glow effect */}
      <div
        className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-${color}/10 blur-2xl filter group-hover:bg-${hoverColor}/20 transition-all duration-700`}
      ></div>

      {/* Animated border corners */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-transparent group-hover:border-cinematic-blue transition-all duration-500 rounded-tl-md"></div>
      <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-transparent group-hover:border-cinematic-blue transition-all duration-500 rounded-tr-md"></div>
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-transparent group-hover:border-cinematic-blue transition-all duration-500 rounded-bl-md"></div>
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-transparent group-hover:border-cinematic-blue transition-all duration-500 rounded-br-md"></div>

      <div className="relative z-10">
        <div
          className={`mb-4 h-12 w-12 rounded-xl bg-${color} flex items-center justify-center shadow-lg shadow-${color}/30 group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>

        <h3
          className={`mb-2 text-xl font-bold text-white group-hover:text-${hoverColor} transition-colors duration-300`}
        >
          {title}
        </h3>

        <p className="text-cool-gray">{description}</p>
      </div>
    </motion.div>
  )
}
