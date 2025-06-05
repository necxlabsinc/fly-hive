import React from "react";
import ProviderData from "./Provider-data";
import { div } from "framer-motion/client";

export default function providers() {
  return (
    <div className="">
      <h1 className="uppercase font-bold text-center mt-15">
        Top Rated Providers
      </h1>
      <p className="text-gray-500 text-center mb-15 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laboriosam
        odit libero?
      </p>
      <div className="flex flex-row gap-5 justify-center item-center m-3 w-[80%] mx-auto ">
        {ProviderData.map((providers) => (
          <div className="landing-providers shadow-lg rounded-lg px-20 py-10">
            <img
              className="size-[120px] border-[2px] border-solid border-gray-50 rounded-[50%] object-cover shadow-sm mb-5"
              src={providers.Img}
              alt=""
            />
            <h2 className=" font-bold mb-8">{providers.title}</h2>
            <span className="mr-2 bg-yellow-500 p-1 rounded-7">
              {providers.rate}
            </span>
            <span className=" text-gray-500">{providers.reviews}</span>
          </div>
        ))}

      </div>

        <div className="my-15">
          <div className=" w-[80%] mx-auto flex flex-row gap-3 ">
          {/* package1 */}
          <div className="flex flex-row gap-3 justify-center item-center bg-green-50 py-2 rounded-lg border-solid border-2 border-green-500 rounded-[6px]">
            {/* icon */}
            <div className="w-12 h-12 rounded-3xl flex item-center">
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="text-bold text-black">VIP Packages</h1>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          {/* package2 */}
          <div className="py-2 flex flex-row gap-3 justify-center item-center bg-purple-50  rounded-lg border-solid border-2 border-purple-500 rounded-[6px]">
            {/* icon */}
            <div className="w-12 h-12 rounded-3xl flex item-center">
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="text-bold text-black">Travel Packages</h1>
              <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui.</p>
            </div>
          </div>
          {/* package3 */}
          <div className="py-2 flex flex-row gap-3 justify-center item-center bg-blue-50  rounded-lg border-solid border-2 border-blue-500 rounded-[6px]">
            {/* icon */}
            <div className="w-12 h-12 rounded-3xl flex item-center">
              <img src="" alt="" />
            </div>
            <div>
              <h1 className="text-bold text-black">Best Price Guarantee</h1>
              <p className="text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing..</p>
            </div>
          </div>
          
        </div>
        
        </div>
    </div>
  );
}
