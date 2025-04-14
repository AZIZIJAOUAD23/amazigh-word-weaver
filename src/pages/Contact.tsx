
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast({
        title: "يرجى ملء جميع الحقول",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "تم إرسال رسالتك بنجاح",
        description: "سنرد عليك في أقرب وقت ممكن",
      });
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-amazigh-dark mb-4">اتصل بنا</h1>
            <p className="text-lg text-gray-600">
              نحن هنا للإجابة على استفساراتك واستقبال اقتراحاتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-amazigh-primary to-amazigh-secondary p-6 text-white">
                <h2 className="text-2xl font-semibold mb-4">تواصل معنا</h2>
                <p>
                  نرحب بملاحظاتك واستفساراتك. يمكنك التواصل معنا من خلال تعبئة النموذج أو عبر وسائل الاتصال المتاحة.
                </p>
              </div>
              
              <div className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-right">
                      الاسم
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="أدخل اسمك"
                      className="text-right"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-right">
                      البريد الإلكتروني
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="أدخل بريدك الإلكتروني"
                      className="text-right"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 text-right">
                      الرسالة
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="اكتب رسالتك هنا..."
                      rows={5}
                      className="text-right"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amazigh-primary hover:bg-amazigh-primary/90"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        جار الإرسال...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                        إرسال الرسالة
                      </div>
                    )}
                  </Button>
                </form>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amazigh-dark mb-4">معلومات الاتصال</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-amazigh-primary ml-3" />
                      <div>
                        <div className="text-sm text-gray-500">البريد الإلكتروني</div>
                        <div className="font-medium">contact@amawal-inu.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-amazigh-primary ml-3" />
                      <div>
                        <div className="text-sm text-gray-500">الهاتف</div>
                        <div className="font-medium">+212 522 123 456</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-amazigh-primary ml-3" />
                      <div>
                        <div className="text-sm text-gray-500">العنوان</div>
                        <div className="font-medium">المعهد الملكي للثقافة الأمازيغية، الرباط، المغرب</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-amazigh-dark mb-4">الأسئلة الشائعة</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-amazigh-dark mb-1">هل الموقع مجاني؟</h4>
                      <p className="text-gray-600 text-sm">نعم، الموقع متاح مجاناً للجميع لتشجيع تعلم اللغة الأمازيغية ونشرها.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-amazigh-dark mb-1">هل يمكنني المساهمة في إثراء القاموس؟</h4>
                      <p className="text-gray-600 text-sm">بالتأكيد! نرحب بمساهمات المتخصصين والمهتمين. يمكنك التواصل معنا عبر نموذج الاتصال.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-amazigh-dark mb-1">كيف يمكنني استخدام خدمة الترجمة؟</h4>
                      <p className="text-gray-600 text-sm">ما عليك سوى إدخال النص المراد ترجمته في الحقل المخصص والنقر على زر "ترجم".</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
