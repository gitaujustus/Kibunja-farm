import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "0101108340";
const whatsappMessage = encodeURIComponent("Hello, I would like to inquire about your poultry products.");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: "fixed",
        left: 24,
        bottom: 24,
        zIndex: 1000,
        background: "#25D366",
        borderRadius: "50%",
        width: 56,
        height: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        transition: "box-shadow 0.2s",
      }}
      className="hover:shadow-lg focus:outline-none"
    >
      <FaWhatsapp size={32} color="#fff" />
    </a>
  );
} 