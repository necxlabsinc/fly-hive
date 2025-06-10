import React from "react";
import ProviderData from "./Provider-data";
import { div } from "framer-motion/client";
import { MdAirplaneTicket } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

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
       
      <div className="my-15 bg-gray-50 py-15">
        <div className=" w-[80%] mx-auto flex flex-row  flex-wrap justify-center gap-9 ">
          {/* package1 */}
          <div className="py-2 text-center py-[64px] px-[32px] flex flex-row gap-3 justify-center item-center bg-white-50   border-none shadow-md rounded-[120px] h-[300px] w-[240px]">
            <div>
              {/* icon */}
            <div className=" rounded-3xl flex item-center">
              <BsStars className="text-red-500 w-12 h-12 mb-9 ml-14"/>
            </div>
            <div>
              <h1 className=" font-bold  text-black">VIP Packages</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
              </p>
            </div>
            </div>
            
          </div>
          {/* package2 */}
          <div className="py-2 text-center py-[64px] px-[32px] flex flex-row gap-3 justify-center item-center bg-white-50   border-none shadow-md rounded-[120px] h-[300px] w-[240px]">
            <div className=" w-[250px]">
              {/* icon */}
              <div className=" rounded-3xl flex item-center">
               <FaSuitcase className="text-red-500 w-12 h-12 mb-9 ml-14" />
              </div>
              <div>
                <h1 className="font-bold  text-black">Travel Packages</h1>
                <p className="text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui.
                </p>
              </div>
            </div>
          </div>
          {/* package3 */}
          <div className="py-2 text-center py-[64px] px-[32px] flex flex-row gap-3 justify-center item-center bg-white-50   border-none shadow-md rounded-[120px] h-[300px] w-[240px]">
            <div>
                  {/* icon */}
            <div className=" rounded-3xl flex item-center">
              <MdAirplaneTicket className="text-red-500 w-12 h-12 ml-14 mb-9 " />
            </div>
            <div>
              <h1 className="font-bold text-black">Best Price Guarantee</h1>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing..
              </p>
            </div>
          </div>
            </div>
        
        </div>
      </div>
    </div>
  );
}
