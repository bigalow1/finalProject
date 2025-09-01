import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { useState } from "react";

// Dummy data for reviews and restaurants
const reviews = [
  {
    name: "Sarah L.",
    text: "Jetmeals is a lifesaver! Fast delivery and the food is always fresh.",
    img: "customer1.jpg",
  },
  {
    name: "Mike D.",
    text: "Love the variety of restaurants. Ordering is so easy!",
    img: "customer2.jpg",
  },
  {
    name: "Priya S.",
    text: "The best food delivery experience I've had. Highly recommend!",
    img: "customer3.jpg",
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
      "You can place an order through our website or mobile app. Simply browse the available restaurants, select your items, and proceed to checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards, digital wallets, and cash on delivery in select areas.",
  },
  {
    question: "How can I track my order?",
    answer:
      "You can track your order in real-time through our website or app. Once your order is confirmed, you will receive a tracking link via SMS or email.",
  },
];

function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[700px] w-full flex justify-center items-center overflow-hidden bg-gradient-to-br from-red-100 to-blue-100 mt-21">
        <video
          src="/People.mp4"
          className="absolute w-full h-full object-cover bg-blend-darken opacity-60"
          autoPlay
          loop
          muted
          playsInline
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 bg-inherit bg-opacity-60 rounded-xl p-10 shadow-2xl flex flex-col items-center"
        >
          <img
            src="/Logo.png"
            alt="Jetmeals Logo"
            className="h-20 mb-4 animate-bounce"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
            Jetmeals: Fast, Fresh, Reliable
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto text-white text-center">
            <i>
              Your trusted partner for meal delivery. Connect with your favorite
              local restaurants and enjoy delicious meals delivered straight to
              your doorstep.
            </i>
          </p>
          <Link
            to="/OrderPage"
            className="bg-[#E81F1F] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-[#E81F1F] transition-all duration-300"
          >
            Order Now
          </Link>
        </motion.div>
      </section>
      <div className="h-[400px] bg-red-400">
        
           





           
      </div>

      {/* Customer Reviews Slideshow */}
      <section className="py-16 bg-gray-100 h-[400px]">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#E81F1F]">
          What Our Customers Say
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
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
                className="flex flex-col items-center bg-gradient-to-r from-rose-50 via-amber-50 to-rose-100 rounded-lg shadow-lg p-8"
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
      

      {/* Animated Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10">
          {[
            { label: "Restaurants", value: 120 },
            { label: "Orders Delivered", value: 50000 },
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

      {/* Featured Restaurants Carousel */}
      <section className="py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#E81F1F]">
          Featured Restaurants
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-5xl mx-auto"
        >
          {[
            { name: "Sushi Palace", img: "/desert.jpeg" },
            { name: "Burger Hub", img: "/FriedRice1.jpeg" },
            { name: "Pizza Express", img: "/Ribs.jpeg" },
            { name: "Vegan Delight", img: "/jollof.jpeg" },
          ].map((rest, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-rose-50 to-amber-100 rounded-xl shadow-lg p-6 flex flex-col items-center"
              >
                <img
                  src={rest.img}
                  alt={rest.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-[#E81F1F]"
                />
                <span className="font-bold text-lg text-[#E81F1F]">
                  {rest.name}
                </span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="h-[500px] bg-gradient-to-r from-amber-100 to-rose-100 ">
        <div className="h-[100px] bg-white bg-blend-darken flex justify-center items-center">
          <h1 className="text-3xl font-bold text-center mb-8 text-[#E81F1F]">
            <i>FREQUENTLY ASKED QUESTIONS</i>
          </h1>
        </div>
        <div className="bg-gradient-to-r from-black-200 to-red-500 bg-blend-darken rounded-lg max-w-2xl mx-auto mt-8 shadow-lg">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-white/20">
              <button
                className="w-full flex justify-between items-center py-6 px-6 focus:outline-none transition-colors duration-300 hover:bg-black/20"
                onClick={() => toggleFAQ(idx)}
              >
                <span className="text-xl text-white font-semibold text-left">
                  <i>{faq.question}</i>
                </span>
                <span className="ml-4 text-white text-2xl">
                  {openIndex === idx ? <IoChevronUp /> : <IoChevronDown />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 px-6 ${
                  openIndex === idx ? "max-h-40 py-2" : "max-h-0 py-0"
                }`}
                style={{}}
              >
                <p className="text-lg text-white/90">
                  <i>{faq.answer}</i>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="h-[200px] bg-white">
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
      <footer className="bg-gradient-to-br from-rose-200 to-amber-200 text-white py-8 mt-10">
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
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#E81F1F] transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-[#E81F1F] transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#E81F1F] transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="text-center text-sm mt-4 text-white/70">
          &copy; {new Date().getFullYear()} JetMeals. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Home;
