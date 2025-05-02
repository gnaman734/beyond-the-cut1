"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState("pro")

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-rich-black py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-deep-red/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-cinematic-blue/10 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-3xl font-bold md:text-5xl text-white">
              Transparent{" "}
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
                Pricing
              </motion.span>
            </h1>
            <p className="mb-8 text-lg text-cool-gray">
              Invest in your filmmaking career with our comprehensive cohort program.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-rich-black py-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute left-0 top-1/2 h-96 w-96 rounded-full bg-deep-red/5 blur-3xl"></div>
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cinematic-blue/5 blur-3xl"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Basic Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`group relative rounded-2xl border ${
                selectedPackage === "basic" ? "border-cinematic-blue" : "border-gray-800"
              } bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cinematic-blue hover:shadow-lg hover:shadow-cinematic-blue/10`}
              onClick={() => setSelectedPackage("basic")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cinematic-blue/5 to-deep-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="mb-2 text-xl font-bold">
                  Basic{" "}
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
                    Package
                  </motion.span>
                </h3>
                <div className="mb-4 text-3xl font-bold">₹5999</div>
              <p className="mb-6 text-cool-gray">Perfect for beginners looking to learn the fundamentals.</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>12-week online program</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Weekly group mentorship</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Access to learning materials</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Certificate of completion</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Community access</span>
                </li>
              </ul>
                <Link href="/join-cohort">
              <Button className="w-full bg-cinematic-blue hover:bg-cinematic-blue/80 text-white">Enroll Now</Button>
                </Link>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`group relative rounded-2xl border ${
                selectedPackage === "pro" ? "border-cinematic-blue" : "border-gray-800"
              } bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cinematic-blue hover:shadow-lg hover:shadow-cinematic-blue/10`}
              onClick={() => setSelectedPackage("pro")}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-deep-red px-4 py-1 text-sm font-bold">
                Most Popular
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-deep-red/5 to-cinematic-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="mb-2 text-xl font-bold">
                  Pro{" "}
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
                    Package
                  </motion.span>
                </h3>
                <div className="mb-4 text-3xl font-bold">₹8999</div>
              <p className="mb-6 text-cool-gray">Comprehensive training for serious filmmakers.</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>16-week hybrid program</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Weekly 1-on-1 mentorship</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Equipment rental included</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Portfolio development</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Industry networking events</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Festival submission guidance</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Lifetime community access</span>
                </li>
              </ul>
                <Link href="/join-cohort">
              <Button className="w-full bg-cinematic-blue hover:bg-cinematic-blue/80 text-white">Enroll Now</Button>
                </Link>
              </div>
            </motion.div>

            {/* Elite Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`group relative rounded-2xl border ${
                selectedPackage === "elite" ? "border-cinematic-blue" : "border-gray-800"
              } bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cinematic-blue hover:shadow-lg hover:shadow-cinematic-blue/10`}
              onClick={() => setSelectedPackage("elite")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cinematic-blue/5 to-deep-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="mb-2 text-xl font-bold">
                  Elite{" "}
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
                    Package
                  </motion.span>
                </h3>
                <div className="mb-4 text-3xl font-bold">₹12999</div>
              <p className="mb-6 text-cool-gray">The ultimate filmmaking experience with maximum support.</p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>24-week immersive program</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Unlimited 1-on-1 mentorship</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Professional equipment access</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Studio time included</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Industry placement assistance</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Film festival submissions (5 included)</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Executive producer credit on project</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-deep-red" />
                  <span>Lifetime updates and resources</span>
                </li>
              </ul>
                <Link href="/join-cohort">
              <Button className="w-full bg-cinematic-blue hover:bg-cinematic-blue/80 text-white">Enroll Now</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section className="bg-rich-black py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
              Flexible{" "}
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
                Payment Options
              </motion.span>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-8 backdrop-blur-sm"
            >
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-xl font-bold">
                    Pay in{" "}
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
                      Full
                    </motion.span>
                  </h3>
                  <p className="text-cool-gray">Save 10% when you pay the full amount upfront.</p>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">
                    Monthly{" "}
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
                      Installments
                    </motion.span>
                  </h3>
                  <p className="text-cool-gray">Split your payment into easy monthly installments.</p>
                </div>
              </div>
              <div className="rounded-lg bg-gray-800/50 p-4">
                <h4 className="mb-2 font-bold">
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
                    Scholarship
                  </motion.span>{" "}
                  Opportunities
                </h4>
                <p className="text-cool-gray">
                  We offer a limited number of partial scholarships for talented filmmakers with financial need.
                  <Link href="#" className="ml-1 text-deep-red hover:underline">
                    Apply here
                  </Link>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rich-black py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
              Frequently Asked{" "}
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
                Questions
              </motion.span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  question: "Are there any prerequisites for joining the cohort?",
                  answer:
                    "No formal prerequisites are required, but a passion for filmmaking and basic familiarity with cameras is helpful. We welcome students of all experience levels.",
                },
                {
                  question: "What equipment do I need to participate?",
                  answer:
                    "For the Basic package, you'll need your own camera and basic editing software. Pro and Elite packages include equipment rental. We'll provide a detailed list upon enrollment.",
                },
                {
                  question: "How much time should I commit each week?",
                  answer:
                    "Expect to dedicate 15-20 hours per week for coursework, projects, and mentorship sessions. The program is designed to be intensive but flexible for those with part-time jobs.",
                },
                {
                  question: "Is there a refund policy?",
                  answer:
                    "We offer a 7-day money-back guarantee from the start of the program. After this period, refunds are considered on a case-by-case basis.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-6 backdrop-blur-sm hover:border-cinematic-blue/50 transition-all duration-300"
                >
                  <h3 className="mb-2 text-lg font-bold">{item.question}</h3>
                  <p className="text-cool-gray">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-t from-rich-black to-gray-900 py-16 md:py-24 relative overflow-hidden">
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
              <h2 className="mb-4 text-3xl font-bold md:text-4xl text-white">
                Ready to Invest in Your{" "}
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
                </motion.span>{" "}
                Future?
              </h2>
              <p className="mb-8 text-cool-gray">
                Join our cohort today and take the first step toward a successful career in film.
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
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
