"use client"

import { useState, useEffect, useRef } from "react"

interface StatItem {
  id: number
  value: number
  suffix: string
  label: string
}

const statsData: StatItem[] = [
  {
    id: 1,
    value: 20,
    suffix: "+",
    label: "YEARS OF EXPERIENCE",
  },
  {
    id: 2,
    value: 5000,
    suffix: "+",
    label: "HAPPY CLIENTS",
  },
  {
    id: 3,
    value: 200,
    suffix: "+",
    label: "SHOOTS",
  },
  {
    id: 4,
    value: 5000,
    suffix: "+",
    label: "STUDENTS TRAINED",
  },
]

interface AnimatedCounterProps {
  targetValue: number
  suffix: string
  duration?: number
  isVisible: boolean
}

function AnimatedCounter({ targetValue, suffix, duration = 2000, isVisible }: AnimatedCounterProps) {
  const [currentValue, setCurrentValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isVisible || hasAnimated) return

    setHasAnimated(true)
    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(startValue + (targetValue - startValue) * easeOutQuart)

      setCurrentValue(current)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, targetValue, duration, hasAnimated])

  return (
    <span className="text-5xl lg:text-6xl xl:text-7xl font-light text-amber-700">
      {currentValue.toLocaleString()}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -100px 0px", // Start animation slightly before the section is fully visible
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">Our Achievements</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Years of dedication and excellence have built our reputation as a leading beauty destination
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className="text-center group"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:scale-105">
                <AnimatedCounter
                  targetValue={stat.value}
                  suffix={stat.suffix}
                  duration={2000 + index * 300} // Stagger the animation duration
                  isVisible={isVisible}
                />
              </div>
              <div className="space-y-2">
                <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto w-16"></div>
                <p className="text-sm lg:text-base font-medium text-gray-500 tracking-wider uppercase">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        {/* <div className="mt-16 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-amber-300 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 200}ms`,
                }}
              ></div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
