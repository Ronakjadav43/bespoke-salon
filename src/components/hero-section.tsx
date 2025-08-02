"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Clock, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface HeroSlide {
  id: number
  title: string
  subtitle: string
  image: string
  alt: string
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Where Beauty Meets Artistry",
    subtitle: "From runway to high streets, we set the pace with cutting-edge styles that define elegance.",
    image: "/bespoke-salon/img/s1.png",
    alt: "Elegant woman with vintage curled hairstyle",
  },
  {
    id: 2,
    title: "Transforming Visions Into Reality",
    subtitle: "Experience personalized beauty services that bring out your unique style and confidence.",
    image: "/bespoke-salon/img/s2.png",
    alt: "Modern hairstyle transformation",
  },
  {
    id: 3,
    title: "Color That Speaks Volumes",
    subtitle: "Discover the perfect shade that complements your personality and enhances your natural beauty.",
    image: "/bespoke-salon/img/s3.png",
    alt: "Professional hair coloring showcase",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative h-screen bg-gray-100 overflow-hidden">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-full grid grid-cols-1 lg:grid-cols-2">
              {/* Left Content Area */}
              <div className="flex items-center justify-center p-8 lg:p-16 bg-gray-50">
                <div className="max-w-lg space-y-8">
                  <div className="space-y-6">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed">{slide.subtitle}</p>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-3 text-gray-500">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Tue - Sun : 10:00 AM - 8:00 PM | Monday Closed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4" />
                      <Link href="tel:+918104533012" className="text-sm hover:text-gray-700 transition-colors">
                        +91 81045 33012
                      </Link>
                    </div>
                  </div>

                  {/* Call-to-Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-sm font-medium transition-colors duration-200"
                      asChild
                    >
                      <Link href="/book">Book Appointment</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-sm font-medium transition-colors duration-200 bg-transparent"
                      asChild
                    >
                      <Link href="/services">Explore Services</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Image Area */}
              <div className="relative bg-white">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.alt}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-200 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-gray-900" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all duration-200 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-gray-900" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-amber-700 scale-110" : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Pause/Play Auto-play Button */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 transition-all duration-200"
        aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isAutoPlaying ? (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </section>
  )
}
