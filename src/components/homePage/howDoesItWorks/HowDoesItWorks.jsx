import React from "react";
import shape2 from "../../../assets/img/h-it-w/bird.png";
import shape1 from "../../../assets/img/h-it-w/circle-shape.png";
import icon2 from "../../../assets/img/h-it-w/icon1.png";
import icon1 from "../../../assets/img/h-it-w/icon2.png";
import icon3 from "../../../assets/img/h-it-w/icon3.png";

function HowDoesItWorks() {
  return (
    <section className="how-it-work-section">
      <img className="shape1" src={shape1} alt="img" />
      <img className="shape2" src={shape2} alt="img" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="content">
              <div className="section-header">
                <h6
                  className="sub-title extra-padding wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  Meet New People Today!
                </h6>
                <h2
                  className="title wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  How Does It Work?
                </h2>
                <p
                  className="text wow fadeInUp workTitlePara"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                >
                  You’re just 3 steps away from a great date
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div
              className="single-work-box wow fadeInUp"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationName: "fadeInUp",
                animationDelay: "0.1s",
              }}
            >
              <div className="icon workIcon">
                <img src={icon2} alt="img" />
                <div className="number">01</div>
              </div>
              <h4 className="title">Tell us who you are!</h4>
              <a href="#" className="custom-button">
                Join Now !
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div
              className="single-work-box wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationName: "fadeInUp",
                animationDelay: "0.2s",
              }}
            >
              <div className="icon workIcon">
                <img src={icon1} alt="img" />
                <div className="number">02</div>
              </div>
              <h4 className="title">Find the right person</h4>
              <a href="#" className="custom-button">
                Join Now !
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div
              className="single-work-box wow fadeInUp"
              data-wow-delay="0.3s"
              style={{
                visibility: "visible",
                animationName: "fadeInUp",
                animationDelay: "0.3s",
              }}
            >
              <div className="icon workIcon">
                <img src={icon3} alt="img" />
                <div className="number">03</div>
              </div>
              <h4 className="title">Start Dating</h4>
              <a href="#" className="custom-button">
                Join Now !
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowDoesItWorks;
