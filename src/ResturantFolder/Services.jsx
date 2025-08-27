import React from "react";
import { Link } from "react-router-dom";
import { FaTruck, FaUtensils, FaBullhorn } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";

function Services() {
  return (
    <>
      {/* Navbar */}
      {/* <header className="bg-gradient-to-r from-black via-red-700 to-red-500 shadow-lg text-white fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-8">
          <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">
            <i>JETMEALS</i>
          </h1>
          <nav className="flex-1 flex items-center justify-center">
            <ol className="flex gap-12 text-lg font-medium">
              <li className="hover:text-red-400 transition">
                <Link to="/">
                  <i>ABOUT US</i>
                </Link>
              </li>
              <li className="hover:text-red-400 transition">
                <Link to="/Restaurants">
                  <i>RESTAURANTS</i>
                </Link>
              </li>
              <li className="relative text-red-400 font-bold">
                <Link to="/services">
                  <i>SERVICES</i>
                  <span className="block h-1 bg-red-400 rounded-full mt-1"></span>
                </Link>
              </li>
              <li className="hover:text-red-400 transition">
                <Link to="/Faqs">
                  <i>FAQS</i>
                </Link>
              </li>
            </ol>
          </nav>
          <Link to="/ForSignup">
            <button className="bg-red-500 flex items-center gap-2 hover:bg-black text-white text-lg font-semibold py-2 px-6 rounded-full shadow transition">
              <IoPersonAddOutline className="text-xl" />
              <span className="font-bold">
                <i>Login</i>
              </span>
            </button>
          </Link>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="pt-[100px] pb-12  bg-gradient-to-r from-rose-50 via-amber-50 to-rose-100 flex flex-col items-center text-center">
        <h2 className="text-5xl font-bold text-black mb-4 drop-shadow-lg">
          Our Services
        </h2>
        <p className="text-xl text-black max-w-2xl mb-2">
          At JetMeals, we’re dedicated to making your food experience seamless
          and delightful.
        </p>
        <p className="text-lg text-black max-w-2xl">
          Explore our range of services designed for food lovers, event
          planners, and food vendors!
        </p>
      </section>

      {/* Services Cards */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-red-400">
          <FaUtensils className="text-5xl text-red-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-gray-900">
            Catering Services
          </h3>
          <p className="text-gray-700 text-center">
            Planning an event? Let us handle the food! Our catering partners
            offer diverse menus for all occasions, ensuring your guests enjoy
            delicious meals, hassle-free.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-red-400">
          <FaTruck className="text-5xl text-red-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-gray-900">
            Fast Delivery
          </h3>
          <p className="text-gray-700 text-center">
            Craving something tasty? Order from your favorite restaurants and
            get your meals delivered hot and fresh, right to your
            doorstep—quickly and reliably.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-red-400">
          <FaBullhorn className="text-5xl text-red-500 mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-gray-900">
            Vendor Advertising
          </h3>
          <p className="text-gray-700 text-center">
            Are you a food vendor? Join JetMeals to showcase your dishes, reach
            new customers, and grow your business with our easy-to-use
            advertising platform.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className=" bg-gradient-to-r from-rose-50 via-amber-50 to-rose-100 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 px-4">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=facearea&w=300&q=80"
            alt="Chef cooking"
            className="w-72 h-56 object-cover rounded-2xl shadow-lg border-4 border-red-400 hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://www.getfoodcourt.com/_next/image?url=https%3A%2F%2Fd3u7b9fq2opvwp.cloudfront.net%2Fupload-service%2F9551e55a-cb6e-470d-9993-b0b29b5a7e3a%3Agallery2.jpg.jpg&w=640&q=75"
            alt="Food court"
            className="w-72 h-56 object-cover rounded-2xl shadow-lg border-4 border-red-400 hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://www.getfoodcourt.com/_next/image?url=https%3A%2F%2Fd3u7b9fq2opvwp.cloudfront.net%2Fupload-service%2F3144c1c4-710a-4cac-8f53-2d310a62b655%3Agallery1.jpg.jpg&w=640&q=75"
            alt="Restaurant"
            className="w-72 h-56 object-cover rounded-2xl shadow-lg border-4 border-red-400 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      {/* Info Footer */}
      <footer className="bg-gradient-to-r from-rose-200 via-amber-100 to-rose-100 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-white text-center">
          <div className="bg-white text-black rounded-xl p-6 shadow">
            <h4 className="font-bold text-lg mb-2">Catering Events</h4>
            <p>
              Allow us to handle your catering events. We offer the best for
              every occasion—let's serve your guests the finest dishes!
            </p>
          </div>
          <div className="bg-white text-black rounded-xl p-6 shadow">
            <h4 className="font-bold text-lg mb-2">Fast Delivery</h4>
            <p>
              Delivery made possible to your doorstep within minutes at
              affordable rates. Trust our reliable riders!
            </p>
          </div>
          <div className="bg-white text-black rounded-xl p-6 shadow">
            <h4 className="font-bold text-lg mb-2">For Chefs & Vendors</h4>
            <p>
              Are you a skilled chef looking for more customers? JetMeals has
              you covered—grow your business with us!
            </p>
          </div>
        </div>
        <div className="text-center bg-amber-500 h-[100px] text-gray-300 mt-8 text-sm">
        
        </div>
      </footer>
    </>
  );
}

export default Services;
