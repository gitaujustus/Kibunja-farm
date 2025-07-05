import { FaTruck, FaCut, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

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
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            {service.img && <img src={service.img} alt={service.title} className="w-24 h-24 mb-3 object-contain" />}
            {service.icon && <FaCut className="text-4xl text-[#FAB732] mb-3" />}
            <div className="font-bold text-lg mb-2 text-[#104269]">{service.title}</div>
            <div className="text-gray-600 text-sm">{service.desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 