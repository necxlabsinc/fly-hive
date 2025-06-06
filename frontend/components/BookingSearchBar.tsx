// components/BookingSearchBar.tsx
'use client';

import { useState } from 'react';
import { FaSearchLocation, FaUser, FaCalendarAlt, FaSearch } from 'react-icons/fa';

export default function BookingSearchBar (){
  const [selectedClass, setSelectedClass] = useState('Business Class');

  const classes = ['Economy', 'Business Class', 'Fast Class'];

  return (
    <div className="w-full max-w-7xl mx-auto mb-10 bg-white shadow-md rounded-2xl p-6">
      {/* Flight Classes */}
      <div className="flex justify-center mb-6 bg-gray-100 rounded-full">
        {classes.map((item) => (
          <button
            key={item}
            className={`px-7 py-2 rounded-full text-sm font-medium transition ${
              selectedClass === item
                ? 'bg-red-600 text-white shadow'
                : 'text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setSelectedClass(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Search Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
        <div className="flex items-center gap-2">
          <FaSearchLocation className="text-red-600" />
          <div>
            <p className="text-sm font-semibold">Location</p>
            <p className="text-xs text-gray-500">Where are you going?</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaUser className="text-red-600" />
          <div>
            <p className="text-sm font-semibold">Travelers</p>
            <p className="text-xs text-gray-500">Add guests</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-red-600" />
          <div>
            <p className="text-sm font-semibold">Check in</p>
            <p className="text-xs text-gray-500">Add date</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-red-600" />
          <div>
            <p className="text-sm font-semibold">Check out</p>
            <p className="text-xs text-red-500">Add date</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-red-600 text-white p-3 rounded-full">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};
