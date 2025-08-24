import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Header */}
      <header className="h-[80px] grid grid-cols-3 bg-gradient-to-b from-rose-200 to-rose-100 shadow-md">
        {/* Logo */}
        <div className="flex items-center pl-6">
          <button className="hover:cursor-pointer">
            <img className="h-[60px]" src="Logo.png" alt="Logo" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-center">
          <ul className="flex gap-5  font-medium text-gray-700">
            <li className="relative group">
              <span className="hover:text-[#e81f1f] cursor-pointer">
                ABOUT US
                <span className="block h-1 bg-red-500 rounded-full mt-1 w-0 group-hover:w-full transition-all duration-300"></span>
              </span>
            </li>
            <li>
              <Link
                to="/Restaurants"
                className="hover:text-[#e81f1f] cursor-pointer"
              >
                RESTAURANTS
              </Link>
            </li>
            <li>
              <span className="hover:text-[#e81f1f] cursor-pointer">MENU</span>
            </li>
            <li>
              <span className="flex items-center gap-2 hover:text-[#e81f1f]">
                <CiSearch />
                <input
                  type="text"
                  className="outline-red-500 w-[120px] px-2 py-1 rounded border border-gray-300"
                  placeholder="Search..."
                />
              </span>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center justify-end pr-6 gap-4">
          <button className="text-2xl text-black hover:text-[#e81f1f]">
            <AiOutlineShoppingCart />
          </button>
          <div className="flex items-center gap-2 bg-[#E81F1F] text-white rounded-full px-4 py-2 hover:bg-white hover:text-[#E81F1F] transition-all duration-300">
            <IoPersonAddOutline />
            <span className="font-bold">
              <Link to="/ForSignup">
                <i>Login</i>
              </Link>
            </span>
          </div>
        </div>
      </header>
       <div className="h-[300px] bg-green"></div>

      {/* Hero Section */}
      <section className="h-[500px] w-full grid grid-cols-3 bg-white">
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
      <footer className="h-[300px] bg-gradient-to-t from-red-400 to-rose-200 flex items-center justify-center">
        {/* Add footer content here if needed */}
      </footer>
    </>
  );
}

export default Home;
