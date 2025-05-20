"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ServiceSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(5)

  const services = [
    {
      id: 1,
      title: "Facial Treatments",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      title: "Hair Care",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      title: "Skin Therapy",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      title: "Herbal Nutrition",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      title: "Meditation",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      title: "Brain Health",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 768) {
        setVisibleItems(2)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3)
      } else {
        setVisibleItems(5)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (services.length - visibleItems + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % (services.length - visibleItems + 1))
  }

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${(activeIndex * 100) / visibleItems}%)` }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#d89d8c]/30 mb-4">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-center text-gray-700 font-medium">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors z-10"
          disabled={activeIndex === 0}
        >
          <ChevronLeft
            className={`h-6 w-6 ${activeIndex === 0 ? "text-gray-400" : "text-gray-700"}`}
          />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors z-10"
          disabled={activeIndex === services.length - visibleItems}
        >
          <ChevronRight
            className={`h-6 w-6 ${activeIndex === services.length - visibleItems ? "text-gray-400" : "text-gray-700"}`}
          />
        </button>
      </div>
    </section>
  )
}
