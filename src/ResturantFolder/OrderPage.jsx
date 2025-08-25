import React, { useEffect, useState } from "react";
import { FiFilter as Filter, FiX as X } from "react-icons/fi";

function OrderPage() {
  const [holdData, setHoldData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  // Menus
  const allMenus = [
    "Rice",
    "shawarma",
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
    "Desserts",
    "Beverages",
    "Fast food",
    "Healthy food",
    "Vegan options",
    "Seafood",
    "Grilled items",
    "Salads",
    "Sandwiches",
    "Breakfast items",
    "Snacks",
    "Asian cuisine",
    "Italian cuisine",
    "Mexican cuisine",
    "Indian cuisine",
    "Mediterranean cuisine",
    "French cuisine",
    "Japanese cuisine",
    "Chinese cuisine",
    "Thai cuisine",
    "Korean cuisine",
    "Middle Eastern cuisine",
    "Vegetarian options",
    "Gluten-free options",
    "Organic food",
    "Gourmet food",
    "Street food",
    "Comfort food",
    "Fusion cuisine",
    "Brunch options",
    "Catering services",
    "Family meals",
    "Party platters",
    "Holiday specials",
    "Seasonal dishes",
    "Chef's specials",
    "Baked goods",
    "Coffee and tea",
    "Juices and smoothies",
    "Cocktails and mocktails",
    "Craft beers",
    "Wines and spirits",
    "Deli items",
    "Bakery items",
    "Ice cream and frozen yogurt",
    "Pies and tarts",
    "Cakes and cupcakes",
    "Cookies and brownies",
    "Chocolates and candies",
    "Nuts and dried fruits",
    "Health foods",
    "Dietary-specific foods",
    "Local foods",
  ];
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [selectedMenus, setSelectedMenus] = useState([]);

  // Price range
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(4500000);

  // Order by
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderBy, setOrderBy] = useState("Default");

  // Sidebar toggle for mobile
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Filter menus list
  const filteredMenus = allMenus.filter((menu) =>
    menu.toLowerCase().includes(search.toLowerCase())
  );

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setHoldData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // Apply filters
  useEffect(() => {
    let products = [...holdData];

    // Menu filter
    if (selectedMenus.length > 0) {
      products = products.filter((p) =>
        selectedMenus.some((menu) =>
          p.title.toLowerCase().includes(menu.toLowerCase())
        )
      );
    }

    // Price filter
    products = products.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );

    setFilteredData(products);
  }, [selectedMenus, minPrice, maxPrice, holdData]);

  // Toggle menu checkbox
  const handleMenuChange = (menu) => {
    setSelectedMenus((prev) =>
      prev.includes(menu) ? prev.filter((m) => m !== menu) : [...prev, menu]
    );
  };

  return (
    <div className=" bg-gradient-to-r from-black-200 to-red-500 h-[1500px]">
      {/* Mobile Filter Button */}
      <div className="lg:hidden flex justify-end p-4">
        <button
          className="flex items-center gap-2  bg-gradient-to-r from-black-200 to-red-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setSidebarOpen(true)}
        >
          <Filter size={18} /> Filter
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[27%_73%] bg-gradient-to-r from-black-200">
        {/* Sidebar */}
        <div
          className={`bg-amber-800 lg:relative fixed top-0 left-0 h-full w-72 transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300 z-50`}
        >
          <div className="bg-gradient-to-r from-black-700 text-white h-full rounded-lg p-5 overflow-y-auto">
            {/* Close Button for Mobile */}
            <div className="lg:hidden flex justify-end">
              <button onClick={() => setSidebarOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Menus */}
            <h2 className="text-lg font-bold mb-2">Menus</h2>
            <input
              type="text"
              placeholder="Search Meals..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 rounded-md border mb-3"
            />
            <ul className="space-y-1">
              {(showAll ? filteredMenus : filteredMenus.slice(0, 5)).map(
                (menu, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedMenus.includes(menu)}
                      onChange={() => handleMenuChange(menu)}
                      className="h-4 w-4"
                    />
                    <span>{menu}</span>
                  </li>
                )
              )}
            </ul>
            {filteredMenus.length > 5 && (
              <button
                className="text-blue-500 mt-2"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "See less" : "See all"}
              </button>
            )}

            {/* Price */}
            <h2 className="text-lg font-bold mt-6 mb-2">Price</h2>
            <div className="flex gap-2">
              <input
                type="number"
                min="1"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-1/2 p-1 border rounded"
              />
              <input
                type="number"
                max="4500000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-1/2 p-1 border rounded"
              />
            </div>
            <input
              type="range"
              min="1"
              max="4500000"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-full mt-2"
            />
            <input
              type="range"
              min="1"
              max="4500000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full"
            />
            <p className="mt-1">
              ${minPrice.toLocaleString()} - ${maxPrice.toLocaleString()}
            </p>

            {/* Order By */}
            <h2 className="text-lg font-bold mt-6 mb-2">Order By</h2>
            <div className="relative">
              <button
                onClick={() => setOrderOpen(!orderOpen)}
                className="w-full flex justify-between items-center p-2 bg-gray-200 rounded-md"
              >
                {orderBy}
                <span
                  className={`transform transition-transform ${
                    orderOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {orderOpen && (
                <div className="absolute w-full bg-white mt-1 rounded-md shadow-lg z-10">
                  {[
                    "Default",
                    "Price: Low to High",
                    "Price: High to Low",
                    "Alphabetical: A-Z",
                    "Alphabetical: Z-A",
                    "Rating: Low to High",
                    "Rating: High to Low",
                  ].map((option, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setOrderBy(option);
                        setOrderOpen(false);
                      }}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="min-h-screen bg-gradient-to-r from-black-200 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-r from-black-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm truncate mb-2">
                  {item.title}
                </h3>
                <p className="text-lg font-bold text-green-600 mb-4">
                  ${item.price}
                </p>
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
