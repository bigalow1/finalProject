import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../AlldetailsFolder/CartContext";

const RestaurantDetails = () => {
  const { id } = useParams(); // restaurant id from URL
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await fetch(`http://localhost:3002/restaurant/${id}`);
        if (!res.ok) throw new Error("Failed to fetch restaurant");
        const data = await res.json();
        console.log("Restaurant data:", data); // debug API response
        setRestaurant(data);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  if (loading) return <p className="text-center mt-40">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-500">{error}</p>;
  if (!restaurant) return <p className="text-center mt-20">Restaurant not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 mt-20">
      {/* Restaurant Header */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src={restaurant.restaurantPicture || "/placeholder.jpg"}
          alt={restaurant.restaurantName}
          className="w-full md:w-1/3 h-48 object-cover rounded-lg border-2 border-rose-600"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-rose-600 mt-4 md:mt-0">
            {restaurant.restaurantName}
          </h1>
          <p className="text-gray-700 mb-1">{restaurant.address}</p>
          <p className="text-gray-500">
            Open: {restaurant.opentime} - {restaurant.closetime}
          </p>
        </div>
      </div>

      {/* Menus Section */}
      <section className="max-w-6xl mx-auto mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Menu</h2>

        {restaurant.menus && restaurant.menus.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {restaurant.menus.map((menu, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col"
              >
                <img
                  src={menu.menuPicture || "/placeholder.jpg"}
                  alt={menu.menuName}
                  className="h-40 w-full object-cover rounded mb-3"
                />
                <h3 className="font-semibold text-lg mb-1">{menu.menuName}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {menu.menuDescription}
                </p>
                <p className="text-green-600 font-bold mb-3">
                  ₦{menu.menuPrice?.toLocaleString()}
                </p>
                <button
                  onClick={() => addToCart(menu)}
                  className="mt-auto bg-rose-600 text-white py-2 rounded hover:bg-amber-400 transition"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No menu items available for this restaurant.
          </p>
        )}
      </section>
    </div>
  );
};

export default RestaurantDetails;
