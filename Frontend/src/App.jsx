// import { useState } from 'react'
// import { Routes, Route, Link } from "react-router-dom";
// import './App.css'
// import Hero from  './Components/Hero'
// import HomePage from './pages/homePage'

// function App() {
//   const [count, setCount] = useState(0)

//   return ( 
//     <>
//       <h1 className='bg-green-500 text-5xl text-center'>Krishi-Sakhi</h1>
//        <nav className="p-4 bg-white shadow flex gap-4">
//         <Link to="/" className="text-green-700 font-medium">Home</Link>
//         <Link to="/about" className="text-green-700 font-medium">About</Link>
//         </nav>

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<Hero />} />
//         {/* Catch-all for unknown URLs */}
//         <Route path="*" element={<h2 className="p-6 text-center">Page not found</h2>} />
//       </Routes>
//       {/* <Hero/>
//       <HomePage /> */}
//     </>
//   )
// }

// export default App
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
//import Hero from "./Components/Hero";
import HeroSection from './pages/about'
import HomePage from "./pages/homePage";

function App() {
  const [count, setCount] = useState(0);

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
          {/* Catch-all for unknown URLs */}
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
