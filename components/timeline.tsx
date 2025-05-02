"use client"

import { motion } from "framer-motion"
import { Camera, Film, Lightbulb, Video, Award, Users } from "lucide-react"

const timelineItems = [
  {
    title: "Week 1-2: Fundamentals",
    description: "Master the basics of cinematography, lighting, and composition",
    icon: <Camera className="h-6 w-6 text-warm-yellow" />,
  },
  {
    title: "Week 3-4: Storytelling",
    description: "Learn narrative structure and visual storytelling techniques",
    icon: <Lightbulb className="h-6 w-6 text-warm-yellow" />,
  },
  {
    title: "Week 5-8: Production",
    description: "Hands-on experience with professional equipment and crew roles",
    icon: <Film className="h-6 w-6 text-warm-yellow" />,
  },
  {
    title: "Week 9-10: Post-Production",
    description: "Master editing, color grading, and sound design",
    icon: <Video className="h-6 w-6 text-warm-yellow" />,
  },
  {
    title: "Week 11-12: Industry Connections",
    description: "Network with professionals and prepare for job opportunities",
    icon: <Users className="h-6 w-6 text-warm-yellow" />,
  },
  {
    title: "Final Project",
    description: "Create a professional short film for your portfolio",
    icon: <Award className="h-6 w-6 text-warm-yellow" />,
  },
]

export default function Timeline() {
  return (
    <div className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Your Learning Journey</h2>
          <p className="mb-8 text-lg text-cool-gray">
            Our structured curriculum takes you from fundamentals to mastery in just 12 weeks
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-deep-red via-cinematic-blue to-warm-yellow"></div>

          {/* Timeline items */}
          <div className="space-y-20">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-cool-gray">{item.description}</p>
                </div>

                {/* Icon */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rich-black border-2 border-deep-red">
                    {item.icon}
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
