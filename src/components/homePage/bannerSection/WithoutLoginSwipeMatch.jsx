import React from "react";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
import { customPosition } from "../../../utils/Modals";

import card1 from "../../../assets/img/use/card1.jpg";
// import card2 from "../../../assets/img/use/card2.jpg";
function WithoutLoginSwipeMatch() {
  return (
    // <div className="col-xl-4 col-lg-5 col-md-6 d-none d-md-block">
    // <div
    //   className="swiper mySwiperImg wow fadeInLeft"
    //   data-wow-offset="30"
    //   data-wow-delay="0.5s"
    // >
    //   <div className="swiper-wrapper swiper-wrppr">
    //     <div className="swiper-slide banner-img-item">
    //       <img className="img-fluid" src={card1} alt="" />
    //       <div className="swipe-overly">
    //         <div className="swipe-bottom">
    //           <div className="swipe-details">
    //             <div className="row">
    //               <div className="col-md-10">
    //                 <h2>
    //                   Jasmine <samp>23</samp>
    //                 </h2>
    //                 <p className="swipe-label1">
    //                   <i className="fas fa-star"></i> lorem lorem
    //                 </p>
    //                 <p className="swipe-label2">
    //                   <i className="fas fa-star"></i> lorem lorem
    //                 </p>
    //               </div>
    //               <div className="col-md-2">
    //                 <Link className="swipe-info rounded-circle" to="/">
    //                   <i className="fas fa-info"></i>
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="swipe-option">
    //             <Link className="rounded-circle" to="/">
    //               <i className="fas fa-undo"></i>
    //             </Link>
    //             <Link className="rounded-circle" to="/">
    //               <i className="fas fa-times"></i>
    //             </Link>
    //             <Link className="rounded-circle" to="/">
    //               <i className="fas fa-star"></i>
    //             </Link>
    //             <Link className="rounded-circle" to="/">
    //               <i className="fas fa-heart"></i>
    //             </Link>
    //             <Link className="rounded-circle" to="/">
    //               <i className="fas fa-bolt"></i>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="swiper-slide banner-img-item">
    //       <img className="img-fluid" src={card2} alt="" />
    //       <div className="swipe-overly">
    //         <div className="swipe-bottom">
    //           <div className="swipe-details">
    //             <div className="row">
    //               <div className="col-md-10">
    //                 <h2>
    //                   Jasmine <samp>23</samp>
    //                 </h2>
    //                 <p className="swipe-label1">
    //                   <i className="fas fa-star"></i> lorem lorem
    //                 </p>
    //                 <p className="swipe-label2">
    //                   <i className="fas fa-star"></i> lorem lorem
    //                 </p>
    //               </div>
    //               <div className="col-md-2">
    //                 <Link className="swipe-info rounded-circle" to="/">
    //                   <i className="fas fa-info"></i>
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="swipe-option">
    //             <Link className="rounded-circle" to="/">
    //               <i className="fas fa-undo"></i>
    //             </Link>
    //             <Link className="rounded-circle" to="/">
    //               <i className="fas fa-times"></i>
    //             </Link>
    //             <Link className="rounded-circle" to="/">
    //               <i className="fas fa-star"></i>
    //             </Link>
    //             <Link className="rounded-circle" to="/">
    //               <i className="fas fa-heart"></i>
    //             </Link>
    //             <Link className="rounded-circle" to="/">
    //               <i className="fas fa-bolt"></i>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="swipe-header">
    //     <h4>Swipe & Match</h4>
    //   </div>
    //   <div className="swiper-button-next"></div>
    //   <div className="swiper-button-prev"></div>
    // </div>
    // </div>
    <SwiperSlide>
      <div className="swiper-slide banner-img-item">
        <img className="img-fluid" src={card1} alt="" />
        <div className="swipe-overly">
          <div className="swipe-bottom">
            <div className="swipe-details">
              <div className="row">
                <div className="col-md-10">
                  <h2>
                    Jasmine <samp>23</samp>
                  </h2>
                  <p className="swipe-label1">
                    <i className="fas fa-star"></i> Login first
                  </p>
                  <p className="swipe-label2">
                    <i className="fas fa-star"></i> Login first
                  </p>
                </div>
                <div className="col-md-2">
                  <Link className="swipe-info rounded-circle" to="/">
                    <i className="fas fa-info"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="swipe-option">
              <Link className="rounded-circle" to="/">
                <i className="fas fa-undo"></i>
              </Link>
              <Link className="rounded-circle" to="/">
                <i
                  className="fas fa-times"
                  onClick={() =>
                    customPosition(
                      "center",
                      "error",
                      "Please login/register first"
                    )
                  }
                ></i>
              </Link>
              <Link className="rounded-circle" to="/">
                <i
                  className="fas fa-star"
                  onClick={() =>
                    customPosition(
                      "center",
                      "error",
                      "Please login/register first"
                    )
                  }
                ></i>
              </Link>
              <Link className="rounded-circle" to="/">
                <i
                  className="fas fa-heart"
                  onClick={() =>
                    customPosition(
                      "center",
                      "error",
                      "Please login/register first"
                    )
                  }
                ></i>
              </Link>
              <Link className="rounded-circle" to="/">
                <i
                  className="fas fa-bolt"
                  onClick={() =>
                    customPosition(
                      "center",
                      "error",
                      "Please login/register first"
                    )
                  }
                ></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default WithoutLoginSwipeMatch;
