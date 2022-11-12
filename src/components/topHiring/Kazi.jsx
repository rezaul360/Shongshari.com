import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import kateBrunch from "../../assets/img/registered/pexels-kate-branch-8365152.jpg";
import { singleKaziAction } from "../../redux/actions/kazi/Kazi";
import { getOpenModal, getSingleModalData } from "../../redux/slices/ModalSlice";
function Kazi() {
  const { topKaziData } = useSelector((state) => state.sliderValue);
  const dispatch = useDispatch()

  const singleKaziAction = (id) => {
    dispatch(getOpenModal(true))
    const SingleKazi = topKaziData.data?.find(item => item.id === id)

    dispatch(getSingleModalData(SingleKazi))

  }
  let slider = "";
  if (topKaziData.data?.length > 0) {
    slider = topKaziData.data?.map((kazi, index) => (
      <div key={index}>
        <SwiperSlide>
          <div className="swiper-slide">
            <div style={{ background: "#30d5c7" }} className="single-slider">
              <div className="img o__profileCardImg">
                <img src={kazi.profile_photo} alt="img" />
                {/* <!-- <div className="badge"></div>     --> */}
              </div>
              <div className="inner-content inner__contentSlide inner__contentSlide3">
                <h4 className="name name2">
                  {kazi?.name}
                  {/* <span>24</span> */}
                </h4>
                {/* <span>Model</span> */}
                {kazi?.phone}
                <p>Noakhali, Bangladesh</p>
              </div>
              <div className="info__cardUp info__cardUp4">
                <div className="info__cardImg">
                  <img src={kateBrunch} alt="img" />
                </div>
                <h4 style={{ color: "white" }} className="name">
                  {kazi?.name}
                  {/* <span>24</span> */}
                </h4>
                <ul>
                  <li>
                    <p>
                      <span>Lawyer Fee</span> {kazi?.fee}
                    </p>
                  </li>
                  <li className="">
                    <p>
                      <span>Discount</span> 5%
                    </p>
                  </li>
                  <li className="">
                    <p>
                      <span>Location</span> Lorem ipsum dolor.
                    </p>
                  </li>
                  <li className="">
                    <p>
                      <span>Education</span> lorem ipsum
                    </p>
                  </li>
                  <li className="mb-2">
                    <p>
                      <span>Professional</span> Family Lawyer
                    </p>
                  </li>
                  <li>
                    <Link
                      style={{ width: "100%" }}
                      to={`/booking/kazi/${kazi.id}`}
                    >
                      <button
                        style={{ display: "block", marginBottom: "0px" }}
                        className="btn mb-1"
                      >
                        Book Now
                      </button>
                    </Link>
                  </li>
                  {/* <!-- <li>
                                                                <p><span>Education</span> Lorem ipsum dolor sit.</p>
                                                            </li>
                                                            <li>
                                                                <p><span>Religion</span> Muslim</p>
                                                            </li> --> */}
                </ul>
                <div className="info__social">
                  <a onClick={() => singleKaziAction(kazi?.id)}>

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

export default Kazi;
