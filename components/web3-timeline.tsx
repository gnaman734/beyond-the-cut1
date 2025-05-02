"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, Film, Lightbulb, Video, Award, Users } from "lucide-react";

const timelineItems = [
  {
    title: "Week 1-2: Fundamentals",
    description: "Master the basics of cinematography, lighting, and composition",
    icon: Camera,
    color: "bg-cinematic-blue",
    textColor: "text-cinematic-blue",
    shadowColor: "shadow-cinematic-blue/50",
    glowColor: "rgba(0, 180, 255, 0.5)",
  },
  {
    title: "Week 3-4: Storytelling",
    description: "Learn narrative structure and visual storytelling techniques",
    icon: Lightbulb,
    color: "bg-neon-purple",
    textColor: "text-neon-purple",
    shadowColor: "shadow-neon-purple/50",
    glowColor: "rgba(157, 78, 221, 0.5)",
  },
  {
    title: "Week 5-8: Production",
    description: "Hands-on experience with professional equipment and crew roles",
    icon: Film,
    color: "bg-deep-red",
    textColor: "text-deep-red",
    shadowColor: "shadow-deep-red/50",
    glowColor: "rgba(255, 58, 94, 0.5)",
  },
  {
    title: "Week 9-10: Post-Production",
    description: "Master editing, color grading, and sound design",
    icon: Video,
    color: "bg-neon-green",
    textColor: "text-neon-green",
    shadowColor: "shadow-neon-green/50",
    glowColor: "rgba(0, 255, 148, 0.5)",
  },
  {
    title: "Week 11-12: Industry Connections",
    description: "Network with professionals and prepare for job opportunities",
    icon: Users,
    color: "bg-warm-yellow",
    textColor: "text-warm-yellow",
    shadowColor: "shadow-warm-yellow/50",
    glowColor: "rgba(255, 214, 10, 0.5)",
  },
  {
    title: "Final Project",
    description: "Create a professional short film for your portfolio",
    icon: Award,
    color: "bg-cyber-pink",
    textColor: "text-cyber-pink",
    shadowColor: "shadow-cyber-pink/50",
    glowColor: "rgba(255, 0, 229, 0.5)",
  },
];

export default function Web3Timeline() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const itemProgresses = timelineItems.map((_, index) =>
    useTransform(scrollYProgress, [index / timelineItems.length, (index + 0.5) / timelineItems.length], [0, 1])
  );

  const itemScales = itemProgresses.map((itemProgress) => useTransform(itemProgress, [0, 1], [0.95, 1]));
  const itemOpacities = itemProgresses.map((itemProgress) => useTransform(itemProgress, [0, 1], [0.5, 1]));
  const itemXs = itemProgresses.map((itemProgress) => useTransform(itemProgress, [0, 1], [20, 0]));

  return (
    <section ref={containerRef} className="relative min-h-screen py-16 md:py-24 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                style={{
                  scale: itemScales[index],
                  opacity: itemOpacities[index],
                  x: itemXs[index],
                }}
                className="bg-rich-black/40 backdrop-blur-sm border border-cinematic-blue/20 rounded-2xl p-8 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`flex-shrink-0 w-12 h-12 ${item.color} rounded-xl flex items-center justify-center shadow-lg ${item.shadowColor}`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${item.textColor} mb-2`}>{item.title}</h3>
                    <p className="text-cool-gray">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-4 relative">
            <div className="sticky top-32">
              <div className="relative h-[calc(100vh-8rem)]">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cinematic-blue via-neon-purple to-deep-red"></div>
                
                <motion.div
                  className="absolute left-1/2 top-0 w-0.5 bg-white"
                  style={{
                    height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                    transform: "translateX(-50%)",
                  }}
                />

                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    style={{
                      top: `${(index * 100) / (timelineItems.length - 1)}%`,
                    }}
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <motion.div
                      className={`w-8 h-8 rounded-full ${item.color} shadow-lg ${item.shadowColor} flex items-center justify-center`}
                      style={{
                        scale: useTransform(scrollYProgress, 
                          [index / timelineItems.length, (index + 0.5) / timelineItems.length],
                          [1, 1.5]
                        ),
                        boxShadow: useTransform(scrollYProgress,
                          [index / timelineItems.length, (index + 0.5) / timelineItems.length],
                          [`0 0 0px ${item.glowColor}`, `0 0 20px ${item.glowColor}`]
                        ),
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className="h-5 w-5 text-white" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}