// import Navbar from "../Components/NavBar"
// import Hero from "../Components/Hero"
// import ServiceSlider from "../Components/service-slider"
// import ProductGrid from "./ProductGrid"
// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#f8f5f1] overflow-x-hidden">
//       <Navbar />
//       <Hero />
//       <ServiceSlider />
//       <ProductGrid/>
//     </main>
//   )
// }


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import ProductGrid from './components/ProductGrid';
// import ProductDetail from './components/ProductDetail';

import Navbar from "../Components/NavBar"
import Hero from "../Components/Hero"
import ProductDetail from './ProductDetail';
import ProductGrid from "./ProductGrid"
import About from './About';
import Footer from './Footer';
import CartPage from './CartPage';
import { CTA } from './About';
import BlogPage from './BlogPage';
import BlogPost from './BlogPost';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import ServiceSlider from './ServiceSlider';
import TrendingProducts from './TrendingProducts';
import CompanyDescription from './CompanyDescription';
import { WhyChooseUs } from './About';
import { BenefitsStats } from './About';
function App() {
  return (
    
    <BrowserRouter>
      <div className="min-h-screen overflow-hidden bg-[#ffffff]">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ServiceSlider/>
              <ProductGrid />
              <CompanyDescription/>
              <WhyChooseUs/>
              <BenefitsStats/>
              <CTA />
              <TrendingProducts/>
              <Testimonials/>
            </>
          } />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;