import React, { useEffect, useState } from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";

function ApproveRestaurant() {
  const [holdDelivery, setHoldDelivery] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch restaurants
  useEffect(() => {
    const fetchRestaurants = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3002/restaurant");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setHoldDelivery(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Delete restaurant
  const handleDelete = async (restaurantId) => {
    try {
      const response = await fetch(
        `http://localhost:3002/restaurant/${restaurantId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      console.log("Deleted:", data);

      // Update UI after delete
      setHoldDelivery((prev) =>
        prev.filter((r) => r._id !== restaurantId)
      );
    } catch (error) {
      console.error("Error deleting restaurant:", error);
    }
  };

  // Accept restaurant
  const handleAccept = async (restaurantId) => {
    try {
      const response = await fetch(
        `http://localhost:3002/restaurant/accept/${restaurantId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      console.log("Accepted:", data);

      // You can update UI (e.g., mark as accepted)
    } catch (error) {
      console.error("Error accepting restaurant:", error);
    }
  };

  return (
    <div className="p-4 mt-14">
      <table className="border-collapse border border-gray-500 bg-white mt-10 w-full">
        <thead className="bg-gray-100">
          <tr className="border-b border-gray-200">
            <th className="p-2 text-left">restaurantPicture</th>
            <th className="p-2 text-left">restaurantName</th>
            <th className="p-2 text-left">Address</th>
            <th className="p-2 text-left">Opentime</th>
            <th className="p-2 text-left">Closetime</th>
            <th className="p-2 text-left">Delete</th>
            <th className="p-2 text-left">Accept</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan="7" className="p-2 text-center">
                Loading...
              </td>
            </tr>
          ) : holdDelivery.length > 0 ? (
            holdDelivery.map((restaurants) => (
              <tr key={restaurants._id} className="hover:bg-gray-50">
                <td className="p-2">
                  {restaurants.picture ? (
                    <img
                      src={restaurants.picture}
                      alt={restaurants.name}
                      className="h-12 w-12 object-cover rounded"
                    />
                  ) : (
                    "No Image"
                  )}
                </td>
                <td className="p-2">{restaurants.name}</td>
                <td className="p-2">{restaurants.address}</td>
                <td className="p-2">{restaurants.opentime}</td>
                <td className="p-2">{restaurants.closetime}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(restaurants._id)}
                    className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
                  >
                    <RiDeleteBack2Fill />
                  </button>
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleAccept(restaurants._id)}
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
                  >
                    Accept
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="p-2 text-center">
                No restaurants found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ApproveRestaurant;
