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
                           <span className="block h-1 bg-black rounded-full mt-1"></span>
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
        <div className='h-[550px] max-w-8xl bg-black mx-auto w-full py-16 px-4 cursor-pointer'>
           <div className='h-[200px] bg-gradient-to-r from-black-200 to-red-500 bg-blend-darken flex justify-center items-center'><h1 className='text-3xl font-bold text-white'><i>FREQUENTLY ASKED QUESTIONS</i></h1></div>
           <div className='bg-gradient-to-r from-black-200 to-red-500 bg-blend-darken h-[450px]'>
              <h1 className='text-2xl font-bold text-white'><i><u>1. What is JetMeals?</u></i></h1>
              <p className='text-xl text-white'><i>JetMeals is a food delivery service that connects you with local restaurants to bring delicious meals right to your doorstep.</i></p>
              <h1 className='text-2xl font-bold text-white'><i><u>2. How do I place an order?</u></i></h1>
              <p className='text-xl text-white'><i>You can place an order through our website or mobile app. Simply browse the available restaurants, select your items, and proceed to checkout.</i></p>
              <h1 className='text-2xl font-bold text-white'><i><u>3. What payment methods do you accept?</u></i></h1>
              <p className='text-xl text-white'><i>We accept various payment methods including credit/debit cards, digital wallets, and cash on delivery in select areas.</i></p>
              <h1 className='text-2xl font-bold text-white'><i><u>4. How can I track my order?</u></i></h1>
              <p className='text-xl text-white'><i>You can track your order in real-time through our website or app. Once your order is confirmed, you will receive a tracking link via SMS or email.</i></p>  
           </div>
        </div>
    </>
  )
}

export default Faqs