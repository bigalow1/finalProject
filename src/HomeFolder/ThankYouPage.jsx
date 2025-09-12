
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md w-full"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Thank You! 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully.  
          You’ll receive a confirmation email shortly.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-2 rounded-lg bg-[#E81F1F] text-white hover:bg-red-700 transition"
          >
            Back to Home
          </Link>
          <Link
            to="/CheckoutPage"
            className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            View My Orders
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ThankYouPage;
