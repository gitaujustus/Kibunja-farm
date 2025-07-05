import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const products = [
    {
      name: "Day Old Chick",
      price: 89,
      oldPrice: 110,
      badge: "KSh. 90",
      img: "https://images.unsplash.com/photo-1589923188651-268a9765e432?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      img: "https://images.unsplash.com/photo-1613684574327-dc32b58b2fca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Strong pullets for a head start in egg production.",
      types: "Kienyeji, Sasso, Kuroiler",
      freeDelivery: true,
      discount: 17,
    },
    {
      name: "Kienyeji Hens",
      price: 800,
      oldPrice: 950,
      badge: "KSh. 800",
      img: "https://plus.unsplash.com/premium_photo-1664527009188-a8f5e05589fb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "Productive hens for your poultry business.",
      types: "Kienyeji, Improved Local",
      freeDelivery: true,
      discount: 16,
    },
    {
      name: "Kienyeji Cocks",
      price: 900,
      oldPrice: 1100,
      badge: "KSh. 900",
      img: "https://images.unsplash.com/photo-1578051696754-4652a8f67882?q=80&w=326&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      img: "https://images.unsplash.com/photo-1534627760265-69713192ade4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      img: "https://images.unsplash.com/photo-1583147474478-f8920da507ca?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: false }}
        // variants={{
        //   hidden: {},
        //   visible: {
        //     transition: {
        //       staggerChildren: 0.15
        //     }
        //   }
        // }}
        // initial={{ opacity: 0, y: 40 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // viewport={{ once: false }}
        // transition={{ 
        //   duration: 0.7, 
        //   delayChildren: 0.2, 
        //   staggerChildren: 0.15
        // }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            className="relative bg-white rounded-[16px] shadow-sm overflow-visible flex flex-col w-full mx-auto border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index* 0.2 }}
            viewport={{ once: false }}
          >
            {/* Price badge - positioned at top-right corner like in reference */}
            <div className="absolute -top-6 -right-3 z-10">
              <div className="bg-white border-2 border-green-600 text-red-500 rounded-full w-14 h-14 flex items-center justify-center text-xs font-bold shadow-md">
                -{product.discount}%
              </div>
            </div>
            
            {/* Product image - with overflow hidden for clean corners */}
            <div className="relative h-[200px] overflow-hidden rounded-t-[16px]">
              <img 
                src={product.img} 
                // src={galleryImages[index % galleryImages.length]} 
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
        ))}
      </motion.div>
    </section>
  );
}