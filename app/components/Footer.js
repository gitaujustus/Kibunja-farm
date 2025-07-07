import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#082338] text-white pt-10 pb-4 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Description */}
        <div className="md:w-1/3 mb-8 md:mb-0 text-sm leading-relaxed">
          We are your number one poultry supplier, offering quality Kienyeji
          chicken, day-old chicks, ducks, turkeys, geese, and guinea fowls, with
          reliable home and hotel deliveries and professional service you can
          trust.
        </div>
        <div className=" w-full md:flex-1/2 flex justify-between md:justify-around  flex-wrap gap-8">
          {/* Quick Links */}
          <div className="md:w-1/4 mb-8 md:mb-0">
            <div className="font-semibold mb-2 text-yellow-500  ">
              Quick Links
            </div>
            <ul className="text-[14px] grid grid-cols-2 gap-2 md:gap-0">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Poultry
                </Link>
              </li>
              <li>
                <Link href="/tips" className="hover:underline">
                  Tips
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Reach Us */}
          <div className="md:w-1/4">
            <div className="font-semibold mb-2 text-yellow-500">Reach Us</div>
            <a
              href="mailto:jgathiru02@gmail.com"
              className="text-sm block hover:text-blue-600 transition"
            >
              jgathiru02@gmail.com
            </a>
            <a
              href="tel:+254101108340"
              className="text-sm block hover:text-blue-600 transition"
            >
              +254 101 108340
            </a>
            <a
              href="tel:+254729144533"
              className="text-sm block hover:text-blue-600 transition"
            >
              +254 729 144533
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-white/70 mt-8">
        © 2025 Kibunja Farm. All rights reserved.
      </div>
      <div className="text-center text-xs text-white/70 mt-2">
        Powered by{" "}
        <a
          href="https://gitaujustus.vercel.app"
          target="_blank"
          className="text-yellow-500 underline"
        >
          J&apos;ASTUTE
        </a>
      </div>
    </footer>
  );
}
