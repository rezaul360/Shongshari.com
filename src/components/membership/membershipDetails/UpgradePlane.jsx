import React from "react";
import icon1 from "../../../assets/img/membership/icon1.png";
import icon2 from "../../../assets/img/membership/icon2.png";
import icon3 from "../../../assets/img/membership/icon3.png";
import icon4 from "../../../assets/img/membership/icon4.png";
const UpgradePlane = () => {
  return (
    <>
      <div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="content">
              <div className="section-header">
                <h6 className="sub-title extra-padding">
                  Upgrade Your Profile
                </h6>
                <h2 className="title">Premium Memeber Plan</h2>
                <p className="text">Benefit from Peyamba at its maximum you!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-s-top">
          <div className="col-lg-3 col-md-6">
            <div className="plan-info">
              <div className="icon">
                <img src={icon1} alt="" />
              </div>
              <h4 className="title">Unlimited Messages</h4>
              <p className="text">Send and receive messages with no limits</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="plan-info">
              <div className="icon">
                <img src={icon2} alt="" />
              </div>
              <h4 className="title">VIP Badge</h4>
              <p className="text">Send and receive messages with no limits</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="plan-info">
              <div className="icon">
                <img src={icon3} alt="" />
              </div>
              <h4 className="title">Unlimited matches</h4>
              <p className="text">Send and receive messages with no limits</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="plan-info">
              <div className="icon">
                <img src={icon4} alt="" />
              </div>
              <h4 className="title">Take more messages</h4>
              <p className="text">Send and receive messages with no limits</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpgradePlane;
