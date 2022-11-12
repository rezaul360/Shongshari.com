import React from "react";
import icon1 from "../../../assets/img/feature/i1.png";
import icon2 from "../../../assets/img/feature/i2.png";
import icon3 from "../../../assets/img/feature/i3.png";
import icon4 from "../../../assets/img/feature/i4.png";

const AmazingFeatures = () => {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="content">
              <div className="section-header">
                <h6 className="sub-title extra-padding wow fadeInUp">
                  An Exhaustive List Of
                </h6>
                <h2 className="title extra-padding wow fadeInUp">
                  Amazing Features
                </h2>
                <p className=" wow fadeInUp">
                  To find meaningful connections, dates, and life partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content-area">
        <div className="left-image">
          <div className="offer">
            <div className="offer-inner-content">
              <span className="fs">START NOW FOR</span>
              <h2>FREE</h2>
              <span className="ss">7 DAY TRIAL</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-5">
              <div className="feature-lists">
                <div
                  className="single-feature-list wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="icon">
                    <img src={icon1} alt="img" />
                  </div>
                  <div className="content">
                    <h4 className="title">Simple to use</h4>
                    <p>Simple steps to follow to have a matching connection.</p>
                  </div>
                </div>
                <div
                  className="single-feature-list wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="icon">
                    <img src={icon2} alt="img" />
                  </div>
                  <div className="content">
                    <h4 className="title">Smart Matching</h4>
                    <p>Simple steps to follow to have a matching connection.</p>
                  </div>
                </div>
                <div
                  className="single-feature-list wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="icon">
                    <img src={icon3} alt="img" />
                  </div>
                  <div className="content">
                    <h4 className="title">Filter very fast</h4>
                    <p>Simple steps to follow to have a matching connection.</p>
                  </div>
                </div>
                <div
                  className="single-feature-list wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="icon">
                    <img src={icon4} alt="img" />
                  </div>
                  <div className="content">
                    <h4 className="title">Cool community</h4>
                    <p>Simple steps to follow to have a matching connection.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmazingFeatures;
