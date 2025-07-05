import { motion } from "framer-motion";

export default function EmpowermentBanner() {
  return (
    <section className="relative w-full sm:py-10  flex items-center justify-center overflow-hidden bg-[#F0FDF4">
      <img
        src="/chicks21.png"
        alt="Chicks background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/20 z-10" />
      <h3 className="relative z-20 text-[#1AE399] text-2xl sm:text-5xl font-extrabold text-center px-4 py-20 md:max-w-[70%]">
        We don&apos;t just sell poultry, we empower<br className="sm:hidden"/> farmers to thrive.
      </h3>
    </section>
  );
} 