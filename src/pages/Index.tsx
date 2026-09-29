import Nav from "@/components/plumbing/Nav";
import Hero from "@/components/plumbing/Hero";
import Marquee from "@/components/plumbing/Marquee";
import Services from "@/components/plumbing/Services";
import Work from "@/components/plumbing/Work";
import About from "@/components/plumbing/About";
import Reviews from "@/components/plumbing/Reviews";
import Contact from "@/components/plumbing/Contact";
import Footer from "@/components/plumbing/Footer";
import MobileCallBar from "@/components/plumbing/MobileCallBar";
import StructuredData from "@/components/plumbing/StructuredData";

const Index = () => {
  return (
    <main className="min-h-screen bg-bone pb-14 md:pb-0">
      <StructuredData />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <About />
      <Reviews />
      <Contact />
      <Footer />
      <MobileCallBar />
    </main>
  );
};

export default Index;
