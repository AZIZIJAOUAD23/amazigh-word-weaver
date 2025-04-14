
import { Link } from "react-router-dom";
import { Globe, Heart, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-amazigh-primary" />
              <div>
                <h3 className="text-lg font-bold text-amazigh-dark">
                  <span className="text-amazigh-primary">AMAWAL</span>-INU
                </h3>
                <p className="text-xs text-gray-500">ⴰⵎⴰⵡⴰⵍ-ⵉⵏⵓ</p>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              منصة ترجمة متخصصة للغة الأمازيغية، مصممة لتسهيل التواصل وتعزيز التعلم.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-md font-semibold text-amazigh-dark mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-amazigh-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-amazigh-primary transition-colors">
                  عن الموقع
                </Link>
              </li>
              <li>
                <Link to="/dictionary" className="text-sm text-gray-600 hover:text-amazigh-primary transition-colors">
                  القاموس
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-amazigh-primary transition-colors">
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-md font-semibold text-amazigh-dark mb-4">مصادر</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-amazigh-primary transition-colors">
                  IRCAM (DGLAi)
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-amazigh-primary transition-colors">
                  Msmun
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-amazigh-primary transition-colors">
                  Tawalt (French)
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-amazigh-primary transition-colors">
                  Tawalt (Arabic)
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-md font-semibold text-amazigh-dark mb-4">تواصل معنا</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-amazigh-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-amazigh-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات
            </p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amazigh-primary" 
              />
              <button className="bg-amazigh-primary text-white px-3 py-2 text-sm rounded-r-md hover:bg-amazigh-primary/90 transition-colors">
                اشتراك
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AMAWAL-INU. جميع الحقوق محفوظة.
          </p>
          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-sm text-gray-500">صُمم بكل </span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span className="text-sm text-gray-500"> للثقافة الأمازيغية</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
