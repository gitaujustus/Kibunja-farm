import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function TopContactBar() {
  return (
    <div className="w-full bg-gray-100 text-gray-700 text-[10px] py-2 px-2 md:px-4 flex flex-col sm:flex-row justify-end items-end gap-2">
      <div className="flex items-center gap-4">
        <a href="tel:+254729144533" className="flex items-center gap-1 hover:text-blue-600 transition">
          <FaPhoneAlt className="inline-block" /> +254 729 144 533
        </a>
        <a href="tel:+254101108840" className="flex items-center gap-1 hover:text-blue-600 transition">
          <FaPhoneAlt className="inline-block" /> +254 101 108 840
        </a>
        <a href="mailto:jgathiru02@gmail.com" className="flex items-center gap-1 hover:text-blue-600 transition">
          <FaEnvelope className="inline-block" /> jgathiru02@gmail.com
        </a>
      </div>
    </div>
  );
}
