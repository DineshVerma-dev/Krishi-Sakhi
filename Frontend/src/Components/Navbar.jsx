import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translateAll } from "../utils/translateAll";

const englishLabels = {
  home: "Home",
  chatbot: "Chatbot",
  smartengine: "Smart Engine",
  overview: "Overview",
  profile : "Profile",
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
        <a href="https://studio--krishi-sakhi-2-97250922-56aa0.us-central1.hosted.app/">{labels.chatbot}</a>
        <a href="/smartengine">{labels.smartengine}</a>
        <a href="https://v0-farming-assistant-app-rust.vercel.app/">{labels.overview}</a>
        <a href="/profile">{labels.profile}</a>
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
