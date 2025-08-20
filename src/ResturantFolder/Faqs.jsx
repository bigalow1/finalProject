import React from 'react'
import { Link } from 'react-router-dom'
import { IoPersonAddOutline } from 'react-icons/io5'


function Faqs() {
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
        <div className='h-[300px] bg-red-400'></div>
    </>
  )
}

export default Faqs