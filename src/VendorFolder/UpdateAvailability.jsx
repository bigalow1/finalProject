import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function AddRestaurant() {
  const [newRestaurant, setNewRestaurant] = useState({
    restaurantPicture: null,
    restaurantName: "",
    address: "",
    opentime: "",
    closetime: "",
  });

  const handleAddRestaurant = async () => {
    try {
      const formData = new FormData();

      // ✅ only append file if it exists
      if (newRestaurant.restaurantPicture) {
        formData.append("restaurantPicture", newRestaurant.restaurantPicture);
      }

      formData.append("restaurantName", newRestaurant.restaurantName);
      formData.append("address", newRestaurant.address);
      formData.append("opentime", newRestaurant.opentime);
      formData.append("closetime", newRestaurant.closetime);

      const res = await fetch("http://localhost:3002/restaurant", {
        method: "POST",
        body: formData, // ✅ do NOT set Content-Type manually
      });

      const data = await res.json();
      console.log("Created:", data);
      alert("✅ Restaurant added successfully!");

      setNewRestaurant({
        restaurantPicture: null,
        restaurantName: "",
        address: "",
        opentime: "",
        closetime: "",
      });
    } catch (error) {
      console.error("❌ Error adding restaurant:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen mt-20">
      <h1 className="text-3xl font-bold text-[#E81F1F] mb-6">🏪 Add Restaurant</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="file"
            onChange={(e) =>
              setNewRestaurant({ ...newRestaurant, restaurantPicture: e.target.files[0] })
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
            value={newRestaurant.opentime}
            onChange={(e) =>
              setNewRestaurant({ ...newRestaurant, opentime: e.target.value })
            }
            className="border rounded px-3 py-2"
          />

          <input
            type="time"
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
    </div>
  );
}

export default AddRestaurant;
