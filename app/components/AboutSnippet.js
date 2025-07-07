import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSnippet() {
  return (
    <motion.section
      className="flex justify-center py-20 md:py-30 px-4 bg-[#FCFCFC]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, delay: 0.1 }}
    >
      <div className="flex flex-col sm:flex-row max-w-5xl w-full items-start">
        {/* Vertical label with bar, both rotated and aligned horizontally */}
        <div className="hidden sm:flex flex-row items-center justify-center mr-8 min-w-[48px]" style={{ height: '120px' }}>
          <span className="text-base text-[#17406D] font-normal tracking-wide rotate-[-90deg] whitespace-nowrap mr-[-45px] ">Who are we?</span>
          <div className="w-2 h-24 bg-[#17406D] rounded ml-2" />
        </div>
        <div className="flex sm:hidden flex-row items-center mr-4 mb-4 ">
          <span className="text-base text-[#17406D] font-normal tracking-wide whitespace-nowrap">Who are we?</span>
          <div className="w-8 h-1 bg-[#17406D] rounded ml-2" />
        </div>
        {/* Main content */}
        <div className="flex-1">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2940] mb-4 text-left leading-tight">We&apos;re your reliable partner in poultry — quality birds, delivered fast.</h2>
          <p className="text-[#17406D] text-base sm:text-lg mb-2 text-left">At Justus Chick, we connect farmers with healthy day-old chicks, mature hens, and other quality birds.<br className="hidden sm:block"/>Backed by reliable suppliers and real experience, we make poultry farming simpler and smarter.</p>
          <Link href="/about" className=" text-blue-700 text-base font-medium underline hover:text-[#0A2940] text-left block mt-1">[ Learn More ]</Link>
        </div>
      </div>
    </motion.section>
  );
} 