import React from "react";

const BostSection = () => {
  return (
    <>
      {" "}
      <section className="memBooster__area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-4">
              <div className="thunder">
                <i
                  style={{ color: "#ff317b" }}
                  className="ri-thunderstorms-line"
                />
              </div>
              <h2 style={{ color: "#ff317b" }} className="title">
                Boost Your Profile
              </h2>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="booster__box text-center">
                <h1>3</h1>
                <span>Hours</span>
                <p>62.33</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="booster__box text-center">
                <h1>6</h1>
                <span>Hours</span>
                <p>109.33</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="booster__box text-center">
                <h1>12</h1>
                <span>Hours</span>
                <p>199.33</p>
              </div>
            </div>
            <div className="col-lg-12 mt-4 boosterOption text-center">
              <p>subscribe Only</p>
              <button>Super boost</button>
            </div>
          </div>
        </div>
      </section>
      <section className="memBooster__area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center mb-4">
              <div className="thunder">
                <i
                  style={{ color: "#ff317b" }}
                  className="ri-bar-chart-2-line"
                />
              </div>
              <h2 style={{ color: "#ff317b" }} className="title">
                Boost Your Status
              </h2>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="booster__box text-center">
                <h1>3</h1>
                <span>Hours</span>
                <p>25.33</p>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="booster__box text-center">
                <h1>6</h1>
                <span>Hours</span>
                <p>75.33</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="booster__box text-center">
                <h1>12</h1>
                <span>Hours</span>
                <p>136.33</p>
              </div>
            </div>
            <div className="col-lg-12 mt-4 boosterOption text-center">
              <p>subscribe Only</p>
              <button>Super boost</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BostSection;
