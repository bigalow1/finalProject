import React, { useState, useEffect } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoPersonAddOutline, IoFastFood } from "react-icons/io5";
import { FaCcMastercard } from "react-icons/fa";
import { RiEBike2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Restaurants() {
  const slides = [
    { color: "bg-[url(Ribs.jpeg)] bg-cover bg-center rounded-xl shadow-lg" },
    { color: "bg-[url(sparg.jpeg)] bg-cover bg-center rounded-xl shadow-lg" },

    {
      color: "bg-[url(pinerice.jpeg)] bg-cover bg-center rounded-xl shadow-lg",
    },
    {
      color: "bg-[url(sharwama.jpeg)] bg-cover bg-center rounded-xl shadow-lg",
    },
    { color: "bg-[url(desert.jpeg)] bg-cover bg-center rounded-xl shadow-lg" },
    {
      color: "bg-[url(pinerice.jpeg)] bg-cover bg-center rounded-xl shadow-lg",
    },
    { color: "bg-[url(Ribs.jpeg)] bg-cover bg-center rounded-xl shadow-lg" },
    { color: "bg-[url(sparg.jpeg)] bg-cover bg-center rounded-xl shadow-lg" },
  ];
  const restaurants = [
    {
      name: "Sushi World",
      img: "desert.jpeg",
    },
    {
      name: "Burger Palace",
      img: "sharwama.jpeg",
    },
    {
      name: "Pasta House",
      img: "pasta.jpeg",
    },
    {
      name: "Vegan Delight",
      img: "FriedRice1.jpeg",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2300);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      {/* Header */}
      {/* <header className="bg-gradient-to-r from-rose-700 via-rose-500 to-amber-400 text-white shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-8">
            <div className="flex items-center text-white">
                    <Link to="/">
                      <img
                        className="h-[60px] hover:scale-105 text-white transition-transform"
                        src="Logo.png"
                        alt="Logo"
                      />
                    </Link>
                  </div>
          <nav className="flex-1 flex items-center justify-center">
            <ol className="flex gap-10 text-lg font-medium text-white">
              <li>
                <Link
                  to="/"
                  
                  className="hover:text-amber-200 transition-colors duration-300"
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  to="/Restaurants"
                  className="hover:text-amber-200 border-b-2 border-white pb-1 transition-all duration-300"
                >
                  RESTAURANTS
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-amber-200 transition-colors duration-300"
                >
                  SERVICES
                </Link>
              </li>
              <li>
                <Link
                  to="/Faqs"
                  className="hover:text-amber-200 transition-colors duration-300"
                >
                  FAQS
                </Link>
              </li>
            </ol>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-2xl text-white hover:text-amber-200 transition duration-300">
              <AiOutlineShoppingCart />
            </button>
            <Link to="/ForSignup">
              <button className="flex items-center gap-2 bg-white text-rose-700 font-bold px-5 py-2 rounded-full shadow hover:bg-amber-400 hover:text-white transition-all duration-300">
                <IoPersonAddOutline className="text-xl" />
                Login
              </button>
            </Link>
          </div>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="pt-[80px] bg-gradient-to-r from-rose-100 via-amber-100 to-rose-50 min-h-[600px] flex items-center justify-center relative">
        <div className="h-[400px]  w-[100%] relative flex items-center justify-center  shadow-lg bg-opacity-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
          <img src="bg.jpg" alt="JetMeals" />
        </div>

        <div className="text-center h-[300px] w-[800px] bg-inherit absolute flex flex-col items-center justify-center rounded-lg shadow-lg bg-opacity-90 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
          <h2 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg transition-colors duration-300 hover:text-amber-400">
  <marquee behavior="" direction="right">Welcome to JetMeals</marquee>
</h2>

          <p className="text-2xl text-white font-medium">
            Delivery made possible to your doorstep
          </p>
        </div>
      </section>

      {/* Menu Explore */}
      <section className="bg-white py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-rose-200 to-amber-200 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-rose-700">
              Explore Our Delicious Menu
            </h2>
          </div>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="bg-gradient-to-r from-amber-50 via-white to-rose-50 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
            <div className="h-56 bg-[url(sparg.jpeg)] bg-cover bg-center"></div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-rose-700 mb-2">
                Spaghetti with Beef
              </h3>
              <p className="text-gray-600">
                Classic Italian pasta with savory beef sauce.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
            <div className="h-56 bg-[url(pinerice.jpeg)] bg-cover bg-center"></div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-rose-700 mb-2">
                Pineapple Rice
              </h3>
              <p className="text-gray-600">
                Tropical rice dish with sweet pineapple chunks.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col">
            <div className="h-56 bg-[url(Ribs.jpeg)] bg-cover bg-center"></div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-rose-700 mb-2">
                Grilled Meats
              </h3>
              <p className="text-gray-600">
                Juicy, perfectly grilled meats for every taste.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Restaurants Slideshow */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-blue-50">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#E81F1F]">
          Featured Restaurants
        </h2>
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
          {restaurants.map((rest, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform"
              >
                <img
                  src={rest.img}
                  alt={rest.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#E81F1F]"
                />
                <span className="text-xl font-semibold text-gray-800">
                  {rest.name}
                </span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Steps Section */}
      <section className="py-12 bg-gradient-to-r from-rose-50 via-amber-50 to-rose-100">
        <div className="max-w-6xl cursor-pointer mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300  p-6 flex flex-col items-center">
            <FaSearchLocation className="text-5xl text-rose-600 mb-4" />
            <h4 className="font-bold text-lg mb-2">Choose a Restaurant</h4>
            <p className="text-gray-600 text-center">
              Find all restaurants available in your zone.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-white rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg p-6 flex flex-col items-center">
            <IoFastFood className="text-5xl text-rose-600 mb-4" />
            <h4 className="font-bold text-lg mb-2">Order your food</h4>
            <p className="text-gray-600 text-center">
              Go to order and choose your favourite meals.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-white rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg p-6 flex flex-col items-center">
            <FaCcMastercard className="text-5xl text-rose-600 mb-4" />
            <h4 className="font-bold text-lg mb-2">Pay by cash or card</h4>
            <p className="text-gray-600 text-center">
              It's quick, easy, and totally secure.
            </p>
          </div>
          {/* Step 4 */}
          <div className="bg-white rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg p-6 flex flex-col items-center">
            <RiEBike2Line className="text-5xl text-rose-600 mb-4" />
            <h4 className="font-bold text-lg mb-2">Delivery</h4>
            <p className="text-gray-600 text-center">
              Relax while we bring your food to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="bg-gradient-to-r from-white-500 via-pink-400 to-orange-400 rounded-bl-full py-14">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl border-4 border-rose-600 relative">
          <h2 className="absolute top-4 left-1/2 -translate-x-1/2 z-20 text-3xl font-extrabold text-white drop-shadow-lg tracking-wide">
            JetMeals Carousel
          </h2>
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${index * 100}%)`,
              width: `${slides.length * 100}%`,
            }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`h-72 min-w-full flex items-center justify-center relative ${slide.color}`}
              >
                <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
                <span className="relative z-10 text-4xl font-bold text-white drop-shadow-lg">
                  {`Slide ${i + 1}`}
                </span>
              </div>
            ))}
          </div>
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
 


      {/* Partner Section */}
      <section className="bg-gradient-to-r from-amber-100 to-rose-100 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Rider */}
          <div className="bg-white rounded-3xl shadow-xl flex flex-col">
            <div className="h-48 bg-gradient-to-br from-rose-200 to-amber-200 flex items-center justify-center rounded-t-3xl">
              <img src="rider.png" alt="Become a Rider" className="h-24" />
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-rose-700 mb-2">
                Become a Rider
              </h4>
              <p className="text-gray-600 mb-4">
                Enjoy flexibility, freedom and competitive earnings by
                delivering through JetMeals.
              </p>
              <button className="bg-amber-400 text-white font-bold px-6 py-2 rounded-full hover:bg-rose-700 hover:text-white transition-all duration-300">
                Register Here
              </button>
            </div>
          </div>
          {/* Partner */}
          <div className="bg-white rounded-3xl shadow-xl flex flex-col">
            <div className="h-48 bg-gradient-to-br from-amber-200 to-rose-200 flex items-center justify-center rounded-t-3xl">
              <img src="career.png" alt="Become a Partner" className="h-24" />
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-rose-700 mb-2">
                Become a Partner
              </h4>
              <p className="text-gray-600 mb-4">
                Let's work together to bring the best food experiences to our
                customers.
              </p>
              <button className="bg-amber-400 text-white font-bold px-6 py-2 rounded-full hover:bg-rose-700 hover:text-white transition-all duration-300">
                Register Here
              </button>
            </div>
          </div>
          {/* Add Restaurant */}
          <div className="bg-white rounded-3xl shadow-xl flex flex-col">
            <div className="h-48 bg-gradient-to-br from-rose-200 to-amber-200 flex items-center justify-center rounded-t-3xl">
              <img
                src="partner.png"
                alt="Add your Restaurant"
                className="h-24"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-rose-700 mb-2">
                Add your Restaurant
              </h4>
              <p className="text-gray-600 mb-4">
                Expand your food business by reaching your audience target.
              </p>
              <button className="bg-amber-400 text-white font-bold px-6 py-2 rounded-full hover:bg-rose-700 hover:text-white transition-all duration-300">
                Register Here
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Restaurants;
