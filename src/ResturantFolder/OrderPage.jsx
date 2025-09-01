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
  "soda",
  "drinks",
  "fruits",
  "noodles",
  "Soups",
  "sharwama",
];

const OrderPage = () => {
  const [foods, setFoods] = useState([]);
  const { addToCart, cart } = useCart();

  // Filters
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // Fetch foods
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.error(err));
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
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);
    const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="flex flex-col lg:flex-row bg-amber-500 p-4">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 lg:mr-6 mb-6 lg:mb-0 bg-red-400 p-4 shadow rounded">
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
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Available Foods</h2>
          <Link to="/cart" className="bg-blue-500 text-white px-4 py-2 rounded">
            Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((item) => (
              <div key={item.id} className="border p-4 rounded shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 object-contain mx-auto mb-2"
                />
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-green-600 font-bold mb-2">${item.price}</p>
                <button
                  className="bg-blue-600 text-white w-full py-1 rounded"
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
      </div>
    </div>
  );
};

export default OrderPage;
