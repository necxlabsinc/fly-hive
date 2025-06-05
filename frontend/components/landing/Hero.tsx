import React from "react";
import Carousel from "@/components/Carousel";
import BookingSearchBar from "@/components/BookingSearchBar";
export default function Hero() {
  return (
    <div>
      <div className="relative px-2 pt-20 lg:px-8 bg-[url('/hero-photot.jpg')] bg-no-repeat bg-cover bg-top-right landing-hero">
        <div className="mx-auto max-w-6xl py-2 sm:py-48 lg:py-50 ">
          <div className="text-center mb-52">
            <h1 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl landing-text">
              Discover the World, One Flight at a Time with Fly Hive
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-50 sm:text-xl/8">
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
      <BookingSearchBar/>
      <Carousel/>
    </div>
  );
}
