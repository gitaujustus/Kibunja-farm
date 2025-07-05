"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[220px] flex items-center justify-center bg-[#F0FDF4] overflow-hidden mb-12">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00743F] drop-shadow mb-2">Contact Us</h1>
          <p className="text-lg sm:text-xl text-[#104269] font-medium max-w-2xl mx-auto drop-shadow">
            We&apos;d love to hear from you! Reach out for orders, questions, or expert poultry advice.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mb-16 px-4 grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-bold text-[#00743F] mb-4">Get in Touch</h2>
          <div className="mb-4">
            <div className="font-semibold text-[#104269] mb-1">Location:</div>
            <div className="text-gray-700">Kenol Town, Murang&apos;a, Kenya</div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-[#104269] mb-1">Email:</div>
            <div className="text-gray-700">jgathiru02@gmail.com</div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-[#104269] mb-1">Phone:</div>
            <div className="text-gray-700">+254 101 108340<br />+254 729 144533</div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-[#104269] mb-1">Business Hours:</div>
            <div className="text-gray-700">Mon - Sat: 8:00am - 6:00pm</div>
          </div>
        </div>
        {/* Contact Form */}
        <form className="bg-[#F8FAF9] rounded-xl shadow p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#00743F] mb-2">Send a Message</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00743F] text-gray-900"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00743F] text-gray-900"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00743F] text-gray-900"
            required
          />
          <button
            type="submit"
            className="bg-[#00743F] text-white font-bold py-2 rounded hover:bg-[#005c32] transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Google Map */}
      <section className="max-w-5xl mx-auto mb-16 px-4">
        <h2 className="text-2xl font-bold text-[#00743F] mb-4">Find Us</h2>
        <div className="w-full h-72 rounded-xl overflow-hidden shadow">
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
      </section>
    </main>
  );
} 