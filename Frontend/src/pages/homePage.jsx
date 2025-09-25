import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineQrcode } from "react-icons/ai";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { translateAll } from "../utils/translateAll";
import TypewriterText from "../Components/TypeWriter";

// ✅ Default English text
const enText = {
  title: "Welcome to Krishi Sakhi",
  desc: "Modern technology to help you streamline your farming activities and increase your yield.",
  getStarted: "Get Started",
  scanAadhaar: "Scan Aadhaar Card",
};

export default function HomePage() {
  const { language } = useLanguage();
  const [text, setText] = useState(enText);

  useEffect(() => {
    const load = async () => {
      if (language === "ml") {
        const cached = localStorage.getItem("homepage-ml");
        if (cached) {
          setText(JSON.parse(cached));
        } else {
          const translated = await translateAll(enText, "ml");
          setText(translated);
          localStorage.setItem("homepage-ml", JSON.stringify(translated));
        }
      } else {
        setText(enText);
      }
    };
    load();
  }, [language]);

  return (
    <>
      <Navbar />

      {/* ✅ Hero Section */}
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 flex flex-col justify-center items-center px-6 py-12 text-center relative overflow-hidden">
        <main className="max-w-5xl w-full">
          {/* Animated Slogan */}
         <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
  <TypewriterText />
</h1>


          {/* Static Title */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            {text.title}
          </h2>

          {/* Description */}
          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            {text.desc}
          </p>

          {/* Illustration */}
          <div className="relative flex justify-center mb-12">
            <div className="absolute -inset-6 bg-green-200/40 blur-3xl rounded-full animate-pulse"></div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7a2fsXzEpsUS5TtOGKrkE4DQk3Yw7ZQOZ-jYuEW3frSFTV9XrWgTTZhTtjUSn2aG7dGTtoUTliF11kzn-yEE5_5B7_u0APdtUTpCF_PHb7rcPaXEUd7incK6mLdMWG9UiFcBLw8hd1TcK1E1TR0J8Cpbcagyw_o7_OyWJZT1CWSgTBuON_QLtI3x3cb1lxjGfmSwB681V6E8lfY4L3N7USDS7iZuu4vilrT4yea64dK-nq8tjJCArbS-YTq5B-UUmIoK8LfEoc11a"
              alt="Farmer standing in crop field"
              className="relative max-w-xs sm:max-w-sm md:max-w-md w-full rounded-2xl shadow-lg"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <span>{text.getStarted}</span>
              <BsArrowRight className="h-5 w-5" />
            </button>

            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium shadow-sm hover:bg-gray-50 transition-all duration-300">
              <AiOutlineQrcode className="h-5 w-5 text-gray-600" />
              <span>{text.scanAadhaar}</span>
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
