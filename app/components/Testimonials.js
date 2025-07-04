const testimonials = [
    {
      name: "Peter Kaluma",
      location: "Murang'a",
      review:
        "I've ordered chicks from Justus Chicks three times now, and each batch arrived healthy, active, and on time. Their customer service is top-notch. I also appreciate the follow-up messages and tips on how to care for the chicks — they really care about farmers' success.",
    },
    {
      name: "Grace Wanjiku",
      location: "Kenol",
      review:
        "The hens I bought are laying well and adapted quickly to my backyard setup. The team was patient with my questions and even guided me on feeding schedules. I highly recommend Justus Chicks for anyone starting out or scaling their poultry farm.",
    },
    {
      name: "Samuel Mwangi",
      location: "Kandara",
      review:
        "Great advice and reliable delivery! I’ve been able to expand my poultry business from just a few chicks to a full flock. Their support, both in delivery and farming guidance, has been a game changer for me.",
    },
  ];
  

export default function Testimonials() {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#00743F]">What Our Customers Say</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="relative bg-white border border-gray-300 rounded-xl pt-8 pb-4 px-4 flex flex-col items-center text-center min-h-[260px]">
            {/* Initial badge */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center text-lg font-bold text-[#104269]">{t.name.charAt(0)}</div>
            <div className="font-semibold text-sm text-[#104269] mt-2">{t.name}</div>
            <div className="text-[14px] md:text-[16px] leading-[28px] text-gray-500 mb-2">{t.location}</div>
            <div className="text-[14px] md:text-[16px]  text-gray-700 leading-snug">{t.review}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 