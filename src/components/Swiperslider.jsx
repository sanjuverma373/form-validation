import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.css';
import './SwiperStyles.css';

const SwiperSlider = () => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        loop={true}
      >
        <SwiperSlide>
          <div className="swiper-slide">
            <h1>Slide 1</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h1>Slide 2</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide">
            <h1>Slide 3</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
