import React from "react";
import circle from "../../../assets/img/circle.png";
import icon1 from "../../../assets/img/icon01.png";
import icon2 from "../../../assets/img/icon02.png";
import icon3 from "../../../assets/img/icon03.png";
import icon4 from "../../../assets/img/icon04.png";
import illutration from "../../../assets/img/illutration.png";
import ThreeEasySteps from "./ThreeEasySteps";
function FlirtingSection() {
  return (
    <div>
      <ThreeEasySteps />
      <section className="feature-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-3">
              <div
                className="feature_box text-center wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="feature__img mb-4">
                  <img src={icon1} alt="img" />
                </div>
                <h5>100% Verifide</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3">
              <div
                className="feature_box text-center wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="feature__img mb-4">
                  <img src={icon2} alt="img" />
                </div>
                <h5>Most Secure</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3">
              <div
                className="feature_box text-center wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <div className="feature__img mb-4">
                  <img src={icon3} alt="img" />
                </div>
                <h5>100% Privacy</h5>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3">
              <div
                className="feature_box text-center wow fadeInUp"
                data-wow-delay="0.8s"
              >
                <div className="feature__img mb-4">
                  <img src={icon4} alt="img" />
                </div>
                <h5>Smart Matching</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flirting-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="flirting__content wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <h6>Meet New People Today!</h6>
                <h2>Start Flirting</h2>
                <p>
                  In our modern day and age dating apps have become an integral
                  part of our lives. They allow you to check the profile of
                  singles living near you, to chat with them, to meet them and
                  maybe to fall in love.
                </p>
                <br />
                <p>
                  If you’re searching for a simple dating app with free features
                  allowing to meet singles, you’re in good hands with Pairko.
                  With Pairko you get all you need from a mobile dating app,
                  which presents you thousands of users through your smartphone
                  in a very pleasant experience.
                </p>
                <a href="#" className="custom-button mt-2">
                  Seek Your Partner
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-lg-0">
              <div className="flirting__img">
                <img className="flirt1" src={illutration} alt="flirt1" />
                <img className="flirt2" src={circle} alt="flirt2" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FlirtingSection;
