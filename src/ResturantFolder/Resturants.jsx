import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaCcMastercard } from "react-icons/fa";
import { RiEBike2Line } from "react-icons/ri";

function Restaurants() {
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
          <ol className="flex gap-12 text-xl font-medium text-white">
            <li className="hover:text-red-600 transition-colors duration-200 cursor-pointer">
            <i>  FOODS</i>
            </li>
            <li className="hover:text-red-600 transition-colors duration-200 cursor-pointer">
            <i>ORDER</i>
            </li>
            <li className="hover:text-red-600 transition-colors duration-200 cursor-pointer">
              <i> SERVICES</i>
            </li>
            <li className="hover:text-red-600 transition-colors duration-200 cursor-pointer">
              <i>FAQS</i>
            </li>
      
          </ol>
        </nav>
        <div className="flex items-center">
          <button className="bg-red-600 hover:bg-yellow-500 text-white text-lg font-semibold py-2 px-6 rounded-full shadow transition-colors duration-200">
            Signup/Login
          </button>
        </div>
      </div>
      
    </div>
     <div className="h-[300px]  bg-[url(bg.jpg)] ok bg-cover  ">
        <div className="flex  justify-center items-center h-full">
          <h2 className="text-5xl font-bold text-white drop-shadow-lg mt-20">
           <marquee behavior="" direction=""><h1 className="text-center text-white"> Welcome to JetMeals</h1> <br /><h1 className="text-white">Delivery made possible to your doorstep</h1></marquee>
          </h2>
        </div>
     </div>
      <div className="h-[100px] bg-white bg-opacity-50 flex justify-center items-center">
        <div className="flex justify-center items-center h-full">
           <div className="h-[50px] w-[200%] bg-black rounded-t-lg"><h2 className="text-4xl font-bold text-white drop-shadow-lg">
           <i> Explore Our Delicious Menu</i>
          </h2></div>
        </div>  
        
        </div>
        <div className="h-[1000px] bg-black">
          <div className="  h-[500px] bg-white gap-10">  
              <div className="h-[400px] bg-white flex gap-10 items-center justify-center">
              <div className="h-[400px] bg-blue-300 w-[35%] bg-[url(sparg.jpeg)]  bg-cover rounded-full"></div>
              <div className="h-[400px] bg-blue-500 w-[35%]  bg-[url(pinerice.jpeg)]  bg-cover rounded-full"></div>
              <div className="h-[400px] bg-blue-300 w-[35%] bg-[url(Ribs.jpeg)]  bg-cover rounded-full"></div>
              </div>
             <div className="bg-pink-50 h-[100px] w-[100%] gap-40 flex items-center justify-center ">
               <section className="h-[100px] w-[30%] bg-white text-black font-bold text-3xl text-center gap-6">Delicious <br />Sparghetti with beef</section>
               <section className="h-[100px] w-[30%] bg-white text-black font-bold text-3xl text-center"> Pineapple <br />Rice</section>
               <section className="h-[100px] w-[30%] bg-white  text-black font-bold text-3xl text-center">Grilled Meats</section>
              
             </div>
              
            </div>
          <div className=" h-[500px] bg-black gap-10">
            <div className="h-[400px]  bg-pink-50 flex gap-10">
              <div className="h-[400px] bg-blue-300 w-[35%] bg-[url(sharwama.jpeg)]  bg-cover rounded-full"></div>
              <div className="h-[400px] bg-blue-500 w-[35%]  bg-[url(desert.jpeg)]  bg-cover rounded-full"></div>
              <div className="h-[400px] bg-blue-300 w-[35%] bg-[url(pasta.jpeg)] rounded-full bg-cover"></div>
            </div>
            <div className="bg-pink-50 h-[100px] gap-10 flex">
               <section className="h-[100px] w-[35%] bg-white text-black font-bold text-3xl text-center">Delicious <br />Sharwama with beef</section>
               <section className="h-[100px] w-[35%] bg-white text-black font-bold text-3xl text-center">  <br />ice</section>
               <section className="h-[100px] w-[35%] bg-white text-black font-bold text-3xl text-center">Pasta</section>
              
             </div>
            <div></div>

              
          </div>
      </div>
      <div className="h-[70px]  bg-pink-50 flex items-center justify-center text-black font-medium text-2xl"><i> HERE ARE SOME OF THE NICE DISHES YOU CAN FOR YOURSELF AND FAMILY</i><button className="text-white font-medium text-2xl bg-amber-500 h-[50px] w-[150px] rounded-full"> see more...</button></div>
        <div className="h-[70px]   bg-pink-50 text-white text-3xl text-shadow-amber-100 items-center justify-center flex"><div className="h-[70px] w-[80%]   bg-black text-white text-3xl text-shadow-amber-100 items-center justify-center flex"><i> Odering your favourite meals is easy with JetMeals! just follow this steps.</i></div></div>
       <div className="h-[200px] bg-gray-100 flex gap-5">
        <div className="h-[170px] w-[30%] bg-red-400">
           <section className="h-[70px]  bg-white flex justify-center items-center"><h1 className="font-extrabold text-6xl text-amber-500"><FaSearchLocation /></h1></section>
           <section className="h-[100px] bg-black text-white text-center"><i>Choose a Resturants <br /> Find all resturants available <br />In your zone.</i></section>
        </div>
         <div className="h-[170px] w-[30%] bg-blue-100">
          <section className="h-[70px]  bg-pink-50 flex justify-center items-center "><h1 className="text-6xl text-center text-red-600"><IoFastFood /></h1></section>
           <section className="h-[100px] text-white bg-black text-center"><i>Order your food <br />Go to order and order your favourite meals</i></section>
         </div>
         <div className="h-[170px] w-[30%] bg-blue-800">
           <section className="h-[70px]  bg-pink-50 flex justify-center items-center "><h1 className="text-6xl text-red-600"><FaCcMastercard /></h1></section>
           <section className="h-[100px] bg-black text-white text-center"> <i>Pay by cash or card <br />its quick and easy,and totally secure. <br />Be rest assured.</i></section>
         </div>
         <div className="h-[170px] w-[30%] bg-blue-200">
           <section className="h-[70px]   bg-pink-50 flex justify-center items-center "><h1 className="text-6xl text-blue-600"><RiEBike2Line /></h1></section>
           <section className="h-[100px] bg-black text-white text-center"><i>Delivery <br />Relax while we bring your food <br />To your doorstep</i></section>
         </div>
         
       </div>
      <div className="h-[300px] bg-amber-300 flex">
          <div className="h-[300px] w-[30%] bg-blue-800"></div>
         <div className="h-[300px] w-[30%] bg-blue-100"></div>
         <div className="h-[300px] w-[30%] bg-blue-800"></div>
         <div className="h-[300px] w-[30%] bg-blue-200"></div>
         <div className="h-[300px] w-[30%] bg-blue-800"></div>
          <div className="h-[300px] w-[30%] bg-blue-200"></div>
         <div className="h-[300px] w-[30%] bg-blue-800"></div>
      </div>
      <div className="h-[50px] bg-gray-400"></div>
      <div className="h-[400px]  bg-green-300 flex gap-3">
          <div className="h-[600px] w-[35%] bg-orange-300">
              <div className="h-[400px]  bg-pink-200 oo"></div>
              <div className="h-[200px] bg-black"><i><h1 className="text-white text-3xl text-center">Become a rider</h1 > <h1 className="text-white text-1xl text-center">Enjoy flexibility ,freedom and competitive <br />earnings by delivering through Jetmeals. <br /> Register  and start earning <br /><button className="bg-yellow-400 h-[60px] w-[100px] text-white text-1xl rounded-full">Register Here</button></h1></i></div>
          </div>
          <div className="h-[600px] w-[35%] bg-orange-700">
              <div className="h-[400px]  bg-pink-200 obi"></div>
              <div className="h-[200px] bg-black"><i><h1 className="text-white text-3xl text-center">Become a Partner</h1 > <h1 className="text-white text-1xl text-center">Let's work together to bring the best <br />food experiences to our customers. <br />Join us as a partner  <br /><button className="bg-yellow-400 h-[60px] w-[100px] text-white text-1xl rounded-full">Register Here</button></h1></i></div>
          </div>
          <div className="h-[600px] w-[35%] bg-orange-300">
              <div className="h-[400px]  bg-pink-200 oop"></div>
              <div className="h-[200px] bg-black"><i><h1 className="text-white text-3xl text-center">Add your Resturant</h1 > <h1 className="text-white text-1xl text-center">Expand your food business<br />by reaching your audience target. <br />Join us to achieve that ambition.  <br /><button className="bg-yellow-400 h-[60px] w-[100px] text-white text-1xl rounded-full">Register Here</button></h1></i></div>
          </div>
      </div>
   </>
  );
}

export default Restaurants;
