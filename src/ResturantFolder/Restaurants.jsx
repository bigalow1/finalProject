import React, { useState, useEffect } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaCcMastercard } from "react-icons/fa";
import { RiEBike2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Restaurants() {
  // Hero carousel slides
  const slides = [
    { image: "Ribs.jpeg " },
    { image: "sparg.jpeg" },
    { image: "pinerice.jpeg" },
    { image: "sharwama.jpeg" },
    { image: "desert.jpeg" },
    { image: "jollof.jpeg" },
    { image: "sparg.jpeg" },
    { image: "Jollof.jpg" },
    { image: "pasta.jpeg" },
    { image: "Egusi1.jpeg" },
  ];

  const [index, setIndex] = useState(0);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === slides.length ? 0 : prev + 1));
    }, 2300);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Fetch restaurants
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await fetch("http://localhost:3002/restaurant/all");
        if (!res.ok) throw new Error(`Server Error: ${res.status}`);
        const data = await res.json();

        if (Array.isArray(data)) {
          setRestaurants(data);
        } else {
          throw new Error("Unexpected API response");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Filter restaurants
  const filteredRestaurants = restaurants.filter(
    (rest) =>
      rest.restaurantName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rest.address?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <section className="pt-[80px] bg-gradient-to-r from-rose-100 via-amber-100 to-rose-50 min-h-[600px] flex items-center justify-center relative">
        <div className="h-[400px] w-[100%] relative flex items-center justify-center shadow-lg">
          <img src="bg.jpg" alt="JetMeals" className="w-full h-[600px] object-cover" />
        </div>

        <div className="text-center h-[300px] w-[800px] absolute flex flex-col items-center justify-center rounded-lg shadow-lg bg-opacity-90 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
          <h2 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg hover:text-amber-400">
            <marquee behavior="" direction="right">
              Welcome to JetMeals
            </marquee>
          </h2>
          <p className="text-2xl text-white font-medium">
            Delivery made possible to your doorstep
          </p>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-blue-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#E81F1F]">
          Featured Restaurants
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Search Sidebar */}
          <div className="col-span-1 bg-white rounded-xl shadow-lg p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">
              Search Restaurants
            </h3>
            <input
              type="text"
              placeholder="Enter name or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <p className="text-sm text-gray-500">
              Showing {filteredRestaurants.length} results
            </p>
          </div>

          {/* Right Restaurant Carousel */}
          <div className="col-span-3">
            {loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : filteredRestaurants.length > 0 ? (
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                spaceBetween={30}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="max-w-4xl mx-auto"
              >
                {filteredRestaurants.map((rest) => (
                  <SwiperSlide key={rest._id}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center transition-transform"
                    >
                      <img
                        src={rest.restaurantPicture || "placeholder.jpg"}
                        alt={rest.restaurantName || "Restaurant"}
                        className="w-50 h-32 object-cover mb-4 border-4 border-[#E81F1F]"
                        onError={(e) => (e.target.src = "placeholder.jpg")}
                      />
                      <span className="text-xl font-semibold text-gray-800">
                        {rest.restaurantName || "Unnamed Restaurant"}
                      </span>
                      <p className="text-gray-600 text-sm mt-2">{rest.address || "Address not available"}</p>
                      <p className="text-gray-500 text-sm">
                        Open: {rest.opentime || "?"} - {rest.closetime || "?"}
                      </p>
                      <Link to={`/restaurant/${rest._id}`}>
                        <button className="mt-4 px-4 py-2 bg-rose-600 text-white rounded-full hover:bg-amber-400 transition-all">
                          View Menu
                        </button>
                      </Link>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <p className="text-center text-gray-500 mt-10">
                No restaurants found.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 bg-gradient-to-r from-rose-50 via-amber-50 to-rose-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <FaSearchLocation className="text-5xl text-rose-600 mb-4" />
            <h4 className="font-bold text-lg mb-2">Choose a Restaurant</h4>
            <p className="text-gray-600 text-center">
              Find all restaurants available in your zone.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <IoFastFood className="text-5xl text-rose-600 mb-4" />
            <h4 className="font-bold text-lg mb-2">Order your food</h4>
            <p className="text-gray-600 text-center">
              Go to order and choose your favourite meals.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <FaCcMastercard className="text-5xl text-rose-600 mb-4" />
            <h4 className="font-bold text-lg mb-2">Pay by cash or card</h4>
            <p className="text-gray-600 text-center">
              It's quick, easy, and totally secure.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
            <RiEBike2Line className="text-5xl text-rose-600 mb-4" />
            <h4 className="font-bold text-lg mb-2">Delivery</h4>
            <p className="text-gray-600 text-center">
              Relax while we bring your food to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="bg-gradient-to-r from-white via-red-500 to-white py-16">
        <div className="max-w-6xl mx-auto relative rounded-3xl shadow-2xl p-6">
          <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-10">
            JetMeals Carousel
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="max-w-5xl mx-auto"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full h-[200px] md:h-[200px] rounded-3xl overflow-hidden shadow-lg"
                >
                  <img
                    src={slide.image}
                    alt={`Slide ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <span className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-2xl md:text-3xl font-bold text-white drop-shadow-lg text-center px-4">
                    {`Delicious Dish ${i + 1}`}
                  </span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 bg-gradient-to-r from-rose-100 via-amber-100 to-rose-100 flex flex-col rounded-bl-full items-center animate-slideIn">
        <h3 className="text-2xl font-semibold text-rose-700 mb-4">
          Here are some of the nice dishes you can enjoy with your family
        </h3>
        <Link to="/OrderPage">
          <button className="px-8 py-3 bg-rose-700 text-white font-bold rounded-full shadow-lg hover:bg-amber-400 hover:text-rose-700 transition-all duration-300">
            See more...
          </button>
        </Link>
      </section>
    </>
  );
}

export default Restaurants;
