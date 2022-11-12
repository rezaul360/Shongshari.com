import React from "react";
import icon1 from "../../../assets/img/membership/icon1.png";
import icon2 from "../../../assets/img/membership/icon2.png";
import icon3 from "../../../assets/img/membership/icon3.png";
import icon4 from "../../../assets/img/membership/icon4.png";

function Membership() {
  return (
    <section className="update-profile-section text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 align-self-center">
            <div className="conten text-centert">
              <div className="section-header">
                <h6 className="sub-title extra-padding wow fadeInUp">
                  Upgrade Your Profile
                </h6>
                <h2 className="title extra-padding wow fadeInUp">
                  MemeberShip Plan
                </h2>
                <p>
                  Choose from one of our membership levels and unlock features
                  you need.Benefit from Peyamba at its maximum capacity by
                  choosing the plan that suits you!
                </p>
              </div>
            </div>
          </div>
          <div
            id="memberShip__section2"
            className="col-lg-12 align-self-center membership-section"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="plan-info wow fadeInUp">
                    <div className="icon">
                      <img src={icon1} alt="img" />
                    </div>
                    <h4 className="title">Unlimited Messages</h4>
                    <p className="text">
                      Send and receive messages with no limits
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="plan-info wow fadeInUp" data-wow-delay="0.5s">
                    <div className="icon">
                      <img src={icon2} alt="img" />
                    </div>
                    <h4 className="title">VIP Badge</h4>
                    <p className="text">
                      Send and receive messages with no limits
                    </p>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="plan-info">
                    <div className="icon">
                      <img src={icon3} alt="img" />
                    </div>
                    <h4 className="title">Unlimited matches</h4>
                    <p className="text">
                      Send and receive messages with no limits
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="plan-info wow fadeInUp" data-wow-delay="0.9s">
                    <div className="icon">
                      <img src={icon4} alt="img" />
                    </div>
                    <h4 className="title">Take more messages</h4>
                    <p className="text">
                      Send and receive messages with no limits
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- <div className="img">
              <img src="assets/images/up-profile/right-img.png" alt="">
          </div> --> */}
          </div>
          <a
            href="membership.php"
            className="custom-button mx-auto mt-md-3 mt-1"
          >
            Membership details
          </a>
        </div>
      </div>
    </section>
  );
}

export default Membership;
