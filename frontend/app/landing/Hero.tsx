import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="relative px-2 pt-20 lg:px-8">
        <div className="mx-auto max-w-6xl py-2 sm:py-48 lg:py-50">
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              Discover the World, One Flight at a Time with Fly Hive
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Your ultimate destination for all things to help you celebrate &
              remember tour experiences.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl py-6 px-7 text-center font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
        Get Started with Us
      </h1>
      <div className="max-w-[90%] mx-auto bg-white rounded-lg p-10 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <select className="px-3 py-2 border border-gray-300 rounded-md text-gray-900">
            <option>Day</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-md text-gray-900">
            <option>From</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-md text-gray-900">
            <option>To</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-md text-gray-900">
            <option>Time</option>
          </select>
          <button className=" rounded-md  bg-blue-600 hover:bg-blue-700 w-full text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
