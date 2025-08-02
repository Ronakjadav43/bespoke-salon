"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scissors, Camera, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Service {
  id: string
  title: string
  description: string
  icon: React.ElementType
  features: string[]
  image: string
  href: string
}

const services: Service[] = [
  {
    id: "salon",
    title: "Salon",
    description: "Experience luxury hair care and beauty treatments in our state-of-the-art salon environment.",
    icon: Scissors,
    features: [
      "Hair Cutting & Styling",
      "Color & Highlights",
      "Hair Treatments",
      "Bridal Services",
      "Makeup Application",
      "Skin Care Treatments",
    ],
    image: "/img/a1.png",
    href: "/services/salon",
  },
  {
    id: "shoots",
    title: "Shoots",
    description: "Professional photography sessions with complete styling and makeup for memorable moments.",
    icon: Camera,
    features: [
      "Fashion Photography",
      "Portrait Sessions",
      "Bridal Shoots",
      "Commercial Projects",
      "Editorial Styling",
      "Creative Concepts",
    ],
    image: "/img/a2.png",
    href: "/services/shoots",
  },
  {
    id: "education",
    title: "Education",
    description: "Comprehensive training programs for aspiring stylists and beauty professionals.",
    icon: GraduationCap,
    features: [
      "Hair Styling Courses",
      "Color Theory Training",
      "Makeup Artistry",
      "Business Skills",
      "Certification Programs",
      "Advanced Techniques",
    ],
    image: "/img/a3.png",
    href: "/services/education",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-amber-300 w-16"></div>
            <span className="text-sm font-medium text-amber-700 tracking-wider uppercase">Our Services</span>
            <div className="h-px bg-amber-300 w-16"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight max-w-4xl mx-auto">
            Exceptional Services Tailored for You
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover our comprehensive range of premium services designed to transform, enhance, and maintain your
            beauty. Each service is performed with precision and artistry by our expert team.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
            >
              <CardContent className="p-0">
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* Service Icon */}
                  <div className="absolute top-6 left-6">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-amber-700" />
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-light text-amber-700 group-hover:text-amber-800 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">What We Offer</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="flex items-center space-x-3 text-sm text-gray-500 italic">
                          <div className="w-1.5 h-1.5 bg-gray-300 rounded-full flex-shrink-0" />
                          <span>And {service.features.length - 4} more...</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Call-to-Action */}
                  <div className="pt-4">
                    <Button
                      className="w-full bg-amber-700 hover:bg-amber-800 text-white group-hover:shadow-lg transition-all duration-300"
                      asChild
                    >
                      <Link href={service.href} className="flex items-center justify-center space-x-2">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center space-y-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Ready to Transform Your Look?</h3>
            <p className="text-gray-600 mb-8">
              Book a consultation with our expert team to discover which services are perfect for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-sm font-medium transition-colors duration-200"
              asChild
            >
              <Link href="/book">Book Consultation</Link>
            </Button>
            <Button
              variant="outline"
              className="border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-sm font-medium transition-all duration-200 bg-transparent"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-amber-100 rounded-full opacity-20 blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-100 rounded-full opacity-20 blur-3xl translate-y-1/2 translate-x-1/2" />
      </div>
    </section>
  )
}
