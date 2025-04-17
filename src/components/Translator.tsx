
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Copy, BookOpen, ArrowDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { searchDictionary, DictionaryEntry } from "@/services/dictionaryService";
import { Card, CardContent } from "@/components/ui/card";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState<DictionaryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Clear results when input is empty
    if (!inputText.trim()) {
      setResults([]);
      setShowResults(false);
    }
  }, [inputText]);

  const handleTranslate = () => {
    if (!inputText.trim()) {
      toast({
        title: "الرجاء إدخال نص للترجمة",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call with a small delay
    setTimeout(() => {
      const foundResults = searchDictionary(inputText);
      setResults(foundResults);
      setShowResults(true);
      setIsLoading(false);
      
      if (foundResults.length === 0) {
        toast({
          title: "لم يتم العثور على نتائج",
          description: "حاول استخدام كلمة أخرى أو تحقق من الإملاء",
          variant: "destructive",
        });
      }
    }, 600);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "تم نسخ النص",
      description: "تم نسخ النص إلى الحافظة",
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-amazigh-dark mb-4">مترجم اللغة الأمازيغية</h1>
        <p className="text-gray-600 mb-6">
          أداة احترافية لترجمة الكلمات من وإلى اللغة الأمازيغية
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-right text-amazigh-dark mb-2 flex justify-between items-center">
              <span className="text-gray-500 text-sm">اختر اللغة</span>
              النص المراد ترجمته:
            </h2>
            <div className="relative">
              <textarea
                className="w-full h-32 p-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-amazigh-primary focus:border-transparent outline-none transition-all direction-rtl"
                placeholder="أدخل النص هنا..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              {inputText && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        className="absolute top-3 left-3 p-1.5 text-gray-400 hover:text-amazigh-primary rounded-md transition-colors"
                        onClick={() => handleCopy(inputText)}
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>نسخ النص</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <Button 
              onClick={handleTranslate} 
              disabled={isLoading} 
              className="bg-amazigh-primary hover:bg-amazigh-primary/90 text-white px-10 py-6 rounded-lg transition-all transform hover:scale-105"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  جار الترجمة...
                </div>
              ) : (
                "ترجم"
              )}
            </Button>
          </div>

          {showResults && (
            <div className="mt-8">
              <div className="flex items-center mb-4">
                <div className="h-px flex-1 bg-gray-200"></div>
                <h3 className="mx-4 text-lg font-semibold text-amazigh-dark">النتيجة:</h3>
                <div className="h-px flex-1 bg-gray-200"></div>
              </div>

              {results.length > 0 ? (
                <div className="space-y-4 result-animation">
                  {results.map((result, index) => (
                    <Card key={index} className="overflow-hidden hover:border-amazigh-primary transition-colors">
                      <CardContent className="p-0">
                        <div className="bg-gradient-to-r from-amazigh-light to-blue-50 p-4 border-b border-gray-100">
                          <div className="flex justify-between items-center">
                            <div className="amazigh-text">{result.amazigh}</div>
                            <div className="flex space-x-2">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button
                                      className="p-1.5 text-gray-500 hover:text-amazigh-primary rounded-md transition-colors"
                                      onClick={() => handleCopy(result.amazigh)}
                                    >
                                      <Copy className="w-4 h-4" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>نسخ النص الأمازيغي</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                              
                              {result.example && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <button className="p-1.5 text-gray-500 hover:text-amazigh-primary rounded-md transition-colors">
                                        <BookOpen className="w-4 h-4" />
                                      </button>
                                    </TooltipTrigger>
                                    <TooltipContent className="w-64 p-4">
                                      <div className="text-sm space-y-2">
                                        {result.example.amazigh && (
                                          <p className="amazigh-text text-base">{result.example.amazigh}</p>
                                        )}
                                        {result.example.french && (
                                          <p className="text-gray-700">{result.example.french}</p>
                                        )}
                                        {result.example.arabic && (
                                          <p className="text-gray-700 direction-rtl">{result.example.arabic}</p>
                                        )}
                                      </div>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </div>
                          </div>
                          {result.latin && <div className="text-sm text-gray-500 mt-1">{result.latin}</div>}
                        </div>
                        
                        <div className="p-4">
                          {(result.type || result.category) && (
                            <div className="text-sm text-amazigh-secondary mb-2 italic">{result.type || result.category}</div>
                          )}
                          
                          {result.french && (
                            <div className="mb-2">
                              <span className="font-semibold">Français: </span>
                              <span>{result.french}</span>
                            </div>
                          )}
                          
                          {result.arabic && (
                            <div className="mb-2 direction-rtl">
                              <span className="font-semibold">العربية: </span>
                              <span>{result.arabic}</span>
                            </div>
                          )}
                          
                          {result.source && (
                            <div className="text-xs text-gray-400 mt-2">
                              المصدر: {result.source}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 animate-fade-in">
                  <div className="text-gray-400 mb-2">
                    <ArrowDown className="w-8 h-8 mx-auto animate-bounce" />
                  </div>
                  <p className="text-gray-600">لم يتم العثور على نتائج. يرجى تجربة كلمة أخرى.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Translator;
