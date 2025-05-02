"use client"

import Link from "next/link"
import { Film, Instagram, Twitter, Youtube } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="border-t border-cinematic-blue/20 bg-rich-black/90 backdrop-blur-md relative overflow-hidden">
      {/* Web3 grid background */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>

      {/* Glowing orbs */}
      <div className="absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-deep-red/20 blur-3xl animate-pulse-glow"></div>
      <div
        className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-cinematic-blue/20 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container relative z-10 px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="relative flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-cinematic-blue rounded-full opacity-20 group-hover:opacity-40 animate-pulse-glow"></div>
                <Film className="h-6 w-6 text-cinematic-blue relative z-10" />
              </motion.div>
              <span className="text-xl font-bold tracking-wider holographic group-hover:text-cinematic-blue transition-colors duration-300">
               Beyond the Cut
              </span>
            </Link>
            <p className="text-sm text-cool-gray">
              Transforming passionate filmmakers into industry professionals through immersive learning and hands-on
              experience.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-cool-gray">
              {["Home", "Pricing", "Why Us", "Free Assets"].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="hover:text-cinematic-blue transition-colors duration-300 relative group"
                  >
                    <span>{item}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cinematic-blue group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Resources</h3>
            <ul className="space-y-2 text-sm text-cool-gray">
              {["Blog", "Tutorials", "FAQ", "Support"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-cinematic-blue transition-colors duration-300 relative group">
                    <span>{item}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cinematic-blue group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-medium text-white">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, color: "hover:text-cyber-pink" },
                { icon: Twitter, color: "hover:text-cinematic-blue" },
                { icon: Youtube, color: "hover:text-deep-red" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href="#"
                  className={`text-cool-gray ${social.color} transition-colors duration-300 hover:scale-110 transform`}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.icon.name}</span>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium text-white">Subscribe to our newsletter</h4>
              <div className="mt-2 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-cinematic-blue/30 bg-rich-black/60 px-3 py-2 text-sm focus:border-cinematic-blue focus:ring-1 focus:ring-cinematic-blue outline-none transition-all duration-300"
                />
                <button className="rounded-md bg-cinematic-blue px-3 py-2 text-sm font-medium text-white hover:bg-cinematic-blue/80 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-cinematic-blue/20 pt-8 text-center text-sm text-cool-gray">
          <p>© {new Date().getFullYear()}Beyond the Cut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
