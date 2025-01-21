// Updated Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      className="my-10"
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/dL8k4WF/cloud-3362004-1280.jpg"
          alt="Career Counseling"
          className="w-full h-96 object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/VLN5Zt2/pexels-photo-3045245.jpg"
          alt="Resume Review"
          className="w-full h-96 object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/bWkQpgd/pexels-photo-326514.jpg"
          alt="Interview Preparation"
          className="w-full h-96 object-fill"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/HVKm2CG/mobile-phone-6170575-1280.jpg"
          alt="Job Matching"
          className="w-full h-96 object-fill"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
