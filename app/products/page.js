// "use client";
// import { useState } from "react";

// const chickenSections = [
//   {
//     name: "Chicks",
//     products: [
//       {
//         name: "Day-Old Chick (F1 Improved Kienyeji)",
//         img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
//         price: 89,
//         stock: "In Stock",
//         desc: "Healthy, vaccinated day-old chicks. Types: Sasso, Kuroiler, Kenbro, Rainbow Rooster.",
//       },
//       {
//         name: "One-Week-Old Chick (F1 Improved Kienyeji)",
//         img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
//         price: 120,
//         stock: "In Stock",
//         desc: "Stronger, vaccinated chicks for a head start. Types: Sasso, Kuroiler, Kenbro, Rainbow Rooster.",
//       },
//       {
//         name: "One-Month-Old Pullet (F1 Improved Kienyeji)",
//         img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyig7t1TUkEoQeZH5Bgatx0xSvAQGe2G5o8Q&s",
//         price: 150,
//         stock: "In Stock",
//         desc: "Ready-to-lay pullets. Types: Sasso, Kuroiler, Kenbro, Rainbow Rooster.",
//       },
//     ],
//   },
//   {
//     name: "Kienyeji Chicken (Mature)",
//     products: [
//       {
//         name: "Mature Kienyeji Chicken",
//         img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
//         price: 900,
//         stock: "In Stock",
//         desc: "Traditional kienyeji chicken, mature and ready for your table. Price range: 600-1200.",
//       },
//       {
//         name: "Brown Kienyeji Chicken",
//         img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
//         price: 950,
//         stock: "In Stock",
//         desc: "Brown kienyeji chicken, great for meat and eggs.",
//       },
//       {
//         name: "White Kienyeji Chicken",
//         img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
//         price: 1000,
//         stock: "In Stock",
//         desc: "White kienyeji chicken, hardy and productive.",
//       },
//     ],
//   },
//   {
//     name: "Improved Kienyeji Chicken (Mature)",
//     products: [
//       {
//         name: "Improved Kienyeji Chicken (Sasso)",
//         img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
//         price: 1100,
//         stock: "In Stock",
//         desc: "Sasso breed, fast-growing and productive.",
//       },
//       {
//         name: "Improved Kienyeji Chicken (Kuroiler)",
//         img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
//         price: 1200,
//         stock: "In Stock",
//         desc: "Kuroiler breed, excellent for meat and eggs.",
//       },
//       {
//         name: "Improved Kienyeji Chicken (Kenbro)",
//         img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
//         price: 1300,
//         stock: "In Stock",
//         desc: "Kenbro breed, hardy and high-yielding.",
//       },
//     ],
//   },
// ];

// const eggsSection = {
//   name: "Eggs",
//   products: [
//     {
//       name: "Kienyeji Eggs (Tray)",
//       img: "https://images.pexels.com/photos/162712/eggs-egg-carton-chicken-eggs-food-162712.jpeg?auto=compress&w=400&q=80",
//       price: 700,
//       stock: "In Stock",
//       desc: "Fresh kienyeji eggs, sold per tray (30 eggs). Healthy, natural, and delicious.",
//     },
//     {
//       name: "Layers Eggs (Tray)",
//       img: "https://cdn.pixabay.com/photo/2017/01/20/15/06/egg-1995056_1280.jpg",
//       price: 450,
//       stock: "In Stock",
//       desc: "Farm-fresh layers eggs, sold per tray (30 eggs). High-yield and nutritious.",
//     },
//     {
//       name: "Guinea Fowl Egg (Kanga)",
//       img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/egg-1238433_1280.jpg",
//       price: 100,
//       stock: "In Stock",
//       desc: "Exotic guinea fowl eggs (Kanga), sold per egg. Rich in nutrients and flavor.",
//     },
//   ],
// };

