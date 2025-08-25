import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Header */}
      <header className="h-[80px] flex items-center justify-between bg-gradient-to-r from-black-200 to-red-500 shadow-md px-8 fixed top-0 left-0 w-full z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              className="h-[60px] hover:scale-105 transition-transform"
              src="Logo.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-8 font-medium text-white items-center">
            <li>
              <Link
                to="/"
                className="hover:text-[#e81f1f] font-bold transition-colors duration-200 px-2 py-1 rounded hover:bg-rose-100"
              >
                <i>ABOUT US</i>
              </Link>
            </li>
            <li>
              <Link
                to="/Restaurants"
                className="hover:text-[#e81f1f] font-bold transition-colors duration-200 px-2 py-1 rounded hover:bg-rose-100"
              >
                <i>RESTAURANTS</i>
              </Link>
            </li>
            <li>
              <Link
                to="/OrderPage"
                className="hover:text-[#e81f1f] font-bold transition-colors duration-200 px-2 py-1 rounded hover:bg-rose-100"
              >
                <i>MENUS</i>
              </Link>
            </li>
            <li>
              <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                <CiSearch className="text-xl text-gray-500" />
                <input
                  type="text"
                  className="outline-none w-[120px] px-1 py-1 bg-transparent text-gray-700"
                  placeholder="Search..."
                />
              </div>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <button className="text-2xl text-black hover:text-[#e81f1f] transition-colors">
            <AiOutlineShoppingCart />
          </button>
          <Link to="/ForSignup">
            <div className="flex items-center gap-2 bg-[#E81F1F] text-white rounded-full px-4 py-2 hover:bg-white hover:text-[#E81F1F] border border-[#E81F1F] transition-all duration-300 font-bold">
              <IoPersonAddOutline />
              <span>
                <i>Login</i>
              </span>
            </div>
          </Link>
        </div>
      </header>
      <div className="h-[700px] w-full bg-blue overflow-hidden flex justify-center items-center ok relative">
        <video
          src="People.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="h-[300px] w-[800px] bg-inherit absolute flex items-center justify-center rounded-lg shadow-lg bg-opacity-90 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
          <p className="text-3xl font-bold text-white text-center drop-shadow-lg">
           <i> Jetmeals is your trusted partner for fast, fresh, and reliable meal
            delivery.</i>
            <br />
           <i> We connect you with your favorite local restaurants and deliver
            delicious meals straight from the kitchen to your doorstep.</i>
            <br />
            <i>Experience convenience, variety, and quality with Jetmeals—where
            every meal is just a click away!</i>
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="h-[500px] w-full grid grid-cols-3 bg-gradient-to-r from-red-400 to-rose-200 px-8 gap-4">
        {/* Left Images */}
        <div className="flex flex-col justify-between h-full py-6">
          <div className="h-[45%] bg-red-400 rounded-tr-2xl rounded-br-2xl shadow-lg"></div>
          <div className="h-[52%] bg-pink-400 rounded-tr-2xl rounded-br-2xl shadow-lg"></div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col justify-between h-full py-6">
          <div className="flex flex-col items-center justify-center h-[60%] bg-amber-100 rounded-lg shadow-md p-6">
            <p className="text-2xl font-bold text-center text-[#e81f1f]">
              DELICIOUS MEALS DELIVERED
              <br />
              FROM KITCHEN TO YOUR DOORSTEP
            </p>
          </div>
          <div className="flex gap-8 justify-center items-center h-[40%]">
            {/* Order Now */}
            <div className="flex flex-col items-center bg-green-100 rounded-lg p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="h-28 w-28 bg-white rounded-full flex items-center justify-center shadow-md mb-2 hover:bg-[#e81f1f] transition-colors">
                <img src="fast-food.png" alt="Order Now" className="h-16" />
              </div>
              <span className="text-lg font-semibold">Order Now</span>
            </div>
            {/* Package Delivery */}
            <div className="flex flex-col items-center bg-green-100 rounded-lg p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="h-28 w-28 bg-white rounded-full flex items-center justify-center shadow-md mb-2 hover:bg-[#e81f1f] transition-colors">
                <img
                  src="delivery-man.png"
                  alt="Package Delivery"
                  className="h-16"
                />
              </div>
              <span className="text-lg font-semibold">Package Delivery</span>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex flex-col justify-between h-full py-6">
          <div className="h-[60%] bg-red-400 rounded-tl-2xl rounded-bl-2xl shadow-lg"></div>
          <div className="h-[37%] bg-pink-400 rounded-tl-2xl rounded-bl-2xl shadow-lg"></div>
        </div>
      </section>

      {/* Footer or Extra Section */}
      <div className="h-[300px] bg-gradient-to-t from-red-400 to-rose-200 flex items-center justify-center">
        <div className="h-[300px] bg-gradient-to-t from-red-400 to-rose-200 "></div>
      </div>
    </>
  );
}

export default Home;
