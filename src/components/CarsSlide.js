import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CarsSlide.css";
import { Navigation, Pagination } from "swiper";
import { click } from "@testing-library/user-event/dist/click";
import CarPreview from "./CarPreview";
function CarsSlide() {
  const clickCar = true;
  const [car, carSelect] = useState(1);
  const handleCarSelect1 = () => {
    carSelect(1);
  };
  const handleCarSelect2 = () => {
    carSelect(2);
  };
  const handleCarSelect3 = () => {
    carSelect(3);
  };
  const handleCarSelect4 = () => {
    carSelect(4);
  };
  const handleCarSelect5 = () => {
    carSelect(5);
  };
  const handleCarSelect6 = () => {
    carSelect(6);
  };
  const handleCarSelect7 = () => {
    carSelect(7);
  };
  const handleCarSelect8 = () => {
    carSelect(8);
  };
  const handleCarSelect9 = () => {
    carSelect(9);
  };
  const handleCarSelect10 = () => {
    carSelect(10);
  };

  return (
    <>
      <div className="car-slide-body">
        <div className="car-container">
          <CarPreview car={car} />
        </div>
        <div className="swiper-container">
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            loop={true}
            //centeredSlides={true}
            //pagination={{
            // clickable: true,
            //}}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className={clickCar ? "car-images" : "car-images active"}
                onClick={handleCarSelect1}
                src="/images/logos/logo1.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={clickCar ? "car-images" : "car-images active"}
                onClick={handleCarSelect2}
                src="/images/logos/logo2.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={clickCar ? "car-image" : "car-images active"}
                onClick={handleCarSelect3}
                src="/images/logos/logo3.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={clickCar ? "car-image4" : "car-images active"}
                onClick={handleCarSelect4}
                src="/images/logos/logo4.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={clickCar ? "car-image5" : "car-images active"}
                onClick={handleCarSelect5}
                src="/images/logos/logo5.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={clickCar ? "car-image6" : "car-images active"}
                onClick={handleCarSelect6}
                src="/images/logos/logo6.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={clickCar ? "car-image7" : "car-images active"}
                onClick={handleCarSelect7}
                src="/images/logos/logo7.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={clickCar ? "car-image8" : "car-images active"}
                onClick={handleCarSelect8}
                src="/images/logos/logo8.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={clickCar ? "car-image9" : "car-images active"}
                onClick={handleCarSelect9}
                src="/images/logos/logo9.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className={clickCar ? "car-images" : "car-images active"}
                onClick={handleCarSelect10}
                src="/images/logos/logo10.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default CarsSlide;
