"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Salon", href: "/salon" },
    { name: "Shoots", href: "/shoots" },
    { name: "Education", href: "/education" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* <div className="bg-black px-6 py-3 rounded-sm">
                <div className="text-white">
                  <div className="text-xl font-bold tracking-wider">BESPOKE</div>
                  <div className="text-xs tracking-widest opacity-80">HAIR • BEAUTY • PHOTOGRAPHY</div>
                </div>
              </div> */}
              <Image
                src="/bespoke-salon/img/logo.png"
                alt="BESPOKE Logo"
                width={120}
                height={40}
                className="h-[56px] w-[175px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[#a18269] hover:border-b border-[#a18269] transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section - Social Icons and Book Button */}
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                href="https://instagram.com"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" color="#a18269" />
              </Link>
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" color="#a18269" />
              </Link>
            </div>

            {/* Book Appointment Button */}
            <Button
              className="bg-[#a18269] hover:bg-[#6d5745] text-white px-6 py-2 rounded-sm font-medium transition-colors duration-200"
              asChild
            >
              <Link href="/book">Book Appointment</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 px-2 pt-4 border-t border-gray-100">
                <Link
                  href="https://instagram.com"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://facebook.com"
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
