
import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { backGroundSliderList } from "../../../redux/actions/sliders/BackgroundSliderAction";
import FIndPartner from ".././bannerSection/FIndPartner";
import SwipeMatch from ".././bannerSection/SwipeMatch";
import slider0 from './../../../assets/images/Slider/Slider.jpeg';
import slider1 from './../../../assets/images/Slider/Slider1.jpeg';
import slider2 from './../../../assets/images/Slider/Slider2.jpeg';
import slider3 from './../../../assets/images/Slider/Slider3.jpeg';
import slider4 from './../../../assets/images/Slider/Slider4.jpeg';
import slider5 from './../../../assets/images/Slider/Slider5.jpeg';
import slider6 from './../../../assets/images/Slider/Slider6.jpeg';
import slider7 from './../../../assets/images/Slider/Slider7.jpeg';

import Carousel from 'react-bootstrap/Carousel';


function BannerSection() {
  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(backGroundSliderList());
  }, [dispatch]);
  return (
    <>
      <section className="banner-section">
        <div className="swiper mySwiperTop slider-content">
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 pt-0"
          src={slider0}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 pt-0"
          src={slider1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 pt-0"
          src={slider2}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 pt-0"
          src={slider3}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={1000}> 
        <img
          className="d-block w-100 pt-0"
          src={slider4}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 pt-0"
          src={slider5}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 pt-0"
          src={slider6}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 pt-0"
          src={slider7}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
        </div>
        <div className="container bnnr">
          <div className="container row justify-content-xl-between justify-content-lg-around">
              <SwipeMatch />
              <FIndPartner />
          </div>
        </div>
      </section>
    </>
  );
}

export default BannerSection;
