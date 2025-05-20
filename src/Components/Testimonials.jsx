import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Testimonial from "../assets/Testimonial.png"
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(2);

  const testimonials = [
    {
      id: 1,
      name: "Brooklyn Simmons",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
      content: " Dr Mukhir Tripathee is a highly qualified and experienced doctor specializing in men’s health. With qualification of MBBS, MD, PGDS, and MCSEPI, he brings a wealth of knowledge to his practice. His primary focus on men’s health sets him apart, making him a sought-after expert in the field. He is currently associated with Al QADEEM DAWAKHANA. "
    },
    {
      id: 2,
      name: "Leslie Alexander",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80",
      content: "Amet minim mollit non deserunt ullamco est sit aliqua as dolor do amet. officia consequat duis enim velit mollit. Exercitation it's veam consequat sunt nostrud amet. Excepteur sint occaecat cupidatat non proident."
    },
    {
      id: 3,
      name: "Jenny Wilson",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&q=80",
      content: "Amet minim mollit non deserunt ullamco est sit aliqua as dolor do amet. officia consequat duis enim velit mollit. Exercitation it's veam consequat sunt nostrud amet. Excepteur sint occaecat cupidatat."
    },
    {
      id: 4,
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80",
      content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % (testimonials.length - (slidesToShow - 1))
      );
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [testimonials.length, slidesToShow]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => 
      (prev + 1) % (testimonials.length - (slidesToShow - 1))
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      (prev - 1 + (testimonials.length - (slidesToShow - 1))) % (testimonials.length - (slidesToShow - 1))
    );
  };

  return (
    <section className="py-12 md:py-20 bg-[#F8F3F0] overflow-hidden"
    style={{ backgroundImage: `url(${Testimonial})`, backgroundSize: "cover" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <span className="text-[#26774b] text-sm font-medium">Our Testimonial</span>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">What Our Client's Say</h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 z-10"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-[#26774b]" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 z-10"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-[#26774b]" />
          </button>

          {/* Testimonials Slider */}
          <div className="overflow-hidden px-4 md:px-8">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`w-full md:w-1/2 flex-shrink-0 px-2 md:px-4 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } transition-all duration-700`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg relative h-full">
                    <Quote className="absolute top-6 right-6 w-8 md:w-12 h-8 md:h-12 text-[#26774b]/10" />
                    <p className="text-gray-600 mb-6 text-sm md:text-lg leading-relaxed line-clamp-4">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-[#26774b] rounded-full flex items-center justify-center">
                          <Quote className="w-2 h-2 md:w-3 md:h-3 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-base md:text-lg">{testimonial.name}</h4>
                        <p className="text-[#26774b] text-sm">Satisfied Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 md:mt-8 gap-2">
            {[...Array(testimonials.length - (slidesToShow - 1))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-[#26774b] w-4 md:w-6'
                    : 'bg-[#26774b]/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;