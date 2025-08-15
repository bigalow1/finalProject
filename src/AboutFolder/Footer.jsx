import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (

    <>
     <div className='h-[300px] bg-black mt-6'>
        <div className='h-[70px] bg-black flex justify-center items-center gap-1'>
             <h1 className='h-[70px] w-[30%] bg-black text-3xl font-bold flex justify-around text-white'><i>Jetmeals</i> <i className='text-2xl'>Company</i></h1>
             <h1  className='h-[70px] w-[30%] bg-black text-2xl font-bold flex justify-around text-white text-center'><i>Locations</i></h1>
             <h1  className='h-[70px] w-[30%]  bg-black text-2xl font-bold flex justify-around text-white '><i>Restaurants</i></h1>
        </div>
        <div className='h-[300px] bg-black gap-1 flex justify-center items-center'>
             <section className='h-[300px] w-[30%] bg-black flex justify-around text-white text-1xl  '>
                 <ol>
                <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                <Link to="/">
                     {" "}
                  <i>Home</i>
                </Link>
                </li>
                <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                <Link to="/Restaurants">
                     {" "}
                  <i>Restaurants</i>
                </Link>
              </li>
                 <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                <Link to="/Services">
                    {" "}
                  <i> Services</i>
                </Link>
                </li>
                 <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                <Link to="/Faqs">
                        {" "}
                  <i> Faqs</i>
                </Link>
                </li>

                 <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                <Link to="/Faqs">
                  <i>User policy</i>
                      {" "}
                </Link>
                </li>
                 <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                <Link to="/Faqs">
                    <i>Privacy policy</i>
                        {" "}
                  <i>Terms</i>
                </Link>
                </li>
                 
                    
                 </ol>
                 
             </section>
                <section className='h-[300px] w-[30%] bg-black flex justify-around text-white text-1xl '>
                    <ol>
                    <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                    <Link to="/">
                        {" "}
                    <i>About Us</i>
                    </Link>
                    </li>
                    <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                    <Link to="/Restaurants">
                        {" "}
                    <i>Contact Us</i>
                    </Link>
                </li>
                    <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                    <Link to="/Faqs">
                        {" "}
                    <i>Help</i>
                    </Link>
                    </li>
                    <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                    <Link to="/Faqs">
                    <i>User policy</i>
                        {" "}
                    </Link>
                    </li>
                    <li className="hover:text-red-600  hover:cursor-pointer hover:scale-110 transition-all duration-500 cursor-pointer">
                    <Link to="/Faqs">
                        <i>Privacy policy</i>
                            {" "}
                    <i>Terms</i>
                    </Link>
                    </li>
                    
                        
                    </ol>
                    </section>

         <section className='h-[300px] w-[30%] bg-black'></section>
         <section className='h-[300px] w-[30%] bg-black'></section>
        </div>

     </div>
    
    
    </>
  )
}

export default Footer