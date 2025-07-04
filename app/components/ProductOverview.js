import { FaRegCheckCircle } from "react-icons/fa";

const products = [
    {
      name: "Day Old Chick",
      price: 89,
      oldPrice: 110,
      badge: "KSh. 90",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      desc: "Fully vaccinated, and mature in under 4 months, giving you a healthy, productive flock with fewer losses.",
      types: "Kienyeji improved F1 (Sasso, Kroiler, Kenbow)",
      freeDelivery: true,
      discount: 19,
    },
    {
      name: "One-Month-Old Pullets",
      price: 150,
      oldPrice: 180,
      badge: "KSh. 150",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyig7t1TUkEoQeZH5Bgatx0xSvAQGe2G5o8Q&s",
      desc: "Strong pullets for a head start in egg production.",
      types: "Kienyeji, Sasso, Kuroiler",
      freeDelivery: true,
      discount: 17,
    },
    {
      name: "Mature Hens",
      price: 800,
      oldPrice: 950,
      badge: "KSh. 800",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
      desc: "Productive hens for your poultry business.",
      types: "Kienyeji, Improved Local",
      freeDelivery: true,
      discount: 16,
    },
    {
      name: "Kuroiler Cocks",
      price: 900,
      oldPrice: 1100,
      badge: "KSh. 900",
      img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
      desc: "Vigorous cocks for breeding and meat.",
      types: "Kuroiler, Improved Local",
      freeDelivery: true,
      discount: 18,
    },
    {
      name: "Muscovy Ducks",
      price: 700,
      oldPrice: 850,
      badge: "KSh. 700",
      img: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80",
      desc: "Hardy ducks for meat and eggs.",
      types: "Muscovy",
      freeDelivery: true,
      discount: 18,
    },
    {
      name: "Guinea Fowls",
      price: 600,
      oldPrice: 750,
      badge: "KSh. 600",
      img: "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&w=400&q=80",
      desc: "Exotic guinea fowls for your farm.",
      types: "Pearl, White, Lavender",
      freeDelivery: true,
      discount: 20,
    },
  ];

export default function ProductOverview() {
  return (
    <section className="py-12 px-4 bg-[#F0FDF4]" id="chicks">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#00743F]">Our Poultry Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div key={product.name} className="relative bg-white rounded-[16px] shadow-sm overflow-visible flex flex-col w-full mx-auto border border-gray-100">
            {/* Price badge - positioned at top-right corner like in reference */}
            <div className="absolute -top-6 -right-3 z-10">
              <div className="bg-white border-2 border-green-600 text-red-500 rounded-full w-14 h-14 flex items-center justify-center text-xs font-bold shadow-md">
                -{product.discount}%
              </div>
            </div>
            
            {/* Product image - with overflow hidden for clean corners */}
            <div className="relative h-[160px] overflow-hidden rounded-t-[16px]">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-cover" 
                loading="lazy" 
              />
            </div>
            
            {/* White content section */}
            <div className="bg-white p-4 flex-1 flex flex-col rounded-b-[16px]">
              {/* Product name - exactly centered like in reference */}
              <h3 className="font-semibold text-base text-center mb-2 text-gray-900 leading-tight">
                {product.name}
              </h3>
              
              {/* Price section - horizontal layout like in reference */}
              <div className="mb-3">
                <div className="flex items-center justify-between bg-[#F0FDF4] p-2 rounded-lg">
                  <div className="flex items-center gap-1.5">
                    <span className="text-red-500 font-bold text-lg">KSh. {product.price}</span>
                    <span className="text-xs text-gray-400 line-through">KSh. {product.oldPrice}</span>
                    {/* <span className="text-xs text-red-500">(-{product.discount}%)</span> */}
                  </div>
                  <div className="text-xs text-gray-500">Free delivery for 50+ items</div>
                </div>
              </div>
              
              {/* Features with diamond checkmarks - exactly like reference */}
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
              
              {/* Order button - exactly like reference */}
              <div className="mt-auto">
                <a 
                  href="#reach-us" 
                  className="bg-[#FAB732] hover:bg-[#FAB732]/80 text-[#104269] text-center py-2.5 rounded-md font-semibold transition-colors w-full block text-sm"
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}