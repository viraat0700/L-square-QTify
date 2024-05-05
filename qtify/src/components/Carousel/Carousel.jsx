import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";
import "swiper/css";
import styles from "./Carousel.module.css";

export default function Carousel({ data, componentRender }) {
  console.log("data", data);
  return (
    <div className={styles.wrapper}>
      <Swiper
        // style={{ padding: "0px 20px" }}
        initialSlide={0}
        slidesPerView={"auto"}
        spaceBetween={30}
        allowTouchMove
      >
        <CarouselRightNavigation />
        <CarouselLeftNavigation />

        {data.map((item, idx) => (
          <SwiperSlide key={idx}>{componentRender(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
