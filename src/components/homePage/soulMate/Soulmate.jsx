import React from "react";
import heartshape from "../../../assets/img/join/heartshape.png";
import img1 from "../../../assets/img/join/img.png";

const Soulmate = () => {
  return (
    <section className="join-now-section mt-5">
      <img className="shape1" src={heartshape} alt="img" />
      <img className="shape2" src={img1} alt="img" />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="join__content">
              <h2 className="mb-2">Best Ways to Find Your True Sole Mate</h2>
              <a href="#" className="custom-button">
                Join Now !
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Soulmate;
