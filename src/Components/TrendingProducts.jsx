import React from 'react';
import { useDispatch } from 'react-redux';
import { Star } from 'lucide-react';
import { cartActions } from '../Store/cartSlice';
import { useNavigate } from "react-router-dom";
import { allProducts } from '../Store/productsData';

const TrendingProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const trendingProducts = allProducts.filter(product => product.isTrending);

  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]
    }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-[#26774b] text-sm font-medium">Product</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Trending Product</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <div key={product.id} className="bg-gray-50 rounded-2xl p-4 group">
              <div className="relative overflow-hidden">
                {product.badge && (
                  <span className={`absolute top-4 left-4 ${product.badgeColor} text-white text-sm px-3 py-1 rounded-full z-10`}>
                    {product.badge}
                  </span>
                )}
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                    onClick={() => navigate(`/product/${product.id}`)}
                  />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through">${product.originalPrice}</span>
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}/5</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-4 py-3 px-4 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-medium hover:bg-[#299459] hover:text-white hover:border-[#299459] transition-colors duration-300"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
