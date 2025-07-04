import TopContactBar from "./components/TopContactBar";
import MainNavBar from "./components/MainNavBar";
import HeroSection from "./components/HeroSection";
import AboutSnippet from "./components/AboutSnippet";
import EmpowermentBanner from "./components/EmpowermentBanner";
import ProductOverview from "./components/ProductOverview";
import Testimonials from "./components/Testimonials";
import ReachUs from "./components/ReachUs";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <TopContactBar /> */}
      {/* <MainNavBar /> */}
      {/* <main className="flex-1 flex flex-col"> */}
        <HeroSection />
        <AboutSnippet />
        <ServicesSection />
        <EmpowermentBanner />
        <ProductOverview />
        <Testimonials />
        <ReachUs />
      {/* </main> */}
      {/* <Footer /> */}
    </div>
  );
}
