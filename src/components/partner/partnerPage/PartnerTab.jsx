import { useState } from "react";
import pexels from "../../../assets/img/registered/pexels-kate-branch-8365152.jpg";
import PartnerConstant from "../PartnerConstant";
import ActivePartner from "./ActivePartner";

function Tabs() {
  const [activieNow, setActiveNow] = useState(PartnerConstant.SuggestedPartner);
  const changeTab = (tab) => {
    setActiveNow(tab);
  };
  return (
    <>
      <div className="col-lg-9">
        <section className="top-slider-section">
          <div id="accordion">
            <div className="container sr__proBottom wow fadeInUp">
              <div
                id="topProfile__space"
                className="top-profile-tab d-flex justify-content-between"
              >
                <button
                  id="headingOne12"
                  className={
                    activieNow === PartnerConstant.SuggestedPartner
                      ? "btn activition"
                      : "btn"
                  }
                  onClick={() => setActiveNow(PartnerConstant.SuggestedPartner)}
                >
                  <p className="tp__o">Suggested For You</p>
                </button>
                <button
                  id="headingTwo"
                  className={
                    activieNow === PartnerConstant.TopPartner
                      ? "btn activition"
                      : "btn"
                  }
                  onClick={() => setActiveNow(PartnerConstant.TopPartner)}
                >
                  <p className="tp__o">Top</p>
                </button>
                <button
                  id="headingThree"
                  className={
                    activieNow === PartnerConstant.NearestPartner
                      ? "btn activition"
                      : "btn"
                  }
                  onClick={() => setActiveNow(PartnerConstant.NearestPartner)}
                >
                  <p className="tp__o">Nearest</p>
                </button>
              </div>
            </div>
            <div
              className="top-profile-maim wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="container">
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="top-div text-center">
                    <ActivePartner tabNow={activieNow} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Tabs;

/* 
  <div className="col-lg-9">
      <section className="top-slider-section">
        <div id="accordion">
          <div className="container sr__proBottom wow fadeInUp">
            <div
              id="topProfile__space"
              className="top-profile-tab d-flex justify-content-between"
            >
              <button
                id="headingOne12"
                className="btn activition"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <p className="tp__o" onclick="sugges()">
                  Suggested For You
                </p>
              </button>
              <button
                id="headingTwo"
                className="btn collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <p className="tp__o" onclick="bride()">
                  Top
                </p>
              </button>
              <button
                id="headingThree"
                className="btn collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <p className="tp__o" onclick="groom()">
                  Nearest
                </p>
              </button>
            </div>
          </div>
          <div className="top-profile-maim wow fadeInUp" data-wow-delay="0.5s">
            <div className="container">
              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="top-div text-center">
                  <div className="row">
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="top-div text-center">
                  <div className="row">
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="top-div text-center">
                  <div className="row">
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                    <div className="col-lg-4 mb-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#ff337c" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp">
                          <div className="info__cardImg">
                            <img src={pexels} alt="" />
                          </div>
                          <h4 style={{ color: "white" }} className="name">
                            Rifat Ara
                            <span>24</span>
                          </h4>
                          <ul>
                            <li>
                              <p>
                                <span>Occupation</span> Lorem, ipsum dolor.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Location</span> Lorem, ipsum.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Home Town</span> Lorem ipsum dolor sit
                                amet.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Education</span> Lorem ipsum dolor sit.
                              </p>
                            </li>
                            <li>
                              <p>
                                <span>Religion</span> Muslim
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

*/
