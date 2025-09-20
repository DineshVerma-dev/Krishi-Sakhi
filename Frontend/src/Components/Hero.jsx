import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function KrishiSakhiLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-green-500 rounded-lg w-8 h-8 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <polygon points="10,3 17,17 3,17" fill="#fff" />
              </svg>
            </div>
            <span className="font-bold text-xl text-gray-800">Krishi Sakhi</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Home</a> */}
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">Home</Link>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Services</a>
            <Link to="/about" className="text-green-600 font-medium border-b-2 border-green-600">
  About
</Link>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</a>
          </div>
          
          <a
            href="#"
            className="hidden md:block bg-green-500 hover:bg-green-600 transition text-white px-5 py-2.5 rounded-lg font-medium"
          >
            Download App
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium py-2">Services</a>
              <a href="#" className="text-green-600 font-medium py-2 border-l-4 border-green-600 pl-2">About</a>
              <a href="#" className="text-gray-700 hover:text-green-600 font-medium py-2">Contact</a>
              <a
                href="#"
                className="bg-green-500 hover:bg-green-600 transition text-white px-5 py-2.5 rounded-lg font-medium text-center"
              >
                Download App
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-green-600 text-lg font-semibold mb-3">
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Kerala's Farmers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Krishi Sakhi is an AI-powered personal farming assistant designed to empower smallholder farmers in Kerala. Our mission is to enhance agricultural productivity and sustainability by providing farmers with personalized, data-driven insights and support.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            Benefits for Farmers
          </h2>
          <p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
            Discover how Krishi Sakhi can transform your farming practices and boost your livelihood.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Increased Yields */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M4 17l6-6 4 4 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-lg text-gray-900">Increased Yields</span>
              </div>
              <p className="text-gray-600">
                Optimize your farming practices with AI-powered recommendations for planting, harvesting, and everything in between.
              </p>
            </div>
            
            {/* Card 2: Data-Driven Decisions */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="4" y="10" width="4" height="8" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="10" y="6" width="4" height="12" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="16" y="2" width="4" height="16" rx="1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-lg text-gray-900">Data-Driven Decisions</span>
              </div>
              <p className="text-gray-600">
                Make informed decisions based on real-time data and predictive analytics, tailored to your specific farm conditions.
              </p>
            </div>
            
            {/* Card 3: Community Support */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 20h5v-2a6 6 0 00-9.33-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.1 20H11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-lg text-gray-900">Community Support</span>
              </div>
              <p className="text-gray-600">
                Connect with a network of fellow farmers and agricultural experts for valuable advice, support, and shared learning.
              </p>
            </div>
            
            {/* Card 4: Secure & Private */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 17v.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="4" y="11" width="16" height="7" rx="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 11V7a4 4 0 018 0v4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="font-bold text-lg text-gray-900">Secure & Private</span>
              </div>
              <p className="text-gray-600">
                Your farm data is valuable. We protect it with advanced security measures, ensuring your information remains private and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-3">
            Core Features
          </h2>
          <p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
            Explore the powerful tools Krishi Sakhi puts at your fingertips.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* Weather Forecasts */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="mx-auto mb-5 w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="5" strokeWidth="2" stroke="currentColor" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth="2" stroke="currentColor" />
                </svg>
              </div>
              <div className="font-bold text-gray-900 mb-2 text-lg">Weather Forecasts</div>
              <div className="text-gray-600 text-sm">
                Stay ahead with accurate weather forecasts tailored to your location.
              </div>
            </div>
            
            {/* Irrigation Management */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="mx-auto mb-5 w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 2C12 2 7 8.5 7 13a5 5 0 0010 0c0-4.5-5-11-5-11z" strokeWidth="2" stroke="currentColor" />
                </svg>
              </div>
              <div className="font-bold text-gray-900 mb-2 text-lg">Irrigation Management</div>
              <div className="text-gray-600 text-sm">
                Optimize water usage with smart irrigation scheduling.
              </div>
            </div>
            
            {/* Crop Recommendations */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="mx-auto mb-5 w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 17v-8M12 17a5 5 0 00-5-5h0A5 5 0 0112 7a5 5 0 015 5h0a5 5 0 00-5 5z" strokeWidth="2" stroke="currentColor" />
                  <rect x="10" y="17" width="4" height="3" rx="1" strokeWidth="2" stroke="currentColor"/>
                </svg>
              </div>
              <div className="font-bold text-gray-900 mb-2 text-lg">Crop Recommendations</div>
              <div className="text-gray-600 text-sm">
                Get personalized crop recommendations based on your farm's conditions.
              </div>
            </div>
            
            {/* Market Insights */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="mx-auto mb-5 w-16 h-16 flex items-center justify-center rounded-full bg-green-100">
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <rect x="3" y="6" width="18" height="13" rx="2" strokeWidth="2" stroke="currentColor"/>
                  <path d="M16 10v6M8 10v6" strokeWidth="2" stroke="currentColor"/>
                </svg>
              </div>
              <div className="font-bold text-gray-900 mb-2 text-lg">Market Insights</div>
              <div className="text-gray-600 text-sm">
                Access real-time market prices and trends for your produce.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Support Section */}
      <section className="py-16 bg-green-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Technology & Security */}
              <div>
                <div className="flex items-center mb-5">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Technology & Security</h3>
                </div>
                <p className="text-gray-600">
                  Krishi Sakhi leverages cutting-edge technologies, including Google Stitch for seamless data integration and advanced AI/ML algorithms for predictive analytics and personalized recommendations. Our platform ensures data privacy and security while delivering powerful insights to your fingertips.
                </p>
              </div>
              
              {/* Contact & Support */}
              <div>
                <div className="flex items-center mb-5">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Contact & Support</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  For any questions or support, please reach out to us at{" "}
                  <a href="mailto:support@krishisakhi.com" className="text-green-600 font-medium hover:underline">
                    support@krishisakhi.com
                  </a>
                  {" "}or visit our FAQs section for common queries.
                </p>
                <p className="text-gray-600">
                  We are here to help you succeed in your farming journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming Experience?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Download Krishi Sakhi today and join thousands of farmers who are already benefiting from our AI-powered agricultural assistant.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-white text-green-600 hover:bg-gray-100 transition px-8 py-4 rounded-lg font-bold text-lg shadow-lg"
            >
              Download for Android
            </a>
            <a
              href="#"
              className="bg-green-700 text-white hover:bg-green-800 transition px-8 py-4 rounded-lg font-bold text-lg shadow-lg"
            >
              Download for iOS
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="bg-green-500 rounded-lg w-8 h-8 flex items-center justify-center mr-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <polygon points="10,3 17,17 3,17" fill="#fff" />
                </svg>
              </div>
              <span className="font-bold text-xl">Krishi Sakhi</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <a href="/privacy-policy" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/about" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">
                About Us
              </a>
              <a href="/contact" className="text-gray-300 hover:text-green-400 text-sm transition-colors duration-200">
                Contact
              </a>
            </div>
            
            <div className="flex space-x-5">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}