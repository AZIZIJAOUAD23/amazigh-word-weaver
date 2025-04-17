
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, ArrowDown } from "lucide-react";
import { DictionaryEntry, searchDictionary } from "@/services/dictionaryService";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dictionary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<DictionaryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const searchResults = searchDictionary(searchQuery);
      setResults(searchResults);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12 min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-white">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-amazigh-dark mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amazigh-primary to-purple-600">
            قاموس اللغة الأمازيغية
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            استكشف آلاف الكلمات والمصطلحات الأمازيغية مع ترجماتها بالعربية والفرنسية
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <Input
              type="text"
              placeholder="ابحث عن كلمة أمازيغية، عربية أو فرنسية..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-6 pr-12 border-amazigh-primary text-right shadow-md group-hover:shadow-lg transition-shadow duration-300 focus:ring-2 focus:ring-amazigh-primary/50"
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button
              onClick={handleSearch}
              disabled={isLoading}
              className="absolute left-1 top-1 bg-gradient-to-r from-amazigh-primary to-purple-500 hover:from-amazigh-primary hover:to-purple-600 text-white transition-transform duration-300 hover:scale-105"
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <Search className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {results.map((entry, index) => (
              <div 
                key={index} 
                className="word-card group hover:shadow-2xl hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-2 bg-white"
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="amazigh-text flex-grow">{entry.amazigh}</div>
                  {(entry.category || entry.type) && (
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full group-hover:bg-purple-200 transition-colors">
                      {entry.category || entry.type}
                    </span>
                  )}
                </div>
                
                {entry.latin && <div className="text-sm text-gray-500 mb-2">{entry.latin}</div>}
                
                <div className="h-px bg-gray-100 my-3"></div>
                
                {entry.construct && (
                  <div className="mb-2">
                    <span className="text-xs text-gray-500 ml-2">التصريف:</span>
                    <div className="amazigh-text text-sm">{entry.construct}</div>
                  </div>
                )}
                
                {entry.plural && (
                  <div className="mb-2">
                    <span className="text-xs text-gray-500 ml-2">الجمع:</span>
                    <div className="amazigh-text text-sm">{entry.plural}</div>
                  </div>
                )}
                
                {entry.french && (
                  <div className="mb-2 flex items-center">
                    <span className="text-xs text-gray-500 ml-2">🇫🇷</span>
                    <div>{entry.french}</div>
                  </div>
                )}
                
                {entry.arabic && (
                  <div className="mb-2 flex items-center direction-rtl">
                    <span className="text-xs text-gray-500 ml-2">🇲🇦</span>
                    <div>{entry.arabic}</div>
                  </div>
                )}
                
                {entry.mean_ar && (
                  <div className="mb-2 text-sm text-gray-700 direction-rtl">
                    <div>{entry.mean_ar}</div>
                  </div>
                )}
                
                {entry.detailed_arabic && (
                  <div className="mb-2 text-sm text-gray-700 direction-rtl">
                    <div>{entry.detailed_arabic}</div>
                  </div>
                )}
                
                {entry.example && (
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <div className="flex items-center mb-2">
                      <BookOpen className="w-4 h-4 text-purple-500 mr-2" />
                      <span className="text-sm font-medium text-gray-700">أمثلة:</span>
                    </div>
                    {entry.example.amazigh && (
                      <div className="amazigh-text text-sm mb-1">{entry.example.amazigh}</div>
                    )}
                    {entry.example.french && (
                      <div className="text-sm text-gray-700 mb-1">{entry.example.french}</div>
                    )}
                    {entry.example.arabic && (
                      <div className="text-sm text-gray-700 direction-rtl">{entry.example.arabic}</div>
                    )}
                  </div>
                )}
                
                {entry.source && (
                  <div className="text-xs text-gray-400 mt-3 flex items-center">
                    <BookOpen className="w-3 h-3 ml-1 text-purple-500" />
                    {entry.source}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-gray-600">لم يتم العثور على نتائج. يرجى تجربة كلمة أخرى.</p>
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-gray-600">ابدأ البحث باستخدام شريط البحث أعلاه.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Dictionary;
