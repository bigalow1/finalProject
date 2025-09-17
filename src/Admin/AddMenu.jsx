import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

function AddMenu() {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [menus, setMenus] = useState([]);
  const [newMenu, setNewMenu] = useState({
    menuName: "",
    menuDescription: "",
    menuPrice: "",
  });
  const [imageFile, setImageFile] = useState(null);

  // Fetch restaurants on load
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const res = await fetch("http://localhost:3002/restaurant/all");
      const data = await res.json();
      setRestaurants(data);
    } catch (error) {
      console.error("❌ Error fetching restaurants:", error);
    }
  };

  // Fetch menus for selected restaurant
  const fetchMenus = async (restaurantId) => {
    try {
      const res = await fetch(
        `http://localhost:3002/restaurant/${restaurantId}/menus`
      );
      const data = await res.json();
      setMenus(data);
    } catch (error) {
      console.error("❌ Error fetching menus:", error);
    }
  };

  // Store selected file
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleAddMenu = async () => {
    if (!selectedRestaurant) {
      alert("⚠️ Please select a restaurant first.");
      return;
    }

    if (!imageFile) {
      alert("⚠️ Please upload a menu picture.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("menuPicture", imageFile); // ✅ real file
      formData.append("menuName", newMenu.menuName);
      formData.append("menuDescription", newMenu.menuDescription);
      formData.append("menuPrice", newMenu.menuPrice);

      const res = await fetch(
        `http://localhost:3002/restaurant/${selectedRestaurant}/menus`,
        {
          method: "POST",
          body: formData, // no headers → browser sets multipart/form-data
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to add menu");

      alert("✅ Menu added successfully!");
      setNewMenu({
        menuName: "",
        menuDescription: "",
        menuPrice: "",
      });
      setImageFile(null);

      fetchMenus(selectedRestaurant);
    } catch (error) {
      console.error("❌ Error adding menu:", error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen mt-20">
      <h1 className="text-3xl font-bold text-[#E81F1F] mb-6">🍔 Add Menu</h1>

      {/* Select Restaurant */}
      <select
        value={selectedRestaurant}
        onChange={(e) => {
          setSelectedRestaurant(e.target.value);
          fetchMenus(e.target.value);
        }}
        className="border px-3 py-2 rounded w-full md:w-1/3 mb-6"
      >
        <option value="">-- Select a Restaurant --</option>
        {restaurants.map((r) => (
          <option key={r._id} value={r._id}>
            {r.restaurantName}
          </option>
        ))}
      </select>

      {/* Menu Form */}
      {selectedRestaurant && (
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-bold mb-3">
            Add Menu to{" "}
            {restaurants.find((r) => r._id === selectedRestaurant)
              ?.restaurantName}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border rounded px-3 py-2"
            />

            <input
              type="text"
              placeholder="menuName"
              value={newMenu.menuName}
              onChange={(e) =>
                setNewMenu({ ...newMenu, menuName: e.target.value })
              }
              className="border rounded px-3 py-2"
            />

            <input
              type="text"
              placeholder="menuDescription"
              value={newMenu.menuDescription}
              onChange={(e) =>
                setNewMenu({ ...newMenu, menuDescription: e.target.value })
              }
              className="border rounded px-3 py-2"
            />

            <input
              type="number"
              placeholder="menuPrice (₦)"
              value={newMenu.menuPrice}
              onChange={(e) =>
                setNewMenu({ ...newMenu, menuPrice: e.target.value })
              }
              className="border rounded px-3 py-2"
            />
          </div>

          <button
            onClick={handleAddMenu}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded flex items-center gap-2"
          >
            <FaPlus /> Add Menu
          </button>
        </div>
      )}

      {/* Show Menus */}
      {menus.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-3">📋 Menus</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {menus.map((menu) => (
              <div
                key={menu._id}
                className="border rounded-lg p-3 shadow-sm bg-gray-50"
              >
                {menu.menuPicture && (
                  <img
                    src={menu.menuPicture}
                    alt={menu.menuName}
                    className="w-full h-32 object-cover rounded"
                  />
                )}
                <h4 className="font-bold mt-2">{menu.menuName}</h4>
                <p className="text-sm text-gray-600">{menu.menuDescription}</p>
                <p className="text-green-700 font-semibold mt-1">
                  ₦{menu.menuPrice}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddMenu;
