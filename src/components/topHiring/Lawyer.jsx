import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import kateBrunch from "../../assets/img/registered/pexels-kate-branch-8365152.jpg";
import { addFavouriteAction, getFavouriteLawyerAction, RemoveFavouriteAction } from "../../redux/actions/ProfileAction";
import { getOpenModal, getSingleModalData } from "../../redux/slices/ModalSlice";
import { getLawyerFavourite } from "../../redux/slices/ProfileSlice";
import { log } from "../../utils/functions";

function Lawyer() {
  const { topLawyerData } = useSelector((state) => state.sliderValue);

  const { lawyerFavourite } = useSelector((state) => state.profileValue);

  console.log(lawyerFavourite, "kjdkfjdkjfk")
  const dispatch = useDispatch()

  const singlLawyerAction = (id) => {
    dispatch(getOpenModal(true))

    const SingLawyer = topLawyerData.data?.find(item => item.id === id)
    dispatch(getSingleModalData(SingLawyer))
  }
  const isFavourite = (id) => lawyerFavourite.data?.find((item) => item.lawyer?.id === id)


  useEffect(() => {
    dispatch(getFavouriteLawyerAction())
  }, [])
  const favroutie = async (id) => {
    const deleteid = lawyerFavourite.data?.find((item) => item.lawyer?.id === id)?.id
    if (deleteid == undefined) {
      console.log("add")
      let data = {
        type: 1,
        user_id: id
      }

      const res = await dispatch(addFavouriteAction(data))

      if (res.status === 201) {
        dispatch(getFavouriteLawyerAction())


      }

    }
    else {
      console.log("remove")
      const res = await dispatch(RemoveFavouriteAction(deleteid))

      if (res.status == 200) {
        dispatch(getFavouriteLawyerAction())
      }
    }

  }




  let slider = "";
  if (topLawyerData.data?.length > 0) {
    slider = topLawyerData.data?.map((lawyer, index) => (
      <div key={index}>
        <SwiperSlide>
          <div className="swiper-slide">
            <div style={{ background: "#274aca" }} className="single-slider">
              <div className="img o__profileCardImg">
                <img src={lawyer?.profile_photo} alt="img" />
                {/* <!-- <div className="badge"></div>     --> */}
              </div>
              <div className="inner-content inner__contentSlide inner__contentSlide3">
                <h4 className="name name2">
                  {lawyer?.name}
                  {/* <span>24</span> */}
                </h4>
                {/* <span>Model</span> */}
                {lawyer?.phone}
                <p>Noakhali, Bangladesh</p>
              </div>
              <div className="info__cardUp info__cardUp2">
                <div className="info__cardImg">
                  <img src={kateBrunch} alt="img" />
                </div>
                <h4 style={{ color: "white" }} className="name">
                  {lawyer?.name}
                  {/* <span>24</span> */}
                </h4>
                <ul>
                  <li>
                    <p>
                      <span>Lawyer Fee</span> {lawyer?.fee}
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
                    {/* <!-- <p><span>Home Town</span> Lorem ipsum dolor sit amet.
                                                                </p> --> */}
                    <Link
                      style={{ width: "100%" }}
                      to={`/booking/lawyer/${lawyer.id}`}
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
                  <a onClick={() => singlLawyerAction(lawyer?.id)}>

                    <i className="fas fa-user"></i>
                  </a>
                  <a href="#">
                    <i className="fas fa-comment"></i>
                  </a>
                  <a onClick={() => favroutie(lawyer?.id)}>
                    <i className="fas fa-heart" style={{ color: `${isFavourite(lawyer?.id) ? "red" : ""}` }}></i>
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

export default Lawyer;
