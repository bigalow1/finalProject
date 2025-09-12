import React, { useEffect, useState } from "react";
import { useCart } from "../AlldetailsFolder/CartContext";
import { Link } from "react-router-dom";

 
const categories = [
  "Rice",
  "Pizza",
  "Burger",
  "Pasta",
  "Sushi",
  "Desserts",
  "Soda",
  "Drinks",
  "Fruits",
  "Noodles",
  "Soups",
  "Sharwama",
  "Amala",
  "pizza",
  "grilled meats",
  "Egusi soup"
];

const OrderPage = () => {
  const [foods, setFoods] = useState([]);
  const { addToCart, cart } = useCart();

  // Filters
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // Loading & Error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch foods
useEffect(() => {
  const fetchMenus = async () => {
    try {
      const res = await fetch("http://localhost:3002/menus", {
        headers: {
          "Content-Type": "application/json",
          // remove Authorization unless you actually have a token
        },
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Error ${res.status}: ${text}`);
      }

      const data = await res.json();
      setFoods(data);

      if (data.length > 0) {
        const maxFoodPrice = Math.max(...data.map((f) => f.menuprice));
        setMaxPrice(maxFoodPrice);
      }
    } catch (err) {
      console.error("Fetch error:", err.message);
      setError("Failed to load menus: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  fetchMenus();
}, []);



  // Handle category toggle
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Filter logic
  const filteredFoods = foods.filter((item) => {
    const matchesSearch = item.menuname
      ?.toLowerCase()
      .includes(search.toLowerCase());

    // Match category by checking if the food name contains it
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) =>
        item.menuname?.toLowerCase().includes(cat.toLowerCase())
      );

    const matchesPrice =
      item.menuprice >= minPrice && item.menuprice <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="flex flex-col lg:flex-row   bg-white p-4">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 lg:mr-6 mb-6 lg:mb-0 bg-white mt-20 p-4 shadow rounded">
        <h2 className="text-xl font-bold mb-4">Filter Foods</h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search foods..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        {/* Categories */}
        <div className="mb-4 overflow-y-auto max-h-48 scroll-auto">
          <h3 className="font-semibold mb-2">Food Types</h3>
          {categories.map((cat) => (
            <div key={cat} className="flex items-center mb-1">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="mr-2"
              />
              <label>{cat}</label>
            </div>
          ))}
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>
          <div className="flex gap-2 mb-2">
            <input
              type="number"
              min="0"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-1/2 p-1 border rounded"
              placeholder="Min"
            />
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-1/2 p-1 border rounded"
              placeholder="Max"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1  mt-20 lg:mt-20 bg-white-500  p-4 rounded shadow">
        <div className="flex justify-between  items-center mb-4">
          <h2 className="text-xl font-bold">Available Foods</h2>
          <Link
            to="/cart"
            className="bg-blue-500 hover:scale-105 transition-transform duration-300 text-white px-4 py-2 rounded"
          >
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </Link>
        </div>

        {/* Loading & Error */}
        {loading && <p>Loading menus...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {/* Food Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   xl:grid-cols-4 gap-6">
           {filteredFoods.length > 0 ? (
  filteredFoods.map((item) => (
    <div
      key={item._id || item.id}
      className="border p-4 rounded shadow flex flex-col"
    >
      <img
        src={item.menupicture}
        alt={item.menuname}
        className="h-40 object-contain hover:scale-105 transition-transform duration-300 mx-auto mb-2"
      />
      <h3
        className="font-semibold text-sm mb-1 line-clamp-2"
        title={item.menuname}
      >
        {item.menuname}
      </h3>
      <p className="text-gray-600 text-xs mb-2">
        {item.menudescription}
      </p>
      <p className="text-green-600 font-bold mb-2">
        ₦{item.menuprice}
      </p>
      <button
        className="bg-blue-600 text-white w-full hover:scale-105 transition-transform duration-300 py-1 rounded hover:bg-blue-700"
        onClick={() => addToCart(item)}
      >
        Add to cart
      </button>
    </div>
  ))
) : (
  <p>No foods match your filters.</p>
)}

          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
