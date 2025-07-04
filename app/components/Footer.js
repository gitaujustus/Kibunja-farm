export default function Footer() {
  return (
    <footer className="bg-[#082338] text-white pt-10 pb-4 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Description */}
        <div className="md:w-1/3 mb-8 md:mb-0 text-sm leading-relaxed">
          We are your number one poultry supplier, offering quality Kienyeji chicken, day-old chicks, ducks, turkeys, geese, and guinea fowls, with reliable home and hotel deliveries and professional service you can trust.
        </div>
        {/* Quick Links */}
        <div className="md:w-1/4 mb-8 md:mb-0">
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#reach-us" className="hover:underline">Contact</a></li>
            <li><a href="#chicks" className="hover:underline">Products</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
          </ul>
        </div>
        {/* Reach Us */}
        <div className="md:w-1/4">
          <div className="font-semibold mb-2">Reach Us</div>
          <div className="text-sm">jgathiru02@gmail.com</div>
          <div className="text-sm">+254 101 108340</div>
          <div className="text-sm">+254 729 144533</div>
        </div>
      </div>
      <div className="text-center text-xs text-white/70 mt-8">© 2025 Justus Chicks. All rights reserved.</div>
    </footer>
  );
} 