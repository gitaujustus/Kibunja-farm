export default function HeroSection() {
  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] min-h-[450px] flex items-center justify-center overflow-hidden">
      <img
        src="https://livestock.extension.wisc.edu/files/2021/08/yellow-chicks.jpg"
        alt="Day-old chicks"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 "
        loading="lazy"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#00743F]/100 via-[#00743F]/40 to-transparent" />
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4 w-full mt-40 sm:mt-50">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-lg">Start Strong with Quality Chicks</h1>
        <p className="text-lg sm:text-2xl mb-6 font-medium drop-shadow">Trusted breeds. Reliable supply. Perfect for your poultry hustle.</p>
        <a href="#reach-us" className="bg-[#17406D] hover:bg-[#005c32] transition-colors px-8 py-3 rounded-full font-semibold text-lg shadow-lg flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" /><path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Order Now
        </a>
      </div>
    </section>
  );
} 