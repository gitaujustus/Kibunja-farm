// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import productsData from "@/lib/products.json";
// import Image from "next/image";

// export default function ProductsPage() {
//   const [selectedMain, setSelectedMain] = useState(0); // 0 = All, 1 = Chicken, last = Eggs
//   const [data, setData] = useState(null);
//   const fadedGreen = "bg-[#E6F4EA] text-[#104269]";
//   const activeGreen = "bg-[#00743F] text-white";

//   useEffect(() => {
//     // Set the data from imported JSON
//     setData(productsData);
//   }, []);

//   // Return loading state if data is not ready
//   if (!data) {
//     return (
//       <main className="px-0">
//         <div className="flex justify-center items-center h-64">
//           <div className="text-lg text-gray-600">Loading products...</div>
//         </div>
//       </main>
//     );
//   }

//   const { chickenSections, eggsSection, otherCategories } = data;

//   const mainTabs = [
//     { name: "All" },
//     { name: "Chicken" },
//     ...otherCategories.map(cat => ({ name: cat.name })),
//     { name: "Eggs" },
//   ];

//   // For 'All' tab, group all categories (chicken sections, eggs section, and other categories)
//   const allGroups = [
//     ...chickenSections,
//     ...otherCategories,
//     eggsSection,
//   ];

//   // Products to show
//   let groupsToShow = [];
//   if (selectedMain === 0) {
//     groupsToShow = allGroups;
//   } else if (selectedMain === 1) {
//     groupsToShow = chickenSections;
//   } else if (selectedMain === mainTabs.length - 1) {
//     groupsToShow = [eggsSection];
//   } else {
//     groupsToShow = [otherCategories[selectedMain - 2]];
//   }

//   return (
//     <main className="px-0">
//       {/* Hero section */}
//       <section className="mb-8 px-4 bg-[#F0FDF4] py-20">
//         <div className="px-4 text-center">
//           <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#00743F]">Our Poultry Products</h1>
//           <p className="text-gray-700 max-w-2xl mx-auto">Browse our full range of quality poultry and farm products. Select a category to see available stock, prices, and details for each type.</p>
//         </div>
//       </section>
      
//       {/* Main Tabs */}
//       <div className="flex flex-wrap justify-center gap-4 px-4">
//         {mainTabs.map((tab, idx) => (
//           <button
//             key={tab.name}
//             className={`px-7 py-2 rounded-full border font-medium transition-all duration-200 focus:outline-none text-base ${selectedMain === idx ? activeGreen + ' border-[#00743F] shadow-lg scale-105' : fadedGreen + ' border-transparent opacity-90 hover:opacity-100 hover:scale-105'}`}
//             onClick={() => { setSelectedMain(idx); }}
//           >
//             {tab.name}
//           </button>
//         ))}
//       </div>

//       {/* Products grid, grouped by section */}
//       <section className="mb-12">
//         {groupsToShow.map((group, idx) => (
//           <div key={group.name} className={`mb-0 w-full ${idx % 2 === 0 ? 'bg-white' : 'bg-[#E6F4EA]'} py-14`}> 
//             <div className="px-5 md:px-20">
//               <h2 className="text-3xl font-extrabold mb-8 text-[#104269] text-center tracking-tight">{group.name}</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {group.products.map((p, i) => (
//                   <motion.div 
//                     key={p.name + i} 
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: i * 0.1 }}
//                     viewport={{ once: false }}
//                     className="bg-white rounded-2xl shadow-md p-2 md:p-4 flex flex-col items-center text-center border border-gray-100"
//                   >
//                     <Image 
//                     src={p.img} alt={p.name}
//                     width={p.width}
//                     height={p.height}
//                     loading="lazy" 
//                     className="w-full h-40 object-cover rounded-xl mb-4" />
//                     <div className="font-bold text-lg mb-1 text-[#00743F]">{p.name}</div>
//                     <div className="text-[#E53935] font-semibold text-base mb-1">KSh. {p.price}</div>
//                     <div className="text-xs mb-2">
//                       <span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 font-medium">{p.stock}</span>
//                     </div>
//                     <div className="text-gray-600 text-sm mb-2">{p.desc}</div>
//                     <button
//                       className="mt-auto bg-[#FFC107] hover:bg-[#ffb300] text-[#222] text-center py-2 rounded font-bold transition-colors w-full block text-base"
//                       onClick={() => {
//                         const message = `Hello Kibunja Farm, I would like to order: ${p.name}`;
//                         window.open(`https://wa.me/254101108340?text=${encodeURIComponent(message)}`, '_blank');
//                       }}
//                     >
//                       Order Now
//                     </button>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// }



"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import productsData from "@/lib/products.json";
import Image from "next/image";

