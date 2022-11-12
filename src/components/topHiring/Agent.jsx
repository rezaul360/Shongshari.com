import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import kateBrunch from "../../assets/img/registered/ertertertr.jpg";
import { addFavouriteAction, getFavouriteAgentAction, RemoveFavouriteAction } from "../../redux/actions/ProfileAction";
import { getOpenModal, getSingleModalData } from "../../redux/slices/ModalSlice";
function Agent() {
  const { topAgentData } = useSelector((state) => state.sliderValue);
  const { agentFavourite } = useSelector((state) => state.profileValue);


  const dispatch = useDispatch()
  const isFavourite = (id) => agentFavourite.data?.find((item) => item.agent?.id === id)

  useEffect(() => {
    dispatch(getFavouriteAgentAction())
  }, [])
  const singlAgentAction = (id) => {
    dispatch(getOpenModal(true))

    const Singleagent = topAgentData.data?.find(item => item.id === id)
    dispatch(getSingleModalData(Singleagent))
  }
  console.log(agentFavourite)

  const favroutie = async (id) => {
    const deleteid = agentFavourite.data?.find((item) => item.agent?.id === id)?.id
    if (deleteid == undefined) {
      console.log("add")
      let data = {
        type: 2,
        user_id: id
      }
      const res = await dispatch(addFavouriteAction(data))

      if (res.status === 200) {
        dispatch(getFavouriteAgentAction())

      }


    }
    else {
      const res = await dispatch(RemoveFavouriteAction(deleteid))
      if (res.status === 201) {

        dispatch(getFavouriteAgentAction())


      }
    }

  }


  let slider = "";
  if (topAgentData.data?.length > 0) {
    slider = topAgentData.data?.map((agent, index) => (
      <div key={index}>
        <SwiperSlide>
          <div className="swiper-slide">
            <div style={{ background: "#ff710d" }} className="single-slider">
              <div className="img o__profileCardImg">
                <img src={agent?.profile_photo} alt="img" />
                {/* <!-- <div className="badge"></div>     --> */}
              </div>
              <div className="inner-content inner__contentSlide inner__contentSlide2">
                <h4 className="name name2">
                  {agent?.name}
                  {/* <span>24</span> */}
                </h4>
                {/* <span>Model</span> */}
                {agent?.phone}
                <p>Noakhali, Bangladesh</p>
              </div>
              <div className="info__cardUp info__cardUp3">
                <div className="info__cardImg">
                  <img src={kateBrunch} alt="img" />
                </div>
                <h4 style={{ color: "white" }} className="name">
                  {agent?.name}
                  {/* <span>24</span> */}
                </h4>
                <ul>
                  <li>
                    <p>
                      <span>Lawyer Fee</span> {agent?.fee}
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
                      to={`/booking/agent/${agent.id}`}
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
                  <a onClick={() => singlAgentAction(agent?.id)}>
                    <i className="fas fa-user"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-comment"></i>
                  </a>
                  <a onClick={() => favroutie(agent?.id)}>
                    <i className="fas fa-heart" style={{ color: `${isFavourite(agent?.id) ? "red" : ""}` }}></i>
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
              delay: 6500,
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

        <Link id="member__btn" className="btn" to="/agent">
          See More
        </Link>
      </div>
    </div>
  );
}

export default Agent;
