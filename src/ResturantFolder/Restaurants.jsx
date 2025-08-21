import React, { useState, useEffect } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import { FaCcMastercard } from "react-icons/fa";
import { RiEBike2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Restaurants() {
  const slides = [
    { color: "bg-blue-800 h-[400px] bg-[url(Ribs.jpeg)] aa " },

    { color: "bg-blue-100 h-[400px] pp" },
    { color: "bg-blue-800 h-[400px] bb" },
    { color: "bg-blue-200 h-[400px] cc" },
    { color: "bg-blue-800 h-[400px] pi" },
    { color: "bg-blue-200 h-[400px] kp" },
    { color: "bg-blue-800 h-[400px] mp" },
    { color: "bg-blue-400 h-[400px] go" },
    { color: "bg-blue-200 h-[400px] pp" },
    { color: "bg-blue-800 h-[400px] mp" },
    { color: "bg-blue-200 h-[400px] cc" },
    { color: "bg-blue-800 h-[400px] pi" },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  let [holdData, setHoldData] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((data) => setHoldData(data));
  }, []);

  return (
    <>
      <div className=" bg-gradient-to-r from-black-200 to-red-500 shadow-lg text-black  fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-8">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold text-white tracking-wide drop-shadow-lg">
              <i>JETMEALS</i>
            </h1>
          </div>
          <nav className="flex-1 flex items-center justify-center ">
            <ol className="flex  hover:cursor-pointer gap-12 text-xl font-medium text-white">
              <a className="hover:text-red-600   hover:cursor-pointer hover:scale-110 transition-all-color duration-500 cursor-pointer">
                <Link to="/">
                  {" "}
                  <i>ABOUT US</i>
                </Link>
              </a>
              <a className="hover:text-red-600   hover:cursor-pointer hover:scale-110 transition-all-color duration-500 cursor-pointer">
                <Link to="/Restaurants">
                  {" "}
                  <i>RESTAURANTS</i>
                  <span className="block h-1 bg-black rounded-full mt-1"></span>
                </Link>
              </a>

              <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                <Link to="/services">
                  <i> SERVICES</i>
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
            <button className="bg-red-600 flex hover:bg-black text-white text-lg font-semibold py-2 px-6 rounded-full shadow  hover:cursor-pointer hover:scale-110 transition-all duration-500">
              <span className="">
               <IoPersonAddOutline />
                </span>
                <span className="font-bold">
                <Link to="/ForSignup">
                {" "}
                <i>Login</i>
                </Link>
              </span>
                         
            </button>
          </div>
        </div>
      </div>
      <div className="h-[300px]  bg-[url(bg.jpg)] ok bg-cover cursor-pointer ">
        <div className="flex  justify-center items-center h-full">
          <h2 className="text-5xl font-bold text-white drop-shadow-lg mt-20">
            <marquee behavior="" direction="">
              <h1 className="text-center text-white"> Welcome to JetMeals</h1>{" "}
              <br />
              <h1 className="text-white">
                Delivery made possible to your doorstep
              </h1>
            </marquee>
          </h2>
        </div>
      </div>
      <div className="h-[100px] bg-white bg-opacity-50 flex justify-center cursor-pointer items-center">
        <div className="flex justify-center items-center h-full">
          <div className="h-[50px] w-[200%]  hover:cursor-pointer hover:scale-110 transition-all duration-500  bg-gradient-to-r from-black-200 to-red-500 rounded-t-lg">
            <h2 className="text-4xl font-bold text-black drop-shadow-lg">
              <i> Explore Our Delicious Menu</i>
            </h2>
          </div>
        </div>
      </div>
      <div className="h-[1000px] bg-black">
        <div className="  h-[500px] bg-white gap-10">
          <div className="h-[400px] bg-white flex gap-10 items-center justify-center">
            <div className="h-[400px] bg-blue-300 w-[35%] bg-[url(sparg.jpeg)]  bg-cover "></div>
            <div className="h-[400px] bg-blue-500 w-[35%]  bg-[url(pinerice.jpeg)]  bg-cover "></div>
            <div className="h-[400px] bg-blue-300 w-[35%] bg-[url(Ribs.jpeg)]  bg-cover "></div>
          </div>
          <div className="bg-pink-50 h-[100px] w-[100%] gap-40 flex items-center justify-center ">
            <section className="h-[100px] w-[30%] bg-white text-black font-bold text-3xl text-center gap-6">
              Delicious <br />
              Sparghetti with beef
            </section>
            <section className="h-[100px] w-[30%] bg-white text-black font-bold text-3xl text-center">
              {" "}
              Pineapple <br />
              Rice
            </section>
            <section className="h-[100px] w-[30%] bg-white  text-black font-bold text-3xl text-center">
              Grilled Meats
            </section>
          </div>
        </div>
        <div className=" h-[500px] bg-black gap-10 cursor-pointer">
          <div className="h-[400px]  bg-pink-50 flex gap-10">
            <div className="h-[400px] bg-blue-300 w-[35%] bg-[url(sharwama.jpeg)]  bg-cover"></div>
            <div className="h-[400px] bg-blue-500 w-[35%]  bg-[url(desert.jpeg)]  bg-cover "></div>
            <div className="h-[400px] bg-blue-300 w-[35%] bg-[url(pasta.jpeg)]  bg-cover"></div>
          </div>
          <div className="bg-pink-50 h-[100px] gap-10 flex">
            <section className="h-[100px] w-[35%]  bg-white text-black font-bold text-3xl text-center">
              Delicious <br />
              Sharwama with beef
            </section>
            <section className="h-[100px] w-[35%]  bg-white text-black font-bold text-3xl text-center">
              {" "}
              <br />
              ice
            </section>
            <section className="h-[100px] w-[35%]  bg-white text-black font-bold text-3xl text-center">
              Pasta
            </section>
          </div>
          <div></div>
        </div>
      </div>
      <div className="h-[70px] hover:animate-bounce  bg-gradient-to-r from-pink-200 via-amber-100 to-pink-100 flex items-center justify-center text-black font-semibold text-2xl shadow-md">
        <i className="mr-6">
          HERE ARE SOME OF THE NICE DISHES YOU CAN ENJOY WITH YOUR FAMILY
        </i>
        <button className="ml-4 px-6 py-2  bg-gradient-to-r from-black-200 to-red-500 text-white font-bold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
          See more...
        </button>
      </div>
      <div className="h-[70px] bg-gradient-to-r from-pink-100 via-amber-100 to-pink-200 flex items-center justify-center">
        <div className="h-[60px] w-[80%]  hover:cursor-pointer hover:scale-110 transition-all duration-50 bg-gradient-to-r from-black-200 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
          <i className="text-black  hover:cursor-pointer hover:scale-110  hover:text-red-600 transition-colors duration-200 cursor-pointer text-2xl md:text-3xl tracking-wide">
            Ordering your favourite meals is easy with JetMeals! Just follow
            these steps.
          </i>
        </div>
      </div>
      <div className="h-[220px] cursor-pointer bg-gradient-to-r from-amber-50 via-pink-50 to-amber-100 flex gap-8 px-8 py-4 justify-center items-center">
        <div className="h-[180px] w-[22%] bg-white rounded-2xl shadow-lg flex flex-col">
          <section className="flex-1  hover:cursor-pointer hover:scale-110 transition-all duration-500 bg-gradient-to-r from-amber-200 to-pink-300 text-black text-center items-center flex flex-col justify-center rounded-b-2xl px-2">
            <h1 className="font-extrabold text-6xl text-red-600">
              <FaSearchLocation />
            </h1>
            <i>
              Choose a Restaurant
              <br />
              Find all restaurants available
              <br />
              in your zone.
            </i>
          </section>
        </div>
        <div className="h-[180px] w-[22%] bg-white rounded-2xl shadow-lg flex flex-col">
          <section className="flex-1  hover:cursor-pointer hover:scale-110 transition-all duration-500 bg-gradient-to-r from-amber-200 to-pink-300 text-black text-center items-center flex flex-col justify-center rounded-b-2xl px-2">
            <h1 className="text-6xl text-center text-red-600">
              <IoFastFood />
            </h1>
            <i>
              Order your food
              <br />
              Go to order and choose your favourite meals
            </i>
          </section>
        </div>
        <div className="h-[180px] w-[22%] bg-white rounded-2xl shadow-lg flex flex-col">
          <section className="flex-1 bg-gradient-to-r  hover:cursor-pointer hover:scale-110 transition-all duration-500bg-gradient-to-r from-amber-200 to-pink-300 text-black text-center items-center flex flex-col justify-center rounded-b-2xl px-2">
            <h1 className="text-6xl text-red-600 text-center">
              <FaCcMastercard />
            </h1>
            <i>
              Pay by cash or card
              <br />
              It's quick, easy, and totally secure.
              <br />
              Be rest assured.
            </i>
          </section>
        </div>
        <div className="h-[180px] w-[22%] bg-white rounded-2xl shadow-lg flex flex-col">
          <section className="flex-1  hover:cursor-pointer hover:scale-110 transition-all duration-500 bg-gradient-to-r from-amber-200 to-pink-300 text-black text-center items-center flex flex-col justify-center rounded-b-2xl px-2">
            <h1 className="text-6xl text-red-600">
              <RiEBike2Line />
            </h1>
            <i>
              Delivery
              <br />
              Relax while we bring your food
              <br />
              to your doorstep
            </i>
          </section>
        </div>
      </div>
      <div className="h-[400px] w-[100%] bg-amber-300  overflow-hidden flex items-center relative">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${index * 33.3333}%)`,
            width: `${slides.length * 33.3333}%`,
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`h-[300px] w-[39.3333%] ${slide.color} flex-shrink-0`}
            ></div>
          ))}
        </div>
      </div>
      <div className="h-[50px] cursor-pointer  bg-gradient-to-r from-black-200 to-red-500 bg-blend-darken flex justify-center items-center text-3xl text-black ">
        <i>You can order from any Resturant of your choice</i>
      </div>
      <div className="h-[600px] bg-gradient-to-r from-pink-100 to-amber-100 flex gap-3">
        <div className="h-[600px] w-[35%] bg-orange-300">
          <div className="h-[400px]  bg-pink-200 oo"></div>
          <div className="h-[200px]  bg-gradient-to-r from-black-200 to-red-500">
            <i>
              <h1 className="text-white text-3xl text-center">
                Become a rider
              </h1>{" "}
              <h1 className="text-white text-1xl text-center">
                Enjoy flexibility ,freedom and competitive <br />
                earnings by delivering through Jetmeals. <br /> Register and
                start earning <br />
                <button className="bg-yellow-400 h-[60px] w-[100px] text-white text-1xl rounded-full  hover:cursor-pointer hover:scale-110 transition-all duration-500">
                  Register Here
                </button>
              </h1>
            </i>
          </div>
        </div>
        <div className="h-[600px] w-[35%] bg-orange-700">
          <div className="h-[400px]  bg-pink-200 oop"></div>
          <div className="h-[200px]  bg-gradient-to-r from-black-200 to-red-500">
            <i>
              <h1 className="text-white text-3xl text-center">
                Become a Partner
              </h1>{" "}
              <h1 className="text-white text-1xl text-center">
                Let's work together to bring the best <br />
                food experiences to our customers. <br />
                Join us as a partner <br />
                <button className="bg-yellow-400 h-[60px] w-[100px] text-white text-1xl rounded-full  hover:cursor-pointer hover:scale-110 transition-all duration-500">
                  Register Here
                </button>
              </h1>
            </i>
          </div>
        </div>
        <div className="h-[600px] w-[35%] bg-orange-300">
          <div className="h-[400px]  bg-pink-200 obi"></div>
          <div className="h-[200px] bg-gradient-to-r from-black-200 to-red-500">
            <i>
              <h1 className="text-white text-3xl text-center">
                Add your Restaurant
              </h1>{" "}
              <h1 className="text-white text-1xl text-center">
                Expand your food business
                <br />
                by reaching your audience target. <br />
                Join us to achieve that ambition. <br />
                <button className="bg-yellow-400 h-[60px] w-[100px] text-white text-1xl rounded-full  hover:cursor-pointer hover:scale-110 transition-all duration-500">
                  Register Here
                </button>
              </h1>
            </i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurants;
