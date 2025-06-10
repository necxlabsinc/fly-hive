import React from "react";
import { IoBookmarks } from "react-icons/io5";

export default function chooseus() {
  return (
    <div>
      <div className=" mt-30 text-center">
        <h2 className="font-bold text-3xl font-blue-950">Fly in Style</h2>
        <h1 className="text-xl text-gray-500">
          Experience luxury in the sky like never before.Where comfort meets
          elegance at 30,000 feet.
        </h1>
      </div>
      <div className="flex md:flex-row gap-4 w-[80%] sm:flex-col sm:flex-col-reverse mx-auto jusfify-center">
        {/* main-box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-[40%] sm:w-[100%] gap-8 items-center">
          {/* box 1 */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className=" rounded-3xl flex item-center justify-center pl-.2 flex-col  bg-opacity-20">
                <IoBookmarks className="w-[15] h-[15] text-red-700 " />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Seamless Booking Experience
              </h1>
            </div>
            {/* description */}
            <p className="text-gray-500 text-sm">
              Intuitive interface for quick flight searches, real-time pricing
              and seat availability and one-click booking with saved traveler
              profiles
            </p>
          </div>
          {/* box 2 */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className=" rounded-3xl flex item-center justify-center pl-.2 flex-col  bg-opacity-20">
                <IoBookmarks className="w-[15] h-[15] text-red-700 " />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Personalized Recommendations
              </h1>
            </div>
            {/* description */}
            <p className="text-gray-500 text-sm">
             Tailored flight options based on past trips, smart filters: Wi-Fi, layovers, baggage and save preferences for faster planning every time.
            </p>
          </div>
          {/* box 3 */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className=" rounded-3xl flex item-center justify-center pl-.2 flex-col  bg-opacity-20">
                <IoBookmarks className="w-[15] h-[15] text-red-700 " />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Seamless Booking Experience
              </h1>
            </div>
            {/* description */}
            <p className="text-gray-500 text-sm">
              Intuitive interface for quick flight searches, real-time pricing
              and seat availability and one-click booking with saved traveler
              profiles
            </p>
          </div>
          {/* box 4 */}
          <div className="bg-white p-4 shadow-lg rounded-lg">
            <div className="flex items-center space-x-3">
              {/* icon */}
              <div className=" rounded-3xl flex item-center justify-center pl-.2 flex-col  bg-opacity-20">
                <IoBookmarks className="w-[15] h-[15] text-red-700 " />
              </div>
              {/* Heading */}
              <h1 className="text-lg font-bold text-gray-700">
                Seamless Booking Experience
              </h1>
            </div>
            {/* description */}
            <p className="text-gray-500 text-sm">
              Intuitive interface for quick flight searches, real-time pricing
              and seat availability and one-click booking with saved traveler
              profiles
            </p>
          </div>
        </div>
        <div className="w-[60%] sm:w-[100%]">
          <img className="" src="/crusing-plane.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
