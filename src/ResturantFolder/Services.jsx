import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div className="bg-gradient-to-r from-black via-gray-900 to-black shadow-lg text-white  fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-8">
          <div className="flex items-center">
            <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
              <i>JETMEALS</i>
            </h1>
          </div>
          <nav className="flex-1 flex items-center justify-center ">
            <ol className="flex  hover:cursor-pointer gap-12 text-xl font-medium text-white">
              <a className="hover:text-red-600   hover:cursor-pointer hover:scale-110 transition-all-color duration-500 cursor-pointer">
                <Link to="/Restaurants">
                  {" "}
                  <i>RESTAURANTS</i>
                </Link>
              </a>

              <li className="hover:text-red-600 hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer relative">
                <Link to="/services">
                  <i> SERVICES</i>
                  
                  <span className="block h-1 bg-red-500 rounded-full mt-1"></span>
                </Link>
              </li>
              <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                <Link to="/Faqs">
                  {" "}
                  <i>FAQS</i>
                </Link>
              </li>
            </ol>
          </nav>
          <div className="flex items-center">
            <button className="bg-red-600 hover:bg-black text-white text-lg font-semibold py-2 px-6 rounded-full shadow  hover:cursor-pointer hover:scale-110 transition-all duration-500">
              <i>Signup/Login</i>
            </button>
          </div>
        </div>
      </div>
      <div className="h-[300px] bg-amber-200"></div>
    </>
  );
}

export default Services;
