import React from "react";
import { Link } from "react-router-dom";
import { FaTruck, FaUtensils, FaBullhorn } from "react-icons/fa";

function Services() {
  return (
    <>
      <div className=" bg-gradient-to-r from-black-200 to-red-500 shadow-lg text-white fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-8">
          <div className="flex items-center">
            <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
              <i>JETMEALS</i>
            </h1>
          </div>
          <nav className="flex-1 flex items-center justify-center ">
            <ol className="flex hover:cursor-pointer gap-12 text-xl font-medium text-white">
              <li className="hover:text-red-600 hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                <Link to="/Restaurants">
                  <i>RESTAURANTS</i>
                </Link>
              </li>
              <li className="hover:text-red-600 hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer relative">
                <Link to="/services">
                  <i>SERVICES</i>
                  <span className="block h-1  bg-black rounded-full mt-1"></span>
                </Link>
              </li>
              <li className="hover:text-red-600 hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                <Link to="/Faqs">
                  <i>FAQS</i>
                </Link>
              </li>
            </ol>
          </nav>
          <div className="flex items-center">
            <button className="bg-red-400 hover:bg-black text-white text-lg font-semibold py-2 px-6 rounded-full shadow hover:cursor-pointer hover:scale-110 transition-all duration-500">
              <i>Signup/Login</i>
            </button>
          </div>
        </div>
      </div>

      <div className="h-[300px]  bg-gradient-to-r from-black-200 to-red-500 flex flex-col justify-center items-center pt-[80px]">
        <h2 className="text-5xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-xl text-white max-w-2xl text-center">
          At JetMeals, we’re dedicated to making your food experience seamless
          and delightful. Explore our range of services designed for food
          lovers, event planners, and food vendors!
        </p>
      </div>

      <div className="max-w-8xl bg-black mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className=" bg-gradient-to-r from-black-200 to-red-500 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaUtensils className="text-5xl text-white mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-white">
            Catering Services
          </h3>
          <p className="text-white text-center">
            Planning an event? Let us handle the food! Our catering partners
            offer diverse menus for all occasions, ensuring your guests enjoy
            delicious meals, hassle-free.
          </p>
        </div>

        <div className=" bg-gradient-to-r from-black-200 to-red-500 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaTruck className="text-5xl text-white mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-white">
            Fast Delivery
          </h3>
          <p className="text-white text-center">
            Craving something tasty? Order from your favorite restaurants and
            get your meals delivered hot and fresh, right to your
            doorstep—quickly and reliably.
          </p>
        </div>

        <div className=" bg-gradient-to-r from-black-200 to-red-500 rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <FaBullhorn className="text-5xl text-white mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-white">
            Vendor Advertising
          </h3>
          <p className="text-white text-center">
            Are you a food vendor? Join JetMeals to showcase your dishes, reach
            new customers, and grow your business with our easy-to-use
            advertising platform.
          </p>
        </div>
      </div>
      <div className="h-[400px] bg-black flex justify-center items-center gap-12 relative overflow-hidden">
      
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=facearea&w=300&q=80"
          alt="Chef cooking"
          className="w-100 h-90 object-cover rounded-t-3xl shadow-lg border-4 border-red-400 hover:scale-105 transition-transform duration-300"
        />
        <img
          src="https://www.getfoodcourt.com/_next/image?url=https%3A%2F%2Fd3u7b9fq2opvwp.cloudfront.net%2Fupload-service%2F9551e55a-cb6e-470d-9993-b0b29b5a7e3a%3Agallery2.jpg.jpg&w=640&q=75"
          alt=""
          className="w-100 h-90 object-cover rounded-t-3xl shadow-lg border-4 border-red-400 hover:scale-105 transition-transform duration-300"
        />
    
        <img
          src="https://www.getfoodcourt.com/_next/image?url=https%3A%2F%2Fd3u7b9fq2opvwp.cloudfront.net%2Fupload-service%2F3144c1c4-710a-4cac-8f53-2d310a62b655%3Agallery1.jpg.jpg&w=640&q=75"
          alt=""
          className="w-100 h-90 object-cover rounded-t-3xl shadow-lg border-4 border-red-400 hover:scale-105 transition-transform duration-300 "
        />
        
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      </div>
      <div className="h-[100px] bg-black flex justify-center   gap-12">
         <section className="h-[70px] w-[30%] bg-black text-white text-center font-medium">Allows us handle your catering  <br />Events everything about catering we offer the best! <br />Let's serve your quests the best dishes</section>
         <section className="h-[70px] w-[30%] bg-black  text-white text-center font-medium">Delivery made possible to your <br />Doorstep within few minutes with cheap fee! <br />With our trusted riders.</section>
         <section className="h-[70px] w-[30%] bg-black  text-white text-center font-medium">As  a chef who is skilled <br />Looking for large  customers then worry no more ! <br />Jetmeals gat you covered</section>
      </div>
    </>
  );
}

export default Services;
