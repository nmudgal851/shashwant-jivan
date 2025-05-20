import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Logo from "../assets/Logo.jpg";
import FotterBg from "../assets/FotterBg.png"
const Footer = () => {
  return (
    <footer className="bg-[#2B1810] text-white pt-16 pb-6 relative" 
      style={{ backgroundImage: `url(${FotterBg})`, backgroundSize: "cover" }}
    >


      {/* Newsletter Section */}
      <div className="container mx-auto px-4 mb-16 relative  z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Sign Up To Get Updates &<br />
            News About Us..
          </h2>
          <div className="flex w-full md:w-auto gap-2 flex-col !important;">
            <input
              type="email"
              placeholder="Enter Your Email..."
              className="flex-1 md:w-[400px] px-6 py-3 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#26774b]"
            />
            <button className="md:w-full px-6 py-3 bg-[#26774b] text-white rounded-full hover:bg-[#299459] transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="">
              <img src={Logo} alt="Pure Ayurveda Logo" className=" h-14" />
            </Link>
            <p className="text-gray-400">
              Amet minim mollit non deserunt ullamco est sit Velit officia
              consequat duis enim velit mollit. sunt nostrud amet. Excepteur
              sint occaecat.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#26774b] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#26774b] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#26774b] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-400 hover:text-[#26774b] transition-colors"
                >
                  Shipping Options
                </Link>
              </li>
              <li>
                <Link
                  to="/wishlist"
                  className="text-gray-400 hover:text-[#26774b] transition-colors"
                >
                  My Wishlist
                </Link>
              </li>
              <li>
                <Link
                  to="/account"
                  className="text-gray-400 hover:text-[#26774b] transition-colors"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  to="/returns"
                  className="text-gray-400 hover:text-[#26774b] transition-colors"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-[#26774b] transition-colors"
                >
                  Shopping FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>
                  4517 Washington Ave.
                  <br />
                  Manchester, Kentucky 39495
                </p>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>(208) 555-0112</p>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>example@gmail.com</p>
              </li>
            </ul>
          </div>

          {/* Recent Blog */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Recent Blog</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1597318181425-9669d2b6bf10?w=120&h=120&q=80"
                  alt="Blog post"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm text-gray-400">Jun 10, 2024</p>
                  <p className="text-sm">
                    Amet minim mollit non deserunt est sit Velit officia
                    consequat.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1597318181429-0e296be0339b?w=120&h=120&q=80"
                  alt="Blog post"
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm text-gray-400">Jun 10, 2024</p>
                  <p className="text-sm">
                    Amet minim mollit non deserunt est sit Velit officia
                    consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>Copyright © 2024. All Right Reserved. Pure Ayurveda</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
