import React from "react";
import { useSelector } from "react-redux";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import kateBrunch from "../../../assets/img/registered/pexels-kate-branch-8365152.jpg";
function TopGroomSlide() {
  const { topProfileGroomData } = useSelector((state) => state.sliderValue);
  let slider = "";
  if (topProfileGroomData.data?.length > 0) {
    slider = topProfileGroomData.data?.map((groom, index) => {
      return (
        <div key={`${groom?.id}`}>
          <SwiperSlide>
            <div className="single-slider">
              <div className="img o__profileCardImg">
                <img src={groom?.cover_photo} alt="img" />
              </div>
              <div className="inner-content inner__contentSlide">
                <h4 className="name">
                  {groom?.name}
                  <span style={{ color: "#665dfe" }}>{groom?.age}</span>
                </h4>
                <span>{groom.job?.name}</span>
                <p>
                  {groom?.city?.name}, {groom?.country?.name}
                </p>
              </div>
              <div className="info__cardUp info__cardUp2">
                <div className="info__cardImg ">
                  <img src={groom?.profile_photo} alt="card__img" />
                </div>
                <h4 style={{ color: "white" }} className="name">
                  {groom?.name}
                  <span>{groom?.age}</span>
                </h4>
                <ul>
                  <li>
                    <p>
                      <span>Occupation</span>
                      {groom?.job?.name}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Location</span> {groom?.city?.name},{" "}
                      {groom?.country?.name}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Home Town</span> {groom?.city?.name}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Education</span>{" "}
                      {groom?.education?.map((edu) => (
                        <li key={edu}>edu</li>
                      ))}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Religion</span> {groom?.religion}
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
      );
    });
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
            {slider}
          </Swiper>
        </div>

        <a id="member__btn" className="btn" href="#">
          See More
        </a>
      </div>
    </div>
  );
}

export default TopGroomSlide;
