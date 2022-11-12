import { useState } from "react";
import LawyerConstant from "../LawyerConstant";
import ActiveLawyer from "./ActiveLawyer";
// {pexels}
function Tabs() {
  const [activieNow, setActiveNow] = useState(LawyerConstant.SuggestedLawyer);
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
                    activieNow === LawyerConstant.SuggestedLawyer
                      ? "btn activition"
                      : "btn"
                  }
                  onClick={() => setActiveNow(LawyerConstant.SuggestedLawyer)}
                >
                  <p className="tp__o">Suggested For You</p>
                </button>
                <button
                  id="headingTwo"
                  className={
                    activieNow === LawyerConstant.TopLawyer
                      ? "btn activition"
                      : "btn"
                  }
                  onClick={() => setActiveNow(LawyerConstant.TopLawyer)}
                >
                  <p className="tp__o">Top</p>
                </button>
                <button
                  id="headingThree"
                  className={
                    activieNow === LawyerConstant.RatedLawyer
                      ? "btn activition"
                      : "btn"
                  }
                  onClick={() => setActiveNow(LawyerConstant.RatedLawyer)}
                >
                  <p className="tp__o"> Top Rated</p>
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
                    <ActiveLawyer tabNow={activieNow} />
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
                  Best Rated
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
                    <div className="col-xl-4 col-md-6 mb-2 px-2">
                      <div className="single-slider">
                        <div className="img o__profileCardImg">
                          <img src={pexels} alt="img" />
                        </div>
                        <div className="inner-content inner__contentSlide">
                          <h4 className="name">
                            Rifat Ara
                            <span style={{ color: "#274ACA" }}>24</span>
                          </h4>
                          <span>Model</span>
                          <p>Noakhali, Bangladesh</p>
                        </div>
                        <div className="info__cardUp info__cardUp2">
                          <div className="info__cardImg">
                            <img src={pexels} alt="card__img" />
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
