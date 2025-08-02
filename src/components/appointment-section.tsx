"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Clock, MapPin } from "lucide-react"

export default function AppointmentSection() {
  const services = [
    "Hair Cutting & Styling",
    "Color & Highlights",
    "Hair Treatments",
    "Bridal Services",
    "Makeup Application",
    "Skin Care Treatments",
    "Fashion Photography",
    "Portrait Sessions",
    "Bridal Shoots",
    "Commercial Projects",
    "Editorial Styling",
    "Creative Concepts",
    "Hair Styling Courses",
    "Color Theory Training",
    "Makeup Artistry",
    "Business Skills",
    "Certification Programs",
    "Advanced Techniques",
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Appointment Form */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-px bg-amber-300 w-16"></div>
                <span className="text-sm font-medium text-amber-700 tracking-wider uppercase">Get In Touch</span>
                <div className="h-px bg-amber-300 w-16"></div>
              </div>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 leading-tight">
                Request an Appointment
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fill out the form below and our team will get back to you shortly to confirm your appointment. We look
                forward to serving you soon.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Your Name
                </Label>
                <Input id="name" placeholder="Enter your full name" className="bg-gray-100 border-gray-200" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-100 border-gray-200"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-gray-100 border-gray-200"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="enquiryType" className="text-gray-700">
                  Enquiry Type
                </Label>
                <Select>
                  <SelectTrigger id="enquiryType" className="w-full bg-gray-100 border-gray-200">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-700">
                  Your Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className="bg-gray-100 border-gray-200"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-sm font-medium transition-colors duration-200"
              >
                Submit Request
              </Button>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            {/* Call Us */}
            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <Phone className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
              <div className="text-gray-600 text-sm space-y-1">
                <p>+91 8104533012</p>
                <p>022 2640 0835/36</p>
                <p>+91 22315 06986</p>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <Mail className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Email Us</h3>
              <Link
                href="mailto:info@bespokesalon.in"
                className="text-gray-600 text-sm hover:text-amber-700 transition-colors"
              >
                Info@bespokesalon.in
              </Link>
            </div>

            {/* Opening Hours */}
            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <Clock className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Opening Hours</h3>
              <div className="text-gray-600 text-sm space-y-1">
                <p>Tue - Sun: 10:00 AM - 8:00 PM</p>
                <p>Monday: Closed</p>
              </div>
            </div>

            {/* Visit Us */}
            <div className="flex flex-col items-center text-center space-y-3 p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                <MapPin className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Visit Us</h3>
              <div className="text-gray-600 text-sm space-y-1">
                <p>1st Floor, 196 Makhija Chambers,</p>
                <p>Abv. PC Chandra Jewels, Turner Road,</p>
                <p>Bandra West, 400050</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
