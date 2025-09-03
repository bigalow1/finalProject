import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

function UpdateAvailability() {
  const [restaurants, setRestaurants] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState("");
  const [newFood, setNewFood] = useState({
    menuPicture: "",
    menuName: "",
    menuDescription: "",
    menuPrice: "",
    available: true,
  });
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [editingFood, setEditingFood] = useState(null);

  // Add new restaurant
  const handleAddRestaurant = () => {
    if (!newRestaurant.trim()) return;
    setRestaurants((prev) => [
      ...prev,
      { id: Date.now(), name: newRestaurant.trim(), foods: [] },
    ]);
    setNewRestaurant("");
  };

  // Add food to restaurant
  const handleAddFood = (restaurantId) => {
    if (!newFood.menuName || !newFood.menuPrice) return;
    setRestaurants((prev) =>
      prev.map((rest) =>
        rest.id === restaurantId
          ? {
              ...rest,
              foods: [
                ...rest.foods,
                {
                  ...newFood,
                  id: Date.now(),
                  menuPrice: parseFloat(newFood.menuPrice),
                },
              ],
            }
          : rest
      )
    );
    setNewFood({
      menuPicture: "",
      menuName: "",
      menuDescription: "",
      menuPrice: "",
      available: true,
    });
  };

  // Delete food
  const handleDeleteFood = (restaurantId, foodId) => {
    setRestaurants((prev) =>
      prev.map((rest) =>
        rest.id === restaurantId
          ? { ...rest, foods: rest.foods.filter((f) => f.id !== foodId) }
          : rest
      )
    );
  };

  // Save edited food
  const handleEditSave = () => {
    setRestaurants((prev) =>
      prev.map((rest) =>
        rest.id === selectedRestaurant.id
          ? {
              ...rest,
              foods: rest.foods.map((f) =>
                f.id === editingFood.id ? editingFood : f
              ),
            }
          : rest
      )
    );
    setEditingFood(null);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-[#E81F1F] mb-6">
        🍽️ Multi-Restaurant Dashboard
      </h1>

      {/* Add Restaurant Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Restaurant</h2>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Restaurant Name"
            value={newRestaurant}
            onChange={(e) => setNewRestaurant(e.target.value)}
            className="border rounded px-3 py-2 flex-1"
          />
          <button
            onClick={handleAddRestaurant}
            className="flex items-center gap-2 bg-[#E81F1F] text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            <FaPlus /> Add
          </button>
        </div>
      </div>

      {/* Restaurants */}
      {restaurants.length === 0 ? (
        <p className="text-gray-500">No restaurants added yet.</p>
      ) : (
        restaurants.map((restaurant, idx) => (
          <motion.div
            key={restaurant.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white shadow-md rounded-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-bold mb-4">{restaurant.name}</h2>

            {/* Add Food to this Restaurant */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <input
                type="text"
                placeholder="Menu Picture URL"
                value={newFood.menuPicture}
                onChange={(e) =>
                  setNewFood({ ...newFood, menuPicture: e.target.value })
                }
                className="border rounded px-3 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Menu Name"
                value={newFood.menuName}
                onChange={(e) =>
                  setNewFood({ ...newFood, menuName: e.target.value })
                }
                className="border rounded px-3 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Description"
                value={newFood.menuDescription}
                onChange={(e) =>
                  setNewFood({ ...newFood, menuDescription: e.target.value })
                }
                className="border rounded px-3 py-2 w-full"
              />
              <input
                type="number"
                placeholder="Price ($)"
                value={newFood.menuPrice}
                onChange={(e) =>
                  setNewFood({ ...newFood, menuPrice: e.target.value })
                }
                className="border rounded px-3 py-2 w-full"
              />
            </div>
            <button
              onClick={() => {
                setSelectedRestaurant(restaurant);
                handleAddFood(restaurant.id);
              }}
              className="mb-6 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <FaPlus /> Add Food
            </button>

            {/* Food List */}
            {restaurant.foods.length === 0 ? (
              <p className="text-gray-500">No foods yet.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                  <thead className="bg-[#E81F1F] text-white">
                    <tr>
                      <th className="px-6 py-3">Picture</th>
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Description</th>
                      <th className="px-6 py-3">Price</th>
                      <th className="px-6 py-3">Availability</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {restaurant.foods.map((food) => (
                      <motion.tr
                        key={food.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="px-6 py-4">
                          {food.menuPicture ? (
                            <img
                              src={food.menuPicture}
                              alt={food.menuName}
                              className="w-16 h-16 object-cover rounded"
                            />
                          ) : (
                            <span className="text-gray-400">No Image</span>
                          )}
                        </td>
                        <td className="px-6 py-4 font-semibold">
                          {food.menuName}
                        </td>
                        <td className="px-6 py-4 max-w-[200px] truncate">
                          {food.menuDescription}
                        </td>
                        <td className="px-6 py-4">${food.menuPrice.toFixed(2)}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold ${
                              food.available
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {food.available ? "Available" : "Unavailable"}
                          </span>
                        </td>
                        <td className="px-6 py-4 flex gap-3">
                          <button
                            onClick={() => {
                              setSelectedRestaurant(restaurant);
                              setEditingFood(food);
                            }}
                            className="text-blue-500 hover:text-blue-700"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteFood(restaurant.id, food.id)
                            }
                            className="text-red-500 hover:text-red-700"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        ))
      )}

      {/* Edit Food Modal */}
      {editingFood && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-semibold mb-4">Edit Food</h2>
            <input
              type="text"
              placeholder="Picture URL"
              value={editingFood.menuPicture}
              onChange={(e) =>
                setEditingFood({ ...editingFood, menuPicture: e.target.value })
              }
              className="border rounded px-3 py-2 w-full mb-3"
            />
            <input
              type="text"
              placeholder="Name"
              value={editingFood.menuName}
              onChange={(e) =>
                setEditingFood({ ...editingFood, menuName: e.target.value })
              }
              className="border rounded px-3 py-2 w-full mb-3"
            />
            <textarea
              placeholder="Description"
              value={editingFood.menuDescription}
              onChange={(e) =>
                setEditingFood({
                  ...editingFood,
                  menuDescription: e.target.value,
                })
              }
              className="border rounded px-3 py-2 w-full mb-3"
            />
            <input
              type="number"
              placeholder="Price"
              value={editingFood.menuPrice}
              onChange={(e) =>
                setEditingFood({
                  ...editingFood,
                  menuPrice: parseFloat(e.target.value),
                })
              }
              className="border rounded px-3 py-2 w-full mb-3"
            />
            <label className="flex items-center gap-2 mb-3">
              <input
                type="checkbox"
                checked={editingFood.available}
                onChange={(e) =>
                  setEditingFood({
                    ...editingFood,
                    available: e.target.checked,
                  })
                }
              />
              Available
            </label>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditingFood(null)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSave}
                className="px-4 py-2 rounded bg-[#E81F1F] text-white hover:bg-red-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateAvailability;
