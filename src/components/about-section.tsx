"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Scissors, Sparkles, Heart, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface AboutSlide {
  id: number
  image: string
  alt: string
}

const aboutSlides: AboutSlide[] = [
  {
    id: 1,
    image: "/bespoke-salon/img/a1.png",
    alt: "Professional stylist working with client",
  },
  {
    id: 2,
    image: "/bespoke-salon/img/a2.png",
    alt: "Hair coloring expertise",
  },
  {
    id: 3,
    image: "/bespoke-salon/img/a3.png",
    alt: "Modern salon environment",
  }
 
]

const features = [
  {
    icon: Scissors,
    title: "Expert Stylists",
    description: "Our team consists of industry professionals with extensive training and experience.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "We use only the highest quality, sustainable products for all our services.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Each client receives a tailored experience based on their unique needs and preferences.",
  },
  {
    icon: Leaf,
    title: "Relaxing Atmosphere",
    description: "Our salon provides a tranquil environment where you can unwind and rejuvenate.",
  },
]

export default function AboutSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play functionality for image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % aboutSlides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image Slider */}
          <div className="relative">
            <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {aboutSlides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {aboutSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-px bg-amber-300 w-12"></div>
                <span className="text-sm font-medium text-amber-700 tracking-wider uppercase">About Us</span>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight">
                Elevating Beauty Through Expertise and Artistry
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              At Bespoke, we believe that exceptional hair styling is a form of art that enhances natural beauty.
              Founded with a passion for creativity and precision, our salon brings together the finest stylists who
              share our vision for excellence.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-4 rounded-lg hover:bg-white/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center group-hover:bg-amber-200 transition-colors duration-300">
                        <feature.icon className="h-5 w-5 text-amber-700" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call-to-Action */}
            <div className="pt-4">
              <Button
                variant="outline"
                className="border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-sm font-medium transition-all duration-300 hover:border-amber-400 hover:shadow-md bg-transparent"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
