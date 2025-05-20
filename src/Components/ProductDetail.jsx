import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Heart,
  Minus,
  Plus,
  ArrowLeft,
  Star,
  Truck,
  Shield,
  RefreshCw,
} from "lucide-react";
import parse from "html-react-parser";
import { cartActions } from "../Store/cartSlice";
import { allProducts } from "../Store/productsData";
import SimilarProducts from "./SimilarProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const product = allProducts.find((p) => p.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.images?.[0] || "");

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>Product not found</p>
      </div>
    );
  }

  // Dynamically highlight product name and bold keywords
  const highlightedDescription = product.product_Des
    .replace(
      new RegExp(product.name, "g"),
      `<span class=\"text-[#26774b] font-semibold\">${product.name}</span>`
    )
    .replace(/Ayurvedic medicine/g, '<strong>Ayurvedic medicine</strong>')
    .replace(/organic/g, '<strong>organic</strong>')
    .replace(/Man Matters/g, '<strong className=" text-[#26774b] text-xl">Man Matters</strong>')
    .replace(/Liver Care/g, '<strong className=" text-[#26774b] text-xl">Liver Care</strong>')

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(
        cartActions.addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: mainImage,
        })
      );
    }
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>{product.name} | Ayurvedic Shashwat Jeevan</title>
        <meta name="description" content={product.metaDescription} />
        <meta name="keywords" content={product.metaKeywords} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.metaDescription} />
        <meta property="og:image" content={product.images?.[0]} />
      </Helmet>
      <button
        onClick={handleBack}
        className="flex items-center text-gray-600 hover:text-[#26774b] mb-8 transition-colors duration-300"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Products
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-auto rounded-2xl shadow-lg object-cover transition-all duration-500"
            />
            <button className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-md hover:scale-110 transition-transform duration-200">
              <Heart className="w-5 h-5 text-gray-400 hover:text-[#26774b]" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images?.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name} view ${idx + 1}`}
                onClick={() => setMainImage(img)}
                className={`rounded-lg cursor-pointer object-cover transition-all duration-300 border-2 ${
                  mainImage === img
                    ? "border-[#26774b] scale-105"
                    : "border-transparent hover:scale-105 hover:border-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {product.badge && (
            <span className={`${product.badgeColor} text-white text-sm px-4 py-1 rounded-full`}>
              {product.badge}
            </span>
          )}

          <h1 className="text-3xl font-bold text-[#26774b]">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-gray-600">({product.rating} Reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 line-through text-xl">₹{product.originalPrice}</span>
            <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
          </div>

          {/* Description & Details */}
          <div className="border-t border-b border-gray-200 py-6 space-y-4">
            <p className="text-gray-600 leading-relaxed">
              {parse(highlightedDescription)}
            </p>
            <ul className="list-disc pl-6 space-y-1">
              {product.Addition_Details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Quantity & Cart */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center border border-gray-200 rounded-full">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:text-[#26774b] transition-colors duration-200"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:text-[#26774b] transition-colors duration-200"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#26774b] text-white py-3 px-6 rounded-full hover:bg-[#299459] transition-colors duration-300 flex items-center justify-center space-x-2"
            >
              Add to Cart
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-8">
            <div className="text-center">
              <div className="bg-[#f3f8f0] p-4 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Truck className="w-6 h-6 text-[#26774b]" />
              </div>
              <p className="text-sm text-gray-600">Free Shipping</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f3f8f0] p-4 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#26774b]" />
              </div>
              <p className="text-sm text-gray-600">Secure Payment</p>
            </div>
            <div className="text-center">
              <div className="bg-[#f3f8f0] p-4 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-[#26774b]" />
              </div>
              <p className="text-sm text-gray-600">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>

      <SimilarProducts currentProductId={parseInt(id)} />
    </div>
  );
};

export default ProductDetail;
