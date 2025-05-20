import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;

    const mailtoLink = `mailto:info@shashwatjivan.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;

    // Popup
    alert("Message Sent! Thank you for contacting us.");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            <div>
              <h1 className="text-6xl font-bold leading-tight mb-8">
                Let's get
                <br />
                in touch
              </h1>
              <h2 className="text-3xl font-semibold mb-12">
                Don't be afraid to
                <br />
                say hello with us!
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-gray-500">PHONE</p>
                <p className="text-lg">+91 99535 87530</p>
              </div>
              <div>
                <p className="text-gray-500">EMAIL</p>
                <p className="text-lg">info@shashwatjivan.com</p>
              </div>
              <div>
                <p className="text-gray-500">OFFICE</p>
                <p className="text-lg">
                  aarogyapath aayurved rasaayanashaala
                  <br />
                  <br />
                  <span className="text-gray-500">TRADE MARK :-</span>
                  <br />
                  Ayurvedic Shashvat Jeevan
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-black hover:underline mt-2"
                >
                  See on Google Map
                  <svg
                    className="w-4 h-4 ml-1 transform rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mb-12">
              <p className="text-gray-600 text-lg">
                Great! We're excited to hear from you and let's start something
                special together. Call us for any inquiry.
              </p>
            </div>

            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-8">Contact</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-400 outline-none py-2"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-400 outline-none py-2"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-400 outline-none py-2"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-400 outline-none py-2"
                      required
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your interest"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 focus:border-yellow-400 outline-none py-2 resize-none"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-4 font-medium hover:bg-yellow-300 transition-colors"
                >
                  Send to us
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
