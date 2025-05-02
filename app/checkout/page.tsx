"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, CreditCard, Film } from "lucide-react"

export default function Checkout() {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("pro")

  const plans = {
    basic: {
      name: "Basic Package",
      price: 1999,
      description: "12-week online program",
    },
    pro: {
      name: "Pro Package",
      price: 3499,
      description: "16-week hybrid program",
    },
    elite: {
      name: "Elite Package",
      price: 5999,
      description: "24-week immersive program",
    },
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      // In a real app, you would redirect to a success page
    }, 2000)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price)
  }

  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-deep-red/5 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-cinematic-blue/5 blur-3xl"></div>

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-2"
        >
          <Film className="h-8 w-8 text-deep-red" />
          <span className="text-2xl font-bold tracking-wider">CINECRAFT</span>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-bold">Order Summary</h2>

              <RadioGroup defaultValue={selectedPlan} onValueChange={setSelectedPlan} className="space-y-4">
                <div
                  className={`flex items-start space-x-3 rounded-md border p-4 transition-all duration-300 ${selectedPlan === "basic" ? "border-deep-red bg-deep-red/5" : "border-gray-800"}`}
                >
                  <RadioGroupItem value="basic" id="basic" className="mt-1" />
                  <Label htmlFor="basic" className="flex-1 cursor-pointer">
                    <div className="font-medium">Basic Package</div>
                    <div className="text-sm text-cool-gray">12-week online program</div>
                    <div className="mt-2 font-bold">{formatPrice(plans.basic.price)}</div>
                  </Label>
                </div>

                <div
                  className={`flex items-start space-x-3 rounded-md border p-4 transition-all duration-300 ${selectedPlan === "pro" ? "border-deep-red bg-deep-red/5" : "border-gray-800"}`}
                >
                  <RadioGroupItem value="pro" id="pro" className="mt-1" />
                  <Label htmlFor="pro" className="flex-1 cursor-pointer">
                    <div className="flex items-center">
                      <div className="font-medium">Pro Package</div>
                      <span className="ml-2 rounded-full bg-deep-red px-2 py-0.5 text-xs font-medium">Popular</span>
                    </div>
                    <div className="text-sm text-cool-gray">16-week hybrid program</div>
                    <div className="mt-2 font-bold">{formatPrice(plans.pro.price)}</div>
                  </Label>
                </div>

                <div
                  className={`flex items-start space-x-3 rounded-md border p-4 transition-all duration-300 ${selectedPlan === "elite" ? "border-deep-red bg-deep-red/5" : "border-gray-800"}`}
                >
                  <RadioGroupItem value="elite" id="elite" className="mt-1" />
                  <Label htmlFor="elite" className="flex-1 cursor-pointer">
                    <div className="font-medium">Elite Package</div>
                    <div className="text-sm text-cool-gray">24-week immersive program</div>
                    <div className="mt-2 font-bold">{formatPrice(plans.elite.price)}</div>
                  </Label>
                </div>
              </RadioGroup>

              <div className="mt-6 space-y-4 border-t border-gray-800 pt-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(plans[selectedPlan as keyof typeof plans].price)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{formatPrice(plans[selectedPlan as keyof typeof plans].price * 0.08)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatPrice(plans[selectedPlan as keyof typeof plans].price * 1.08)}</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="rounded-md bg-gray-800/50 p-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-deep-red" />
                    <span className="font-medium">100% Satisfaction Guarantee</span>
                  </div>
                  <p className="mt-2 text-sm text-cool-gray">
                    If you're not completely satisfied with your purchase, we offer a 7-day money-back guarantee.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Payment Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-rich-black/80 p-6 backdrop-blur-sm">
              <h2 className="mb-6 text-xl font-bold">Payment Information</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name on card</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      disabled={isLoading}
                      required
                      className="border-gray-700 bg-gray-900"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="card">Card number</Label>
                    <div className="relative">
                      <Input
                        id="card"
                        placeholder="1234 5678 9012 3456"
                        disabled={isLoading}
                        required
                        className="border-gray-700 bg-gray-900 pr-10"
                      />
                      <CreditCard className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expiry">Expiry date</Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        disabled={isLoading}
                        required
                        className="border-gray-700 bg-gray-900"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input
                        id="cvc"
                        placeholder="123"
                        disabled={isLoading}
                        required
                        className="border-gray-700 bg-gray-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Billing address</h3>

                  <div className="grid gap-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="us">
                      <SelectTrigger className="border-gray-700 bg-gray-900">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      placeholder="123 Main St"
                      disabled={isLoading}
                      required
                      className="border-gray-700 bg-gray-900"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        placeholder="New York"
                        disabled={isLoading}
                        required
                        className="border-gray-700 bg-gray-900"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="postal-code">Postal code</Label>
                      <Input
                        id="postal-code"
                        placeholder="10001"
                        disabled={isLoading}
                        required
                        className="border-gray-700 bg-gray-900"
                      />
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-cinematic-blue hover:bg-cinematic-blue/80 text-white"
                >
                  {isLoading ? "Processing payment..." : "Complete Purchase"}
                </Button>

                <p className="text-center text-xs text-cool-gray">
                  By completing your purchase, you agree to our{" "}
                  <Link href="#" className="text-deep-red hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-deep-red hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
