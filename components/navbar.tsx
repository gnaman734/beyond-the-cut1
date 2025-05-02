"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Film, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-rich-black/80 backdrop-blur-md border-b border-cinematic-blue/20" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-cinematic-blue rounded-full opacity-30 group-hover:opacity-60 animate-pulse-glow"></div>
            <Film className="h-6 w-6 text-cinematic-blue relative z-10" />
          </motion.div>
          <span className="text-xl font-bold tracking-wider holographic group-hover:text-cinematic-blue transition-colors duration-300">
           Beyond the Cut
          </span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {["Home", "Pricing", "Why Us", "Free Assets"].map((item, i) => (
            <Link
              key={i}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium relative group"
            >
              <span className="text-white group-hover:text-cinematic-blue transition-colors duration-300">{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cinematic-blue group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="outline"
            className="border-cinematic-blue/70 text-white hover:bg-cinematic-blue/20 hover:text-cinematic-blue hover:border-cinematic-blue transition-all duration-300"
            onClick={() => window.location.href = '/auth/signin'}
          >
            Sign In
          </Button>
          <Link href="/join-cohort">
          <Button className="bg-gradient-to-r from-cinematic-blue via-neon-purple to-deep-red bg-[length:200%_200%] animate-gradient text-white relative overflow-hidden group">
            <span className="relative z-10">Join Cohort</span>
          </Button>
          </Link>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden glass-effect border-t border-cinematic-blue/20"
        >
          <div className="container flex flex-col space-y-3 py-4 px-4">
            {["Home", "Pricing", "Why Us", "Free Assets"].map((item, i) => (
              <Link
                key={i}
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="py-2 text-sm font-medium text-white hover:text-cinematic-blue transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                className="w-full border-cinematic-blue/50 text-white hover:bg-cinematic-blue/10 hover:text-cinematic-blue hover:border-cinematic-blue"
              >
                Sign In
              </Button>
              <Link href="/join-cohort" className="w-full">
                <Button className="w-full bg-cinematic-blue hover:bg-cinematic-blue/80 text-white">
                  Join Cohort
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
