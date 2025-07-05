"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-[#F0FDF4] overflow-hidden mb-12">
  <img
    src="https://images.unsplash.com/photo-1706458188457-eef5713b72e9?q=80&w=859&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Kibunja Farm Hero"
    className="absolute inset-0 w-full h-full object-cover object-bottom blur-sm z-0"
  />
  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/60 z-10" />
  {/* Text content */}
  <div className="relative z-20 text-center px-4">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#09ff90] drop-shadow mb-4">
      About Us
    </h1>
    <p className="text-lg sm:text-2xl text-[#27a0fd] font-medium max-w-2xl mx-auto drop-shadow">
      Empowering farmers across Kenya with quality poultry, expert guidance, and reliable service.
    </p>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto mb-12 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[#00743F] mb-2">Our Mission</h2>
            <p className="text-gray-700 text-base">
              To empower poultry farmers in Murang&apos;a and beyond by providing healthy, high-quality chicks, hens, cocks, ducks, turkeys, geese, and guinea fowls, along with expert advice and reliable delivery.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#00743F] mb-2">Our Vision</h2>
            <p className="text-gray-700 text-base">
              To be Kenya&apos;s most trusted poultry supplier, known for innovation, customer care, and helping farmers thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Brief History */}
      <section className="max-w-5xl mx-auto mb-12 px-4">
        <h2 className="text-2xl font-bold text-[#00743F] mb-4">Our Story</h2>
        <p className="text-gray-700 text-base mb-4">
          Founded in Kenol Town, Murang&apos;a, Kibunja Farm began with a simple goal: to make quality poultry accessible to every farmer. Over the years, we&apos;ve grown from a small local supplier to a trusted brand serving customers across Kenya. Our commitment to quality, transparency, and farmer success remains at the heart of everything we do.
        </p>
        <img
          src="https://plus.unsplash.com/premium_photo-1681844053886-2286f8efe9b5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Farmyard"
          className="w-full h-76 object-cover object-center rounded-xl shadow mb-2"
        />
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold text-[#00743F] mb-6 text-center">Why Choose Kibunja Farm?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-[#F0FDF4] rounded-xl p-6 text-center shadow">
            <div className="text-3xl mb-2">🐣</div>
            <div className="font-bold text-lg mb-1 text-[#104269]">Quality Breeds</div>
            <div className="text-gray-600 text-sm">We source and supply only the healthiest, most productive poultry breeds.</div>
          </div>
          <div className="bg-[#F0FDF4] rounded-xl p-6 text-center shadow">
            <div className="text-3xl mb-2">🚚</div>
            <div className="font-bold text-lg mb-1 text-[#104269]">Reliable Delivery</div>
            <div className="text-gray-600 text-sm">Fast, safe, and free delivery for large orders, right to your farm or home.</div>
          </div>
          <div className="bg-[#F0FDF4] rounded-xl p-6 text-center shadow">
            <div className="text-3xl mb-2">📞</div>
            <div className="font-bold text-lg mb-1 text-[#104269]">Expert Support</div>
            <div className="text-gray-600 text-sm">Get guidance and tips from our experienced team, every step of the way.</div>
          </div>
          <div className="bg-[#F0FDF4] rounded-xl p-6 text-center shadow">
            <div className="text-3xl mb-2">🤝</div>
            <div className="font-bold text-lg mb-1 text-[#104269]">Farmer-Focused</div>
            <div className="text-gray-600 text-sm">We care about your success and build lasting relationships with our customers.</div>
          </div>
        </div>
      </section>
    </main>
  );
} 