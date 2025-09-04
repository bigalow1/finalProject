import React, { useState } from "react";
import { useCart } from "../AlldetailsFolder/CartContext";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, clearCart } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    payment: "cod",
  });

  const cartIsEmpty = cart.length === 0;

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(
      `Order placed successfully!\n\nName: ${formData.fullName}\nPhone: ${formData.phone}\nAddress: ${formData.address}\nPayment: ${
        formData.payment === "cod" ? "Cash on Delivery" : "Card Payment"
      }\nTotal: $${totalAmount.toFixed(2)}`
    );

    clearCart();
  };

  return (
    <div className="min-h-screen bg-amber-50 p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-rose-600">
          Checkout
        </h1>

        {cartIsEmpty ? (
          <div className="text-center py-20">
            <img
              src="/empty-cart.png"
              alt="Empty Cart"
              className="mx-auto w-40 mb-6"
            />
            <h2 className="text-xl font-semibold mb-4">Your cart is empty!</h2>
            <Link to="/OrderPage">
              <button className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition">
                Browse Meals
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cart Summary */}
            <div>
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b pb-3"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-16 w-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-500">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-right text-lg font-bold">
                Total: ${totalAmount.toFixed(2)}
              </div>
            </div>

            {/* Delivery Details */}
            <div>
              <h2 className="text-xl font-bold mb-4">Delivery Details</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full p-3 border rounded-lg"
                  required
                />
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Delivery Address"
                  className="w-full p-3 border rounded-lg"
                  rows="3"
                  required
                ></textarea>

                <div className="space-y-2">
                  <label className="block font-semibold">Payment Method</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        value="cod"
                        checked={formData.payment === "cod"}
                        onChange={handleChange}
                      />
                      Cash on Delivery
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="payment"
                        value="card"
                        checked={formData.payment === "card"}
                        onChange={handleChange}
                      />
                      Card Payment
                    </label>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="w-full bg-rose-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-rose-700 transition"
                >
                  Place Order
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
