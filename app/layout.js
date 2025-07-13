import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import TopContactBar from "./components/TopContactBar";
import MainNavBar from "./components/MainNavBar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Kibunja Farm | Quality Day-Old Chicks, Poultry & Eggs in Kenya",
  description:
    "Kibunja Farm supplies healthy day-old chicks, kienyeji chicken, ducks, guinea fowls, and fresh eggs across Kenya. Free delivery, expert guidance, and quality you can trust.",
  openGraph: {
    title: "Kibunja Farm | Quality Day-Old Chicks, Poultry & Eggs in Kenya",
    description:
      "Kibunja Farm supplies healthy day-old chicks, kienyeji chicken, ducks, guinea fowls, and fresh eggs across Kenya. Free delivery, expert guidance, and quality you can trust.",
    url: "https://kibunja-farm.vercel.app/",
    siteName: "Kibunja Farm",
    images: [
      {
        url: "/gallery/group-of-newborn-chicks.webp",
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
      "/gallery/group-of-newborn-chicks.webp"
    ],
    site: "@kibunjafarm",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Chatbot/>
          <TopContactBar />
          <MainNavBar />
          <main className="flex-1 flex flex-col">{children}</main>
          <WhatsAppFloatingButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
