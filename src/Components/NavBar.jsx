import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Heart, ShoppingBag, User, ChevronDown, Menu, X } from 'lucide-react';
import { useLocation ,useNavigate} from 'react-router-dom';
import { Link } from "react-router";
import Logo from "../assets/Logo.jpg"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-2xl relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="">
          <img
                src={Logo}
                alt="Pure Ayurveda Logo"
                className=" h-14"
              />
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-[#26774b] focus:outline-none transition-transform duration-200 hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-[#26774b] font-medium' : 'text-gray-600 hover:text-[#26774b]'}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-[#26774b] font-medium' : 'text-gray-600 hover:text-[#26774b]'}`}>
              About
            </Link>
            {/* <Link to="/shop" className={`nav-link ${location.pathname === '/shop' ? 'text-[#26774b] font-medium' : 'text-gray-600 hover:text-[#26774b]'}`}>
              Shop
            </Link> */}
            {/* <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'text-[#26774b] font-medium' : 'text-gray-600 hover:text-[#26774b]'}`}>
              Services
            </Link> */}
            <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'text-[#26774b] font-medium' : 'text-gray-600 hover:text-[#26774b]'}`}>
              Blog
            </Link>
            {/* <div className="relative group">
              <button className="nav-link flex items-center text-gray-600 hover:text-[#26774b] transition-all duration-300">
                Pages
                <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
            </div> */}
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'text-[#26774b] font-medium' : 'text-gray-600 hover:text-[#26774b]'}`}>
              Contact
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="icon-button text-gray-600 hover:text-[#26774b]">
              <Heart className="w-6 h-6" />
            </button>
            <button 
              onClick={() => navigate('/cart')}
              className="icon-button text-gray-600 hover:text-[#26774b] relative"
            >
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-[#26774b] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transition-transform duration-200 hover:scale-110">
                {cartQuantity}
              </span>
            </button>
            <button className="icon-button text-gray-600 hover:text-[#26774b]">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 max-h-96 translate-y-0'
              : 'opacity-0 max-h-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
            <Link to="/" className={`block px-3 py-2 ${location.pathname === '/' ? 'text-[#26774b] font-medium' : 'text-gray-600 hover:text-[#26774b]'} transform transition-transform duration-200 hover:translate-x-2`}>
              Home
            </Link>
            <Link to="/about" className={`block px-3 py-2 ${location.pathname === '/about' ? 'text-[#26774b] font-medium' : 'text-gray-600 hover:text-[#26774b]'} transform transition-transform duration-200 hover:translate-x-2`}>
              About
            </Link>
            {/* <Link to="/shop" className={`block px-3 py-2 ${location.pathname === '/shop' ? 'text-[#26774b] font-medium' : 'text-gray-600 hover:text-[#26774b]'} transform transition-transform duration-200 hover:translate-x-2`}>
              Shop
            </Link>
            <Link to="/services" className={`block px-3 py-2 ${location.pathname === '/services' ? 'text-[#26774b] font-medium' : 'text-gray-600 hover:text-[#26774b]'} transform transition-transform duration-200 hover:translate-x-2`}>
              Services
            </Link> */}
            <Link to="/blog" className={`block px-3 py-2 ${location.pathname === '/blog' ? 'text-[#26774b] font-medium' : 'text-gray-600 hover:text-[#26774b]'} transform transition-transform duration-200 hover:translate-x-2`}>
              Blog
            </Link>
            {/* <button className="flex items-center w-full px-3 py-2 text-gray-600 hover:text-[#26774b] transform transition-transform duration-200 hover:translate-x-2">
              Pages
              <ChevronDown className="w-4 h-4 ml-1" />
            </button> */}
            <Link to="/contact" className={`block px-3 py-2 ${location.pathname === '/contact' ? 'text-[#26774b] font-medium' : 'text-gray-600 hover:text-[#26774b]'} transform transition-transform duration-200 hover:translate-x-2`}>
              Contact
            </Link>
          </div>
          <div className="px-4 py-3 border-t border-gray-200 flex justify-center space-x-6">
            <button className="icon-button text-gray-600 hover:text-[#26774b]">
              <Heart className="w-6 h-6" />
            </button>
            <button 
              onClick={() => navigate('/cart')}
              className="icon-button text-gray-600 hover:text-[#26774b] relative"
            >
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-[#26774b] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartQuantity}
              </span>
            </button>
            <button className="icon-button text-gray-600 hover:text-[#26774b]">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;