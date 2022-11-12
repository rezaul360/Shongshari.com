import React from "react";

import pic1 from "../../..//assets/img/download.svg";
import pic2 from "../../..//assets/img/download(1).svg";
import pic3 from "../../..//assets/img/download(2).svg";
import pic4 from "../../..//assets/img/download(3).svg";

const HostingBenefits = () => {
  return (
    <div>
      {/* ================= benefits__holder start =================== */}
      <section className="benefits__holder">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="benefits__holderBox">
                <h4>Shared Hosting Benefits</h4>
                <ul>
                  <li>
                    <i className="ri-check-line" /> Unmetered bandwidth
                  </li>
                  <li>
                    <i className="ri-check-line" /> Free website builder
                  </li>
                  <li>
                    <i className="ri-check-line" /> Domain name and privacy
                    protection
                  </li>
                  <li>
                    <i className="ri-check-line" /> Free automatic SSL
                    installation
                  </li>
                  <li>
                    <i className="ri-check-line" /> Free Supersonic CDN
                  </li>
                  <li>
                    <i className="ri-check-line" /> Free in 24 hours website
                    migration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= benefits__holder end =================== */}
      {/* ================ key features start ================= */}
      <section className="feature-section keyFeature__section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-3">
              <div
                className="feature_box keyFeature__box text-left wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="feature__img2 mb-3">
                  <img src={pic1} alt="" />
                </div>
                <p>
                  Turn back time and protect your website data with{" "}
                  <b>AutoBackup</b>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3">
              <div
                className="feature_box keyFeature__box text-left wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="feature__img2 mb-3">
                  <img src={pic2} alt="" />
                </div>
                <p>
                  Quickly build your website for free with{" "}
                  <b>Website Builder</b>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3">
              <div
                className="feature_box keyFeature__box text-left wow fadeInUp"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="feature__img2 mb-3">
                  <img src={pic3} alt="" />
                </div>
                <p>
                  Deliver website content in record time from servers around the
                  world.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-3">
              <div
                className="feature_box keyFeature__box text-left wow fadeInUp"
                data-wow-delay="0.8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="feature__img2 mb-3">
                  <img src={pic4} alt="" />
                </div>
                <p>
                  Our EU datacenter is 100% sustainable and features Cloud
                  Storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================ key features end ================= */};
    </div>
  );
};

export default HostingBenefits;
