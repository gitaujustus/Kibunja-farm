import { FaRegCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const products = [
  {
    name: "Day Old Chick",
    price: 89,
    oldPrice: 110,
    badge: "KSh. 90",
    images: [
      {
        src: "/gallery/closeup-of-a-fluffy-chick-in-a-brooder.webp",
        width: 870,
        height: 580,
      },
      {
        src: "/gallery/many-chicks-in-a-well-lit-brooder.webp",
        width: 1024,
        height: 580,
      }
    ],
    desc: "Fully vaccinated, and mature in under 4 months, giving you a healthy, productive flock with fewer losses.",
    types: "Kienyeji improved F1 (Sasso, Kroiler, Kenbow)",
    freeDelivery: true,
  },
  {
    name: "2 weeks old chicks",
    price: 150,
    oldPrice: 180,
    badge: "KSh. 150",
    images: [
      {
        src: "/gallery/group-of-newborn-chicks.webp",
        width: 870,
        height: 580,
      },
      {
        src: "/gallery/3-weeks-chicks.webp",
        width: 720,
        height: 540,
      }
    ],
    desc: "Strong pullets for a head start in egg production.",
    types: "Kienyeji, Sasso, Kuroiler",
    freeDelivery: true,
  },
  {
    name: "Kienyeji Hens",
    price: 800,
    oldPrice: 950,
    badge: "KSh. 800",
    images: [
      {
        src: "/gallery/female-improved-kienyeji-hen.webp",
        width: 870,
        height: 580,
      },
      
            {
        src: "/gallery/kienyeji-chickens.webp",
        width: 772,
        height: 580,
      }
    ],
    desc: "Productive hens for your poultry business.",
    types: "Kienyeji, Improved Local",
    freeDelivery: true,
  },
  {
    name: "Kienyeji Cocks",
    price: 999,
    oldPrice: 1100,
    badge: "KSh. 900",
    images: [
      {
        src: "/gallery/white-hen-with-red-comb-2.webp",
        width: 326,
        height: 580,
      },
      {
        src: "/gallery/mature-kienyeji-chicken.webp",
        width: 895,
        height: 580,
      },
    ],
    desc: "Vigorous cocks for breeding and meat.",
    types: "Kuroiler, Improved Local",
    freeDelivery: true,
  },
  {
    name: "Muscovy Ducks (Kiengei)",
    price: 700,
    oldPrice: 850,
    badge: "KSh. 700",
    images: [
      {
        src: "/gallery/muscovy-duck-kiengei.webp",
        width: 1024,
        height: 681,
      },
    ],
    desc: "Hardy ducks for meat and eggs.",
    types: "Muscovy",
    freeDelivery: true,
  },
  {
    name: "Guinea Fowls",
    price: 2000,
    oldPrice: 2500,
    badge: "KSh. 600",
    images: [
      {
        src: "/gallery/guinea-fow-lying-on-the-ground.webp",
        width: 869,
        height: 580,
      },
      {
        src: "/gallery/exotic-guinea-fowl.webp",
        width: 1032,
        height: 580,
      }
    ],
    desc: "Exotic guinea fowls for your farm.",
    types: "Pearl, White, Lavender",
    freeDelivery: true,
  },
];

function ProductCard({ product, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };
  
  const hasMultipleImages = product.images.length > 1;
  const currentImage = product.images[currentImageIndex];
  
  return (
    <motion.div
      className="relative bg-white rounded-[16px] shadow-sm overflow-visible flex flex-col w-full mx-auto border border-gray-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Price badge - positioned at top-right corner */}
      <div className="absolute -top-6 -right-3 z-10">
        <div className="bg-white border-2 border-green-600 text-red-500 rounded-full w-14 h-14 flex items-center justify-center text-xs font-bold shadow-md">
          -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
        </div>
      </div>
      
      {/* Product image with navigation */}
      <div className="relative h-[200px] overflow-hidden rounded-t-[16px] group">
        <Image 
          src={currentImage.src} 
          alt={product.name} 
          height={currentImage.height}
          width={currentImage.width}
          className="w-full h-full object-cover transition-opacity duration-300" 
          loading="lazy" 
        />
        
        {/* Image navigation buttons - only show if multiple images */}
        {hasMultipleImages && (
          <div className="absolute bottom-2 right-2 flex gap-1 opacity-90 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={prevImage}
              className="bg-black/70 hover:bg-black/80 text-white p-1.5 rounded-full backdrop-blur-sm transition-all duration-200 hover:cursor-pointer"
              aria-label="Previous image"
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              onClick={nextImage}
              className="bg-black/70 hover:bg-black/80 text-white p-1.5 rounded-full backdrop-blur-sm transition-all duration-200 hover:cursor-pointer"
              aria-label="Next image"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        )}
        
        {/* Image indicators - only show if multiple images */}
        {hasMultipleImages && (
          <div className="absolute bottom-2 left-2 flex gap-1">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  idx === currentImageIndex 
                    ? 'bg-white' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
      
      {/* White content section */}
      <div className="bg-white p-4 flex-1 flex flex-col rounded-b-[16px]">
        {/* Product name */}
        <h3 className="font-semibold text-base text-center mb-2 text-gray-900 leading-tight">
          {product.name}
        </h3>
        
        {/* Price section */}
        <div className="mb-3">
          <div className="flex items-center justify-between bg-[#F0FDF4] p-2 rounded-lg">
            <div className="flex items-center gap-1.5">
              <span className="text-red-500 font-bold text-lg">KSh. {product.price}</span>
              <span className="text-xs text-gray-400 line-through">KSh. {product.oldPrice}</span>
            </div>
            <div className="text-xs text-gray-500">Free delivery for more birds</div>
          </div>
        </div>
        
        {/* Features with checkmarks */}
        <div className="space-y-1.5 mb-4 text-xs text-gray-700">
          <div className="flex items-start gap-2">
            <FaRegCheckCircle className="text-teal-500 mt-0.5 flex-shrink-0 text-sm" />
            <span className="leading-tight">{product.desc}</span>
          </div>
          <div className="flex items-start gap-2">
            <FaRegCheckCircle className="text-teal-500 mt-0.5 flex-shrink-0 text-sm" />
            <span className="leading-tight">Types: {product.types}</span>
          </div>
        </div>
        
        {/* Order button */}
        <div className="mt-auto">
          <a
            href={`https://wa.me/254101108340?text=Hello%20Kibunja%20Farm%2C%20I%20would%20like%20to%20order%3A%20${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FAB732] hover:bg-[#FAB732]/80 text-[#104269] text-center py-2.5 rounded-md font-semibold transition-colors w-full block text-sm"
          >
            Order Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductOverview() {
  return (
    <section className="py-12 px-4 bg-[#F0FDF4]" id="chicks">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#00743F]">Our Poultry Products</h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {products.map((product, index) => (
          <ProductCard key={product.name} product={product} index={index} />
        ))}
        {/* See more link */}

        <Link href="/products" className="bg-[#00743F] hover:opacity-90 py-3 px-4 rounded-[10px] w-fit ">See More</Link>

      </motion.div>
    </section>
  );
}