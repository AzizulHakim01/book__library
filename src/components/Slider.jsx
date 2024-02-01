// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { image } from "../data";

const Slider = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-screen-2xl">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {image.map((image) => {
            return (
              <SwiperSlide>
                <div className="rounded-md overflow-hidden bg-white text-center">
                  <img src={image.image} alt={image.name} className="w-96 h-96 cursor-pointer transition-all duration-75 hover:opacity-75"/>
                  <h1>{image.name}</h1>
                  <p>{image.desc}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