// const otherCategories = [
//   {
//     name: "Ducks",
//     products: [
//       {
//         name: "Muscovy Duck",
//         img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
//         price: 700,
//         stock: "In Stock",
//         desc: "Hardy Muscovy ducks for meat and eggs.",
//       },
//       {
//         name: "Luen Duck",
//         img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
//         price: 800,
//         stock: "In Stock",
//         desc: "Luen ducks, great for backyard farming.",
//       },
//       {
//         name: "Pekin Duck",
//         img: "https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=400&q=80",
//         price: 850,
//         stock: "In Stock",
//         desc: "Popular Pekin ducks, excellent for meat.",
//       },
//     ],
//   },
//   {
//     name: "Turkeys",
//     products: [
//       {
//         name: "Male Turkey",
//         img: "https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=400&q=80",
//         price: 4000,
//         stock: "In Stock",
//         desc: "Large, healthy male turkeys for breeding and meat.",
//       },
//       {
//         name: "Female Turkey",
//         img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
//         price: 3500,
//         stock: "In Stock",
//         desc: "Productive female turkeys for eggs and meat.",
//       },
//       {
//         name: "Turkey Chick",
//         img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
//         price: 400,
//         stock: "In Stock",
//         desc: "Healthy turkey chicks. Price varies by size.",
//       },
//     ],
//   },
//   {
//     name: "Geese",
//     products: [
//       {
//         name: "Goose",
//         img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
//         price: 2800,
//         stock: "In Stock",
//         desc: "Strong geese for meat and eggs. Price range: 2500-3000.",
//       },
//       {
//         name: "White Goose",
//         img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
//         price: 2900,
//         stock: "In Stock",
//         desc: "White geese, great for eggs and meat.",
//       },
//       {
//         name: "Grey Goose",
//         img: "https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=400&q=80",
//         price: 3000,
//         stock: "In Stock",
//         desc: "Grey geese, hardy and productive.",
//       },
//     ],
//   },
//   {
//     name: "Guinea Fowls",
//     products: [
//       {
//         name: "Guinea Fowl",
//         img: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&w=400&q=80",
//         price: 1800,
//         stock: "In Stock",
//         desc: "Exotic guinea fowls for your farm. Price range: 1500-2000.",
//       },
//       {
//         name: "White Guinea Fowl",
//         img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
//         price: 1900,
//         stock: "In Stock",
//         desc: "White guinea fowls, rare and beautiful.",
//       },
//       {
//         name: "Pearl Guinea Fowl",
//         img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
//         price: 2000,
//         stock: "In Stock",
//         desc: "Pearl guinea fowls, hardy and productive.",
//       },
//     ],
//   },
// ];

// const mainTabs = [
//   { name: "All" },
//   { name: "Chicken" },
//   ...otherCategories.map(cat => ({ name: cat.name })),
//   { name: "Eggs" },
// ];

// // For 'All' tab, group all categories (chicken sections, eggs section, and other categories)
// const allGroups = [
//   ...chickenSections,
//   ...otherCategories,
//   eggsSection,
// ];

// // 1. Import gallery images at the top
// const galleryImages = [
//   "https://images.unsplash.com/photo-1589923188651-268a9765e432?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1613684574327-dc32b58b2fca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1694854038360-56b29a16fb0c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1442689859438-97407280183f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.pexels.com/photos/375510/pexels-photo-375510.jpeg?auto=compress&w=600&q=80",
//   "https://plus.unsplash.com/premium_photo-1664527009188-a8f5e05589fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1578051696754-4652a8f67882?q=80&w=326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1678989912659-5a06072c5955?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1465153690352-10c1b29577f8?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1534627760265-69713192ade4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1564149567196-0c1d8bb7148f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1702238151745-f721a21a27ab?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1668268397144-5bb0d5d2a8bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://plus.unsplash.com/premium_photo-1669754166793-db090505baf1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1461037506617-211749beac60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1560011961-4ab41261de01?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1583147474478-f8920da507ca?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1583147386746-3ba0c0799d79?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1647641639865-b509748cad4f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// ];

