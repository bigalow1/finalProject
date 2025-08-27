import React from "react";
import { Link } from "react-router-dom";

function Restaurant() {
  const [formData, setFormData] = React.useState({
    profilepicture: "",
    fullname: "",
    opentime: "",
    closetime: "",
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    if (formData.restaurantpicture) {
      data.append("restaurantpicture", formData.restaurantpicture);
      data.append("opentime", formData.opentime);
      data.append("closetime", formData.closetime);
    }
    data.append("fullname", formData.fullname);

    try {
      const res = await fetch(
        "https://blogbackend-cgj8.onrender.com/restaurant",
        {
          method: "POST",
          body: data,
          credentials: "include",
        }
      );

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }

      const result = await res.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="h-[1000px] bg-gradient-to-r from-black-200 to-red-500 flex flex-col items-center justify-center cursor-pointer">
      <div className="bg-gradient-to-r from-black-200 to-red-500 p-8 rounded-lg shadow-lg w-full max-w-md justify-center flex flex-col">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Welcome <br />
          <b className="text-1xl font-light">
            Continue with one of the following options
          </b>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 w-80 text-white"
        >
          <label htmlFor="restaurantpicture" className="flex flex-col">
            restaurant Picture:
            <input
              onChange={handleChange}
              type="file"
              name="restaurantpicture"
              id="restaurantpicture"
              className="flex flex-col bg-amber-300"
            />
          </label>
          <label htmlFor="fullname" className="flex flex-col">
            Full Name:
            <input
              onChange={handleChange}
              type="text"
              name="fullname"
              id="fullname"
              className="mt-1 p-2 bg-inherit border border-b-gray-700 rounded"
            />
          </label>
          <label htmlFor="opentime" className="flex flex-col">
            open time:
            <input
              onChange={handleChange}
              type="time"
              name="opentime"
              id="opentime"
              className="mt-1 p-2 bg-inherit border border-b-gray-700 rounded"
            />
          </label>
          <label htmlFor="closetime" className="flex flex-col">
            close time:
            <input
              onChange={handleChange}
              type="time"
              name="closetime"
              id="closetime"
              className="mt-1 p-2 bg-inherit border border-b-gray-700 rounded"
            />
          </label>

          <button
            type="submit"
            className="mt-4 p-2 bg-blue-600 rounded-2xl h-[50px] w-[300px]"
          >
            Signup
          </button>
          <h1 className="text-center">OR</h1>
          <div className="h-[50px] w-[450px] bg-inherit">
            <p className=" text-white">
              By signing up, you agree to our{" "}
              <span className="text-blue-600">Terms of Service</span> and
              <br />
              <span className="text-blue-600">Privacy Policy</span>.
            </p>
          </div>
        </form>

        <button type="button" className="p-2 bg-blue-600 rounded-2xl mt-4 w-80">
          <Link to="/Restaurant" className="text-white">
            Login
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Restaurant;
