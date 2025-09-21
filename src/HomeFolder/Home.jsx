import React, { useState, useEffect, useRef } from "react";
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
    img: "/woman.jpg",
  },
  {
    name: "Mike D.",
    text: "Love the variety of restaurants. Ordering is so easy!",
    img: "/man2.jpg",
  },
  {
    name: "Priya S.",
    text: "The best food delivery experience I've had. Highly recommend!",
    img: "/man.jpg",
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

  // --- Count-up stats ---
  const stats = [
    { label: "Restaurants", value: 120 },
    { label: "Orders Delivered", value: 50000 },
    { label: "Avg. Delivery Time", value: 25 },
  ];
  const [counts, setCounts] = useState(stats.map(() => 0));
  const statRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          stats.forEach((stat, i) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / end));
            const counter = setInterval(() => {
              start += 1;
              setCounts((prev) => {
                const updated = [...prev];
                updated[i] = start;
                return updated;
              });
              if (start === end) clearInterval(counter);
            }, stepTime);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (statRef.current) observer.observe(statRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[700px] w-full flex justify-center items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <video
          src="/People.mp4"
          className="absolute w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          playsInline
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 bg-black/50 rounded-xl p-10 shadow-2xl flex flex-col items-center"
        >
          <img src="/Logo.png" alt="JetMeals" className="h-20 mb-4" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-red-500 drop-shadow-lg">
            JetMeals: Fast, Fresh, Reliable
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-200 text-center">
            Your trusted partner for meal delivery. Connect with your favorite
            local restaurants and enjoy delicious meals delivered straight to
            your doorstep.
          </p>
          <Link
            to="/OrderPage"
            className="bg-amber-500 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-white hover:text-amber-600 transition-all duration-300"
          >
            Order Now
          </Link>
        </motion.div>
      </section>

      {/* How It Works */}
      <h1 className="text-red-500 text-center text-2xl font-bold mt-12">
        How It Works
      </h1>
      <section className="py-16 bg-gray-50">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center px-4">
          {[
            {
              title: "Browse",
              desc: "Explore top restaurants and cuisines near you.",
              img: "/ok.jpg",
            },
            {
              title: "Order",
              desc: "Add your favorite meals to cart and checkout securely.",
              img: "/order.jpg",
            },
            {
              title: "Enjoy",
              desc: "Sit back, relax, and enjoy fresh meals delivered fast.",
              img: "/eating.jpg",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg p-8 flex flex-col items-center"
            >
              <img
                src={step.img}
                alt={step.title}
                className="h-50 w-60 object-cover rounded-2xl shadow-md mb-6"
              />
              <h3 className="text-lg font-semibold text-red-500 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-700 font-medium max-w-xs">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Categories */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-10">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Egusi", img: "/Egusi1.jpeg" },
            { name: "FriedRice", img: "/FriedRice1.jpeg" },
            { name: "Grilled Ribs", img: "/Ribs.jpeg" },
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
                className="h-50 w-full object-cover"
              />
              <div className="p-3 text-center font-bold text-red-500">
                {cat.name}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chef Showcase Slider */}
      <section className="py-16 bg-gray-50">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          className="max-w-6xl mx-auto"
        >
          {[
            {
              img: "chef.jpg",
              name: "Chef Amara",
              desc: "Chef Amara is a passionate culinary artist who turned her love for cooking into a thriving food business.",
              extra: "Through JetMeals, she now reaches thousands of new customers every week.",
            },
            {
              img: "partner.png",
              name: "Chef Daniel",
              desc: "Known for his unique take on continental dishes, Chef Daniel blends tradition with modern creativity.",
              extra: "By partnering with JetMeals, he connects with food lovers across the city.",
            },
            {
              img: "chef2.jpg",
              name: "Chef Kelechi",
              desc: "Chef Kelechi specializes in Nigerian cuisine with a modern twist.",
              extra: "With JetMeals, families across the city now enjoy his authentic flavors.",
            },
            {
              img: "chef4.jpg",
              name: "Chef Aisha",
              desc: "Chef Aisha creates rich desserts and continental dishes loved by many.",
              extra: "Thanks to JetMeals, her cakes and pastries now reach customers for birthdays and weddings.",
            },
          ].map((chef, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <section
                  className={`h-[250px] md:h-[400px] w-full md:w-[40%] bg-[url('${chef.img}')] bg-cover bg-center rounded-3xl shadow-lg`}
                ></section>
                <section className="h-auto md:h-[400px] w-full md:w-[40%] bg-white flex items-center justify-center p-6 rounded-lg shadow-lg mt-6 md:mt-0">
                  <div className="text-red-500 text-center">
                    <h2 className="text-2xl font-bold mb-2">{chef.name}</h2>
                    <p className="text-sm text-gray-800 leading-relaxed mb-3">
                      {chef.desc}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {chef.extra}
                    </p>
                  </div>
                </section>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-red-500">
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
                className="flex flex-col items-center bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg p-8"
              >
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mb-4 border-4 border-red-500 object-cover"
                />
                <p className="text-lg text-black italic mb-2 text-center">
                  "{review.text}"
                </p>
                <span className="font-bold text-black">{review.name}</span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-100" ref={statRef}>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="bg-white rounded-xl shadow-lg px-10 py-8 flex flex-col items-center"
            >
              <span className="text-4xl font-extrabold text-red-500 mb-2">
                {idx === 1
                  ? counts[idx].toLocaleString() + "+"
                  : idx === 2
                  ? counts[idx] + " min"
                  : counts[idx]}
              </span>
              <span className="text-lg font-semibold text-gray-700">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200">
        <h2 className="text-3xl font-bold text-center text-red-500 mb-8">
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
        <div className="max-w-xl mx-auto bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl shadow-lg p-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Stay Updated!</h2>
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
              className="bg-amber-500 text-white px-6 py-2 rounded-r-full font-bold hover:bg-amber-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-8 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4">
          <div className="flex items-center gap-2">
            <img src="/Logo.png" alt="Jetmeals Logo" className="h-10" />
            <span className="font-bold text-lg text-red-500">JetMeals</span>
          </div>
          <div className="flex gap-6 font-bold">
            <a href="/" className="hover:text-amber-500 transition">
              Home
            </a>
            <a href="/OrderPage" className="hover:text-amber-500 transition">
              Order
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              Contact
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              FAQ
            </a>
          </div>
        </div>
        <div className="text-center font-bold text-sm mt-4 text-gray-900">
          &copy; {new Date().getFullYear()} JetMeals. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Home;
