// import React from "react";
// import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";

// export default function HeroSection() {
//   return (
//     <>
//     <Navbar />
//     <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
//       <div className="max-w-4xl mx-auto text-center">
//         <div className="text-green-600 text-lg font-semibold mb-3">
//           About Us
//         </div>
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//           Empowering Kerala&apos;s Farmers
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
//           Krishi Sakhi is an AI-powered personal farming assistant designed to empower
//           smallholder farmers in Kerala. Our mission is to enhance agricultural productivity
//           and sustainability by providing farmers with personalized, data-driven insights
//           and support.
//         </p>
//       </div>
//     </section>
//     <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
//             Benefits for Farmers
//           </h2>
//           <p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
//             Discover how Krishi Sakhi can transform your farming practices and boost your livelihood.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Card 1: Increased Yields */}
//             <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="bg-green-100 p-2 rounded-lg mr-3">
//                   <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path d="M4 17l6-6 4 4 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <span className="font-bold text-lg text-gray-900">Increased Yields</span>
//               </div>
//               <p className="text-gray-600">
//                 Optimize your farming practices with AI-powered recommendations for planting, harvesting, and everything in between.
//               </p>
//             </div>
            
//             {/* Card 2: Data-Driven Decisions */}
//             <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="bg-green-100 p-2 rounded-lg mr-3">
//                   <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <rect x="4" y="10" width="4" height="8" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     <rect x="10" y="6" width="4" height="12" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     <rect x="16" y="2" width="4" height="16" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <span className="font-bold text-lg text-gray-900">Data-Driven Decisions</span>
//               </div>
//               <p className="text-gray-600">
//                 Make informed decisions based on real-time data and predictive analytics, tailored to your specific farm conditions.
//               </p>
//             </div>
            
//             {/* Card 3: Community Support */}
//             <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="bg-green-100 p-2 rounded-lg mr-3">
//                   <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path d="M17 20h5v-2a6 6 0 00-9.33-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     <path d="M5.1 20H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <span className="font-bold text-lg text-gray-900">Community Support</span>
//               </div>
//               <p className="text-gray-600">
//                 Connect with a network of fellow farmers and agricultural experts for valuable advice, support, and shared learning.
//               </p>
//             </div>
            
//             {/* Card 4: Secure & Private */}
//             <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
//               <div className="flex items-center mb-4">
//                 <div className="bg-green-100 p-2 rounded-lg mr-3">
//                   <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path d="M12 17v.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     <rect x="4" y="11" width="16" height="7" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     <path d="M8 11V7a4 4 0 018 0v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <span className="font-bold text-lg text-gray-900">Secure & Private</span>
//               </div>
//               <p className="text-gray-600">
//                 Your farm data is valuable. We protect it with advanced security measures, ensuring your information remains private and secure.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     <Footer />
//     </>
//   );
// }
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLanguage } from "../context/LanguageContext"; // <-- same context as used in HomePage
import { translateText } from "../utils/translate"; // <-- your translate helper

export default function HeroSection() {
  const { language } = useLanguage();
  const [translated, setTranslated] = useState({});

  // All texts in one place
  const content = {
    aboutTitle: "About Us",
    aboutHeading: "Empowering Kerala's Farmers",
    aboutDesc:
      "Krishi Sakhi is an AI-powered personal farming assistant designed to empower smallholder farmers in Kerala. Our mission is to enhance agricultural productivity and sustainability by providing farmers with personalized, data-driven insights and support.",
    benefitsTitle: "Benefits for Farmers",
    benefitsSubtitle:
      "Discover how Krishi Sakhi can transform your farming practices and boost your livelihood.",
    cards: [
      {
        title: "Increased Yields",
        desc: "Optimize your farming practices with AI-powered recommendations for planting, harvesting, and everything in between.",
      },
      {
        title: "Data-Driven Decisions",
        desc: "Make informed decisions based on real-time data and predictive analytics, tailored to your specific farm conditions.",
      },
      {
        title: "Community Support",
        desc: "Connect with a network of fellow farmers and agricultural experts for valuable advice, support, and shared learning.",
      },
      {
        title: "Secure & Private",
        desc: "Your farm data is valuable. We protect it with advanced security measures, ensuring your information remains private and secure.",
      },
    ],
  };

  // Translate all texts whenever language changes
  useEffect(() => {
    if (language === "en") {
      setTranslated(content);
      return;
    }

    async function doTranslate() {
      const entries = Object.entries(content);
      const result = { ...content };

      for (const [key, value] of entries) {
        if (typeof value === "string") {
          result[key] = await translateText(value, language);
        } else if (Array.isArray(value)) {
          result[key] = await Promise.all(
            value.map(async (item) => ({
              title: await translateText(item.title, language),
              desc: await translateText(item.desc, language),
            }))
          );
        }
      }
      setTranslated(result);
    }

    doTranslate();
  }, [language]);

  if (!translated.aboutTitle) return <div className="p-8 text-center">Loading…</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* --- About Section --- */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-green-600 text-lg font-semibold mb-3">
              {translated.aboutTitle}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {translated.aboutHeading}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {translated.aboutDesc}
            </p>
          </div>
        </section>

        {/* --- Benefits Section --- */}
        <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
              {translated.benefitsTitle}
            </h2>
            <p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
              {translated.benefitsSubtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {translated.cards?.map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                      {/* simple icon placeholder */}
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="font-bold text-lg text-gray-900">
                      {card.title}
                    </span>
                  </div>
                  <p className="text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
