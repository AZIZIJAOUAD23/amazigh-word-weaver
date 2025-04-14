
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center space-x-2">
          <Globe className="w-8 h-8 text-amazigh-primary" />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-tight text-amazigh-dark">
              <span className="text-amazigh-primary">AMAWAL</span>-INU
            </h1>
            <p className="text-xs text-gray-500">ⴰⵎⴰⵡⴰⵍ-ⵉⵏⵓ</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-amazigh-primary transition-colors">
            الرئيسية
          </Link>
          <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-amazigh-primary transition-colors">
            عن الموقع
          </Link>
          <Link to="/dictionary" className="text-sm font-medium text-gray-700 hover:text-amazigh-primary transition-colors">
            القاموس
          </Link>
          <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-amazigh-primary transition-colors">
            اتصل بنا
          </Link>
          <Button className="bg-amazigh-primary hover:bg-amazigh-primary/90 text-white">
            ابدأ الترجمة
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-amazigh-primary focus:outline-none"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden px-4 py-3 bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 hover:text-amazigh-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-700 hover:text-amazigh-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              عن الموقع
            </Link>
            <Link
              to="/dictionary"
              className="text-sm font-medium text-gray-700 hover:text-amazigh-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              القاموس
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-700 hover:text-amazigh-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              اتصل بنا
            </Link>
            <Button
              className="bg-amazigh-primary hover:bg-amazigh-primary/90 text-white w-full mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ابدأ الترجمة
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
