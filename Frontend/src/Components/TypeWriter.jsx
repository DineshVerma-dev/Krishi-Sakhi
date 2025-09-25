import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText() {
  return (
    <span className="whitespace-nowrap overflow-hidden">
      <Typewriter
        words={[
          "Empowering Farmers",
          "AI-Powered Insights",
          "Smart Agriculture",
          "Sustainable Farming Solutions",
          "Boosting Crop Yields",
          "Data-Driven Decisions",
          "Personalized Farming Assistant",
          "Connecting Farmers & Markets",
          "Smart Irrigation Management",
          "Real-Time Weather Forecasts",
          "Secure & Private Farm Data",
          "Transforming Agriculture with AI",
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </span>
  );
}
