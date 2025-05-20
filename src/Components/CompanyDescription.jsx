import React, { useEffect, useState } from "react";
import { Leaf, Shield, Heart, Activity, Award, Users } from "lucide-react";
import Desc from "../assets/Descrip.jpg";
import { Link } from "react-router-dom";

const CompanyDescription = () => {
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
      icon: <Heart className="w-8 h-8" />,
      title: "Hygienic Product",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Health Care",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Care",
      description: "Experienced Ayurvedic physicians",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Global Trust",
      description: "Trusted by thousands worldwide",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-[#fffef6] py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Welcome To
            <span className="block text-[#26774b] mt-2">
              Ayurvedic Shashwat Jivan
            </span>
          </h1>
          <p className="text-2xl text-black font-medium mt-6">
          Natural Care for Him, Her & Liver – Ayurvedic Medicine Online You
          Can Trust.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-12  mb-20">
          {/* Left Side - Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="flex justify-start flex-col gap-10 ">
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src={Desc}
                alt="Ayurvedic Ingredients"
                className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative rounded-3xl overflow-hidden group">
              <img
                src={Desc}
                alt="Ayurvedic Ingredients"
                className="w-full h-[400px] object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#26774b]/10 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#26774b]/10 rounded-full blur-2xl" />
          </div>
            </div>

          {/* Right Side - Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            
            <p className="text-black leading-relaxed">
             <span className="text-xl   text-black mt-6"> Man Matters – Ayurvedic Medicine for Men </span> <br /> <br />
              Man Matters is a specially formulated <Link className="font-bold text-[#256b44] " to={"/product/2-man-matters"}>Ayurvedic medicine for men&nbsp;</Link>
              that helps enhance strength, stamina, and overall vitality through
              a powerful blend of herbs like Ashwagandha, Shilajit, Gokshura,
              and Safed Musli. This all-natural formula is designed to support
              reproductive health, reduce stress, boost immunity, and promote
              hormonal balance in men of all ages. Whether you're dealing with
              fatigue, low energy, or performance concerns, Man Matters offers a
              safe and effective solution that aligns with the core principles
              of Ayurveda. Available through our trusted Ayurvedic medicine
              online platform, it empowers men to take control of their health
              with nature’s wisdom, delivering lasting results without harmful
              side effects.
            </p>
            <p className="text-black leading-relaxed">
            <span className="text-xl   text-black mt-6">Her Flow – Ayurvedic Medicine for Women </span>
              <br /> <br />
              Her Flow is a gentle yet powerful <Link className="font-bold text-[#256b44] " to={"product/3-her-flow"}>Ayurvedic medicine for Women&nbsp;</Link>
              created to support menstrual wellness, hormonal harmony, and
              emotional balance. Infused with ancient Ayurvedic herbs like
              Shatavari, Lodhra, Ashoka, and Amla, it helps regulate cycles,
              ease PMS symptoms, relieve menopause discomfort, and boost natural
              energy and radiance. Her Flow is a holistic formula that nurtures
              women’s health at every stage of life, without relying on
              synthetic chemicals or hormones. Now available as part of our
              Ayurvedic medicine online collection, Her Flow provides a safe,
              natural path to inner balance and vitality, helping women feel
              their best—every day of the month.
            </p>
            <p className="text-black leading-relaxed">
            <span className="text-xl   text-black mt-6"> Liver Care – Ayurvedic Liver Syrup
            </span>
            <br />
            <br />
              Liver Care is a potent <Link className="font-bold text-[#256b44] " to={"product/3-her-flow"}> Ayurvedic liver syrup</Link> designed to cleanse,
              detoxify, and revitalize the liver using time-tested herbs such as
              Kalmegh, Bhumyamalaki, Kutki, and Triphala. This herbal
              formulation helps improve liver function, supports digestion, and
              combats liver issues such as fatty liver, sluggish metabolism, and
              toxin buildup from stress, alcohol, or poor diet. Ideal for daily
              liver maintenance or recovery, Liver Care is safe for long-term
              use and suitable for all age groups. As part of our best-selling
              range of Ayurvedic medicine online, this syrup is a natural
              solution for liver health, trusted by those who seek purity,
              effectiveness, and the healing touch of Ayurveda.
            </p>

            <div className="pt-8">
              <button className="bg-[#26774b] text-white px-8 py-3 rounded-full hover:bg-[#1e5d3a] transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Learn More About Our Treatments
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 8) * 100}ms` }}
            >
              <div className="w-16 h-16 bg-[#26774b]/10 rounded-full flex items-center justify-center mb-6 text-[#26774b]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-[#26774b] mb-4">
            Begin Your Journey to Better Health
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the transformative power of authentic Ayurvedic
            treatments.
          </p>
          <button className="bg-[#26774b] text-white px-12 py-5 rounded-full hover:bg-[#1e5d3a] transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg font-medium">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyDescription;
