
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Translator from "@/components/Translator";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="translator-section">
        <Translator />
      </div>
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
