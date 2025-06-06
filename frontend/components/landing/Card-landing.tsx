/* import React from "react";
import cardData from "./card-data";
import { div } from "framer-motion/client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function card() {
  return (
    <div className="card">
      <h1 className="uppercase font-bold text-center">
        A New Experience with aevery Flight
      </h1>
      <p className="text-gray-500 text-center mb-12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt mollitia
        non molestias?
      </p>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm ml-84"
      >
        <CarouselContent className="w-[100%]">
          {cardData.map((card) => (
            <CarouselItem className="w-[100%]">
              <div className="p-1">
                <div className=" card-img  shadow-lg rounded-lg">
                  <div className="w-[100%]">
                    <img src={card.Img} alt="image" />
                  </div>
                  <div className="sub-card p-3">
                    <h1 className="font-bold capitalize">{card.title}</h1>

                    <div className=" ">
                      <span className="span-text text-sm mr-4">
                        
                        {card.arrival}
                      </span>
                      <img className="mx-5 " src="/plane-solid.svg" alt="" />
                      <span className="text-sm"> {card.departure}</span>
                    </div>

                    <p>{card.price}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
 */