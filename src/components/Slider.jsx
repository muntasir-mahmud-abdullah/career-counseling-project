import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} className="my-10">
      <SwiperSlide>
        <div className="h-64 bg-blue-500 flex justify-center items-center text-white text-4xl font-bold">
          Unlock Your Potential with Career Counseling
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-64 bg-green-500 flex justify-center items-center text-white text-4xl font-bold">
          Craft a Winning Resume with Expert Help
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-64 bg-red-500 flex justify-center items-center text-white text-4xl font-bold">
          Find Your Dream Job with Tailored Matches
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
