"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    img: "/gallery/closeup-of-a-fluffy-chick-in-a-brooder.webp",
    width: 870,
    height: 580,
    heading: "Start Strong with Quality Chicks",
    subheading: "Trusted breeds. Reliable supply. Perfect for your poultry hustle.",
    cta: "Order Chicks",
  },
  {
    img: "/gallery/many-chicks-in-a-well-lit-brooder.webp",
    width: 1032,
    height: 518,
    heading: "Start Strong with Quality Chicks",
    subheading: "Well Vaccinated against Marek, coccidiosis, and other diseases.",
    cta: "Order Chicks",
  },
  {
    img: "/gallery/group-of-newborn-chicks.webp",
    width: 870,
    height: 580,
    heading: "Start Strong with Quality Chicks",
    subheading: "From as little as ksh 89 per chick.",
    cta: "Order Chicks",
  },
  {
    img: "/gallery/luen-duck-2.webp",
    width: 870,
    height: 580,
    heading: "Ducks & Geese for Every Farm",
    subheading: "Hardy, healthy waterfowl for meat and eggs.",
    cta: "Order Ducks & Geese",
  },
  {
    img: "/gallery/duck-chicks.webp",
    width: 870,
    height: 580,
    heading: "Duck Chicks – Strong Start, Great Growth",
    subheading: "Healthy ducklings for meat or eggs.",
    cta: "Order Ducklings Now",
  },
  {
    img: "/gallery/guinea-fow-lying-on-the-ground.webp",
    width: 1032,
    height: 580,
    heading: "Guinea Fowls: Exotic & Hardy",
    subheading: "Pearl, White, and Lavender breeds available.",
    cta: "Order Guinea Fowls",
  },
  {
    img: "/gallery/beautiful-male-turkey-in-a-field.webp",
    width: 870,
    height: 580,
    heading: "Turkeys: Big, Bold, and Beautiful",
    subheading: "Raise your own flock with our healthy turkeys.",
    cta: "Order Turkeys",
  },
  {
    img: "/gallery/white-hen-with-red-comb.webp",
    width: 600,
    height: 399,
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
         <Image
          src={slide.img}
          alt={slide.heading}
          width={slide.width}
          height={slide.height}
          priority={idx === 0}
          loading={idx === 0 ? "eager" : "lazy"}
          className="w-full h-full object-cover object-center"
        />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818]/90 via-[#181818]/60 to-transparent mt-10" />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[#00743F]/80 via-[#00743F]/60 to-transparent mt-10" /> */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 mt-60 sm:mt-70"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg animate-fade-in-up">{slide.heading}</h1>
            <p className="text-lg sm:text-2xl mb-6 font-medium drop-shadow animate-fade-in-up delay-100">{slide.subheading}</p>
            {/* redirect to whatsApp with  */}
            <a 
             href={`https://wa.me/254101108340?text=Hello%20Kibunja%20Farm%2C%20I%20would%20like%20to%20order%3A%20${encodeURIComponent(slide.heading)}`}
            target="_blank"
            className="bg-[#00743F] hover:bg-[#00744098] transition-colors px-8 py-3 rounded-full font-semibold text-lg shadow-lg flex items-center gap-2 animate-fade-in-up delay-200">
              {slide.cta}
            </a>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
