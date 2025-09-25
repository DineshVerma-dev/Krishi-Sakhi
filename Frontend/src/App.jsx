import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HeroSection from "./pages/about";
import HomePage from "./pages/homePage";
import Profile from "./pages/farmProfiling";

function App() {
  
  return (
    <>
      <header>
        {/* <nav className="p-4 bg-white shadow flex gap-4">
          <Link to="/" className="text-green-700 font-medium">
            Home
          </Link>
          <Link to="/about" className="text-green-700 font-medium">
            About
          </Link>
        </nav> */}
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HeroSection />} />
          <Route path="/Profile" element={<Profile />} />
          <Route
            path="*"
            element={<h2 className="p-6 text-center">Page not found</h2>}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
