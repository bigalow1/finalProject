import React, { useState } from "react";
import { useCart } from "../AlldetailsFolder/CartContext";
import { useNavigate, Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    payment: "cash_on_delivery",
  });

  const [loading, setLoading] = useState(false);

  const cartIsEmpty = cart.length === 0;
  const totalAmount = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }

    const token = localStorage.getItem("token"); // ✅ get saved JWT
    if (!token) {
      alert("⚠️ Please log in to place an order.");
      navigate("/login");
      return;
    }

    const orderData = {
      fullName: formData.fullName,
      phone: formData.phone,
      address: formData.address,
      paymentMethod: formData.payment,
      items: cart.map((item) => ({
        menuName: item.title,
        menuPrice: item.price,
        quantity: item.quantity,
        menuPicture: item.image,
      })),
      total: totalAmount,
    };

    try {
      setLoading(true);
      const res = await fetch("https://final-backend-57f6.onrender.com/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ attach token
        },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Order placed successfully!");
        clearCart();
        navigate("/thankyou");
      } else {
        alert(`❌ Failed to place order: ${data.message || "Error"}`);
      }
    } catch (err) {
      console.error("Order error:", err);
      alert("❌ Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 mt-20">
      <h1 className="text-2xl font-bold mb-6 text-rose-600">Checkout</h1>

      {cartIsEmpty ? (
        <div className="text-center bg-rose-100 p-6 rounded">
          <h2 className="text-xl font-semibold mb-2">Your cart is empty!</h2>
          <Link to="/OrderPage">
            <button className="bg-rose-600 text-white px-4 py-2 rounded hover:bg-rose-700">
              Browse Meals
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cart Summary */}
          <div>
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image || "/placeholder.png"}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded"
                  />
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p>
                      {item.quantity} × ₦{(item.price || 0).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-3 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-3 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <p className="mt-4 font-bold">
              Total: ₦{totalAmount.toLocaleString()}
            </p>
          </div>

          {/* Delivery Details */}
          <div>
            <h2 className="text-xl font-bold mb-4">Delivery Details</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handlePlaceOrder();
              }}
              className="space-y-3"
            >
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full border p-2 rounded"
              />
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border p-2 rounded"
              />
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Delivery Address"
                className="w-full border p-2 rounded"
                rows="3"
              />
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cash_on_delivery"
                    checked={formData.payment === "cash_on_delivery"}
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
                  <Link to="/payment" className="text-black">
                    Pay with Debit Card
                  </Link>
                </label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-rose-600 text-white py-2 rounded hover:bg-rose-700 disabled:opacity-50"
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
