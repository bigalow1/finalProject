// CartPage.jsx
import React from "react";
import { useCart } from "../AlldetailsFolder/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  const cartIsEmpty = cart.length === 0;
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-black min-h-screen ">
      {cartIsEmpty ? (
        <div className="flex items-center justify-center h-[400px]">
          <div className="text-center bg-red-500 text-white p-10 rounded-2xl shadow-lg">
            <img
              src="/empty-cart.png"
              alt="Empty Cart"
              className="mx-auto w-32 mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Your Cart is Empty</h2>
            <p className="mb-4">Looks like you haven't added anything yet.</p>
            <Link to="/orderPage">
              <button className="bg-black px-6 py-3 rounded-lg text-white hover:bg-gray-800">
                Browse Meals
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <h2 className="text-3xl  font-bold mb-6">Your Cart</h2>
          <div className="space-y-4 flex flex-col md:flex-row md:flex-wrap gap-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-xl shadow-md w-[30%] flex items-center justify-between bg-white"
              >
                <div  className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 object-contain"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                  >
                    -
                  </button>
                  <span className="text-lg text-white font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                  >
                    +
                  </button>
                </div>

                {/* Total for item */}
                <p className="font-bold text-lg">
                  ${(item.quantity * item.price).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Cart Footer */}
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500"
            >
              Clear Cart
            </button>
            <div className="text-2xl font-bold text-white">
              Total Amount: ${totalAmount.toFixed(2)}
            </div>
            <div className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg">
                 <Link to="/CheckoutPage" className="bg-red text-white px-6 py-3 rounded-lg hover:bg-gray-800">
              Checkout
            </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
