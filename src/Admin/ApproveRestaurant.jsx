import { useEffect, useState } from "react";

const ApproveRestaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const restaurantsPerPage = 5;

  // ✅ Fetch restaurants
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await fetch("http://localhost:3002/restaurant/all");
  const data = await res.json();
  
  if (Array.isArray(data)) {
    setRestaurants(data);
  } else {
    setRestaurants([]); 
    console.error("Unexpected API response:", data);
  }
  
      } catch (err) {
        console.error("Fetch error:", err);
        setRestaurants([]); 
      }
    };
  
    fetchRestaurants();
  }, []);

  // ✅ Approve
  const approveRestaurant = async (id) => {
    try {
      const res = await fetch(`http://localhost:3002/restaurant/${id}`, {
        method: "PUT",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to approve restaurant");
      setRestaurants((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Error approving restaurant:", err.message);
      setError(err.message);
    }
  };

  // ✅ Reject
  const rejectRestaurant = async (id) => {
    try {
      const res = await fetch(`http://localhost:3002/restaurant/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to reject restaurant");
      setRestaurants((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Error rejecting restaurant:", err.message);
      setError(err.message);
    }
  };

  useEffect(() => {
    rejectRestaurant();
  }, []);

  if (loading) return <p className="p-6">Loading restaurants...</p>;
  if (error) return <p className="p-6 text-red-600">{error}</p>;

  // ✅ Pagination
  const indexOfLast = currentPage * restaurantsPerPage;
  const indexOfFirst = indexOfLast - restaurantsPerPage;
  const currentRestaurants = restaurants.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(restaurants.length / restaurantsPerPage);

  return (
    <main className="flex-1 p-6 min-h-screen bg-amber-100">
      <h2 className="text-2xl font-bold mb-6">Restaurants Pending Approval</h2>

      {restaurants.length === 0 ? (
        <p className="text-gray-500">No restaurants waiting for approval.</p>
      ) : (
        <>
          {/* ✅ Scrollable Table */}
          <div className="max-h-[600px] overflow-y-auto bg-white rounded-xl shadow border">
            <table className="w-full border-collapse">
              <thead className="bg-gray-200 sticky top-3">
                <tr>
                  <th className="px-4 py-3 text-left">Picture</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Address</th>
                  <th className="px-4 py-3 text-left">Opening Time</th>
                  <th className="px-4 py-3 text-left">Closing Time</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentRestaurants.map((restaurant) => (
                  <tr key={restaurant._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">
                      {restaurant.restaurantPicture ? (
                        <img
                          src={restaurant.restaurantPicture}
                          alt={restaurant.restaurantName}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      ) : (
                        <span className="text-gray-400">No Image</span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-semibold">
                      {restaurant.restaurantName}
                    </td>
                    <td className="px-4 py-3">{restaurant.address}</td>
                    <td className="px-4 py-3">{restaurant.opentime}</td>
                    <td className="px-4 py-3">{restaurant.closetime}</td>
                    <td className="px-4 py-3 text-center space-x-2">
                      <button
                        onClick={() => approveRestaurant(restaurant._id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => rejectRestaurant(restaurant._id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ Pagination Controls */}
          <div className="flex justify-center items-center mt-6 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === idx + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {idx + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default ApproveRestaurant;
