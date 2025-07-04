"use client";
import { useState } from "react";

const chickenSections = [
  {
    name: "Chicks",
    products: [
      {
        name: "Day-Old Chick (F1 Improved Kienyeji)",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        price: 89,
        stock: "In Stock",
        desc: "Healthy, vaccinated day-old chicks. Types: Sasso, Kuroiler, Kenbro, Rainbow Rooster.",
      },
      {
        name: "One-Week-Old Chick (F1 Improved Kienyeji)",
        img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
        price: 120,
        stock: "In Stock",
        desc: "Stronger, vaccinated chicks for a head start. Types: Sasso, Kuroiler, Kenbro, Rainbow Rooster.",
      },
      {
        name: "One-Month-Old Pullet (F1 Improved Kienyeji)",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyig7t1TUkEoQeZH5Bgatx0xSvAQGe2G5o8Q&s",
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
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        price: 900,
        stock: "In Stock",
        desc: "Traditional kienyeji chicken, mature and ready for your table. Price range: 600-1200.",
      },
      {
        name: "Brown Kienyeji Chicken",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        price: 950,
        stock: "In Stock",
        desc: "Brown kienyeji chicken, great for meat and eggs.",
      },
      {
        name: "White Kienyeji Chicken",
        img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
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
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
        price: 1100,
        stock: "In Stock",
        desc: "Sasso breed, fast-growing and productive.",
      },
      {
        name: "Improved Kienyeji Chicken (Kuroiler)",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        price: 1200,
        stock: "In Stock",
        desc: "Kuroiler breed, excellent for meat and eggs.",
      },
      {
        name: "Improved Kienyeji Chicken (Kenbro)",
        img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
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
      img: "https://images.pexels.com/photos/162712/eggs-egg-carton-chicken-eggs-food-162712.jpeg?auto=compress&w=400&q=80",
      price: 700,
      stock: "In Stock",
      desc: "Fresh kienyeji eggs, sold per tray (30 eggs). Healthy, natural, and delicious.",
    },
    {
      name: "Layers Eggs (Tray)",
      img: "https://cdn.pixabay.com/photo/2017/01/20/15/06/egg-1995056_1280.jpg",
      price: 450,
      stock: "In Stock",
      desc: "Farm-fresh layers eggs, sold per tray (30 eggs). High-yield and nutritious.",
    },
    {
      name: "Guinea Fowl Egg (Kanga)",
      img: "https://cdn.pixabay.com/photo/2016/03/05/19/02/egg-1238433_1280.jpg",
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
        img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
        price: 700,
        stock: "In Stock",
        desc: "Hardy Muscovy ducks for meat and eggs.",
      },
      {
        name: "Luen Duck",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        price: 800,
        stock: "In Stock",
        desc: "Luen ducks, great for backyard farming.",
      },
      {
        name: "Pekin Duck",
        img: "https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=400&q=80",
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
        img: "https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=400&q=80",
        price: 4000,
        stock: "In Stock",
        desc: "Large, healthy male turkeys for breeding and meat.",
      },
      {
        name: "Female Turkey",
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        price: 3500,
        stock: "In Stock",
        desc: "Productive female turkeys for eggs and meat.",
      },
      {
        name: "Turkey Chick",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
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
        img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
        price: 2800,
        stock: "In Stock",
        desc: "Strong geese for meat and eggs. Price range: 2500-3000.",
      },
      {
        name: "White Goose",
        img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
        price: 2900,
        stock: "In Stock",
        desc: "White geese, great for eggs and meat.",
      },
      {
        name: "Grey Goose",
        img: "https://images.unsplash.com/photo-1518715308788-3005759c61e9?auto=format&fit=crop&w=400&q=80",
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
        img: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&w=400&q=80",
        price: 1800,
        stock: "In Stock",
        desc: "Exotic guinea fowls for your farm. Price range: 1500-2000.",
      },
      {
        name: "White Guinea Fowl",
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        price: 1900,
        stock: "In Stock",
        desc: "White guinea fowls, rare and beautiful.",
      },
      {
        name: "Pearl Guinea Fowl",
        img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80",
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
            <div className=" px-10 md:px-20">
              <h2 className="text-3xl font-extrabold mb-8 text-[#104269] text-center tracking-tight">{group.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.products.map((p, i) => (
                  <div key={p.name + i} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center border border-gray-100">
                    <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded-xl mb-4" />
                    <div className="font-bold text-lg mb-1 text-[#00743F]">{p.name}</div>
                    <div className="text-[#E53935] font-semibold text-base mb-1">KSh. {p.price}</div>
                    <div className="text-xs mb-2"><span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 font-medium">{p.stock}</span></div>
                    <div className="text-gray-600 text-sm mb-2">{p.desc}</div>
                    <button className="mt-auto bg-[#FFC107] hover:bg-[#ffb300] text-[#222] text-center py-2 rounded font-bold transition-colors w-full block text-base">Order Now</button>
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