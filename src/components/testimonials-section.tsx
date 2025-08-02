"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  rating: number
  content: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Suhi Samuel",
    role: "Ace photographer",
    image: "/bespoke-salon/img/t1.png",
    rating: 5,
    content:
      "Bespoke Salon has been my go-to place for all things hair, ever since Rohan, Farah, and Sandy started it in 2018. The vibe, energy, and people make every visit special. For me, Rohan has been more than a stylist—he's a true artist and dear friend who always brings out the best in my hair. The entire team at Bespoke is exceptional—not just in their skill set, but also in the way they create a space where you feel valued and pampered.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Fashion Designer",
    image: "/bespoke-salon/img/t2.png",
    rating: 5,
    content:
      "The transformation I experienced at Bespoke was beyond my expectations. The team's attention to detail and artistic vision is unmatched. They don't just style your hair; they understand your personality and create a look that truly represents you. The salon's ambiance is so relaxing, and every visit feels like a luxury experience.",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Creative Director",
    image: "/bespoke-salon/img/t3.png",
    rating: 5,
    content:
      "I've been a client at Bespoke for over three years, and they never cease to amaze me. The level of professionalism combined with genuine care for their clients is rare to find. Whether it's a simple trim or a complete makeover, they approach each service with the same dedication and artistry. Highly recommend to anyone looking for exceptional hair care.",
  },
  {
    id: 4,
    name: "Kavya Patel",
    role: "Entrepreneur",
    image: "/bespoke-salon/img/t1.png",
    rating: 5,
    content:
      "Bespoke Salon is where artistry meets excellence. The team's expertise in color and styling is phenomenal. They took the time to understand my lifestyle and preferences, creating a look that's both stunning and manageable. The salon's atmosphere is so welcoming, and the results speak for themselves. I always leave feeling confident and beautiful.",
  },
  {
    id: 5,
    name: "Rohit Gupta",
    role: "Actor",
    image: "/bespoke-salon/img/t2.png",
    rating: 5,
    content:
      "As someone in the entertainment industry, I need to look my best at all times. Bespoke Salon has been my trusted partner in achieving that. Their understanding of current trends combined with classic techniques ensures I always have a fresh, contemporary look. The team is professional, talented, and genuinely cares about their craft.",
  },
]

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}`}
      />
    ))
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-amber-300 w-16"></div>
            <span className="text-sm font-medium text-amber-700 tracking-wider uppercase">Testimonials</span>
            <div className="h-px bg-amber-300 w-16"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
                    <CardContent className="p-8 lg:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                        {/* Client Info */}
                        <div className="text-center lg:text-left space-y-4">
                          <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto lg:mx-0">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                            <p className="text-amber-700 font-medium">{testimonial.role}</p>
                            <div className="flex justify-center lg:justify-start space-x-1">
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="lg:col-span-2">
                          <blockquote className="text-gray-600 text-lg leading-relaxed italic">
                            "{testimonial.content}"
                          </blockquote>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 group z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-amber-700 transition-colors duration-200" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 group z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-amber-700 transition-colors duration-200" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-amber-700 scale-110" : "bg-amber-300 hover:bg-amber-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Control */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-amber-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? "bg-green-500" : "bg-gray-400"}`} />
            <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
          </button>
        </div>
      </div>
    </section>
  )
}
