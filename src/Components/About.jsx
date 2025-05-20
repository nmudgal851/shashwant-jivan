import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Camera, Award, Users, FolderCheck } from "lucide-react";
import { Leaf, Shield, Droplet, Heart, CheckCircle2, Play , X} from "lucide-react";
import { Check } from "lucide-react";
import AboutBanner from "../assets/AboutBanner.jpeg";
import AboutExperiance from "../assets/AboutExperiance.png";
import About_Leaf from "../assets/About_Leaf.png";
import LEaf3 from "../assets/leaf3.png";
import CheckMark from "../assets/checkmark.png";
import WhyChoose from "../assets/WhyChoose.png";
import { ShieldCheck } from "lucide-react";
import Testimonial from "../assets/Testimonial.png";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import IncrementValue from "./Count";
import Leaf4 from "../assets/Leaf4.png";
import Video from "../assets/Videos/Video.mp4"
import Video_Back from "../assets/Video_Back.png"
const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [counts, setCounts] = useState({
    years: 0,
    products: 0,
    clients: 0,
    awards: 0,
  });

  useEffect(() => {
    setIsLoaded(true);

    // Animate counters
    const duration = 2000; // 2 seconds
    const steps = 50;
    const targetCounts = {
      years: 20,
      products: 1000,
      clients: 300,
      awards: 64,
    };

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCounts({
        years: Math.floor((targetCounts.years * step) / steps),
        products: Math.floor((targetCounts.products * step) / steps),
        clients: Math.floor((targetCounts.clients * step) / steps),
        awards: Math.floor((targetCounts.awards * step) / steps),
      });

      if (step >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#ffffff] text-white">
      <div className="absolute top-96 left-0  h-[2rem] w-[42rem]  -translate-x-1/4">
        <img
          id="leaf-1"
          src={About_Leaf}
          alt="Left decorative Ayurvedic leaf"
          loading="lazy"
          className="object-contain "
        />
      </div>

      {/* Hero Section */}
      <div className="relative h-[300px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={AboutBanner}
            alt="Office Background"
            className={`w-full h-full object-cover opacity-50 transform scale-110 ${
              isLoaded ? "scale-100 transition-transform duration-2000" : ""
            }`}
          />
        </div>
        <div
          className={`relative z-10 text-center transform ${
            isLoaded
              ? "translate-y-0 opacity-100 transition-all duration-1000"
              : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-gray-300">
            <Link to="/" className="hover:text-[#26774b] transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#26774b]">About Us</span>
          </div>
        </div>
      </div>

      {/* Main Content */}

      <div className=" mx-auto px-4 py-16">
        <div className="grid container grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div
            className={`relative  transform ${
              isLoaded
                ? "translate-x-0 opacity-100 transition-all duration-1000 delay-300"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <img
              src={AboutExperiance}
              alt="Team at work"
              className="rounded-lg hover:shadow-3xl transition-shadow duration-300"
            />
            <div className="absolute text-black flex gap-3 items-center bottom-6 left-20 bg-transparent ">
              <p className="text-6xl font-bold text-[#26774b]">10 </p>
              <p className="text-3xl font-bold">Years Experience</p>
            </div>
          </div>
          <div
            className={`transform ${
              isLoaded
                ? "translate-x-0 opacity-100 transition-all duration-1000 delay-500"
                : "translate-x-10 opacity-0"
            }`}
          >
            <span className="text-[#26774b] text-sm font-medium">About Us</span>
            <h2 className="text-4xl text-[#26774b] font-bold mt-2 mb-6">
              We Always Make
              <br />
              The Best
            </h2>
            <p className="text-gray-600 mb-8">
              For over 50 years, Ayurveda Shashvat Jeevan has been dedicated to
              providing authentic Ayurvedic treatments for male sexual health,
              women’s menstrual wellness, and overall well-being. Rooted in
              ancient Ayurvedic wisdom, our solutions are crafted with natural
              herbs and time-tested formulations to restore balance and vitality
              in your life.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-[#26774b] text-white px-8 py-3 rounded-full hover:bg-[#d89589] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <WhyChooseUs />
        {/* Skills Section */}

        <BenefitsStats />
        {/* CTA Section */}
        <CTA />
        {/* <div className={`relative rounded-2xl overflow-hidden shadow-2xl transform ${isLoaded ? 'translate-y-0 opacity-100 transition-all duration-1000 delay-1000' : 'translate-y-10 opacity-0'}`}>
          <img
            src="https://images.unsplash.com/photo-1606636660488-16a8646f012c?auto=format&fit=crop&q=80&w=1920"
            alt="Herbal Production"
            className="w-full h-[400px] object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50">
            <div className="max-w-2xl px-4">
              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                We Are Always Ready To<br />Serve Your Health Needs
              </h3>
              <Link
                to="/"
                className="inline-block bg-[#26774b] text-white px-8 py-3 rounded-full hover:bg-[#d89589] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;

export const CTA = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100 % Organic",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Best Quality",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit",
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Hygienic Product",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health Care",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit",
    },
  ];

  const benefits = [
    "Quis nostrud was exercitation.",
    "Quis nostrud was exercitation.",
    "Quis nostrud was exercitation.",
    "Quis nostrud was exercitation.",
  ];

  return (
    <div className="bg-[#ffffff] min-h-screen py-16 relative">
      <div className="Leaf4 left-[0rem] absolute top-[100rem] md:left-[3.1rem]   -translate-x-1/4">
        <img
          id="leaf-1"
          src={Leaf4}
          alt="Left decorative Ayurvedic leaf"
          loading="lazy"
          className="object-contain "
        />
      </div>
      <div className="container mx-auto px-4">
        {/* Why Pure Ayurveda Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`text-center p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#26774b]/20 rounded-full flex items-center justify-center text-[#26774b]">
                  {feature.icon}
                </div>
                <h3 className="text-lg text-[#000000] font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div
            className={`space-y-6 ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            } transition-all duration-700 delay-300`}
          >
            <span className="text-[#000000] font-medium">Best For You</span>
            <h2 className="text-4xl text-[#000000] font-bold">
              Why Pure Ayurveda
            </h2>
            <h3 className="text-2xl text-[#26774b] font-semibold">
              Solve Your Problem with The Power of Nature
            </h3>
            <p className="text-gray-600">
              At Ayurveda Shashvat Jeevan, we pride ourselves on our legacy of
              trusted Ayurvedic healing. Our treatments are 100% natural and
              safe, free from harmful chemicals or side effects. We provide
              personalized treatment plans tailored to individual health
              conditions, ensuring holistic healing by addressing the root
              causes rather than just symptoms. With our deep knowledge and
              commitment to Ayurveda, we bring long-term wellness and happiness
              to our patients.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-[#26774b]" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            <button className="bg-[#26774b] text-white px-8 py-3 rounded-full hover:bg-[#498d60] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Read More
            </button>
          </div>
        </div>

        {/* Video Section */}
        <VideoPopupSection/>
      </div>
    </div>
  );
};

export const WhyChooseUs = () => {
  {
    return (
      <div className="relative bg-white py-1 sm:pb-52 px-4">
        <div className=" absolute -bottom-0 -right-[6rem] -translate-x-1/4">
          <img
            id="leaf-1"
            src={LEaf3}
            alt="Left decorative Ayurvedic leaf"
            loading="lazy"
            className="object-contain "
          />
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl text-[#26774b] mb-3">Why Choose Us</h3>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Nature's secret for your truly health
                </h2>
                <p className="text-gray-500 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <img src={CheckMark} className="w-6 h-6 text-[#26774b]" />

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      100% Organic Herbal
                    </h3>
                    <p className="text-gray-500">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <img src={CheckMark} className="w-6 h-6 text-[#26774b]" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Professional Therapist
                    </h3>
                    <p className="text-gray-500">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={WhyChoose}
                  alt="Herbal Tea and Ingredients"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export function BenefitsStats() {
  const count = useMotionValue(0);

  const Count1 = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 25, { duration: 5 });
    return () => controls.stop();
  }, []);

  return (
    <div
      className="py-24 w-full  px-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${Testimonial})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 opacity-5" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid items-center grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h3 className="text-lg font-medium text-[#26774b] mb-4">
              Our Recent Achievements
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Benefit From Choosing The Best
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border border-gray-100 shadow-xl">
                <div className="flex items-center group">
                  <div className="p-6 bg-[#26774b] rounded-full transition-transform duration-300 group-hover:rotate-12">
                    <Award className="w-8 h-8 text-[#96f5c1]" strokeWidth={2} />
                  </div>
                  <div className="w-px h-16 bg-gray-200 mx-6"></div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900 mb-1 flex">
                      <IncrementValue value={25} />+
                    </div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 border border-gray-100 shadow-xl">
                <div className="flex items-center group">
                  <div className="p-6 bg-[#26774b] rounded-full transition-transform duration-300 group-hover:rotate-12">
                    <Users className="w-8 h-8 text-[#96f5c1]" strokeWidth={2} />
                  </div>
                  <div className="w-px h-16 bg-gray-200 mx-6"></div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900 mb-1 flex">
                      <IncrementValue value={60} />+
                    </div>
                    <div className="text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 border border-gray-100 shadow-xl">
                <div className="flex items-center group">
                  <div className="p-6 bg-[#26774b] rounded-full transition-transform duration-300 group-hover:rotate-12">
                    <Leaf className="w-8 h-8 text-[#96f5c1]" strokeWidth={2} />
                  </div>
                  <div className="w-px h-16 bg-gray-200 mx-6"></div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900 mb-1 flex">
                      <IncrementValue value={100} />+
                    </div>
                    <div className="text-gray-600">Our Products</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 border border-gray-100 shadow-xl">
                <div className="flex items-center group">
                  <div className="p-6 bg-[#26774b] rounded-full transition-transform duration-300 group-hover:rotate-12">
                    <ShieldCheck
                      className="w-8 h-8 text-[#96f5c1]"
                      strokeWidth={2}
                    />
                  </div>
                  <div className="w-px h-16 bg-gray-200 mx-6"></div>
                  <div>
                    <div className="text-4xl font-bold text-gray-900 mb-1 flex">
                      <IncrementValue value={100} />%
                    </div>
                    <div className="text-gray-600">Product Purity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoPopupSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Thumbnail with play button */}
      <div className="mt-16 relative rounded-2xl overflow-hidden">
        <img
          src={Video_Back}
          alt="Ayurvedic Treatment"
          className="w-full h-[400px] object-cover"
        />
        <button
          onClick={openModal}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <div className="bg-[#26774b] w-16 h-16 rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-white" />
          </div>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-black rounded-2xl overflow-hidden w-full max-w-4xl shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white rounded-full p-1 hover:bg-gray-200 z-10"
            >
              <X className="w-6 h-6 text-black" />
            </button>
            <video
              className="w-full h-[500px] object-cover"
              loop
              autoPlay
              muted
              playsInline
              key={isModalOpen ? "playing" : "stopped"} // key forces video re-render
            >
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}