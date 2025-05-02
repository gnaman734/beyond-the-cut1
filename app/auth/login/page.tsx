"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Film, ChromeIcon as Google } from "lucide-react"

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication process
    setTimeout(() => {
      setIsLoading(false)
      // In a real app, you would redirect after successful login
    }, 1500)
  }

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center px-4 md:px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-deep-red/10 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-cinematic-blue/10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] relative z-10"
      >
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Film className="h-6 w-6 text-deep-red" />
            <span className="text-xl font-bold tracking-wider">CINECRAFT</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="text-sm text-cool-gray">Enter your email to sign in to your account</p>
        </div>
        <div className="grid gap-6">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                  className="border-gray-700 bg-gray-900"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/auth/reset-password" className="text-xs text-cool-gray hover:text-deep-red">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  disabled={isLoading}
                  required
                  className="border-gray-700 bg-gray-900"
                />
              </div>
              <Button disabled={isLoading} className="bg-cinematic-blue hover:bg-cinematic-blue/80">
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-rich-black px-2 text-cool-gray">Or continue with</span>
            </div>
          </div>
          <Button
            variant="outline"
            type="button"
            disabled={isLoading}
            className="border-gray-700 hover:bg-gray-800 hover:text-deep-red flex items-center justify-center gap-2"
          >
            <Google className="h-4 w-4" />
            Google
          </Button>
        </div>
        <p className="px-8 text-center text-sm text-cool-gray">
          <span>Don&apos;t have an account?</span>{" "}
          <Link href="/auth/register" className="hover:text-deep-red underline underline-offset-4">
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  )
}
