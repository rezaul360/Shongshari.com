import React, { useReducer } from "react";
import TophiringConstant from "./constants";
import Slider from "./Slider";

function TopHiring() {
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      hiringNow: TophiringConstant.LAWYER,
    }
  );

  let changeHiringNow = (hiring) => setstate({ hiringNow: hiring });
  return (
    <section className="home2-sucess-stories-section">
      <div className="top-content top__contentOb"></div>
      <section className="top-slider-section top__sliderOb">
        <div id="accordion">
          <div className="container sr__proBottom wow fadeInUp">
            <div className="top-profile-header o__hiring">
              <h4>Top Hiring</h4>
            </div>
            <div className="top-profile-tab d-flex justify-content-between">
              <button
                className={
                  state.hiringNow === TophiringConstant.LAWYER
                    ? "btn activition"
                    : "btn"
                }
                onClick={() => changeHiringNow(TophiringConstant.LAWYER)}
              >
                <p className="tp__o">Lawyer</p>
              </button>
              <button
                onClick={() => changeHiringNow(TophiringConstant.AGENT)}
                className={
                  state.hiringNow === TophiringConstant.AGENT
                    ? "btn activition"
                    : "btn"
                }
              >
                <p className="tp__o">Agent</p>
              </button>
              <button
                onClick={() => changeHiringNow(TophiringConstant.KAZI)}
                className={
                  state.hiringNow === TophiringConstant.KAZI
                    ? "btn activition"
                    : "btn"
                }
              >
                <p className="tp__o">Kazi</p>
              </button>
            </div>
            <div className="top-profile-maim wow fadeInUp" data-wow-delay="0.5s">
                <div className="container">
                <Slider profileNow={state.hiringNow} />

                </div>
                </div>
            
          </div>

          {/* <div className="top-profile-maim wow fadeInUp" data-wow-delay="0.5s">
                <div className="container">

                    <div id="lawyer" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="top-div text-center">
                         
                            <div className="swiper top-profile-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div style="background:#274aca;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp2">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Lawyer Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <button style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</button>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#274aca;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp2">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Lawyer Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>

                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#274aca;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp2">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Lawyer Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#274aca;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp2">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Lawyer Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#274aca;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp2">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Lawyer Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#274aca;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp2">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Lawyer Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#274aca;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp2">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Lawyer Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#274aca;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp2">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Lawyer Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#274aca;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-sora-shimazaki-5673465.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp2">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Lawyer Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <a id="member__btn" className="btn" href="#">See More</a>
                        </div>
                    </div>

                    <div id="agent" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="top-div text-center">
                          
                            <div className="swiper top-profile-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div style="background: #ff710d;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp3">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Agent Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background: #ff710d;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp3">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Agent Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background: #ff710d;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp3">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Agent Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background: #ff710d;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp3">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Agent Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background: #ff710d;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp3">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Agent Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                   
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background: #ff710d;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp3">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Agent Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                     
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background: #ff710d;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp3">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Agent Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                      
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background: #ff710d;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="">
                                            
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp3">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Agent Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                 
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                   
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background: #ff710d;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="">
                                           
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp3">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-kate-branch-8365152.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Agent Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                  
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                 
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <a id="member__btn" className="btn" href="#">See More</a>
                        </div>
                    </div>

                    <div id="kazi" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="top-div text-center">
                          
                            <div className="swiper top-profile-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div style="background:#30d5c7;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="">
                                              
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp4">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Kazi Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                    
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#30d5c7;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="">
                                          
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp4">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Kazi Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                        
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                   
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#30d5c7;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="">
                                          
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp4">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Kazi Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                       
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#30d5c7;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="">
                                           
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp4">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Kazi Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                     
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                  
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#30d5c7;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="">
                                          
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2 ">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp4">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Kazi Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                  
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#30d5c7;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="">
                                        
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp4">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Kazi Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                    
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                            
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#30d5c7;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="">
                                           
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp4">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Kazi Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                    
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                                   
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#30d5c7;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="">
                                             
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp4">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Kazi Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                    <li>
                                                  
                                                        <a style="width:100%;" href="booking.php">
                                                            <span style="display:block; margin-bottom:0px;" className="btn mb-1">Book Now</span>
                                                        </a>
                                                    </li>
                                              
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div style="background:#30d5c7;" className="single-slider">
                                            <div className="img o__profileCardImg">
                                                <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="">
                                           
                                            </div>
                                            <div className="inner-content inner__contentSlide inner__contentSlide2">
                                                <h4 className="name name2">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <span>Model</span>
                                                <p>Noakhali, Bangladesh</p>
                                            </div>
                                            <div className="info__cardUp info__cardUp4">
                                                <div className="info__cardImg">
                                                    <img src="/assets/images/registered/pexels-andrea-piacquadio-3760514.jpg" alt="card__img">
                                                </div>
                                                <h4 style="color:white;" className="name">
                                                    Rifat Ara
                                                    <span>24</span>
                                                </h4>
                                                <ul>
                                                    <li>
                                                        <p><span>Kazi Fee</span> 2500</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Discount</span> 5%</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Location</span> Lorem ipsum dolor.</p>
                                                    </li>
                                                    <li className="">
                                                        <p><span>Education</span> lorem ipsum</p>
                                                    </li>
                                                    <li className="mb-2">
                                                        <p><span>Professional</span> Family Lawyer</p>
                                                    </li>
                                                
                                                      
                                                </ul>
                                                <div className="info__social">
                                                    <a href="#"><i className="fas fa-user"></i></a>
                                                    <a href="#"><i className="fas fa-comment"></i></a>
                                                    <a href="#"><i className="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <a id="member__btn" className="btn" href="#">See More</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
      </section>
    </section>
  );
}

export default TopHiring;
