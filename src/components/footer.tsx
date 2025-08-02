"use client"

import Link from "next/link"
import { ChevronUp, MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#a18269] text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Bespoke Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-white mb-4">Bespoke</h3>
            <p className="text-white text-sm leading-relaxed">
              Elevating beauty through expertise and artistry. Experience the difference of personalized, premium hair
              care at our salon.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-white hover:text-white transition-colors duration-200 text-sm"
            >
              <span>Back to Top</span>
              <ChevronUp className="h-4 w-4" />
            </button>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-light text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-white hover:text-white transition-colors duration-200 text-sm">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-white transition-colors duration-200 text-sm">
                About Us
              </Link>
              <Link href="/salon" className="text-white hover:text-white transition-colors duration-200 text-sm">
                Salon
              </Link>
              <Link
                href="/education"
                className="text-white hover:text-white transition-colors duration-200 text-sm"
              >
                Education
              </Link>
              <Link href="/book" className="text-white hover:text-white transition-colors duration-200 text-sm">
                Book Appointment
              </Link>
              <Link href="/shoots" className="text-white hover:text-white transition-colors duration-200 text-sm">
                Shoots
              </Link>
            </nav>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-light text-white mb-4">Services</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/services/hair"
                className="text-white hover:text-white transition-colors duration-200 text-sm"
              >
                Hair Services
              </Link>
              <Link
                href="/services/color"
                className="text-white hover:text-white transition-colors duration-200 text-sm"
              >
                Color & Highlights
              </Link>
              <Link
                href="/services/texture"
                className="text-white hover:text-white transition-colors duration-200 text-sm"
              >
                Hair Texture
              </Link>
              <Link
                href="/services/beauty"
                className="text-white hover:text-white transition-colors duration-200 text-sm"
              >
                Beauty
              </Link>
              <Link
                href="/services/makeup"
                className="text-white hover:text-white transition-colors duration-200 text-sm"
              >
                Makeup
              </Link>
            </nav>
          </div>

          {/* Contact Us Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-light text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                <div className="text-white text-sm">
                  <p>1st Floor, 196 Makhija Chambers</p>
                  <p>Abv. PC Chandra Jewels, Turner Road</p>
                  <p>Bandra West, 400050</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                <div className="text-white text-sm">
                  <p>+91 8104533012</p>
                  <p>022 2640 0835/36</p>
                  <p>+91 22315 06986</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white flex-shrink-0" />
                <Link
                  href="mailto:info@bespokesalon.in"
                  className="text-white hover:text-white transition-colors duration-200 text-sm"
                >
                  info@bespokesalon.in
                </Link>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                <div className="text-white text-sm">
                  <p>Tue - Sun: 10:00 AM - 8:00 PM</p>
                  <p>Monday - Closed</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex items-start space-x-3">
                <Instagram className="h-4 w-4 text-white mt-1 flex-shrink-0" />
                <div className="text-white text-sm space-y-1">
                  <Link
                    href="https://instagram.com/bespokesalon_in"
                    className="block hover:text-white transition-colors duration-200"
                  >
                    @bespokesalon_in
                  </Link>
                  <Link
                    href="https://instagram.com/bespokesalon_edu"
                    className="block hover:text-white transition-colors duration-200"
                  >
                    @bespokesalon_edu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t text-white mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-sm">© 2025 Bespoke. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-white hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-white hover:text-white transition-colors duration-200 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
