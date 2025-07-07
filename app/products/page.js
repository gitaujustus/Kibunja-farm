"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// const chickenSections = [
//   {
//     name: "Chicks",
//     products: [
//       {
//         name: "Day-Old Chick (F1 Improved Kienyeji)",
//         img: "https://images.unsplash.com/photo-1589923188651-268a9765e432?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 89,
//         stock: "In Stock",
//         desc: "Healthy, vaccinated day-old chicks. Types: Sasso, Kuroiler, Kenbro, Rainbow Rooster.",
//       },
//       {
//         name: "One-Week-Old Chick (F1 Improved Kienyeji)",
//         img: "https://images.unsplash.com/photo-1613684574327-dc32b58b2fca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 120,
//         stock: "In Stock",
//         desc: "Stronger, vaccinated chicks for a head start. Types: Sasso, Kuroiler, Kenbro, Rainbow Rooster.",
//       },
//       {
//         name: "Two-Weeks-Old Pullet (F1 Improved Kienyeji)",
//         img: "https://grow.ifa.coop/hubfs/intro-chicks-2-hens-article-img1b.jpg",
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
//         img: "https://plus.unsplash.com/premium_photo-1661963727132-9211f11634d5?q=80&w=895&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 900,
//         stock: "In Stock",
//         desc: "Traditional kienyeji chicken, mature and ready for your table. Price range: 600-1200.",
//       },
//       {
//         name: "Brown Kienyeji Chicken",
//         img: "https://images.unsplash.com/photo-1463164490908-f45da921edde?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 950,
//         stock: "In Stock",
//         desc: "Brown kienyeji chicken, great for meat and eggs.",
//       },
//       {
//         name: "White Kienyeji Chicken",
//         img: "https://images.unsplash.com/photo-1578051696754-4652a8f67882?q=80&w=326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
//         img: "https://images.unsplash.com/photo-1535275226173-7ee8b465f0c1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 800,
//         stock: "In Stock",
//         desc: "Sasso breed, fast-growing and productive.",
//       },
//       {
//         name: "Improved Kienyeji Chicken (Kuroiler)",
//         img: "https://plus.unsplash.com/premium_photo-1664527009188-a8f5e05589fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 850,
//         stock: "In Stock",
//         desc: "Kuroiler breed, excellent for meat and eggs.",
//       },
//       {
//         name: "Improved Kienyeji Chicken (Kenbro)",
//         img: "https://images.pexels.com/photos/375510/pexels-photo-375510.jpeg?auto=compress&w=600&q=80",
//         price: 1000,
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
//       img: "https://images.unsplash.com/photo-1639194335563-d56b83f0060c?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: 700,
//       stock: "In Stock",
//       desc: "Fresh kienyeji eggs, sold per tray (30 eggs). Healthy, natural, and delicious.",
//     },
//     {
//       name: "Layers Eggs (Tray)",
//       img: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       price: 450,
//       stock: "In Stock",
//       desc: "Farm-fresh layers eggs, sold per tray (30 eggs). High-yield and nutritious.",
//     },
//     {
//       name: "Guinea Fowl/ Kanga (Per Egg)",
//       img: "https://images.unsplash.com/photo-1725781188703-32f11fd53fe4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
//         name: "Muscovy Duck (Kiengei)",
//         img: "https://media.istockphoto.com/id/1479902954/photo/muscovy-duck.jpg?s=1024x1024&w=is&k=20&c=AeJyrtVM20aV2_ZN-Mrtq0s3h2WpDMNfEQJT7xl4fco=",
//         price: 700,
//         stock: "In Stock",
//         desc: "Hardy Muscovy ducks for meat and eggs.",
//       },
//       {
//         name: "Luen Duck",
//         img: "https://images.unsplash.com/photo-1534627760265-69713192ade4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 800,
//         stock: "In Stock",
//         desc: "Luen ducks, great for backyard farming.",
//       },
//       {
//         name: "Pekin Duck",
//         img: "https://images.unsplash.com/photo-1442689859438-97407280183f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
//         img: "https://images.unsplash.com/photo-1560011961-4ab41261de01?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 4000,
//         stock: "In Stock",
//         desc: "Large, healthy male turkeys for breeding and meat.",
//       },
//       {
//         name: "Female Turkey",
//         img: "https://images.unsplash.com/photo-1645216040577-cad169d11bd4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 3500,
//         stock: "In Stock",
//         desc: "Productive female turkeys for eggs and meat.",
//       },
//       {
//         name: "Turkey Middle Sized Chicks",
//         img: "https://images.unsplash.com/photo-1461037506617-211749beac60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 2500,
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
//         img: "https://images.unsplash.com/photo-1564149567196-0c1d8bb7148f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 3000,
//         stock: "In Stock",
//         desc: "Strong geese for meat and eggs. Price range: 2500-3000.",
//       },
//       {
//         name: "White Goose",
//         img: "https://images.unsplash.com/photo-1598101446154-30a086e7ae59?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 3000,
//         stock: "In Stock",
//         desc: "White geese, great for eggs and meat.",
//       },
//       {
//         name: "Grey Goose",
//         img: "https://images.unsplash.com/photo-1702238151745-f721a21a27ab?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
//         img: "https://images.unsplash.com/photo-1583147474478-f8920da507ca?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 2000,
//         stock: "In Stock",
//         desc: "Exotic guinea fowls for your farm. Can't escape even when released in the homestead.",
//       },
//       {
//         name: "Guinea Fowl (pair)",
//         img: "https://images.unsplash.com/photo-1583147386746-3ba0c0799d79?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 3900,
//         stock: "In Stock",
//         desc: "Pair of home-bred guinea fowls, perfect for breeding and well adapted to stay in home stead",
//       },
//       {
//         name: "Guinea Fowl Chicks",
//         img: "https://images.unsplash.com/photo-1674067578290-451b31c702a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         price: 1500,
//         stock: "In Stock",
//         desc: "Guinea fowl chicks, perfect for starting your flock. coexist with other birds.",
//       },
//     ],
//   },
// ];


