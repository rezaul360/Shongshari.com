import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import img2 from "../../../assets/img/registered/pexels-foxus-mzukaflani-6368928.jpg";
// import img1 from "../../../assets/img/registered/pexels-kate-branch-8365152.jpg";
import { successStoriesSliderList } from "../../../redux/actions/sliders/BackgroundSliderAction";

function SuccessStoriesSlider() {
  const { successStoriesData } = useSelector((state) => state.sliderValue);
  // console.log("successStoriesData :>> ", successStoriesData);

  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(successStoriesSliderList());
  }, [dispatch]);

  let slider = "";

  if (successStoriesData?.data?.length > 0) {
    slider = successStoriesData.data.map((slide, index) => (
      <div key={index + 1}>
        <SwiperSlide key={`${slide.id}`}>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="o__brideBox">
                <div className="o__boxContent">
                  <div className="o__boxText">
                    <h5>{slide.bride_name}</h5>
                    <p>{slide.bride_story}</p>
                    <div className="o__brideSocial">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </div>
                  </div>
                  <div className="o__boxImg">
                    <img src={slide.bride_image} alt="bride" />
                  </div>
                </div>
                <div className="o__boxLink">
                  <p>About family</p>
                  <a href="#">bride</a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="o__groomBox">
                <div className="o__brideBox">
                  <div className="o__boxContent o__reverse">
                    <div className="o__boxText o__textReverse">
                      <h5>{slide.groom_name}</h5>
                      <p>{slide.groom_story}</p>
                      <div className="o__brideSocial o__bridereverse">
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#">
                          <i className="fab fa-pinterest"></i>
                        </a>
                      </div>
                    </div>
                    <div className="o__boxImg">
                      <img src={slide.groom_image} alt="bride" />
                    </div>
                  </div>
                  <div className="o__boxLink o__reverseLink">
                    <p>About family</p>
                    <a href="#">groom</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    ));
  }

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      spaceBetween={30}
      // modules={[Autoplay]}
      centeredSlides={true}
      speed={1400}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="swiper-wrapper"
    >
      {slider}
      {/* <SwiperSlide>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="o__brideBox">
              <div className="o__boxContent">
                <div className="o__boxText">
                  <h5>Jennifer Doe</h5>
                  <p>
                    Pellentesque quis pellentesque lacus. Curabitur fermentum
                    elit est, at ultricies nibh malesuada Mauris dapibus sed
                    nibh.
                  </p>
                  <div className="o__brideSocial">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </div>
                </div>
                <div className="o__boxImg">
                  <img src={img1} alt="bride" />
                </div>
              </div>
              <div className="o__boxLink">
                <p>About family</p>
                <a href="#">bride</a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="o__groomBox">
              <div className="o__brideBox">
                <div className="o__boxContent o__reverse">
                  <div className="o__boxText o__textReverse">
                    <h5>Mark Doe</h5>
                    <p>
                      Pellentesque quis pellentesque lacus. Curabitur fermentum
                      elit est, at ultricies nibh malesuada Mauris dapibus sed
                      nibh.
                    </p>
                    <div className="o__brideSocial o__bridereverse">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest"></i>
                      </a>
                    </div>
                  </div>
                  <div className="o__boxImg">
                    <img src={img2} alt="bride" />
                  </div>
                </div>
                <div className="o__boxLink o__reverseLink">
                  <p>About family</p>
                  <a href="#">groom</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
}

export default SuccessStoriesSlider;