// export default function ProductsPage() {
//   const [selectedMain, setSelectedMain] = useState(0); // 0 = All, 1 = Chicken, last = Eggs
//   const fadedGreen = "bg-[#E6F4EA] text-[#104269]";
//   const activeGreen = "bg-[#00743F] text-white";

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
//     <main className="  px-0 ">
//       {/* Hero section */}
//       <section className="mb-8 px-4 bg-[#F0FDF4] py-20">
//         <div className="  px-4 text-center ">
//           <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#00743F]">Our Poultry Products</h1>
//           <p className="text-gray-700 max-w-2xl mx-auto">Browse our full range of quality poultry and farm products. Select a category to see available stock, prices, and details for each type.</p>
//         </div>
//       </section>
//       {/* Main Tabs */}
//       <div className="flex flex-wrap justify-center gap-4  px-4">
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
//       <section className=" mb-12">
//         {(() => {
//           let globalProductIndex = 0;
//           return groupsToShow.map((group, idx) => (
//             <div key={group.name} className={`mb-0 w-full ${idx % 2 === 0 ? 'bg-white' : 'bg-[#E6F4EA]'} py-14 `}> 
//               <div className=" px-5 md:px-20">
//                 <h2 className="text-3xl font-extrabold mb-8 text-[#104269] text-center tracking-tight">{group.name}</h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {group.products.map((p, i) => {
//                     const imgIdx = globalProductIndex % galleryImages.length;
//                     globalProductIndex++;
//                     return (
//                       <div key={p.name + i} className="bg-white rounded-2xl shadow-md p-2 md:p-6 flex flex-col items-center text-center border border-gray-100">
//                         <img src={galleryImages[imgIdx]} alt={p.name} className="w-full h-40 object-cover rounded-xl mb-4" />
//                         <div className="font-bold text-lg mb-1 text-[#00743F]">{p.name}</div>
//                         <div className="text-[#E53935] font-semibold text-base mb-1">KSh. {p.price}</div>
//                         <div className="text-xs mb-2"><span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 font-medium">{p.stock}</span></div>
//                         <div className="text-gray-600 text-sm mb-2">{p.desc}</div>
//                         <button
//                           className="mt-auto bg-[#FFC107] hover:bg-[#ffb300] text-[#222] text-center py-2 rounded font-bold transition-colors w-full block text-base"
//                           as="a"
//                           href={`https://wa.me/254101108340?text=Hello%20Kibunja%20Farm%2C%20I%20would%20like%20to%20order%3A%20${encodeURIComponent(p.name)}`}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           Order Now on WhatsApp
//                         </button>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           ));
//         })()}
//       </section>
//     </main>
//   );
// } 

"use client";
import { useState } from "react";

