import React from "react";

function ThreeEasySteps() {
  return (
    <>
      <div className="steps-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="steps-section-inner wow fadeInUp stepEasy"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="myCol1">
                  <h4 className="title">3 EASY STEPS</h4>
                  <p className="text">To Start a Serious Relationship</p>
                </div>
                <div className="myCol2">
                  <ul className="steps-list">
                    <li>
                      <div className="number">1</div>
                      <p className="label">Join</p>
                    </li>
                    <li>
                      <div className="number">2</div>
                      <p className="label">Search</p>
                    </li>
                    <li>
                      <div className="number">3</div>
                      <p className="label">Find Love</p>
                    </li>
                  </ul>
                </div>
                <div className="myCol3">
                  <a href="#" className="custom-button">
                    Join Now!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreeEasySteps;
