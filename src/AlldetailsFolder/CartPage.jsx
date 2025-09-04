import React from "react";
import { useCart } from "../AlldetailsFolder/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.menuprice * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-amber-50 p-6 mt-20">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-rose-600">
          Your Order
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-10">
            <img
              src="/empty-cart.png"
              alt="Empty Cart"
              className="mx-auto w-40 mb-6"
            />
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Your cart is empty!
            </h2>
            <Link to="/OrderPage">
              <button className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition">
                Browse Meals
              </button>
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="border p-4 rounded-lg shadow-sm bg-white flex flex-col"
                >
                  <img
                    src={item.menupicture}
                    alt={item.menuname}
                    className="h-32 object-contain mx-auto mb-3"
                  />
                  <h3 className="font-semibold text-sm mb-1 text-gray-800">
                    {item.menuname}
                  </h3>
                  <p className="text-gray-500 text-xs mb-2">
                    {item.quantity} × ${item.menuprice}
                  </p>
                  <p className="text-green-600 font-semibold mb-3">
                    ${(item.menuprice * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600 transition mt-auto"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-10 flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg gap-3">
              <h3 className="text-lg font-medium text-gray-800">
                Total:{" "}
                <span className="text-green-600 font-semibold">
                  ${totalPrice.toFixed(2)}
                </span>
              </h3>

              <div className="flex gap-3">
                <button
                  onClick={clearCart}
                  className="bg-gray-700 text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Clear Cart
                </button>

                <Link to="/checkoutPage">
                  <button className="bg-rose-600 text-white text-sm px-4 py-2 rounded hover:bg-rose-700 transition">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
