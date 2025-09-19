import React from "react";

export default function Footer() {
  return (
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
            <a href="/privacy-policy" className="text-gray-300 hover:text-green-400 text-sm">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-300 hover:text-green-400 text-sm">Terms of Service</a>
            <a href="/about" className="text-gray-300 hover:text-green-400 text-sm">About Us</a>
            <a href="/contact" className="text-gray-300 hover:text-green-400 text-sm">Contact</a>
          </div>

          <div className="flex space-x-5">
            <a href="#" className="text-gray-300 hover:text-green-400">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89
                  1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443
                  2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-green-400">
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
