import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import FollowServices from "../../../api/FollowServices";
import { toastifyAlertError, toastifyAlertSuccess } from "../../toast/toast";
import WithoutLoginSwipeMatch from "./WithoutLoginSwipeMatch";
function SwipeMatch() {
  const { authenticated } = useSelector((state) => state.authValue);

  const [swipeValue, setswipeValue] = useState();
  const swipeMatchFun = async () => {
    let res = await FollowServices.swipeMatch();
    if (res.status === 200) {
      setswipeValue(res.data);
    }
  };
  useEffect(() => {
    swipeMatchFun();
  }, []);

  const refreshed = () => {
    toastifyAlertSuccess("Refreshed", "top-right");
    // dispatch(swapSuggestData());
    swipeMatchFun();
  };

  const addToFavourite = async (id, type) => {
    let data = {
      type: type,
      favourite_id: id,
    };
    let res = await FollowServices.addFavourite(data);
    //console.log("res :>> ", res);
    if (res.status === 201) {
      toastifyAlertSuccess("Added", "top-center");
      swipeMatchFun();
    } else {
      toastifyAlertError(res.data.message, "top-center");
    }
  };
  // console.log("object :>> ", swipeValue);
  let swapMatch = "";
  if (swipeValue?.data) {
    swapMatch = swipeValue.data.map((swap, index) => (
      <SwiperSlide>
        <div key={index} className="swiper-slide banner-img-item">
          <img className="img-fluid" src={swap.profile_photo} alt="" />
          <div className="swipe-overly">
            <div className="swipe-bottom">
              <div className="swipe-details">
                <div className="row">
                  <div className="col-md-10">
                    <h2>
                      {swap.name} <samp>{swap.age}</samp>
                    </h2>
                    <p className="swipe-label1">
                      <i className="fas fa-star"></i> {swap.city}
                    </p>
                    <p className="swipe-label2">
                      <i className="fas fa-star"></i> {swap.country}
                    </p>
                  </div>
                  <div className="col-md-2">
                    <a className="swipe-info rounded-circle" href="">
                      <i className="fas fa-info"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="swipe-option">
                <a className="rounded-circle">
                  <i className="fas fa-undo" onClick={refreshed}></i>
                </a>

                <a
                  className="rounded-circle"
                  onClick={() => addToFavourite(swap.id, 1)}
                >
                  <i className="fas fa-star"></i>
                </a>
                <a
                  className="rounded-circle"
                  onClick={() => addToFavourite(swap.id, 2)}
                >
                  <i className="fas fa-heart"></i>
                </a>
                <a
                  className="rounded-circle"
                  onClick={() => addToFavourite(swap.id, 3)}
                >
                  <i className="fas fa-bolt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    ));
  }
  return (
    <div className="col-xl-4 col-lg-5  col-md-6">
      <div className="swiper mySwiperImg">
        <div className="">
          <Swiper
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            navigation={{
              clickable: true,
            }}
            modules={[Navigation]}
            className=" swiper-wrapper"
          >
            {authenticated ? swapMatch : <WithoutLoginSwipeMatch />}
          </Swiper>
        </div>
        <div className="swipe-header">
          <h4>Swipe & Match</h4>
        </div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
}

export default SwipeMatch;
