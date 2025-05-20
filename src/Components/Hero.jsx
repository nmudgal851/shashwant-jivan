"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "../StyleSheet/index.css";
import Leafbanner from "../assets/Leafbanner.png";
import Eye_care from "../assets/Eye_care.jpg"
import bg from "../assets/bg.png";
import HeroCarousel from "./Hero_slider";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-20 "
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      {/* Decorative Leaves */}

      <div className="leaf left-[1rem] absolute top-[100rem] md:left-[30rem]   -translate-x-1/4">
        <img
          id="leaf-1"
          src={Leafbanner}
          alt="Left decorative Ayurvedic leaf"
          loading="lazy"
          className="object-contain "
        />
      </div>

      {/* <div className="leaf2 left-[30em] absolute top-[100rem] md:left-[90rem] w-40 h-40  -translate-x-1/4">
        <img
          id="leaf-1"
          src={Leaf}
          alt="Left decorative Ayurvedic leaf"
          loading="lazy"
          className="object-contain"
        />
      </div> */}

      <div className="ani hidden md:block absolute top-0 left-0 w-[20rem] h-40  -translate-x-1/4">
        <img
          id="leaf-1"
          src="https://kamleshyadav.com/html/pure-ayurveda/html/pureayurveda-demo/assets/images/ban-leafleft.png"
          alt="Left decorative Ayurvedic leaf"
          loading="lazy"
          className="object-contain"
        />
      </div>
      <div className="ani_2 hidden md:block absolute bottom-1/4 right-0 w-[20rem] h-40  translate-x-1/4">
        <img
          src="https://kamleshyadav.com/html/pure-ayurveda/html/pureayurveda-demo/assets/images/ban-leafright.png"
          alt="Right decorative Ayurvedic leaf"
          loading="lazy"
          width="500"
          height="500"
          className="object-contain"
        />
      </div>

   <HeroCarousel/>
    </section>
  );
}
