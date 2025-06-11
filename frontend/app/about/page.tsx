"use client";

import React from "react";

function About() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="about_us"
        className="relative w-full h-[35rem] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src="/about.jpg"
          alt="About background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white z-10" />

        {/* Text Content */}
        <div className="relative z-20 max-w-4xl text-center px-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-white leading-relaxed">
            At <span className="font-semibold text-red-400">Fly-hive</span>,
            travel is more than reaching new places — it's about turning every
            journey into unforgettable memories. Whether it's Rome’s ancient
            streets or the Northern Lights, we bring your dream destinations to
            life.
          </p>
          <a
            href="#"
            className="inline-block bg-red-600 text-white font-semibold px-7 mt-4 py-3 rounded-full shadow-md hover:bg-red-700 transition duration-300"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Detail Section */}
      <section className="bg-white py-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* Text Column */}
          <div>
            <h2 className="text-4xl font-bold text-red-700 mb-4">
              Your Adventure, Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              From exotic getaways to cultural expeditions, we design each trip
              with care and passion.
              <br />
              With 24/7 support, personalized plans, and a deep love for
              discovery, we’re your trusted co-pilot.
            </p>
            <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
              <li>🌍 Custom Tours Across 50+ Countries</li>
              <li>🧳 Family, Solo, and Luxury Packages</li>
              <li>📅 Flexible Dates & Last-Minute Deals</li>
              <li>🏆 4.9⭐ Rated by Thousands of Happy Travelers</li>
            </ul>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-red-600 text-white font-semibold px-7 py-3 rounded-full shadow-md hover:bg-red-700 transition duration-300"
              >
                Start Your Journey
              </a>
            </div>
          </div>

          {/* Visual/Illustration Column */}
          <div className="relative w-full h-[25rem] rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/about.jpg"
              alt="Travel Showcase"
              className="w-full h-full object-cover rounded-3xl hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-800/30 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
