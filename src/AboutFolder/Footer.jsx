import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      {/* Top Branding */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-6 mb-10">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <i>Jetmeals</i> <span className="text-lg">Company</span>
        </h1>
        <h1 className="text-2xl font-semibold">Accounts</h1>
        
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 md:px-20">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li className="hover:text-red-600 transition-all duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-red-600 transition-all duration-300">
              <Link to="/restaurants">Restaurants</Link>
            </li>
            <li className="hover:text-red-600 transition-all duration-300">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-red-600 transition-all duration-300">
              <Link to="/faqs">FAQs</Link>
            </li>
            <li className="hover:text-red-600 transition-all duration-300">
              <Link to="/policy">User Policy</Link>
            </li>
            <li className="hover:text-red-600 transition-all duration-300">
              <Link to="/terms">Privacy Policy & Terms</Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <ul className="space-y-3">
            <li className="hover:text-red-600 transition-all duration-300">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-red-600 transition-all duration-300">
              <Link to="/contact">Contact Us</Link>
              <p className="text-sm mt-1">+234 567 890</p>
            </li>
            <li className="hover:text-red-600 transition-all duration-300">
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://facebook.com"
                className="hover:text-red-600 transition-all duration-300"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="hover:text-red-600 transition-all duration-300"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                className="hover:text-red-600 transition-all duration-300"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Jetmeals. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
