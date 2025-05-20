import React from "react";
import { useDispatch } from "react-redux";
import { Heart, Star, ShoppingCart } from "lucide-react";
// Import the addToCart action from your slice
import { cartActions } from "../Store/cartSlice"; // Correct import here
import { useNavigate } from "react-router-dom";
import Leaf from "../assets/leaf2.png";
import { allProducts } from '../Store/productsData';

const ProductGrid = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = allProducts.filter(product => !product.isTrending);

  const handleAddToCart = (product) => {
    dispatch(
      cartActions.addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
  };

  return (
    <section id="PG" className="pb-1 pt-1 bg-white relative">
      <div
        id="productLeaf"
        className="absolute top-0 left-20 w-[30rem] h-[40rem] sm:w-[30rem]  -translate-x-1/4"
      >
        <img
          id="productLeaf"
          src={Leaf}
          alt="Left decorative Ayurvedic leaf"
          loading="lazy"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="text-[#26774b] text-sm font-medium">Medicine</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Our Top Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative">
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 ${product.badgeColor} text-white text-sm px-3 py-1 rounded-full`}
                  >
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform duration-200">
                  <Heart className="w-5 h-5 text-gray-400 hover:text-[#26774b]" />
                </button>
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl mb-4 cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  onClick={() => navigate(`/product/${product.id}-${product.name.toLowerCase().replace(/\s+/g, '-')}`)}
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span className="text-sm text-gray-600">
                    {product.rating}/5
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="w-full py-3 px-4 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-medium flex items-center justify-center gap-2 hover:border-[#26774b] hover:text-[#26774b] transition-colors duration-300"
              >
                <ShoppingCart className="w-5 h-5" />
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