const chickenSections = [
  {
    name: "Chicks",
    products: [
      {
        name: "Day-Old Chick (F1 Improved Kienyeji)",
        img: "https://images.unsplash.com/photo-1589923188651-268a9765e432?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 89,
        stock: "In Stock",
        desc: "Healthy, vaccinated day-old chicks. Types: Sasso, Kuroiler, Kenbro, Rainbow Rooster.",
      },
      {
        name: "One-Week-Old Chick (F1 Improved Kienyeji)",
        img: "https://images.unsplash.com/photo-1613684574327-dc32b58b2fca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 120,
        stock: "In Stock",
        desc: "Stronger, vaccinated chicks for a head start. Types: Sasso, Kuroiler, Kenbro, Rainbow Rooster.",
      },
      {
        name: "One-Month-Old Pullet (F1 Improved Kienyeji)",
        img: "https://images.unsplash.com/photo-1694854038360-56b29a16fb0c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 150,
        stock: "In Stock",
        desc: "Ready-to-lay pullets. Types: Sasso, Kuroiler, Kenbro, Rainbow Rooster.",
      },
    ],
  },
  {
    name: "Kienyeji Chicken (Mature)",
    products: [
      {
        name: "Mature Kienyeji Chicken",
        img: "https://images.pexels.com/photos/375510/pexels-photo-375510.jpeg?auto=compress&w=600&q=80",
        price: 900,
        stock: "In Stock",
        desc: "Traditional kienyeji chicken, mature and ready for your table. Price range: 600-1200.",
      },
      {
        name: "Brown Kienyeji Chicken",
        img: "https://plus.unsplash.com/premium_photo-1664527009188-a8f5e05589fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 950,
        stock: "In Stock",
        desc: "Brown kienyeji chicken, great for meat and eggs.",
      },
      {
        name: "White Kienyeji Chicken",
        img: "https://images.unsplash.com/photo-1578051696754-4652a8f67882?q=80&w=326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1000,
        stock: "In Stock",
        desc: "White kienyeji chicken, hardy and productive.",
      },
    ],
  },
  {
    name: "Improved Kienyeji Chicken (Mature)",
    products: [
      {
        name: "Improved Kienyeji Chicken (Sasso)",
        img: "https://images.unsplash.com/photo-1678989912659-5a06072c5955?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1100,
        stock: "In Stock",
        desc: "Sasso breed, fast-growing and productive.",
      },
      {
        name: "Improved Kienyeji Chicken (Kuroiler)",
        img: "https://plus.unsplash.com/premium_photo-1664527009188-a8f5e05589fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1200,
        stock: "In Stock",
        desc: "Kuroiler breed, excellent for meat and eggs.",
      },
      {
        name: "Improved Kienyeji Chicken (Kenbro)",
        img: "https://images.pexels.com/photos/375510/pexels-photo-375510.jpeg?auto=compress&w=600&q=80",
        price: 1300,
        stock: "In Stock",
        desc: "Kenbro breed, hardy and high-yielding.",
      },
    ],
  },
];

const eggsSection = {
  name: "Eggs",
  products: [
    {
      name: "Kienyeji Eggs (Tray)",
      img: "https://images.unsplash.com/photo-1639194335563-d56b83f0060c?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 700,
      stock: "In Stock",
      desc: "Fresh kienyeji eggs, sold per tray (30 eggs). Healthy, natural, and delicious.",
    },
    {
      name: "Layers Eggs (Tray)",
      img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 450,
      stock: "In Stock",
      desc: "Farm-fresh layers eggs, sold per tray (30 eggs). High-yield and nutritious.",
    },
    {
      name: "Guinea Fowl Egg (Kanga)",
      img: "https://images.unsplash.com/photo-1725781188703-32f11fd53fe4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 100,
      stock: "In Stock",
      desc: "Exotic guinea fowl eggs (Kanga), sold per egg. Rich in nutrients and flavor.",
    },
  ],
};

