import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { cartActions } from "../Store/cartSlice";
import { allProducts } from '../Store/productsData';

const SimilarProducts = ({ currentProductId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const wishlistItems = useSelector(state => state.wishlist.items);

  const products = allProducts

  const filteredProducts = products
    .filter((product) => product.id !== currentProductId)
    .slice(0, 4);

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

  const handleToggleWishlist = (product) => {
    dispatch(
      wishlistActions.toggleWishlistItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        originalPrice: product.originalPrice,
      })
    );
  };

  const isInWishlist = (productId) => {
    // return wishlistItems.some(item => item.id === productId);
  };

  return (
    <section className="py-12 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-[#26774b] text-sm font-medium">
            Discover More
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">
            Similar Products
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative">
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 ${product.badgeColor} text-white text-sm px-3 py-1 rounded-full z-10`}
                  >
                    {product.badge}
                  </span>
                )}
                <button
                  onClick={() => handleToggleWishlist(product)}
                  className={`absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform duration-200 z-10 ${
                    isInWishlist(product.id)
                      ? "text-[#26774b]"
                      : "text-gray-400"
                  }`}
                >
                  <Heart
                    className="w-5 h-5"
                    fill={isInWishlist(product.id) ? "#26774b" : "none"}
                  />
                </button>
                <div
                  className="relative overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>

              <div className="mt-4">
                <h3
                  className="text-lg font-semibold text-gray-900 hover:text-[#26774b] transition-colors cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 line-through text-sm">
                      ${product.originalPrice}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-sm text-gray-600">
                      {product.rating}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full mt-4 py-2 px-4 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-medium flex items-center justify-center gap-2 hover:border-[#26774b] hover:text-[#26774b] transition-colors duration-300"
                >
                  <ShoppingCart className="w-4 h-4" />
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

export default SimilarProducts;
