// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-sm px-4 sm:px-6 lg:px-8 py-3">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <div className="flex items-center space-x-2">
//           <div className="bg-green-500 rounded-lg w-8 h-8 flex items-center justify-center">
//             <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//               <polygon points="10,3 17,17 3,17" fill="#fff" />
//             </svg>
//           </div>
//           <span className="font-bold text-xl text-gray-800">Krishi Sakhi</span>
//         </div>

//         {/* Desktop nav links */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
//           <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Services</a>
//           <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium">About</Link>
//           <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
//         </div>

//         <a href="#" className="hidden md:block bg-green-500 hover:bg-green-600 transition text-white px-5 py-2.5 rounded-lg font-medium">
//           Download App
//         </a>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden text-gray-700"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white py-4 px-4 shadow-lg">
//           <div className="flex flex-col space-y-4">
//             <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
//             <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Services</a>
//             <Link to="/about" className="text-green-600 font-medium border-l-4 border-green-600 pl-2">About</Link>
//             <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Contact</a>
//             <a href="#" className="bg-green-500 hover:bg-green-600 transition text-white px-5 py-2.5 rounded-lg font-medium text-center">
//               Download App
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }
import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translateAll } from "../utils/translateAll";

const englishLabels = {
  home: "Home",
  services: "Services",
  about: "About",
  contact: "Contact",
  button: "Download App",
};

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [labels, setLabels] = useState(englishLabels);

  useEffect(() => {
    async function load() {
      if (language === "ml") {
        const t = await translateAll(englishLabels, "ml");
        setLabels(t);
      } else {
        setLabels(englishLabels);
      }
    }
    load();
  }, [language]);

  return (
    <nav className="flex items-center justify-between p-4 shadow">
      <div className="text-green-700 font-bold text-xl">Krishi Sakhi</div>

      <div className="flex gap-6">
        <a href="/">{labels.home}</a>
        <a href="/services">{labels.services}</a>
        <a href="/about">{labels.about}</a>
        <a href="/contact">{labels.contact}</a>
      </div>

      <div className="flex gap-3">
        <button className="bg-green-600 text-white px-4 py-1 rounded">
          {labels.button}
        </button>
        <button
          onClick={toggleLanguage}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          {language === "ml" ? "EN" : "ML"}
        </button>
      </div>
    </nav>
  );
}
