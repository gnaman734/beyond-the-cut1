"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { Camera, Film, Users, VideoIcon, ArrowRight, CheckCircle2 } from "lucide-react"

export default function JoinCohort() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    goals: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        portfolio: "",
        goals: "",
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Generate random particles for background
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 2,
  }))

  return (
    <div className="flex flex-col">
      {/* Animated background particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="fixed rounded-full bg-cinematic-blue"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            zIndex: 0,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Hero Section */}
      <section className="bg-rich-black py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-deep-red/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-cinematic-blue/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mb-6 inline-block"
            >
              <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-cinematic-blue via-neon-purple to-deep-red">
                <span className="px-4 py-1 rounded-full bg-rich-black/90 text-white text-sm font-medium">
                  Applications Open
                </span>
              </div>
            </motion.div>

            <h1 className="mb-4 text-3xl font-bold md:text-5xl">
              Join Our{" "}
              <motion.span
                className="holographic relative inline-block"
                animate={{
                  color: ["#00B4FF", "#9D4EDD", "#FF3A5E", "#00B4FF"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                Filmmaking Cohort
              </motion.span>
            </h1>
            <p className="mb-8 text-lg text-cool-gray">
              Take your filmmaking skills to the next level with our comprehensive 12-week program.
              Learn from industry professionals and create your own masterpiece.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="bg-gradient-to-b from-rich-black to-gray-900 py-16 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center text-2xl font-bold md:text-3xl"
          >
            Program <span className="text-cinematic-blue animate-glow">Highlights</span>
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Camera,
                title: "Hands-on Training",
                description: "Learn with professional equipment and get real-world experience.",
                color: "from-cinematic-blue/20 to-neon-purple/10"
              },
              {
                icon: Users,
                title: "Expert Mentorship",
                description: "Get guidance from industry professionals with years of experience.",
                color: "from-neon-purple/20 to-cyan-500/10"
              },
              {
                icon: Film,
                title: "Project Creation",
                description: "Create your own film project from concept to final cut.",
                color: "from-cyan-500/20 to-teal-400/10"
              },
              {
                icon: VideoIcon,
                title: "Industry Exposure",
                description: "Network with professionals and showcase your work.",
                color: "from-teal-400/20 to-cinematic-blue/10"
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-rich-black to-gray-900 p-6 transition-all duration-300 hover:border-cinematic-blue"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br border border-gray-800 group-hover:border-cinematic-blue transition-all duration-500 -z-10"></div>
                
                {/* Colored gradient background */}
                <div className={`absolute inset-2 rounded-2xl bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10`}></div>
                
                {/* Icon with glow effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-cinematic-blue/10 rounded-full blur-xl scale-0 group-hover:scale-150 transition-all duration-700"></div>
                  <motion.div 
                    className="relative mb-4 w-16 h-16 flex items-center justify-center bg-gray-900/80 rounded-full border border-gray-800 group-hover:border-cinematic-blue"
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 2, ease: "linear" }
                    }}
                  >
                    <highlight.icon className="h-8 w-8 text-cinematic-blue" />
                  </motion.div>
                </div>

                <h3 className="mb-2 text-xl font-bold group-hover:text-cinematic-blue transition-colors duration-300">
                  {highlight.title}
                </h3>

                <p className="text-cool-gray">{highlight.description}</p>
                
                {/* Subtle animated line under title */}
                <motion.div
                  className="h-0.5 w-0 bg-gradient-to-r from-cinematic-blue via-neon-purple to-cyan-500 mt-1 mb-3"
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-rich-black py-16">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-8 backdrop-blur-sm"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 text-center text-2xl font-bold md:text-3xl"
            >
              Apply <span className="text-cinematic-blue animate-glow">Now</span>
            </motion.h2>
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Application Submitted!</h3>
                <p className="text-cool-gray">We'll review your application and get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-2"
                >
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-gray-900/50 border-gray-800 focus:border-cinematic-blue transition-colors duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-2"
                >
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="bg-gray-900/50 border-gray-800 focus:border-cinematic-blue transition-colors duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-2"
                >
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="bg-gray-900/50 border-gray-800 focus:border-cinematic-blue transition-colors duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="space-y-2"
                >
                  <Label htmlFor="experience">Filmmaking Experience</Label>
                  <Textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Tell us about your filmmaking experience"
                    required
                    className="bg-gray-900/50 border-gray-800 focus:border-cinematic-blue transition-colors duration-300 min-h-[100px]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-2"
                >
                  <Label htmlFor="portfolio">Portfolio Link</Label>
                  <Input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="Share your portfolio or showreel link"
                    className="bg-gray-900/50 border-gray-800 focus:border-cinematic-blue transition-colors duration-300"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="space-y-2"
                >
                  <Label htmlFor="goals">Your Goals</Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    placeholder="What do you hope to achieve through this program?"
                    required
                    className="bg-gray-900/50 border-gray-800 focus:border-cinematic-blue transition-colors duration-300 min-h-[100px]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cinematic-blue via-neon-purple to-deep-red bg-[length:200%_200%] animate-gradient text-white relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <ArrowRight className="h-4 w-4" />
                          </motion.div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Program Details */}
      <section className="bg-gradient-to-b from-rich-black to-gray-900 py-16">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
              Program <span className="text-cinematic-blue animate-glow">Details</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Duration",
                  content: "12 weeks of intensive training",
                  icon: "⏱️",
                },
                {
                  title: "Schedule",
                  content: "Monday to Friday, 10 AM to 4 PM",
                  icon: "📅",
                },
                {
                  title: "Location",
                  content: "Our state-of-the-art studio in the heart of the city",
                  icon: "📍",
                },
                {
                  title: "Investment",
                  content: "Contact us for detailed pricing and payment plans",
                  icon: "💰",
                },
              ].map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-6 backdrop-blur-sm hover:border-cinematic-blue transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{detail.icon}</div>
                  <h3 className="mb-2 text-xl font-bold group-hover:text-cinematic-blue transition-colors duration-300">
                    {detail.title}
                  </h3>
                  <p className="text-cool-gray">{detail.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 