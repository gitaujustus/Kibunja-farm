import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function TopContactBar() {
  return (
    <div className="w-full bg-gray-100 text-gray-700 text-[10px] py-2 px-2 md:px-4 flex flex-col sm:flex-row justify-end items-end gap-2">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1"><FaPhoneAlt className="inline-block" /> +254 729 144 533</span>
        <span className="flex items-center gap-1"><FaPhoneAlt className="inline-block" /> +254 101 108 840</span>
        <span className="flex items-center gap-1"><FaEnvelope className="inline-block" /> jgathiru02@gmail.com</span>
      </div>
    </div>
  );
} 