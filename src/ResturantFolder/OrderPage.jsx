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
  "Grilled Meats",
  "Egusi Soup",
];

// ✅ Default placeholder image
const placeholderImage = "/default-food.pn g"; // place this file in you

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

  // Pagination
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch foods
  useEffect(() => {
    const fetchmenus = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://final-backend-57f6.onrender.com/menus?page=${page}&limit=12`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Error ${res.status}: ${text}`);
        }

        const data = await res.json();
        console.log("Fetched menus:", data);

        // ✅ Normalize field names & fix missing image
        const normalized = (data.items || data || []).map((item) => ({
          _id: item._id || item.id,
          menuPicture: item.menuPicture || item.menupicture || null, // null instead of ""
          menuName: item.menuName || item.menuname || "Unnamed Food",
          menuDescription:
            item.menuDescription || item.menudescription || "No description",
          menuPrice: Number(item.menuPrice || item.menuprice || 0),
        }));

        setFoods(normalized);
        setTotalPages(data.totalPages || 1);

        if (normalized.length > 0) {
          const prices = normalized
            .map((f) => f.menuPrice)
            .filter((p) => !isNaN(p));
          setMaxPrice(prices.length > 0 ? Math.max(...prices) : 1000);
        }
      } catch (err) {
        console.error("Fetch error:", err.message);
        setError("Failed to load menus: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchmenus();
  }, [page]);

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
    const matchesSearch = item.menuName
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) =>
        item.menuName?.toLowerCase().includes(cat.toLowerCase())
      );

    const matchesPrice =
      item.menuPrice >= minPrice && item.menuPrice <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="flex flex-col lg:flex-row bg-white p-4">
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
        <div className="mb-4 overflow-y-auto max-h-48">
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
      <div className="flex-1 mt-20 bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Available Foods</h2>
          <Link
            to="/cartPage"
            className="bg-blue-500 hover:scale-105 transition-transform duration-300 text-white px-4 py-2 rounded"
          >
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </Link>
        </div>

        {/* Loading & Error */}
        {loading && (
          <div className="flex justify-center items-center h-40">
            <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <p className="ml-3 text-blue-600">Loading menus...</p>
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}

        {/* Food Grid */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFoods.length > 0 ? (
                filteredFoods.map((item) => (
                  <div
                    key={item._id}
                    className="border p-4 rounded shadow flex flex-col"
                  >
                    {item.menuPicture ? (
                      <img
                        src={item.menuPicture}
                        alt={item.menuName}
                        className="h-40 object-cover hover:scale-105 transition-transform duration-300 mx-auto mb-2 rounded"
                      />
                    ) : (
                      <img
                        src={placeholderImage}
                        alt="No food available"
                        className="h-40 object-cover mx-auto mb-2 opacity-70 rounded"
                      />
                    )}

                    <h3
                      className="font-semibold text-sm mb-1 line-clamp-2"
                      title={item.menuName}
                    >
                      {item.menuName}
                    </h3>
                    <p className="text-gray-600 text-xs mb-2">
                      {item.menuDescription}
                    </p>
                    <p className="text-green-600 font-bold mb-2">
                      ₦{item.menuPrice}
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-6 gap-2">
                <button
                  disabled={page === 1}
                  onClick={() => setPage((p) => p - 1)}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Prev
                </button>
                <span className="px-3 py-1">
                  Page {page} of {totalPages}
                </span>
                <button
                  disabled={page === totalPages}
                  onClick={() => setPage((p) => p + 1)}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default OrderPage;
