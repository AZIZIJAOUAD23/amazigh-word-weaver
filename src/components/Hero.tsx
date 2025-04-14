
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToTranslator = () => {
    const translatorElement = document.getElementById("translator-section");
    if (translatorElement) {
      translatorElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-amazigh-light via-blue-50 to-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/08c82895-2af9-4228-9f90-c2aee9ac3841.png')] opacity-5 bg-center bg-cover"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-right">
            <h1 className="text-4xl md:text-5xl font-bold text-amazigh-dark mb-6 leading-tight">
              <span className="text-amazigh-primary">قاموس</span> ومترجم اللغة الأمازيغية
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg md:ml-auto">
              أداة متكاملة للترجمة وتعلم اللغة الأمازيغية بطريقة سهلة وفعالة، مع آلاف الكلمات والمصطلحات
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={scrollToTranslator}
                className="bg-amazigh-primary hover:bg-amazigh-primary/90 text-white px-8 py-6 rounded-lg transition-all transform hover:scale-105 order-2 sm:order-1"
              >
                ابدأ الترجمة الآن
              </Button>
              <Link to="/dictionary">
                <Button variant="outline" className="border-amazigh-primary text-amazigh-primary hover:bg-amazigh-light px-8 py-6 rounded-lg transition-all order-1 sm:order-2">
                  استكشف القاموس
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 border border-gray-100">
              <div className="text-amazigh-text mb-4 text-center">
                ⴰⵣⵓⵍ ⴼⵍⵍⴰⵡⵏ
              </div>
              <div className="h-px bg-gray-100 my-4"></div>
              <div className="flex flex-col space-y-2">
                <div className="text-center">
                  <div className="text-sm text-gray-500">بالعربية</div>
                  <div className="text-lg font-medium">مرحباً بكم</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">بالفرنسية</div>
                  <div className="text-lg font-medium">Bienvenue</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-amazigh-gradient rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -top-12 -left-10 w-24 h-24 bg-amazigh-secondary rounded-full blur-3xl opacity-10 animate-pulse"></div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amazigh-primary opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