const chickenSections = [
  {
    name: "Chicks",
    products: [
      {
        name: "Day-Old Chick (F1 Improved Kienyeji)",
        img: "/gallery/closeup-of-a-fluffy-chick-in-a-brooder.webp",
        price: 89,
        stock: "In Stock",
        desc: "Healthy, vaccinated day-old chicks. Types: Sasso, Kuroiler, Kenbro, Rainbow Rooster.",
      },
      {
        name: "One-Week-Old Chick (F1 Improved Kienyeji)",
        img: "/gallery/group-of-newborn-chicks.webp",
        price: 120,
        stock: "In Stock",
        desc: "Stronger, vaccinated chicks for a head start. Types: Sasso, Kuroiler, Kenbro, Rainbow Rooster.",
      },
      {
        name: "Two-Weeks-Old Pullet (F1 Improved Kienyeji)",
        img: "https://grow.ifa.coop/hubfs/intro-chicks-2-hens-article-img1b.jpg",
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
        img: "https://plus.unsplash.com/premium_photo-1661963727132-9211f11634d5?q=80&w=895&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 900,
        stock: "In Stock",
        desc: "Traditional kienyeji chicken, mature and ready for your table. Price range: 600-1200.",
      },
      {
        name: "Brown Kienyeji Chicken",
        img: "https://images.unsplash.com/photo-1463164490908-f45da921edde?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 950,
        stock: "In Stock",
        desc: "Brown kienyeji chicken, great for meat and eggs.",
      },
      {
        name: "White Kienyeji Chicken",
        img: "/gallery/white-hen-with-red-comb-2.webp",
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
        img: "https://images.unsplash.com/photo-1535275226173-7ee8b465f0c1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 800,
        stock: "In Stock",
        desc: "Sasso breed, fast-growing and productive.",
      },
      {
        name: "Improved Kienyeji Chicken (Kuroiler)",
        img: "/gallery/female-improved-kienyeji-hen.webp",
        price: 850,
        stock: "In Stock",
        desc: "Kuroiler breed, excellent for meat and eggs.",
      },
      {
        name: "Improved Kienyeji Chicken (Kenbro)",
        img: "/gallery/white-hen-with-red-comb.webp",
        price: 1000,
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
      img: "/gallery/kienyeji-eggs.webp",
      price: 700,
      stock: "In Stock",
      desc: "Fresh kienyeji eggs, sold per tray (30 eggs). Healthy, natural, and delicious.",
    },
    {
      name: "Layers Eggs (Tray)",
      img: "/gallery/fresh-eggs-in-a-basket.webp",
      price: 450,
      stock: "In Stock",
      desc: "Farm-fresh layers eggs, sold per tray (30 eggs). High-yield and nutritious.",
    },
    {
      name: "Guinea Fowl/ Kanga (Per Egg)",
      img: "/gallery/guinea-fowl-eggs.webp",
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
        name: "Muscovy Duck (Kiengei)",
        img: "https://media.istockphoto.com/id/1479902954/photo/muscovy-duck.jpg?s=1024x1024&w=is&k=20&c=AeJyrtVM20aV2_ZN-Mrtq0s3h2WpDMNfEQJT7xl4fco=",
        price: 700,
        stock: "In Stock",
        desc: "Hardy Muscovy ducks for meat and eggs.",
      },
      {
        name: "Luen Duck",
        img: "/gallery/luen-duck-2.webp",
        price: 800,
        stock: "In Stock",
        desc: "Luen ducks, great for backyard farming.",
      },
      {
        name: "Pekin Duck",
        img: "/gallery/duck-chicks.webp",
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
        img: "/gallery/beautiful-male-turkey-in-a-field.webp",
        price: 4000,
        stock: "In Stock",
        desc: "Large, healthy male turkeys for breeding and meat.",
      },
      {
        name: "Female Turkey",
        img: "https://images.unsplash.com/photo-1645216040577-cad169d11bd4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 3500,
        stock: "In Stock",
        desc: "Productive female turkeys for eggs and meat.",
      },
      {
        name: "Turkey Middle Sized Chicks",
        img: "/gallery/group-of-turkeys-in-a-field.webp",
        price: 2500,
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
        img: "/gallery/goose.webp",
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
        img: "/gallery/goose-2.webp",
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
        img: "/gallery/guinea-fow-lying-on-the-ground.webp",
        price: 2000,
        stock: "In Stock",
        desc: "Exotic guinea fowls for your farm. Can't escape even when released in the homestead.",
      },
      {
        name: "Guinea Fowl (pair)",
        img: "/gallery/group-of-guinea-fowl-feeding.webp",
        price: 3900,
        stock: "In Stock",
        desc: "Pair of home-bred guinea fowls, perfect for breeding and well adapted to stay in home stead",
      },
      {
        name: "Guinea Fowl Chicks",
        img: "https://images.unsplash.com/photo-1674067578290-451b31c702a2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 1500,
        stock: "In Stock",
        desc: "Guinea fowl chicks, perfect for starting your flock. coexist with other birds.",
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

                  <motion.div key={p.name + i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: false }}
                  
                  className="bg-white rounded-2xl shadow-md p-2 md:p-4 flex flex-col items-center text-center border border-gray-100">
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
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}