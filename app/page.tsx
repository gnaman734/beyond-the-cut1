"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Camera, Film, Lightbulb, Play, Users, VideoIcon } from "lucide-react"
import Web3Timeline from "@/components/web3-timeline"
import TestimonialCard from "@/components/testimonial-card"
import FeatureCard from "@/components/feature-card"
import { useState } from "react"
import { X } from "lucide-react"
import VideoPlayer from "@/components/video-player"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])

  // Generate random particles for hero section
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 2,
  }))

  // Add state for showreel modal
  const [showreelOpen, setShowreelOpen] = useState(false)
  const [projectVideos, setProjectVideos] = useState([{ showVideo: false }, { showVideo: false }, { showVideo: false }])

  const handleShowVideo = (index: number) => {
    const newProjectVideos = [...projectVideos]
    newProjectVideos[index] = { showVideo: true }
    setProjectVideos(newProjectVideos)
  }

  const handleCloseVideo = (index: number) => {
    const newProjectVideos = [...projectVideos]
    newProjectVideos[index] = { showVideo: false }
    setProjectVideos(newProjectVideos)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Web3 grid background */}
        <div className="absolute inset-0 cyber-grid opacity-20"></div>

        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-rich-black/90 to-rich-black"></div>
        </div>

        {/* Animated particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-cinematic-blue"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
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

        {/* Decorative elements */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cinematic-blue/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-deep-red/30 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="container relative z-10 px-4 py-24 md:py-32 lg:py-40">
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
                <Link href="/join-cohort">
                  <Button 
                    className="px-4 py-1 rounded-full bg-rich-black/90 text-white text-sm font-medium hover:bg-rich-black/80 transition-all duration-300"
                  >
                  Applications Open Now
                  </Button>
                </Link>
              </div>
            </motion.div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-white">
              Master the Art of{" "}
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
                Filmmaking
              </motion.span>
            </h1>

            <p className="mb-8 text-lg text-cool-gray md:text-xl">
              Join our exclusive cohort and learn from industry professionals. Transform your passion into a career with
              hands-on experience and personalized mentorship.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/join-cohort">
              <Button className="w-full sm:w-auto group relative overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cinematic-blue via-neon-purple to-deep-red bg-[length:200%_200%] animate-gradient"></span>
                <span className="relative z-10 text-white font-medium">Apply Now</span>
              </Button>
              </Link>

              <Button
                variant="outline"
                className="w-full border-cinematic-blue/50 text-white hover:bg-cinematic-blue/10 hover:text-cinematic-blue hover:border-cinematic-blue sm:w-auto group"
                onClick={() => setShowreelOpen(true)}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="mr-2 h-4 w-4 text-cinematic-blue group-hover:text-cinematic-blue"
                >
                  <Play className="h-4 w-4" />
                </motion.div>
                Watch Showreel
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-8 flex flex-col items-center"
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <div className="text-cinematic-blue text-sm mb-2">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-cinematic-blue rounded-full flex justify-center p-1">
            <motion.div
              className="w-1 h-1 bg-cinematic-blue rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Web3 grid background */}
        <div className="absolute inset-0 cyber-grid opacity-10"></div>

        {/* Animated background elements */}
        <motion.div
          className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-deep-red/10 blur-3xl"
          style={{ y }}
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
          className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-cinematic-blue/10 blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-4 text-3xl font-bold md:text-4xl text-white"
            >
              Why Choose Our <span className="text-cinematic-blue animate-glow">Cohort</span>?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-2xl text-cool-gray"
            >
              Our comprehensive program is designed to give you the skills, knowledge, and connections needed to succeed
              in the film industry.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Hands-on Experience"
              description="Work with professional equipment and create real projects for your portfolio."
              icon={Camera}
              delay={0.1}
              color="cinematic-blue"
              hoverColor="neon-green"
            />
            <FeatureCard
              title="Industry Mentors"
              description="Learn directly from experienced filmmakers who have worked on major productions."
              icon={Users}
              delay={0.2}
              color="neon-purple"
              hoverColor="cyber-pink"
            />
            <FeatureCard
              title="Creative Freedom"
              description="Develop your unique style while receiving professional guidance and feedback."
              icon={Lightbulb}
              delay={0.3}
              color="warm-yellow"
              hoverColor="deep-red"
            />
            <FeatureCard
              title="Complete Production"
              description="Learn every aspect of filmmaking from pre-production to post-production."
              icon={VideoIcon}
              delay={0.4}
              color="deep-red"
              hoverColor="cinematic-blue"
            />
            <FeatureCard
              title="Industry Recognition"
              description="Graduate with a portfolio that stands out to potential employers and clients."
              icon={Award}
              delay={0.5}
              color="cyber-pink"
              hoverColor="neon-purple"
            />
            <FeatureCard
              title="Festival Submissions"
              description="Get guidance on submitting your work to film festivals and competitions."
              icon={Film}
              delay={0.6}
              color="neon-green"
              hoverColor="warm-yellow"
            />
          </div>
        </div>
      </section>

      {/* Learning Journey Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Web3 grid background */}
        <div className="absolute inset-0 cyber-grid opacity-10"></div>

        {/* Animated background elements */}
        <motion.div
          className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-deep-red/10 blur-3xl"
          style={{ y }}
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
          className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-cinematic-blue/10 blur-3xl"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <div className="container px-4 md:px-6 relative z-10">
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-4 text-3xl font-bold md:text-4xl text-white"
            >
              Your Learning <span className="text-cinematic-blue animate-glow">Journey</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-2xl text-cool-gray"
            >
              Our structured curriculum takes you from fundamentals to mastery in just 12 weeks
            </motion.p>
          </div>

      <Web3Timeline />
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Web3 grid background */}
        <div className="absolute inset-0 cyber-grid opacity-10"></div>

        {/* Decorative elements */}
        <motion.div
          className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-deep-red/10 blur-3xl"
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
          className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-cinematic-blue/10 blur-3xl"
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
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-4 text-3xl font-bold md:text-4xl text-white"
            >
              What Our <span className="text-cinematic-blue animate-glow">Alumni</span> Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-2xl text-cool-gray"
            >
              Hear from filmmakers who have completed our program and are now working in the industry.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Akash Majumbdar"
              role="Cinematographer, 'The Dark Hour'"
              quote="This cohort changed my life. I went from shooting amateur videos to working on a Netflix production within a year of graduating."
              imageSrc="/placeholder1.png"
              delay={0.1}
            />
            <TestimonialCard
              name="Tharun Naik"
              role="Director, 'Echoes'"
              quote="The mentorship I received was invaluable. My short film won at three festivals, and I'm now directing my first feature."
              imageSrc="/placeholder2.png"
              delay={0.2}
            />
            <TestimonialCard
              name="Sanko Kun"
              role="Editor, 'Midnight Tales'"
              quote="The hands-on approach to learning post-production gave me skills that set me apart. I was hired immediately after the program."
              imageSrc="/placeholder3.png"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Web3 grid background */}
        <div className="absolute inset-0 cyber-grid opacity-10"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="mb-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-4 text-3xl font-bold md:text-4xl text-white"
            >
              Student <span className="text-cinematic-blue animate-glow">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto max-w-2xl text-cool-gray"
            >
              See the amazing work created by our students during the cohort program
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "The Last Light",
                student: "Akash Majumder",
                image: "/placeholder1.png",
                video: "/videos/project1.mp4",
              },
              {
                title: "Echoes of Tomorrow",
                student: "Tharun Naik",
                image: "/placeholder2.png",
                video: "/videos/project2.mp4",
              },
              {
                title: "Beyond the Horizon",
                student: "Sanko Kun",
                image: "/placeholder3.png",
                video: "/videos/project3.mp4",
              },
            ].map((project, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl border border-cinematic-blue/20 hover:border-cinematic-blue/50 transition-all duration-300"
                >
                  {projectVideos[index].showVideo ? (
                    <VideoPlayer src={project.video} title={project.title} aspectRatio="16/9" autoPlay />
                  ) : (
                    <>
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-rich-black/90 via-rich-black/40 to-transparent p-6 flex flex-col justify-end">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-cool-gray">{project.student}</p>
                        <div className="mt-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                          <Button
                            size="sm"
                            className="bg-cinematic-blue hover:bg-cinematic-blue/80 relative overflow-hidden group"
                            onClick={() => handleShowVideo(index)}
                          >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cinematic-blue via-neon-purple to-cinematic-blue bg-[length:200%_100%] group-hover:animate-[gradient_3s_ease_infinite]"></span>
                            <span className="relative z-10 flex items-center">
                              <Play className="mr-2 h-4 w-4" /> Watch Now
                            </span>
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Web3 grid background */}
        <div className="absolute inset-0 cyber-grid opacity-10"></div>

        {/* Decorative elements */}
        <motion.div
          className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-deep-red/10 blur-3xl"
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
          className="absolute right-1/3 bottom-0 h-96 w-96 rounded-full bg-cinematic-blue/10 blur-3xl"
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-3xl border border-cinematic-blue/30 bg-rich-black/40 backdrop-blur-lg p-8 md:p-12 shadow-lg shadow-cinematic-blue/10"
          >
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-white">
                Ready to Start Your <span className="text-cinematic-blue animate-glow">Filmmaking</span> Journey?
              </h2>
              <p className="mb-8 text-cool-gray">
                Applications for our next cohort are now open. Limited spots available to ensure personalized attention.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/join-cohort">
                <Button className="w-full sm:w-auto relative overflow-hidden group">
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cinematic-blue via-neon-purple to-cinematic-blue bg-[length:200%_100%] animate-[gradient_3s_ease_infinite]"></span>
                  <span className="relative z-10 text-white font-medium">Apply Now</span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {showreelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rich-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowreelOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-cinematic-blue transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <VideoPlayer src="/videos/showreel.mp4" title="CineCraft Showreel 2023" aspectRatio="16/9" autoPlay />
          </div>
        </div>
      )}
    </div>
  )
}
