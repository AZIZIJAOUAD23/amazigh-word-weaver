
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, BookOpen, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-amazigh-dark mb-4">عن موقع AMAWAL-INU</h1>
            <p className="text-lg text-gray-600">
              المنصة الرائدة في ترجمة وتعليم اللغة الأمازيغية
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="relative h-64 bg-gradient-to-r from-amazigh-primary to-amazigh-secondary overflow-hidden">
              <div className="absolute inset-0 bg-[url('/lovable-uploads/66817974-0562-4fa2-9445-a4a8a67a2bc1.png')] bg-center bg-cover opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl font-bold text-white">ⴰⵎⴰⵡⴰⵍ-ⵉⵏⵓ</h2>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-amazigh-dark mb-4 text-right">مهمتنا</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-right">
                نسعى في AMAWAL-INU إلى الحفاظ على اللغة الأمازيغية ونشرها من خلال توفير أدوات ترجمة وموارد تعليمية متميزة. هدفنا هو جعل تعلم اللغة الأمازيغية متاحاً للجميع، وتعزيز التواصل بين مختلف المجتمعات الأمازيغية والعالم.
              </p>
              
              <h3 className="text-2xl font-semibold text-amazigh-dark mb-4 text-right">رؤيتنا</h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-right">
                نطمح أن نكون المنصة الرائدة عالمياً في مجال ترجمة وتعليم اللغة الأمازيغية، من خلال توظيف أحدث التقنيات والابتكارات في مجال اللغويات الحاسوبية والذكاء الاصطناعي.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <Globe className="w-12 h-12 text-amazigh-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-amazigh-dark mb-2 text-center">تنوع اللهجات</h4>
                  <p className="text-gray-600 text-center">
                    نحرص على تمثيل مختلف اللهجات الأمازيغية وتوثيقها للحفاظ على الإرث اللغوي الغني.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-center mb-4">
                    <BookOpen className="w-12 h-12 text-amazigh-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-amazigh-dark mb-2 text-center">موارد تعليمية</h4>
                  <p className="text-gray-600 text-center">
                    نوفر مصادر متنوعة لتعلم اللغة الأمازيغية من قواميس وأمثلة واستخدامات للكلمات في سياقات مختلفة.
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-amazigh-dark mb-4 text-right">مصادرنا</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-right">
                  نعتمد في قاموسنا على مصادر موثوقة ومتنوعة، بما في ذلك:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 text-right">
                  <li>المعهد الملكي للثقافة الأمازيغية (IRCAM)</li>
                  <li>قاموس Msmun</li>
                  <li>مشروع Tawalt بنسختيه الفرنسية والعربية</li>
                  <li>مساهمات من خبراء لغويين وباحثين متخصصين</li>
                </ul>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-amazigh-dark mb-4 text-right">فريقنا</h3>
                <div className="flex items-center justify-center mb-6">
                  <Users className="w-16 h-16 text-amazigh-primary" />
                </div>
                <p className="text-gray-600 leading-relaxed text-center">
                  يضم فريقنا نخبة من الخبراء اللغويين والمبرمجين ومصممي واجهات المستخدم الذين يعملون معاً لتوفير تجربة استخدام متميزة.
                </p>
              </div>
              
              <div className="mt-12 text-center">
                <div className="inline-flex items-center">
                  <Heart className="w-6 h-6 text-red-500 mr-2" />
                  <p className="text-gray-600">شكراً لاستخدامكم AMAWAL-INU</p>
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

export default About;
