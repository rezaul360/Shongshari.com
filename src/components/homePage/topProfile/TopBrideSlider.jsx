import React from "react";
import { useSelector } from "react-redux";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import kateBrunch from "../../../assets/img/registered/ertertertr.jpg";
import { log } from "../../../utils/functions";
function TopBrideSlide() {
  const { topProfileBrideData } = useSelector((state) => state.sliderValue);
  // log(topProfileBrideData, "bride");
  let brideSlider = "";
  if (topProfileBrideData.data?.length > 0) {
    brideSlider = topProfileBrideData.data.map((bride, index) => (
      <div key={index}>
        <SwiperSlide>
          <div className="single-slider">
            <div className="img o__profileCardImg">
              <img src={bride?.cover_photo} alt="img" />
            </div>
            <div className="inner-content inner__contentSlide">
              <h4 className="name">
                {bride?.name}
                <span style={{ color: "#ff337c" }}>{bride?.age}</span>
              </h4>
              <span>{bride?.job?.name}</span>
              <p>
                {bride?.city?.name}, {bride?.country?.name}
              </p>
            </div>
            <div className="info__cardUp">
              <div className="info__cardImg">
                <img src={bride?.profile_photo} alt="card__img" />
              </div>
              <h4 style={{ color: "white" }} className="name">
                {bride?.name}
                <span>{bride?.age}</span>
              </h4>
              <ul>
                <li>
                  <p>
                    <span>Occupation</span>
                    {bride?.job?.name}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Location</span> {bride?.city?.name},{" "}
                    {bride?.country?.name}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Home Town</span> {bride?.city?.name}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Education</span>{" "}
                    {bride?.education?.map((edu, index) => (
                      <li key={index}>edu</li>
                    ))}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Religion</span> {bride?.religion}
                  </p>
                </li>
              </ul>
              <div className="info__social">
                <a href="#">
                  <i className="fas fa-user"></i>
                </a>
                <a href="#">
                  <i className="fas fa-comment"></i>
                </a>
                <a href="#">
                  <i className="fas fa-heart"></i>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    ));
  }

  return (
    <div className="collapse show">
      <div className="top-div text-center">
        <div className="swiper top-profile-slider">
          <Swiper
            slidesPerView={3}
            loop={true}
            spaceBetween={20}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              560: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              950: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            className="swiper-wrapper"
          >
            {brideSlider}
          </Swiper>
        </div>

        <a id="member__btn" className="btn" href="#">
          See More
        </a>
      </div>
    </div>
  );
}

export default TopBrideSlide;
