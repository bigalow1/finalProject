import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBox,
  FaClipboardCheck,
  FaShoppingCart,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Manage menus",
      icon: <FaBox className="text-4xl text-blue-500 mb-3" />,
      route: "/Update",
    },
    {
      title: "Approve Restaurants",
      icon: <FaClipboardCheck className="text-4xl text-green-500 mb-3" />,
      route: "/ApproveRestaurant",
    },
    {
      title: "Manage Orders",
      icon: <FaShoppingCart className="text-4xl text-orange-500 mb-3" />,
      route: "/order",
    },
    {
      title: "Manage Users",
      icon: <FaUsers className="text-4xl text-purple-500 mb-3" />,
      route: "/admin/users",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={() => navigate("/Forlogin")}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          <FaSignOutAlt /> Logout
        </button>
      </header>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <Link
            key={idx}
            to={card.route}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition transform flex flex-col items-center text-center"
          >
            {card.icon}
            <h2 className="text-lg font-semibold text-gray-700">
              {card.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
