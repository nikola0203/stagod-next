// import React, { useRef, useState } from "react";
// Import Swiper React components
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function UsersSlider({ users }) {
  return (
    <>
      <div className="container mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {users.map((user) => {
            return (
              <SwiperSlide key={user.id}>
                <div className="bg-white rounded-md border-x border-y border-color-gray-200 p-4 md:p-6">
                  <Image
                    src={`${
                      user.user_image.src
                        ? user.user_image.src
                        : "http://127.0.0.1:10028/"
                    }`}
                    alt="Site Logo"
                    width={`${
                      user.user_image.width ? user.user_image.width : "0"
                    }`}
                    height={`${
                      user.user_image.height ? user.user_image.height : "0"
                    }`}
                  />
                  <h3>{user.first_name}</h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default UsersSlider;
