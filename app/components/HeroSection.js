"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1589923188651-268a9765e432?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Start Strong with Quality Chicks",
    subheading: "Trusted breeds. Reliable supply. Perfect for your poultry hustle.",
    cta: "Order Chicks",
  },
  {
    img: "https://images.unsplash.com/photo-1613684574327-dc32b58b2fca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Start Strong with Quality Chicks",
    subheading: "From as little as ksh 89 per chick.",
    cta: "Order Chicks",
  },
  {
    img: "https://images.unsplash.com/photo-1534627760265-69713192ade4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Ducks & Geese for Every Farm",
    subheading: "Hardy, healthy waterfowl for meat and eggs.",
    cta: "Order Ducks & Geese",
  },
  {
    img: "https://images.unsplash.com/photo-1442689859438-97407280183f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Duck Chicks – Strong Start, Great Growth",
    subheading: "Healthy ducklings for meat or eggs.",
    cta: "Order Ducklings Now",
  },
  {
    img: "https://images.unsplash.com/photo-1647641639865-b509748cad4f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Guinea Fowls: Exotic & Hardy",
    subheading: "Pearl, White, and Lavender breeds available.",
    cta: "Order Guinea Fowls",
  },
  {
    img: "https://images.unsplash.com/photo-1583147474478-f8920da507ca?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Guinea Fowls: Exotic & Hardy",
    subheading: "Pearl, White, and Lavender breeds available.",
    cta: "Order Guinea Fowls",
  },
  {
    img: "https://images.unsplash.com/photo-1560011961-4ab41261de01?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "Turkeys: Big, Bold, and Beautiful",
    subheading: "Raise your own flock with our healthy turkeys.",
    cta: "Order Turkeys",
  },
  {
    img: "https://images.pexels.com/photos/375510/pexels-photo-375510.jpeg?auto=compress&w=600&q=80",
    heading: "Mature Hens for Your Farm",
    subheading: "Productive, healthy hens for eggs and meat.",
    cta: "Order Hens",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="relative w-full h-[70vh] sm:h-[90vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img
            src={slide.img}
            alt={slide.heading}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818]/90 via-[#181818]/60 to-transparent mt-10" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[#00743F]/80 via-[#00743F]/60 to-transparent mt-10" /> */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 mt-60 sm:mt-70"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg animate-fade-in-up">{slide.heading}</h1>
            <p className="text-lg sm:text-2xl mb-6 font-medium drop-shadow animate-fade-in-up delay-100">{slide.subheading}</p>
            <a href="#reach-us" className="bg-[#17406D] hover:bg-[#005c32] transition-colors px-8 py-3 rounded-full font-semibold text-lg shadow-lg flex items-center gap-2 animate-fade-in-up delay-200">
              {slide.cta}
            </a>
          </motion.div>
        </div>
      ))}
    </section>
  );
}

// Add the following to your globals.css for fade-in-up animation:
// @keyframes fade-in-up {
//   0% { opacity: 0; transform: translateY(20px); }
//   100% { opacity: 1; transform: translateY(0); }
// }
// .animate-fade-in-up { animation: fade-in-up 1s both; }
// .delay-100 { animation-delay: 0.1s; }
// .delay-200 { animation-delay: 0.2s; } 

