// import React from 'react';

// // Import icons from react-icons
// import { BsArrowRight } from 'react-icons/bs';
// import { AiOutlineQrcode } from 'react-icons/ai';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';

// // Import your image asset
// // Make sure the path is correct based on your project structure
// //import farmerIllustration from '../assets/farmer-illustration.png'; 

// function HomePage() {
//   return (
//     <>
//     <Navbar />
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
//       <main className="max-w-3xl w-full">
//         {/* Header Text */}
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
//           Welcome to Krishi Sakhi
//         </h1>
//         <p className="text-md md:text-lg text-gray-600 max-w-xl mx-auto mb-10">
//           Modern technology to help you streamline your farming activities and increase your yield.
//         </p>

//         {/* Illustration Section */}
//         <div className="bg-orange-50 rounded-2xl p-4 md:p-6 shadow-sm mb-10 inline-block">
//           <img
//             src= "https://lh3.googleusercontent.com/aida-public/AB6AXuD7a2fsXzEpsUS5TtOGKrkE4DQk3Yw7ZQOZ-jYuEW3frSFTV9XrWgTTZhTtjUSn2aG7dGTtoUTliF11kzn-yEE5_5B7_u0APdtUTpCF_PHb7rcPaXEUd7incK6mLdMWG9UiFcBLw8hd1TcK1E1TR0J8Cpbcagyw_o7_OyWJZT1CWSgTBuON_QLtI3x3cb1lxjGfmSwB681V6E8lfY4L3N7USDS7iZuu4vilrT4yea64dK-nq8tjJCArbS-YTq5B-UUmIoK8LfEoc11a"
//             alt="An illustration of a farmer standing in a crop field"
//             className="max-w-sm md:max-w-md w-full rounded-xl"
//           />
//         </div>

//         {/* Action Buttons Section */}
//         <div className="flex flex-col items-center space-y-4">
//           {/* Primary "Get Started" Button */}
//           <button className="flex items-center justify-center gap-2 w-full max-w-xs px-8 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
//             <span>Get Started</span>
//             <BsArrowRight className="h-5 w-5" />
//           </button>

//           {/* Secondary "Scan Aadhaar" Button */}
//           <button className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300">
//             <AiOutlineQrcode className="h-5 w-5 text-gray-600" />
//             <span>Scan Aadhaar Card</span>
//           </button>
//         </div>
//       </main>
//     </div>
//     <Footer />
//     </>
//   );
// }

// export default HomePage;
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineQrcode } from "react-icons/ai";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { translateAll } from "../utils/translateAll";

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
        // Check if we have cached Malayalam translations
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

      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
        <main className="max-w-3xl w-full">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            {text.title}
          </h1>

          {/* Description */}
          <p className="text-md md:text-lg text-gray-600 max-w-xl mx-auto mb-10">
            {text.desc}
          </p>

          {/* Illustration */}
          <div className="bg-orange-50 rounded-2xl p-4 md:p-6 shadow-sm mb-10 inline-block">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7a2fsXzEpsUS5TtOGKrkE4DQk3Yw7ZQOZ-jYuEW3frSFTV9XrWgTTZhTtjUSn2aG7dGTtoUTliF11kzn-yEE5_5B7_u0APdtUTpCF_PHb7rcPaXEUd7incK6mLdMWG9UiFcBLw8hd1TcK1E1TR0J8Cpbcagyw_o7_OyWJZT1CWSgTBuON_QLtI3x3cb1lxjGfmSwB681V6E8lfY4L3N7USDS7iZuu4vilrT4yea64dK-nq8tjJCArbS-YTq5B-UUmIoK8LfEoc11a"
              alt="An illustration of a farmer standing in a crop field"
              className="max-w-sm md:max-w-md w-full rounded-xl"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center space-y-4">
            <button className="flex items-center justify-center gap-2 w-full max-w-xs px-8 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <span>{text.getStarted}</span>
              <BsArrowRight className="h-5 w-5" />
            </button>

            <button className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-300">
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
