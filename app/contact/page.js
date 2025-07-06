"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Message:* ${formData.message}

*Sent from:* Kibunja Farm Website`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number (using the first phone number from contact details)
    const whatsappNumber = "254729144533";
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

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
            <div className="text-gray-700">Mon - Sun: 8:00am - 6:00pm</div>
          </div>
        </div>
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-[#F8FAF9] rounded-xl shadow p-6 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#00743F] mb-2">Send a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00743F] text-gray-900"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00743F] text-gray-900"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
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
        <div className="w-full h-82 rounded-xl overflow-hidden shadow">
          <iframe
            title="Kenol Town Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2822665615918!2d37.12299433171093!3d-0.9392260182035593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828b3481ff69553%3A0x5b860d9972a11d16!2sKIBUNJA%20SUPPLIES%3B%20HENS%20%26%20CHICKS%3B%20KIENYEJI!5e0!3m2!1sen!2ske!4v1751723062724!5m2!1sen!2ske"
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