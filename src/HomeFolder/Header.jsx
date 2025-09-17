import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonAddOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";
import { useCart } from "../AlldetailsFolder/CartContext";

function Header() {
  const { cart } = useCart();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-rose-700 via-rose-500 to-amber-400 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[70px] px-6">
        {/* Logo */}
        <Link to="/">
          <img
            className="h-[55px] bg-white rounded-lg hover:scale-105 transition-transform"
            src="Logo.png"
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-8 font-medium text-white items-center">
            <li>
              <Link
                to="/"
                className="hover:text-[#e81f1f] font-bold transition px-2 py-1 rounded hover:bg-rose-100"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                to="/Restaurants"
                className="hover:text-[#e81f1f] font-bold transition px-2 py-1 rounded hover:bg-rose-100"
              >
                RESTAURANTS
              </Link>
            </li>
            <li>
              <Link
                to="/OrderPage"
                className="hover:text-[#e81f1f] font-bold transition px-2 py-1 rounded hover:bg-rose-100"
              >
                MENUS
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-amber-200 transition px-2 py-1 rounded hover:bg-rose-100"
              >
                SERVICES
              </Link>
            </li>
            <li>
              <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                <CiSearch className="text-xl text-gray-500" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleSearch}
                  className="outline-none w-[140px] bg-transparent text-gray-700"
                  placeholder="Search..."
                />
              </div>
            </li>
          </ul>
        </nav>

        {/* Cart & Login */}
        <div className="flex items-center gap-6">
          <Link to="/CartPage" className="relative text-white hover:text-[#e81f1f]">
            <AiOutlineShoppingCart size={28} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link to="/ForSignup">
            <div className="flex items-center gap-2 bg-[#E81F1F] text-white rounded-full px-4 py-2 hover:bg-white hover:text-[#E81F1F] border border-[#E81F1F] transition-all duration-300 font-bold">
              <IoPersonAddOutline />
              <span>Login</span>
            </div>
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 font-semibold text-white bg-rose-600 ">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="/Restaurants" onClick={() => setMenuOpen(false)}>
                RESTAURANTS
              </Link>
            </li>
            <li>
              <Link to="/OrderPage" onClick={() => setMenuOpen(false)}>
                MENUS
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                SERVICES
              </Link>
            </li>
            <li className="w-[80%]">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2 border">
                <CiSearch className="text-xl text-gray-500" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleSearch}
                  className="outline-none flex-1 bg-transparent text-white"
                  placeholder="Search..."
                />
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>

  );
}

export default Header;
