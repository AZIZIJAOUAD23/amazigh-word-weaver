
import { Search, BookOpen, Languages, Copy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="w-12 h-12 text-amazigh-primary" />,
      title: "بحث متقدم",
      description: "ابحث عن الكلمات في اللغة الأمازيغية بسهولة باستخدام محرك البحث المتقدم الذي يدعم الأبجدية الأمازيغية والعربية والفرنسية."
    },
    {
      icon: <BookOpen className="w-12 h-12 text-amazigh-primary" />,
      title: "قاموس شامل",
      description: "استكشف قاموساً غنياً يضم آلاف الكلمات والمصطلحات الأمازيغية مع ترجماتها وتعريفاتها بالعربية والفرنسية."
    },
    {
      icon: <Languages className="w-12 h-12 text-amazigh-primary" />,
      title: "تعلم اللغة",
      description: "تعلم اللغة الأمازيغية من خلال أمثلة واضحة ومعلومات حول أصل الكلمات واستخداماتها المختلفة."
    },
    {
      icon: <Copy className="w-12 h-12 text-amazigh-primary" />,
      title: "نسخ سهل",
      description: "انسخ النص الأمازيغي بسهولة للاستخدام في مستنداتك ورسائلك، مع دعم كامل للخط الأمازيغي."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amazigh-dark mb-4">ميزات موقعنا</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم تجربة فريدة للترجمة والتعلم باستخدام أحدث التقنيات لخدمة اللغة الأمازيغية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-all duration-300 hover:border-amazigh-primary border border-transparent">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-amazigh-dark mb-3 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
