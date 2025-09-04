import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

// Dummy data
const reviews = [
  {
    name: "Sarah L.",
    text: "JetMeals is a lifesaver! Fast delivery and the food is always fresh.",
    img: "/customer1.jpg",
  },
  {
    name: "Mike D.",
    text: "Love the variety of restaurants. Ordering is so easy!",
    img: "/customer2.jpg",
  },
  {
    name: "Priya S.",
    text: "The best food delivery experience I've had. Highly recommend!",
    img: "/customer3.jpg",
  },
];

const faqs = [
  {
    question: "What is JetMeals?",
    answer:
      "JetMeals is a food delivery service that connects you with local restaurants to bring delicious meals right to your doorstep.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Browse restaurants, add meals to cart, and checkout easily through our website or app.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, digital wallets, and cash on delivery in select areas.",
  },
];

function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[700px] w-full flex justify-center items-center overflow-hidden bg-gradient-to-br from-red-100 to-blue-100">
        <video
          src="/People.mp4"
          className="absolute w-full h-full object-cover opacity-60"
          autoPlay
          loop
          muted
          playsInline
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 bg-black/40 rounded-xl p-10 shadow-2xl flex flex-col items-center"
        >
          <img src="/Logo.png" alt="JetMeals" className="h-20 mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            JetMeals: Fast, Fresh, Reliable
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-white text-center">
            Your trusted partner for meal delivery. Connect with your favorite
            local restaurants and enjoy delicious meals delivered straight to
            your doorstep.
          </p>
          <Link
            to="/OrderPage"
            className="bg-[#E81F1F] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-[#E81F1F] transition-all duration-300"
          >
            Order Now
          </Link>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-[#E81F1F] mb-10">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 kl gap-8 max-w-6xl mx-auto text-center">
          {[
            {
              title: "Browse",
              desc: "Explore top restaurants and cuisines near you.",
              img: "/ok.jpg " ,
            },
            {
              title: "Order",
              desc: "Add your favorite meals to cart and checkout securely.",
              img: "/.png",
            },
            {
              title: "Enjoy",
              desc: "Sit back, relax, and enjoy fresh meals delivered fast.",
              img: "/enjoy.png",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gradient-to-br from-rose-50 to-amber-100 rounded-xl shadow-lg p-6"
            >
              <img
                src={step.img}
                alt={step.title}
                className="h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-[#E81F1F] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-[#E81F1F] mb-10">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Egusi", img: "/Egusi1.jpeg" },
            { name: "FriedRice", img: "/FriedRice1.jpeg" },
            { name: " Grilled Ribs", img: "/Ribs.jpeg" },
            { name: "Desserts", img: "/desert.jpeg" },
          ].map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="h-32 w-full object-cover"
              />
              <div className="p-3 text-center font-bold text-[#E81F1F]">
                {cat.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
       <div className=" bg-yellow-50 h-[400px] flex justify-center items-center">
         <section className="h-[300px] w-[40%] bg-amber-700 bg-[url(chef.jpg)] rounded-3xl "></section>
          <section className="h-[300px] w-[40%] bg-white flex items-center justify-center p-6 rounded-lg shadow-lg">
  <div className="text-red-500 text-center">
    <h2 className="text-2xl font-bold mb-2">Meet Chef Amara</h2>
    <p className="text-sm  text-gray-400 leading-relaxed">
      Chef Amara is a passionate culinary artist who turned her love for
      cooking into a thriving food business. With the support of{" "}
      <span className="font-semibold">JetMeals Delivery Company</span>, she has
      been able to share her delicious creations with more people every day.
    </p>
    <p className="text-sm leading-relaxed text-gray-600 mt-2">
      Her vision is simple: bringing restaurant-quality meals to your doorstep—
      fresh, fast, and full of flavor. Through JetMeals, she continues to grow
      her brand and make good food accessible to everyone.
    </p>
  </div>
</section>

       </div>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#E81F1F]">
          What Our Customers Say
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          slidesPerView={1}
          className="max-w-xl mx-auto"
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center bg-gradient-to-r from-rose-50 to-amber-100 rounded-lg shadow-lg p-8"
              >
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mb-4 border-4 border-[#E81F1F] object-cover"
                />
                <p className="text-lg text-gray-700 italic mb-2 text-center">
                  "{review.text}"
                </p>
                <span className="font-bold text-[#E81F1F]">{review.name}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10">
          {[
            { label: "Restaurants", value: 120 },
            { label: "Orders Delivered", value: "50,000+" },
            { label: "Avg. Delivery Time", value: "25 min" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="bg-white rounded-xl shadow-lg px-10 py-8 flex flex-col items-center"
            >
              <span className="text-4xl font-extrabold text-[#E81F1F] mb-2">
                {stat.value}
              </span>
              <span className="text-lg font-semibold text-gray-700">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-rose-100">
        <h2 className="text-3xl font-bold text-center text-[#E81F1F] mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                className="w-full flex justify-between items-center py-5 px-6 focus:outline-none hover:bg-gray-100 transition"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                <span className="ml-4 text-gray-600 text-xl">
                  {openIndex === idx ? <IoChevronUp /> : <IoChevronDown />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 px-6 ${
                  openIndex === idx ? "max-h-40 py-2" : "max-h-0 py-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-rose-50 to-amber-100 rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#E81F1F] mb-4">
            Stay Updated!
          </h2>
          <p className="mb-6 text-gray-700 text-center">
            Subscribe to our newsletter for exclusive deals and updates.
          </p>
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[#E81F1F] text-white px-6 py-2 rounded-r-full font-bold hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-rose-200 to-amber-200 text-gray-800 py-8 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
          <div className="flex items-center gap-2">
            <img src="/Logo.png" alt="Jetmeals Logo" className="h-10" />
            <span className="font-bold text-lg">JetMeals</span>
          </div>
          <div className="flex gap-6">
            <a href="/" className="hover:text-[#E81F1F] transition">
              Home
            </a>
            <a href="/OrderPage" className="hover:text-[#E81F1F] transition">
              Order
            </a>
            <a href="#" className="hover:text-[#E81F1F] transition">
              Contact
            </a>
            <a href="#" className="hover:text-[#E81F1F] transition">
              FAQ
            </a>
          </div>
        </div>
        <div className="text-center text-sm mt-4 text-gray-700">
          &copy; {new Date().getFullYear()} JetMeals. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Home;
