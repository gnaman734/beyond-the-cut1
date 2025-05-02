"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  imageSrc: string
  delay?: number
}

export default function TestimonialCard({ name, role, quote, imageSrc, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rich-black/80 to-rich-black/40 backdrop-blur-sm border border-cinematic-blue/20 p-6 shadow-xl hover:border-cinematic-blue/50 transition-all duration-300"
    >
      {/* Animated background glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-cinematic-blue/10 blur-3xl filter group-hover:bg-cinematic-blue/20 transition-all duration-700"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cinematic-blue rounded-full"
            initial={{ x: "50%", y: "100%" }}
            animate={{
              x: `${50 + (Math.random() * 40 - 20)}%`,
              y: `${-20 + Math.random() * 10}%`,
              opacity: [1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="mb-4 flex items-center gap-4 relative z-10">
        <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-cinematic-blue shadow-lg shadow-cinematic-blue/20">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={`${name} portrait`}
            width={56}
            height={56}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-sm text-cinematic-blue">{role}</p>
        </div>
      </div>

      <p className="relative text-cool-gray">
        <span className="absolute -left-2 -top-2 text-4xl text-cinematic-blue opacity-30">"</span>
        {quote}
        <span className="absolute -bottom-4 -right-2 text-4xl text-cinematic-blue opacity-30">"</span>
      </p>
    </motion.div>
  )
}
