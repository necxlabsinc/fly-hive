"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cardData from "./card-data";
import { div } from "framer-motion/client";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { BsArrowDownRightCircle } from "react-icons/bs";

/* const images = ["/image.jpg", "/image2.jpg", "/image3.jpg", "/image4.jpg"]; */

export default function Carousel() {
  return (
    <div className="card bg-gray-50">
      <div className=" w-full max-w-5xl mx-auto px-1 py-1">
        <h1 className="uppercase font-bold text-center">
          A New Experience with every Flight
        </h1>
        <p className="text-gray-500 text-center mb-12">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
          mollitia non molestias?
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          loop
          className="rounded-lg overflow-hidden"
        >
          {cardData.map((card) => (
            <SwiperSlide>
              <div className="p-1">
                <div className=" card-img  shadow-lg rounded-lg">
                  <div className="w-[100%]">
                    <img src={card.Img} alt="image" />
                  </div>
                  <div className="sub-card p-3">
                    <h1 className="font-bold capitalize">{card.title}</h1>

                    <div className=" mt-4">
                      <span className="span-text text-lg mr-4">
                        {card.arrival}
                      </span>
                      <img className="mx-14 text-red-500 inline " src="/plane-solid.svg" alt="" />
                      <span className="text-lg"> {card.departure}</span>
                    </div>
                   <BsArrowUpRightCircle className="text-blue-500 inline"/>
                   <span className="inline  text-xs mr-28">Nrb(Nairobi)</span>
                   <BsArrowDownRightCircle className="text-blue-500 inline" />
                   <span className="text-xs">Mb(Mombasa)</span>
                    <p className="text-xs pt-2">Total cost</p>

                    <p className="text-sm text-gray-500 text-bold">{card.price}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
