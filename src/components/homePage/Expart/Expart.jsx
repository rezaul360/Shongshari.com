import React from "react";
// import required modules
import { Autoplay, EffectCoverflow, Navigation } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  default as img1,
  default as img2,
  default as img3,
} from "../../../assets/img/sucess/img1.jpg";
import p1 from "../../../assets/img/sucess/p1.png";
import p2 from "../../../assets/img/sucess/p2.png";
import p3 from "../../../assets/img/sucess/p3.png";

function Experts() {
  return (
    <section className="home2-sucess-stories-section expert__section">
      <div className="top-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-header white-color">
                <h6 className="sub-title wow fadeInUp">
                  See what expert say for you
                </h6>
                <h2 className="title wow fadeInUp">Our Expert</h2>
                <p className="text wow fadeInUp">
                  Aliquam a neque tortor. Donec iaculis auctor turpis.
                  Eporttitor mattis ullamcorper urna. Cras quis elementum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bottom-content">
        <div id="card__slider" className="swiper mySwiper">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            modules={[Autoplay, Navigation, EffectCoverflow]}
            className="mySwiper swiper"
          >
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="single-story-box wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="img">
                    <img src={img1} alt="img" />
                  </div>
                  <div className="content">
                    <div className="author">
                      <img src={p1} alt="img" />
                      <span></span>
                    </div>
                    <h4 className="title">
                      Love horoscope for Cancer There will be surprises...
                    </h4>
                    <p className="date">December 10, 2021</p>
                  </div>
                  <div className="box-footer">
                    <div className="left">
                      <ul className="box-social-links">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="right">
                      <a href="#">
                        Read More
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="single-story-box wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="img">
                    <img src={img2} alt="img" />
                  </div>
                  <div className="content">
                    <div className="author">
                      <img src={p2} alt="img" />
                      <span></span>
                    </div>
                    <h4 className="title">
                      Love horoscope for Cancer There will be surprises...
                    </h4>
                    <p className="date">December 10, 2021</p>
                  </div>
                  <div className="box-footer">
                    <div className="left">
                      <ul className="box-social-links">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="right">
                      <a href="#">
                        Read More
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide">
                <div
                  className="single-story-box wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="img">
                    <img src={img3} alt="img" />
                  </div>
                  <div className="content">
                    <div className="author">
                      <img src={p3} alt="img" />
                      <span></span>
                    </div>
                    <h4 className="title">
                      Love horoscope for Cancer There will be surprises...
                    </h4>
                    <p className="date">December 10, 2021</p>
                  </div>
                  <div className="box-footer">
                    <div className="left">
                      <ul className="box-social-links">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="right">
                      <a href="#">
                        Read More
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Experts;