function ProductCard({ product, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const nextImage = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };
  
  const prevImage = () => {
    if (product.images && product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };
  
  // Handle both old format (single img) and new format (images array)
  const images = product.images || [{ src: product.img, width: product.width, height: product.height }];
  const hasMultipleImages = images.length > 1;
  const currentImage = images[currentImageIndex];
  
  return (
    <motion.div 
      key={product.name + index} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      className="bg-white rounded-2xl shadow-md p-2 md:p-4 flex flex-col items-center text-center border border-gray-100"
    >
      {/* Product image with navigation */}
      <div className="relative w-full h-40 mb-4 group">
        <Image 
          src={currentImage.src || currentImage} 
          alt={product.name}
          width={currentImage.width || 400}
          height={currentImage.height || 300}
          loading="lazy" 
          className="w-full h-full object-cover rounded-xl transition-opacity duration-300" 
        />
        
        {/* Image navigation buttons - only show if multiple images */}
        {hasMultipleImages && (
          <div className="absolute bottom-2 right-2 flex gap-1 opacity-90 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={prevImage}
              className="bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full backdrop-blur-sm transition-all duration-200"
              aria-label="Previous image"
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              onClick={nextImage}
              className="bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full backdrop-blur-sm transition-all duration-200"
              aria-label="Next image"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        )}
        
        {/* Image indicators - only show if multiple images */}
        {hasMultipleImages && (
          <div className="absolute bottom-2 left-2 flex gap-1">
            {images.map((_, idx) => (
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
      
      <div className="font-bold text-lg mb-1 text-[#00743F]">{product.name}</div>
      <div className="text-[#E53935] font-semibold text-base mb-1">KSh. {product.price}</div>
      <div className="text-xs mb-2">
        <span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 font-medium">{product.stock}</span>
      </div>
      <div className="text-gray-600 text-sm mb-2">{product.desc}</div>
      <button
        className="mt-auto bg-[#FFC107] hover:bg-[#ffb300] text-[#222] text-center py-2 rounded font-bold transition-colors w-full block text-base"
        onClick={() => {
          const message = `Hello Kibunja Farm, I would like to order: ${product.name}`;
          window.open(`https://wa.me/254101108340?text=${encodeURIComponent(message)}`, '_blank');
        }}
      >
        Order Now
      </button>
    </motion.div>
  );
}

export default function ProductsPage() {
  const [selectedMain, setSelectedMain] = useState(0); // 0 = All, 1 = Chicken, last = Eggs
  const [data, setData] = useState(null);
  const fadedGreen = "bg-[#E6F4EA] text-[#104269]";
  const activeGreen = "bg-[#00743F] text-white";

  useEffect(() => {
    // Set the data from imported JSON
    setData(productsData);
  }, []);

  // Return loading state if data is not ready
  if (!data) {
    return (
      <main className="px-0">
      <section className="mb-8 px-4 bg-[#F0FDF4] py-20">
        <div className="px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#00743F]">Our Poultry Products</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">Browse our full range of quality poultry and farm products.</p>
        </div>
      </section>
      <div className="flex justify-center items-center h-64">
        <div className="text-lg text-gray-600">Loading products...</div>
      </div>
    </main>
    );
  }
  

  const { chickenSections, eggsSection, otherCategories } = data;

  const mainTabs = [
    { name: "All" },
    { name: "Chicken" },
    ...otherCategories.map(cat => ({ name: cat.name })),
    { name: "Eggs" },
  ];

  // For 'All' tab, group all categories (chicken sections, eggs section, and other categories)
  const allGroups = [
    ...chickenSections,
    ...otherCategories,
    eggsSection,
  ];


  // Products to show
let groupsToShow = [];
switch (selectedMain) {
  case 0:
    groupsToShow = allGroups;
    break;
  case 1:
    groupsToShow = chickenSections;
    break;
  case mainTabs.length - 1:
    groupsToShow = [eggsSection];
    break;
  default:
    groupsToShow = [otherCategories[selectedMain - 2]];
}

  return (
    <main className="px-0">
      {/* Hero section */}
      <section className="mb-8 px-4 bg-[#F0FDF4] py-20">
        <div className="px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#00743F]">Our Poultry Products</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">Browse our full range of quality poultry and farm products. Select a category to see available stock, prices, and details for each type.</p>
        </div>
      </section>
      
      {/* Main Tabs */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {mainTabs.map((tab, idx) => (
          <button
            key={tab.name}
            className={`px-7 py-2 rounded-full border font-medium transition-all duration-200 focus:outline-none text-base ${selectedMain === idx ? activeGreen + ' border-[#00743F] shadow-lg scale-105' : fadedGreen + ' border-transparent opacity-90 hover:opacity-100 hover:scale-105'}`}
            onClick={() => { setSelectedMain(idx); }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Products grid, grouped by section */}
      <section className="mb-12">
        {groupsToShow.map((group, idx) => (
          <div key={group.name} className={`mb-0 w-full ${idx % 2 === 0 ? 'bg-white' : 'bg-[#E6F4EA]'} py-14`}> 
            <div className="px-5 md:px-20">
              <h2 className="text-3xl font-extrabold mb-8 text-[#104269] text-center tracking-tight">{group.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.products.map((product, i) => (
                  <ProductCard key={product.name + i} product={product} index={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}