import React from "react";
import { useSelector } from "react-redux";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
function SuggestedSlider() {
  const { topProfileSuggestData } = useSelector((state) => state.sliderValue);
  const { authenticated } = useSelector((state) => state.authValue);
  // useEffect(() => {
  //   // console.log("hello");
  // }, [authenticated]);
  let slider = "";
  if (topProfileSuggestData?.data?.length > 0) {
    slider = topProfileSuggestData?.data?.map((suggest, index) => {
      return (
        <div key={`${suggest?.id}`}>
          <SwiperSlide>
            <div className="single-slider">
              <div className="img o__profileCardImg">
                <img src={suggest?.cover_photo} alt="img" />
              </div>
              <div className="inner-content inner__contentSlide">
                <h4 className="name">
                  {suggest?.name}
                  <span style={{ color: "#ff337c" }}>{suggest?.age}</span>
                </h4>
                <span>{suggest?.job?.name}</span>
                <p>
                  {suggest?.city?.name}, {suggest?.country?.name}
                </p>
              </div>

              <div className="info__cardUp">
                <div className="info__cardImg">
                  <img src={suggest?.profile_photo} alt="card__img" />
                </div>
                <h4 style={{ color: "white" }} className="name">
                  {suggest?.name}
                  <span>{suggest?.age}</span>
                </h4>
                <ul>
                  <li>
                    <p>
                      <span>Occupation</span>
                      {suggest?.job?.name}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Location</span> {suggest?.city?.name},
                      {suggest?.country?.name}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Home Town</span> {suggest?.city?.name}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Education</span>{" "}
                      {suggest?.education?.map((edu, index) => (
                        <li key={index}>edu</li>
                      ))}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Religion</span> {suggest?.religion}
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
  } else if (authenticated == false) {
    slider = [1].map((i, index) => {
      return (
        <div key={`${index}`}>
          <SwiperSlide>
            <div className="single-slider">
              <div className="img o__profileCardImg">
                <h1>Plese Login First</h1>
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

export default SuggestedSlider;
