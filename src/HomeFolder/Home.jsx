import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Home() {
  return (
    <div>
      <div className="h-[80px] grid grid-cols-[30%_40%_30%] bg-gradient-to-b from-rose-200 to">
        <div className=" w-[full] flex justify-start pt-2 pl-4 bg-green">
          <button className="hover:cursor-pointer">
            <img className="h-[70px]" src="Logo.png" alt="" />
          </button>
        </div>
        <div className="bg-pink flex text-[15px] items-center">
          <main className=" w-[100%] flex justify-between gap-6 bg-blue text-black-500 ">
            <span className="hover:cursor-pointer hover:text-[#e81f1f]">About Us</span>
            <span className="hover:cursor-pointer hover:text-[#e81f1f]">Resturants</span>
            <span className="hover:cursor-pointer hover:text-[#e81f1f]">Menu</span>
            <span className=" hover:cursor-pointer flex items-center gap-3 hover:text-[#e81f1f]">
              <CiSearch />{" "}
              <input
                type="text"
                className="outline-red-500 w-[120px]"
                placeholder="Search..."
              />
            </span>
          </main>
        </div>
        <div className="bg-orange text-white flex justify-end pr-4 items-center text-[15px] gap-2">
          <button className="text-[20px] hover:cursor-pointer text-black">
            <AiOutlineShoppingCart />
          </button>
          <div className="h-[50px] w-[100px] flex bg-[#E81F1F] rounded-full justify-center items-center gap-2 hover:text-[#E81F1F] hover:bg-white">
            <span className="">
              <IoPersonAddOutline />
            </span>
            <span className="font-bold">Login</span>
          </div>
        </div>
      </div>

      <div className="h-[500px] w-[100%] bg-white grid grid-cols-[30%_40%_30%]">
        <main className="h-[inherit] bg-blue gap-2 flex flex-col justify-between">
          <div className="h-[45%] bg-red-400 pp rounded-tr-2xl rounded-br-2xl">
            {" "}
          </div>
          <div className="h-[52%] bg-pink-400 aa rounded-tr-2xl rounded-br-2xl"></div>
        </main>
        <main className="h-[inherit] bg-red">
          <div className="bg-amber h-[60%] ss">
            <p>DELICIOUS MEALS DELIVERED FROM KITCHEN TO YOUR DOORSTEP</p>
          </div>
          <div className="bg-blue h-[40%] flex gap-3 justify-center items-center">
            <main className="h-[150px] w-[140px] bg-green flex flex-col items-center hover:cursor-pointer hover:scale-110 transition-all duration-500 hover:text-[#e81f1f]">
              <p className="h-32 w-32 bg-white rounded-full ab shadow-lime-400 flex items-center justify-center hover:bg-[#e81f1f]">
                <img src="fast-food.png" alt="" className="h-20" />
              </p>
              <p className="text-xl font-sans font-semibold">Order Now</p>
            </main>
            <main className="h-[150px] w-[140px] bg-green flex flex-col items-center hover:cursor-pointer hover:scale-110 transition-all duration-500 hover:text-[#e81f1f]">
              <p className="h-32 w-32 bg-white rounded-full ab shadow-lime-400 flex items-center justify-center hover:bg-[#e81f1f]">
                <img src="delivery-man.png" alt="" className="h-20" />
              </p>
              <p className="text-[18px] font-sans font-semibold">Package Delivery</p>
            </main>
          </div>
        </main>
        <main className="h-[inherit] bg-green flex flex-col justify-between ">
          <div className="h-[60%] bg-red-400 bb rounded-tl-2xl rounded-bl-2xl"></div>
          <div className="h-[37%] bg-pink-400 cc rounded-tl-2xl rounded-bl-2xl"></div>
        </main>
      </div>
    </div>
  );
}

export default Home;
