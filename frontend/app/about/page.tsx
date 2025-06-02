
import React from 'react';
import image_1 from "../assets/images/image_1.jpg"

function About() {
  return (
    <section id="about_us" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-red-700 mb-4">About Us</h1>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Smart Travel Starts With Us
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            At DreamsTours, travel is more than reaching new places—it's about
            turning every journey into unforgettable memories. Whether you
            dream of exploring Rome's ancient streets, sailing the Maldives'
            turquoise waters, hiking the Andes, or chasing the Northern
            Lights, we bring your bucket list to life. We specialize in
            curated, around-the-world adventures for dreamers, couples,
            families, and solo explorers, blending comfort, culture, and
            authenticity to match your unique travel style.
          </p>
          <a
            href="#"
            className="inline-block bg-red-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-red-700 transition"
          >
            Book now
          </a>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
          src={image_1.src}
            alt="Travel experience"
            className="rounded-xl shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;