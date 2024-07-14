"use client";
import React, { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
type Props = {
  images: string[];
};

const CarouselSwiper = ({ images }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-2/3 flex-1 !ml-2 !mr-0"
      >
        {images.map((image: any, index: any) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={image.imageUrl}
                alt={`sản phẩm ${index}`}
                quality={100}
                fill
                className="rounded-md"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper w-20 !mx-0"
      >
        {images.map((image: any, index: any) => {
          return (
            <SwiperSlide key={index}>
              <Image
                src={image.imageUrl}
                alt={`sản phẩm ${index}`}
                height={55}
                width={55}
                className="rounded-md"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CarouselSwiper;
