import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import {
  Minus,
  Plus,
  X,
  ArrowRight,
  Truck,
  RefreshCw,
  Shield,
} from "lucide-react";
import { cartActions } from "../store/cartSlice";
import ReactWhatsapp from "react-whatsapp";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.totalPrice,
    0
  );
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handleIncrement = (item) => {
    dispatch(
      cartActions.addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      })
    );
  };

  const handleDecrement = (itemId) => {
    dispatch(cartActions.removeFromCart(itemId));
  };

  const handleRemove = (itemId) => {
    // Remove all quantities of this item
    const item = cartItems.find((item) => item.id === itemId);
    for (let i = 0; i < item.quantity; i++) {
      dispatch(cartActions.removeFromCart(itemId));
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/#PG"
              className="inline-flex items-center bg-[#26774b] text-white px-8 py-3 rounded-full hover:bg-[#299459] transition-all duration-300"
            >
              Continue Shopping
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const generateWhatsAppMessage = () => {
    let message = "🛒 *New Order Request*\n\n";

    cartItems.forEach((item, index) => {
      message += `*${index + 1}. ${item.name}*\n`;
      message += `Qty: ${item.quantity}\n`;
      message += `Price: $${item.price.toFixed(2)}\n`;
      message += `Total: $${item.totalPrice.toFixed(2)}\n\n`;
    });

    message += `🧾 *Subtotal:* $${subtotal.toFixed(2)}\n`;
    message += `🚚 *Shipping:* Free\n`;
    message += `💰 *Total:* $${total.toFixed(2)}\n`;

    return message;
  };
  const handleWhatsAppCheckout = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = "919650478770";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 p-6 border-b border-gray-100 last:border-0"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-[#26774b] font-medium">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-0 md:gap-4">
                    <div className="flex items-center border border-gray-200 rounded-full">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="p-2 hover:text-[#26774b] transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item)}
                        className="p-2 hover:text-[#26774b] transition-colors duration-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className=" pl-0 md:p-2 text-gray-400 hover:text-green-700 transition-colors duration-200"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t border-gray-100 pt-2">
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#26774b] text-white py-3 rounded-full hover:bg-[#299459] transition-all duration-300 mb-6"
              >
                Checkout on WhatsApp
              </button>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="bg-[#F8F3F0] p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-[#26774b]" />
                  </div>
                  <p className="text-xs text-gray-600">Free Shipping</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#F8F3F0] p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-[#26774b]" />
                  </div>
                  <p className="text-xs text-gray-600">Easy Returns</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#F8F3F0] p-3 rounded-full w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#26774b]" />
                  </div>
                  <p className="text-xs text-gray-600">Secure Payment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
