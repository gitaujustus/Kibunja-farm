import { FaTruck, FaCut, FaLightbulb } from "react-icons/fa";

const services = [
  {
    img: "/free-delivery.svg",
    title: "Free Delivery",
    desc: "Enjoy fast, free delivery of chicks and poultry products to your home, farm, or business anywhere in Kenya.",
  },
  {
    img: "/slaughter.webp",
    title: "Free Slaughtering of Chicken Meat",
    desc: "We offer complimentary slaughtering for all chicken meat orders, ensuring convenience and hygiene for our customers.",
  },
  {
    img: "/tips.svg",
    title: "Guidance & Tips",
    desc: "Get expert advice and practical tips for poultry production, from brooding to marketing, to help your farm thrive.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-[#F0FDF4]">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-[#00743F]">Our Services</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            {s.img && <img src={s.img} alt={s.title} className="w-24 h-24 mb-3 object-contain" />}
            {s.icon && <FaCut className="text-4xl text-[#FAB732] mb-3" />}
            <div className="font-bold text-lg mb-2 text-[#104269]">{s.title}</div>
            <div className="text-gray-600 text-sm">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 