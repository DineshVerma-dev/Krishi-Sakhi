import React, { useState } from 'react';
import { FiTarget } from 'react-icons/fi';
import { AiOutlineQrcode } from 'react-icons/ai';
import { BsMic } from 'react-icons/bs';

function FarmDetailsForm() {
  // State to hold the values of the form fields
  const [farmName, setFarmName] = useState('');
  const [location, setLocation] = useState('');
  const [farmSize, setFarmSize] = useState('');
  const [primaryCrop, setPrimaryCrop] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default browser refresh
    const farmDetails = {
      farmName,
      location,
      farmSize,
      primaryCrop,
    };
    console.log('Farm Details:', farmDetails);
    alert('Details submitted successfully! Check the browser console for the data.');
  };

  return (
    // Main background container
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      {/* Form Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-8">
          Enter Your Farm Details
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Farm Name Input */}
          <div>
            <label htmlFor="farmName" className="block mb-2 text-sm font-medium text-gray-700">
              Farm Name
            </label>
            <input
              type="text"
              id="farmName"
              placeholder="e.g., My Farm"
              value={farmName}
              onChange={(e) => setFarmName(e.target.value)}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            />
          </div>

          {/* Location Input */}
          <div>
            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-700">
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                id="location"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 hover:text-green-600"
                aria-label="Get current location"
              >
                <FiTarget className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Farm Size Input */}
          <div>
            <label htmlFor="farmSize" className="block mb-2 text-sm font-medium text-gray-700">
              Farm Size (in acres)
            </label>
            <input
              type="number"
              id="farmSize"
              placeholder="e.g., 5"
              value={farmSize}
              onChange={(e) => setFarmSize(e.target.value)}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
            />
          </div>

          {/* Primary Crops Dropdown */}
          <div>
            <label htmlFor="primaryCrops" className="block mb-2 text-sm font-medium text-gray-700">
              Primary Crops
            </label>
            <select
              id="primaryCrops"
              value={primaryCrop}
              onChange={(e) => setPrimaryCrop(e.target.value)}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition appearance-none bg-no-repeat bg-right-in-select"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em'
              }}
            >
              <option value="" disabled>Select a crop</option>
              <option value="wheat">Wheat</option>
              <option value="rice">Rice</option>
              <option value="corn">Corn</option>
              <option value="sugarcane">Sugarcane</option>
              <option value="cotton">Cotton</option>
            </select>
          </div>

          {/* Separator */}
          <div className="text-center text-xs font-semibold text-gray-400 uppercase">
            OR
          </div>

          {/* Alternative Input Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <AiOutlineQrcode className="h-5 w-5" />
              <span>Scan Aadhaar ID</span>
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <BsMic className="h-5 w-5" />
              <span>Use Voice Input</span>
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
          >
            Save Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default FarmDetailsForm;