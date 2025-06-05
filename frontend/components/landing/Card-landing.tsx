import React from "react";
import cardData from "./card-data";
import { div } from "framer-motion/client";

export default function card() {
  return (
    <div className="card">
      <h1 className="uppercase font-bold text-center">A New Experience with aevery Flight</h1>
      <p className="text-gray-500 text-center mb-12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt mollitia non molestias?</p>

      <div className="card-flex flex flex-row gap-2 flex-wrap">
        {cardData.map((card) => (
          <div className=" card-img w-xs shadow-lg rounded-lg">
            <div className="">
              <img src={card.Img} alt="image" />
            </div>
            <div className="sub-card p-3">
              <h1 className="font-bold capitalize">{card.title}</h1>
              <span className="span-text text-sm mr-4">Arrival {card.arrival}</span>
              <span className="text-sm">Departure {card.departure}</span>
              <p>{card.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
