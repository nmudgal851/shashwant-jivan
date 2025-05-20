import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import im1 from "../assets/im1.png";
import im2 from "../assets/im2.png";

// Slides Data
const slides = [
  {
    title: "Holistic Health for Everyone",
    highlight: "Pure Ayurvedic Wellness",
    description: "Experience nature’s healing with our premium Ayurvedic products.",
    image: im1,
    alt: "Slide 1",
  },
  {
    title: "Ancient Wisdom, Modern Care",
    highlight: "Naturally Balanced Living",
    description: "Our range is curated for your modern lifestyle, rooted in tradition.",
    image: im2,
    alt: "Slide 2",
  },
  {
    title: "Heal Naturally, Live Fully",
    highlight: "Empower Your Wellness",
    description: "Embrace purity with our organic Ayurvedic essentials.",
    image: im1,
    alt: "Slide 3",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto slide every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center container mx-auto px-4">
      {/* Text Content */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
        <h1 className="text-3xl md:text-6xl font-bold text-gray-800 mb-6">
          {slides[currentSlide].title}
        </h1>
        <h2 className="text-[#26774b] text-3xl font-semibold mb-5">
          {slides[currentSlide].highlight}
        </h2>
        <p className="text-black mb-8">{slides[currentSlide].description}</p>

        <a
          href="#PG"
          className="bg-[#22784e] hover:bg-[#26774b] text-white font-medium py-3 px-8 rounded-full transition-colors text-[1rem] md:text-2xl"
          aria-label="Shop Ayurvedic Products"
        >
          Men's / Women Wellness
        </a>
      </div>

      {/* Image Slider */}
      <div className="relative w-full md:w-1/2 h-[20rem] mt-12 md:mt-16 rounded-[40px] overflow-hidden">
        <div className="bg-[#3e9368]/80 h-full rounded-full p-0 md:p-8 flex items-center justify-center relative z-0 overflow-hidden">
          
          {/* Slides Container */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${slides.length * 100}%`
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center items-center"
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading="lazy"
                  className="object-contain w-full h-auto max-h-[450px] md:max-h-[500px] drop-shadow-xl"
                />
              </div>
            ))}
          </div>
          
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors z-20"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors z-20"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
