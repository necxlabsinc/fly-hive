import React from "react";

export default function Footer () {
  return (
    <>
      <footer className="bg-white-600 text-black px-6 py-10 border-1 border-t-red-600">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* CTA Section */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="bg-white text-red-600 rounded-full p-3">
                {/* Shield Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 12l9 4.5V6l-9-4.5L3 6v10.5L12 12z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold">Book A Flight Today</h2>
            <button className="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-red-100 transition">
              Book A Flight →
            </button>
          </div>

          {/* Grid Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
            {/* Contact */}
            <div>
              <h4 className="font-bold mb-2">Contact</h4>
              <p>📞 +254712345678</p>
              <p>
                📍 00100, Mfangano Street
                <br />
                Nairobi, Kenya
              </p>
              <p>✉️ hello@flyhive.com</p>
            </div>

            {/* Navigate */}
            <div>
              <h4 className="font-bold mb-2">Navigate</h4>
              <ul className="space-y-1">
                <li>Services</li>
                <li>Success Stories</li>
                <li>Discover</li>
                <li>Care</li>
                <li>Download App</li>
              </ul>
            </div>

            {/* Solution */}
            <div>
              <h4 className="font-bold mb-2">Solution</h4>
              <ul className="space-y-1">
                <li>Get in Touch</li>
                <li>Technology</li>
                <li>Who’re We?</li>
                <li>Expertise</li>
              </ul>
            </div>

            {/* Discover */}
            <div>
              <h4 className="font-bold mb-2">Discover</h4>
              <ul className="space-y-1">
                <li>Latest News</li>
                <li>New Arrivals</li>
                <li>Solution</li>
                <li>Gain Profession</li>
                <li>Career</li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-bold mb-2">Follow Us</h4>
              <ul className="space-y-1">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-red-400 pt-6 text-xs flex flex-col md:flex-row justify-between">
            <p>
              ©Copyright <span className="underline">flyhive.com</span> All
              rights reserved. 2025
            </p>
            <div className="space-x-4 mt-2 md:mt-0">
              <a href="#">Privacy & Policy</a>
              <a href="#">Terms & Condition</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
