import React from "react";

function Home() {
  return (
   <>
     <div className="bg-gradient-to-r from-black via-gray-900 to-black shadow-lg text-white  fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[80px] px-8">
        <div className="flex items-center">
          <h1 className="text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
            JETMEALS
          </h1>
        </div>
        <nav className="flex-1 flex items-center justify-center ">
          <ol className="flex gap-12 text-xl font-medium text-white">
            <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
              HOME
            </li>
            <li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
            ABOUT
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
      
    </div>
     <div className="h-[700px] bg-amber-500 bg-[url(food.png)] kk bg-cover  ">
        <div className="flex justify-center  h-full">
          <h2 className="text-5xl font-bold text-white drop-shadow-lg mt-20">
           <marquee behavior="" direction=""><h1 className="text-center"> Welcome to JetMeals</h1> <br />Delivery made possible to your doorstep</marquee>
          </h2>
        </div>
     </div>
      <div className="h-[100px] bg-amber-600"></div>
   </>
  );
}

export default Home;
