import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'  
import { IoPersonAddOutline } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'


function Header() {
  return (
    <>
       {/* Header */}
      <header className="h-[80px] flex items-center justify-between bg-gradient-to-r from-rose-700 via-rose-500 to-amber-400 shadow-md px-8 fixed top-0 left-0 w-full z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              className="h-[60px] hover:scale-105 transition-transform"
              src="Logo.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-8 font-medium text-white-600 items-center">
            <li>
              <Link
                to="/"
                className="hover:text-[#e81f1f] font-bold transition-colors duration-200 px-2 py-1 rounded hover:bg-rose-100"
              >
                <i>ABOUT US</i>
              </Link>
            </li>
            <li>
              <Link
                to="/Restaurants"
                className="hover:text-[#e81f1f] font-bold transition-colors duration-200 px-2 py-1 rounded hover:bg-rose-100"
              >
                <i>RESTAURANTS</i>
              </Link>
            </li>
            <li>
              <Link
                to="/OrderPage"
                className="hover:text-[#e81f1f] font-bold transition-colors duration-200 px-2 py-1 rounded hover:bg-rose-100"
              >
                <i>MENUS</i>
              </Link>
            </li>
             <li>
               <Link
                 to="/services"
                  className="hover:text-amber-200 transition-colors duration-300"
                 >
                 SERVICES
              </Link>
                   </li>
                          <li>
                            <Link
                              to="/Faqs"
                              className="hover:text-amber-200 transition-colors duration-300"
                            >
                              FAQS
                            </Link>
                          </li>
            <li>
              <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                <CiSearch className="text-xl text-gray-500" />
                <input
                  type="text"
                  className="outline-none w-[120px] px-1 py-1 bg-transparent text-gray-700"
                  placeholder="Search..."
                />
              </div>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <button className="text-2xl text-black hover:text-[#e81f1f] transition-colors">
            <AiOutlineShoppingCart />
          </button>
          <Link to="/ForSignup">
            <div className="flex items-center gap-2 bg-[#E81F1F] text-white rounded-full px-4 py-2 hover:bg-white hover:text-[#E81F1F] border border-[#E81F1F] transition-all duration-300 font-bold">
              <IoPersonAddOutline />
              <span>
                <i>Login</i>
              </span>
            </div>
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header