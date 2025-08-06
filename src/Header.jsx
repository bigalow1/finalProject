import React from "react";
import "./Header.jsx";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black shadow-lg ">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-8">
        <div className="flex items-center">
          <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
            JETMEALS
          </h1>
        </div>
        <nav className="flex-1 flex items-center justify-center ">
          <ol className="flex gap-12 text-xl font-medium text-white">
            <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
             <Link to="/">HOME</Link>
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              SERVICES
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              MENU
            </li>
              <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              ABOUT US
            </li>
          </ol>
        </nav>
        <div className="flex items-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-lg font-semibold py-2 px-6 rounded-full shadow transition-colors duration-200">
            Signup / Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
