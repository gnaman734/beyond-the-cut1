"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, BookOpen, Camera, Film, Lightbulb, Users } from "lucide-react"
import Link from "next/link"

export default function WhyUs() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black via-rich-black/90 to-rich-black"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-20 top-1/4 h-72 w-72 rounded-full bg-deep-red/20 blur-3xl"></div>
        <div className="absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-cinematic-blue/20 blur-3xl"></div>

        <div className="container relative z-10 px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
              Why Choose{" "}
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
                Beyond the Cut
              </motion.span>
            </h1>
            <p className="mb-8 text-lg text-cool-gray md:text-xl">
              Our unique approach to filmmaking education sets us apart from traditional film schools and online
              courses.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-rich-black py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4 text-3xl font-bold">
                Our{" "}
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
                  Philosophy
                </motion.span>
              </h2>
              <p className="mb-6 text-cool-gray">
                We believe that filmmaking is best learned through hands-on experience, mentorship, and community. Our
                cohort-based approach combines the best aspects of traditional film school with the flexibility and
                innovation of modern education.
              </p>
              <p className="text-cool-gray">
                Unlike traditional film schools that cost tens of thousands of dollars and take years to complete, our
                focused cohort program delivers practical skills and industry connections in a fraction of the time and
                cost.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[300px] overflow-hidden rounded-2xl md:h-[400px]"
            >
              <Image
                src="/cinema.png"
                alt="Filmmaking Philosophy"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-deep-red/20 to-cinematic-blue/20 opacity-60"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section className="bg-gradient-to-b from-rich-black to-gray-900 py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 h-96 w-96 rounded-full bg-deep-red/5 blur-3xl"></div>
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cinematic-blue/5 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Beyond the Cut{" "}
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
              Difference
            </motion.span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: BookOpen,
                title: "Project-Based Learning",
                description:
                  "Instead of theoretical lectures, you'll learn by creating actual films under professional guidance.",
                color: "from-cinematic-blue/20 to-neon-purple/10"
              },
              {
                icon: Users,
                title: "Small Cohort Size",
                description:
                  "We limit each cohort to 15 students to ensure personalized attention and meaningful connections.",
                color: "from-neon-purple/20 to-cyan-500/10"
              },
              {
                icon: Film,
                title: "Industry Mentors",
                description: "Learn from working professionals who bring real-world experience and connections.",
                color: "from-cyan-500/20 to-teal-400/10"
              },
              {
                icon: Camera,
                title: "Professional Equipment",
                description: "Get hands-on experience with industry-standard cameras, lighting, and sound equipment.",
                color: "from-teal-400/20 to-cinematic-blue/10"
              },
              {
                icon: Award,
                title: "Portfolio Development",
                description:
                  "Graduate with professional-quality work that showcases your skills to potential employers.",
                color: "from-cinematic-blue/20 to-neon-purple/10"
              },
              {
                icon: Lightbulb,
                title: "Career Support",
                description: "Receive ongoing guidance on job opportunities, freelance work, and building your career.",
                color: "from-neon-purple/20 to-teal-400/10"
              },
            ].map((item, index) => (
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
                <div className={`absolute inset-2 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10`}></div>
                
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
                    <item.icon className="h-8 w-8 text-cinematic-blue" />
                  </motion.div>
                </div>

                <h3 className="mb-2 text-xl font-bold group-hover:text-cinematic-blue transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-cool-gray">{item.description}</p>
                
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

      {/* Comparison */}
      <section className="bg-rich-black py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              How We{" "}
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
                Compare
              </motion.span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse rounded-2xl overflow-hidden">
                <thead>
                  <tr className="border-b border-gray-800 bg-gray-900/50">
                    <th className="p-4 text-left"></th>
                    <th className="p-4 text-center text-cinematic-blue">CineCraft Cohort</th>
                    <th className="p-4 text-center">Traditional Film School</th>
                    <th className="p-4 text-center">Online Courses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                    <td className="p-4 font-medium">Duration</td>
                    <td className="p-4 text-center">12-24 weeks</td>
                    <td className="p-4 text-center">2-4 years</td>
                    <td className="p-4 text-center">Self-paced</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                    <td className="p-4 font-medium">Cost</td>
                    <td className="p-4 text-center">₹4,999 - ₹5,999</td>
                    <td className="p-4 text-center">₹40,000 - ₹2,00,000+</td>
                    <td className="p-4 text-center">₹1,000 - ₹20,000</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                    <td className="p-4 font-medium">Hands-on Experience</td>
                    <td className="p-4 text-center">Extensive</td>
                    <td className="p-4 text-center">Limited until later years</td>
                    <td className="p-4 text-center">None</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                    <td className="p-4 font-medium">Mentorship</td>
                    <td className="p-4 text-center">1-on-1 with industry pros</td>
                    <td className="p-4 text-center">Limited access to professors</td>
                    <td className="p-4 text-center">Minimal to none</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                    <td className="p-4 font-medium">Equipment Access</td>
                    <td className="p-4 text-center">Included in Pro/Elite packages</td>
                    <td className="p-4 text-center">Limited availability</td>
                    <td className="p-4 text-center">Not provided</td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-900/30 transition-colors">
                    <td className="p-4 font-medium">Industry Connections</td>
                    <td className="p-4 text-center">Direct access to working pros</td>
                    <td className="p-4 text-center">Varies by school</td>
                    <td className="p-4 text-center">None</td>
                  </tr>
                  <tr className="hover:bg-gray-900/30 transition-colors">
                    <td className="p-4 font-medium">Job Placement</td>
                    <td className="p-4 text-center">Active support and referrals</td>
                    <td className="p-4 text-center">Basic career services</td>
                    <td className="p-4 text-center">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instructor Profiles */}
      <section className="bg-gradient-to-b from-rich-black to-gray-900 py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-1/4 bottom-0 h-96 w-96 rounded-full bg-deep-red/5 blur-3xl"></div>
        <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-cinematic-blue/5 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Meet Our{" "}
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
              Instructors
            </motion.span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Akash Majumbdar",
                role: "Director & Cinematographer",
                bio: "Award-winning director with credits on Netflix and HBO. Michael has directed three feature films and numerous commercials for major brands.",
                skills: ["Directing", "Cinematography", "Lighting"],
                image: "/placeholder1.png",
                color: "from-cinematic-blue/20 to-neon-purple/10"
              },
              {
                name: "Tharun Naik",
                role: "Producer & Screenwriter",
                bio: "Experienced producer with over 15 years in the industry. Sarah has produced content for Disney, Amazon, and independent films that have premiered at Sundance.",
                skills: ["Producing", "Screenwriting", "Development"],
                image: "/placeholder2.png",
                color: "from-neon-purple/20 to-cyan-500/10"
              },
              {
                name: "Sanko Kun",
                role: "Editor & Post-Production Specialist",
                bio: "Senior editor with experience on major motion pictures and streaming series. James specializes in narrative editing and visual effects integration.",
                skills: ["Editing", "Color Grading", "VFX"],
                image: "/placeholder3.png",
                color: "from-cyan-500/20 to-teal-400/10"
              },
            ].map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-rich-black to-gray-900 p-6 transition-all duration-500 hover:border-cinematic-blue"
              >
                {/* Background gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br border border-gray-800 group-hover:border-cinematic-blue transition-all duration-500 -z-10"></div>
                
                {/* Colored gradient background */}
                <div className={`absolute inset-2 rounded-2xl bg-gradient-to-br ${instructor.color} opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10`}></div>

                <div className="mb-6 h-48 overflow-hidden rounded-xl relative">
                  {/* Image overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-black via-transparent to-transparent opacity-60 z-10"></div>
                  
                  {/* Animated border on hover */}
                  <motion.div 
                    className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-cinematic-blue via-neon-purple to-cyan-500 opacity-0 group-hover:opacity-100 -z-10"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={`${instructor.name} portrait`}
                    width={300}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Content with animations */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <h3 className="mb-1 text-xl font-bold group-hover:text-cinematic-blue transition-colors duration-300">
                    {instructor.name}
                  </h3>
                  
                  <p className="mb-3 text-neon-purple">{instructor.role}</p>
                  
                  {/* Divider line with animation */}
                  <motion.div
                    className="h-0.5 w-0 bg-gradient-to-r from-cinematic-blue via-neon-purple to-cyan-500 mb-3"
                    initial={{ width: 0 }}
                    whileInView={{ width: "30%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  />
                  
                <p className="mb-4 text-cool-gray">{instructor.bio}</p>
                  
                <div className="flex flex-wrap gap-2">
                  {instructor.skills.map((skill, skillIndex) => (
                      <motion.span
                      key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                        className="rounded-full bg-gray-800/80 px-3 py-1 text-xs transition-colors group-hover:bg-cinematic-blue/20 group-hover:text-cyan-300"
                    >
                      {skill}
                      </motion.span>
                  ))}
                </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-rich-black py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-deep-red/10 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-0 h-72 w-72 rounded-full bg-cinematic-blue/10 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl rounded-3xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-8 md:p-12 backdrop-blur-sm"
          >
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Join Our Next{" "}
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
                  Cohort
                </motion.span>
              </h2>
              <p className="mb-8 text-cool-gray">
                Applications are now open for our upcoming cohort starting soon. Limited spots available.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/join-cohort">
                  <Button className="w-full bg-cinematic-blue hover:bg-cinematic-blue/80 text-white sm:w-auto">
                    Apply Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full border-gray-700 hover:border-warm-yellow hover:text-warm-yellow sm:w-auto"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
