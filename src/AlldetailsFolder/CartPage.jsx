import React from "react";
import { useCart } from "../AlldetailsFolder/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border p-4 rounded-lg shadow-sm bg-white flex flex-col"
                >
                  <img
                    src={item.image || "/placeholder.png"}
                    alt={item.title}
                    className="h-32 object-contain mx-auto mb-3"
                  />
                  <h3 className="font-semibold text-sm mb-1 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-2">
                    {item.quantity} × ₦{(item.price || 0).toLocaleString()}
                  </p>
                  <p className="text-green-600 font-semibold mb-3">
                    ₦{((item.price || 0) * (item.quantity || 0)).toLocaleString()}
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-gray-200 text-black px-2 rounded"
                    >
                      -
                    </button>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-gray-200 text-black px-2 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-500 text-white px-2 rounded"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg gap-3">
              <h3 className="text-lg font-medium text-gray-800">
                Total:{" "}
                <span className="text-green-600 font-semibold">
                  ₦{totalPrice.toLocaleString()}
                </span>
              </h3>

              <div className="flex gap-3">
                <button
                  onClick={clearCart}
                  className="bg-gray-700 text-white text-sm px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Clear Cart
                </button>

                <Link to="/CheckoutPage">
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
