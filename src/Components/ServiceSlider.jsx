"use client";

import { useState, useRef, useEffect } from "react";
// import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react";
import Face from "../assets/Face.jpg"
import Hair from "../assets/Hair.jpg"
import Skin from "../assets/Skin.jpg"
import Herbal from "../assets/Herbal.jpg"
import Meditation from "../assets/Meditaion.jpg"
import Mental_helth from "../assets/Mental_helth.jpg"
export default function ServiceSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(5);

  const services = [
    {
      id: 1,
      title: "Facial Treatments",
      image: Face,
    },
    {
      id: 2,
      title: "Hair Care",
      image: Hair,
    },
    {
      id: 3,
      title: "Skin Therapy",
      image: Skin,
    },
    {
      id: 4,
      title: "Herbal Nutrition",
      image: Herbal,
    },
    {
      id: 5,
      title: "Meditation",
      image: Meditation,
    },
    {
      id: 6,
      title: "Brain Health",
      image: Mental_helth,
    },
  ];

  // Responsive visible items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 768) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Next slide function using modulo for infinite looping
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % (services.length - visibleItems + 1));
  };

  // Previous slide function for infinite looping
  const prevSlide = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + (services.length - visibleItems + 1)) %
        (services.length - visibleItems + 1)
    );
  };

  // Auto scroll effect - change slide every 3 seconds
  useEffect(() => {
    const autoScroll = setInterval(() => {
      setActiveIndex(
        (prev) => (prev + 1) % (services.length - visibleItems + 1)
      );
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [visibleItems, services.length]);

  return (
    <section className="py-16 container mx-auto px-4 bg-[#ffffff]">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * (100 / visibleItems)}%)`,
            }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className="flex-shrink-0 px-2"
                style={{ width: `${100 / visibleItems}%` }}
              >
                <div className="flex flex-col items-center group hover:scale-105 transition-transform duration-300 ease-out">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#26774b]/30 mb-4 group-hover:shadow-lg group-hover:shadow-[#26774b]/40 transition-all duration-500 ease-in-out overflow-visible">
  <div className="w-full h-full rounded-full overflow-hidden">
    <img
      src={service.image || "/placeholder.svg"}
      alt={service.title}
      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out"
    />
  </div>
</div>

                  <h3 className="text-center text-gray-700 font-medium group-hover:text-[#26774b] group-hover:font-semibold transition-all duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors z-10"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors z-10"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
