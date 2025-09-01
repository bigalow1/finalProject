import React from "react";
import { useCart } from "../AlldetailsFolder/CartContext"; // adjust path if needed
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart } = useCart();

  const cartIsEmpty = cart.length === 0;

  // Total amount
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-amber-300 min-h-screen">
      {cartIsEmpty ? (
        // Empty Cart View
        <div className="flex items-center justify-center min-h-[00px]">
          <div className="text-center bg-red-500 text-white p-10 rounded shadow-md">
            <img
              src="/empty-cart.png"
              alt="Empty Cart"
              className="mx-auto w-32 mb-4"
            />
            <h2 className="text-xl font-bold mb-2">Your Cart is Empty</h2>
            <p className="mb-4">Looks like you haven't added anything yet.</p>
            <Link to="/orderPage">
              <button className="bg-black px-4 py-2 rounded text-white hover:bg-gray-800">
                Browse Meals
              </button>
            </Link>
          </div>
        </div>
      ) : (
        // Cart Items View
        <>
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded shadow flex items-center gap-4 bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 object-contain"
                />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${(item.quantity * item.price).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-8 text-right text-xl font-semibold">
            Total Amount: ${totalAmount.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
