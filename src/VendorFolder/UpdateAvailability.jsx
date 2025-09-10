import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

function UpdateAvailability() {
  const [restaurants, setRestaurants] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState({
    restaurantPicture: "",
    restaurantName: "",
    address: "",
    opentime: "",
    closetime: "",
  });
  const [newMenu, setNewMenu] = useState({
    menuPicture: "",
    menuName: "",
    menuDescription: "",
    menuPrice: "",
    available: true,
  });

  // ✅ Fetch restaurants
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await fetch("http://localhost:3002/restaurant"); // ✅ singular
      const data = await res.json();
      setRestaurants(data);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  // ✅ Add Restaurant
  const handleAddRestaurant = async () => {
    try {
      await fetch("http://localhost:3002/restaurant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRestaurant),
      });

      setNewRestaurant({
        restaurantPicture: "url",
        restaurantName: "",
        address: "",
        opentime: "",
        closetime: "",
      });

      fetchRestaurants();
    } catch (error) {
      console.error("Error adding restaurant:", error);
    }
  };

  // ✅ Add Menu to a restaurant
  const handleAddMenu = async (restaurantId) => {
    try {
      await fetch(`http://localhost:3002/restaurant/all/${restaurantId}/menus`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newMenu,
          menuPrice: parseFloat(newMenu.menuPrice),
        }),
      });

      setNewMenu({
        menuPicture: "",
        menuName: "",
        menuDescription: "",
        menuPrice: "",
        available: true,
      });

      fetchRestaurants();
    } catch (error) {
      console.error("Error adding menu:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen mt-20">
      <h1 className="text-3xl font-bold text-[#E81F1F] mb-6">
        🍴 Multi-Restaurant Dashboard
      </h1>

      {/* Add Restaurant */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Add Restaurant</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <input
            type="file"
            placeholder="Picture URL"
            value={newRestaurant.restaurantPicture}
            onChange={(e) =>
              setNewRestaurant({ ...newRestaurant, restaurantPicture: e.target.value })
            }
            className="border rounded px-3 py-2"
          />

          <input
            type="text"
            placeholder="Restaurant Name"
            value={newRestaurant.restaurantName}
            onChange={(e) =>
              setNewRestaurant({ ...newRestaurant, restaurantName: e.target.value })
            }
            className="border rounded px-3 py-2"
          />
         
          <input
            type="text"
            placeholder="Address"
            value={newRestaurant.address}
            onChange={(e) =>
              setNewRestaurant({ ...newRestaurant, address: e.target.value })
            }
            className="border rounded px-3 py-2"
          />
          <input
            type="time"
            placeholder="Open Time"
            value={newRestaurant.opentime}
            onChange={(e) =>
              setNewRestaurant({ ...newRestaurant, opentime: e.target.value })
            }
            className="border rounded px-3 py-2"
          />
          <input
            type="time"
            placeholder="Close Time"
            value={newRestaurant.closetime}
            onChange={(e) =>
              setNewRestaurant({ ...newRestaurant, closetime: e.target.value })
            }
            className="border rounded px-3 py-2"
          />
        </div>
        <button
          onClick={handleAddRestaurant}
          className="mt-4 bg-[#E81F1F] text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FaPlus /> Add Restaurant
        </button>
      </div>

      {/* Restaurants */}
      {restaurants.map((restaurant) => (
        <motion.div
          key={restaurant._id}
          className="bg-white p-6 rounded-lg shadow mb-6"
        >
          <h2 className="text-2xl font-bold">{restaurant.restaurantName}</h2>
          <p className="text-gray-600">{restaurant.address}</p>
          <p className="text-sm">
            ⏰ {restaurant.opentime} - {restaurant.closetime}
          </p>

          {/* Add Menu */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <input
              type="file"
              placeholder="Image URL"
              value={newMenu.menuPicture}
              onChange={(e) =>
                setNewMenu({ ...newMenu, menuPicture: e.target.value })
              }
              className="border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Menu Name"
              value={newMenu.menuName}
              onChange={(e) =>
                setNewMenu({ ...newMenu, menuName: e.target.value })
              }
              className="border rounded px-3 py-2"
            />
            <input
              type="text"
              placeholder="Description"
              value={newMenu.menuDescription}
              onChange={(e) =>
                setNewMenu({ ...newMenu, menuDescription: e.target.value })
              }
              className="border rounded px-3 py-2"
            />
            <input
              type="number"
              placeholder="Price (₦)"
              value={newMenu.menuPrice}
              onChange={(e) =>
                setNewMenu({ ...newMenu, menuPrice: e.target.value })
              }
              className="border rounded px-3 py-2"
            />
          </div>
          <button
            onClick={() => handleAddMenu(restaurant._id)}
            className="mt-3 bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <FaPlus /> Add Menu
          </button>

          {/* Menu List */}
          <table className="w-full mt-6 border">
            <thead className="bg-[#E81F1F] text-white">
              <tr>
                <th className="px-4 py-2">menuPicture</th>
                <th className="px-4 py-2">menuName</th>
                <th className="px-4 py-2">menuDescription</th>
                <th className="px-4 py-2">menuPrice</th>
              </tr>
            </thead>
            <tbody>
              {restaurant.menus?.map((menu) => (
                <tr key={menu._id} className="border">
                  <td className="px-4 py-2">
                    {menu.menuPicture ? (
                      <img
                        src={menu.menuPicture}
                        alt={menu.menuName}
                        className="w-16 h-16 rounded"
                      />
                    ) : (
                      "No Image"
                    )}
                  </td>
                  <td className="px-4 py-2">{menu.menuName}</td>
                  <td className="px-4 py-2">{menu.menuDescription}</td>
                  <td className="px-4 py-2">₦{menu.menuPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      ))}
    </div>
  );
}

export default UpdateAvailability;
