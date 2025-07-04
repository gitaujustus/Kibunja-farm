import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function ReachUs() {
  return (
    <section className="py-12 px-[20px] bg-[#F0FDF4] " id="reach-us">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-[#111]">Reach Us</h2>
      <div className="flex flex-col md:flex-row gap-8 items-start md:items-stretch max-w-[80%] mx-auto">
        {/* Left: Info */}
        <div className="flex-1 flex flex-col gap-8 md:gap-12 justify-center">
          <div>
            <div className="font-bold text-[#082338]  text-xl mb-2 flex items-center gap-2"><FaMapMarkerAlt className="inline-block text-[#00743F]" /> Our Locations</div>
            <div className="ml-6 text-gray-700 leading-tight">
              Kenol Town,<br />Murang'a,<br />Kenya
            </div>
          </div>
          <div>
            <div className="font-bold text-[#082338]  text-xl mb-2 flex items-center gap-2"><FaEnvelope className="inline-block text-[#00743F]" /> Contacts Informations</div>
            <div className="ml-6 text-[#082338] flex flex-col gap-2">
              <div className="flex items-center gap-2">jgathiru02@gmail.com</div>
              <div className="flex flex-col gap-1 mt-2">
                <div className="flex items-center gap-2"> +254 101 108340</div>
                <div className="flex items-center gap-2"> +254 729 144533</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Map */}
        <div className="flex-1 w-full h-[300px] md:h-[320px] rounded-lg overflow-hidden shadow-sm">
          <iframe
            title="Kenol Town Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.96496389713!2d37.140833!3d-0.990833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1f7e2e2e2e2f%3A0x2e2e2e2e2e2e2e2e!2sKenol%2C%20Kenya!5e0!3m2!1sen!2ske!4v1688570000000!5m2!1sen!2ske"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
} 