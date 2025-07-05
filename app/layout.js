import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopContactBar from "./components/TopContactBar";
import MainNavBar from "./components/MainNavBar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

// Reminder: Run 'pnpm add react-icons' if not already installed for icon support in TopContactBar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kibunja Farm | Quality Day-Old Chicks, Poultry & Eggs in Kenya",
  description:
    "Kibunja Farm supplies healthy day-old chicks, kienyeji chicken, ducks, guinea fowls, and fresh eggs across Kenya. Free delivery, expert guidance, and quality you can trust.",
  openGraph: {
    title: "Kibunja Farm | Quality Day-Old Chicks, Poultry & Eggs in Kenya",
    description:
      "Kibunja Farm supplies healthy day-old chicks, kienyeji chicken, ducks, guinea fowls, and fresh eggs across Kenya. Free delivery, expert guidance, and quality you can trust.",
    url: "https://kibunjafarm.co.ke/",
    siteName: "Kibunja Farm",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613684574327-dc32b58b2fca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
        width: 1200,
        height: 630,
        alt: "Kibunja Farm - Day-old chicks and poultry in Kenya",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kibunja Farm | Quality Day-Old Chicks, Poultry & Eggs in Kenya",
    description:
      "Kibunja Farm supplies healthy day-old chicks, kienyeji chicken, ducks, guinea fowls, and fresh eggs across Kenya. Free delivery, expert guidance, and quality you can trust.",
    images: [
      "https://images.unsplash.com/photo-1613684574327-dc32b58b2fca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
    ],
    site: "@kibunjafarm",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Chatbot/>
          <TopContactBar />
          <MainNavBar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