const otherCategories = [
  {
    name: "Ducks",
    products: [
      {
        name: "Muscovy Duck",
        img: "https://images.unsplash.com/photo-1465153690352-10c1b29577f8?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 700,
        stock: "In Stock",
        desc: "Hardy Muscovy ducks for meat and eggs.",
      },
      {
        name: "Luen Duck",
        img: "https://images.unsplash.com/photo-1534627760265-69713192ade4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 800,
        stock: "In Stock",
        desc: "Luen ducks, great for backyard farming.",
      },
      {
        name: "Pekin Duck",
        img: "https://images.unsplash.com/photo-1442689859438-97407280183f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 850,
        stock: "In Stock",
        desc: "Popular Pekin ducks, excellent for meat.",
      },
    ],
  },
  {
    name: "Turkeys",
    products: [
      {
        name: "Male Turkey",
        img: "https://plus.unsplash.com/premium_photo-1668268397144-5bb0d5d2a8bb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 4000,
        stock: "In Stock",
        desc: "Large, healthy male turkeys for breeding and meat.",
      },
      {
        name: "Female Turkey",
        img: "https://plus.unsplash.com/premium_photo-1669754166793-db090505baf1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 3500,
        stock: "In Stock",
        desc: "Productive female turkeys for eggs and meat.",
      },
      {
        name: "Turkey Chick",
        img: "https://images.unsplash.com/photo-1461037506617-211749beac60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 400,
        stock: "In Stock",
        desc: "Healthy turkey chicks. Price varies by size.",
      },
    ],
  },
  {
    name: "Geese",
    products: [
      {
        name: "Goose",
        img: "https://images.unsplash.com/photo-1564149567196-0c1d8bb7148f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 3000,
        stock: "In Stock",
        desc: "Strong geese for meat and eggs. Price range: 2500-3000.",
      },
      {
        name: "White Goose",
        img: "https://images.unsplash.com/photo-1598101446154-30a086e7ae59?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 3000,
        stock: "In Stock",
        desc: "White geese, great for eggs and meat.",
      },
      {
        name: "Grey Goose",
        img: "https://images.unsplash.com/photo-1702238151745-f721a21a27ab?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 3000,
        stock: "In Stock",
        desc: "Grey geese, hardy and productive.",
      },
    ],
  },
  {
    name: "Guinea Fowls",
    products: [
      {
        name: "Guinea Fowl",
        img: "https://images.unsplash.com/photo-1583147474478-f8920da507ca?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1800,
        stock: "In Stock",
        desc: "Exotic guinea fowls for your farm. Price range: 1500-2000.",
      },
      {
        name: "White Guinea Fowl",
        img: "https://images.unsplash.com/photo-1583147386746-3ba0c0799d79?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1900,
        stock: "In Stock",
        desc: "White guinea fowls, rare and beautiful.",
      },
      {
        name: "Pearl Guinea Fowl",
        img: "https://images.unsplash.com/photo-1647641639865-b509748cad4f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 2000,
        stock: "In Stock",
        desc: "Pearl guinea fowls, hardy and productive.",
      },
    ],
  },
];

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

export default function ProductsPage() {
  const [selectedMain, setSelectedMain] = useState(0); // 0 = All, 1 = Chicken, last = Eggs
  const fadedGreen = "bg-[#E6F4EA] text-[#104269]";
  const activeGreen = "bg-[#00743F] text-white";

  // Products to show
  let groupsToShow = [];
  if (selectedMain === 0) {
    groupsToShow = allGroups;
  } else if (selectedMain === 1) {
    groupsToShow = chickenSections;
  } else if (selectedMain === mainTabs.length - 1) {
    groupsToShow = [eggsSection];
  } else {
    groupsToShow = [otherCategories[selectedMain - 2]];
  }

  return (
    <main className="  px-0 ">
      {/* Hero section */}
      <section className="mb-8 px-4 bg-[#F0FDF4] py-20">
        <div className="  px-4 text-center ">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#00743F]">Our Poultry Products</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">Browse our full range of quality poultry and farm products. Select a category to see available stock, prices, and details for each type.</p>
        </div>
      </section>
      {/* Main Tabs */}
      <div className="flex flex-wrap justify-center gap-4  px-4">
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
      <section className=" mb-12">
        {groupsToShow.map((group, idx) => (
          <div key={group.name} className={`mb-0 w-full ${idx % 2 === 0 ? 'bg-white' : 'bg-[#E6F4EA]'} py-14 `}> 
            <div className=" px-5 md:px-20">
              <h2 className="text-3xl font-extrabold mb-8 text-[#104269] text-center tracking-tight">{group.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.products.map((p, i) => (
                  <div key={p.name + i} className="bg-white rounded-2xl shadow-md p-2 md:p-6 flex flex-col items-center text-center border border-gray-100">
                    <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded-xl mb-4" />
                    <div className="font-bold text-lg mb-1 text-[#00743F]">{p.name}</div>
                    <div className="text-[#E53935] font-semibold text-base mb-1">KSh. {p.price}</div>
                    <div className="text-xs mb-2"><span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 font-medium">{p.stock}</span></div>
                    <div className="text-gray-600 text-sm mb-2">{p.desc}</div>
                    <button
                      className="mt-auto bg-[#FFC107] hover:bg-[#ffb300] text-[#222] text-center py-2 rounded font-bold transition-colors w-full block text-base"
                      onClick={() => {
                        const message = `Hello Kibunja Farm, I would like to order: ${p.name}`;
                        window.open(`https://wa.me/254101108340?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}