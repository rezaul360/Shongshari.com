import { useState } from "react";

import ActiveKazi from "./ActiveKazi";
import KaziConstant from "./KaziConstant";

// {pexels}
function Tabs() {
  const [activieNow, setActiveNow] = useState(KaziConstant.SuggesteedKazi);
  const changeTab = (tab) => {
    setActiveNow(tab);
  };

  return (
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
                  activieNow === KaziConstant.SuggesteedKazi
                    ? "btn activition"
                    : "btn"
                }
                onClick={() => setActiveNow(KaziConstant.SuggesteedKazi)}
              >
                <p className="tp__o">Suggested For You</p>
              </button>
              <button
                id="headingTwo"
                className={
                  activieNow === KaziConstant.TopKazi ? "btn activition" : "btn"
                }
                onClick={() => setActiveNow(KaziConstant.TopKazi)}
              >
                <p className="tp__o">Top</p>
              </button>
              <button
                id="headingThree"
                className={
                  activieNow === KaziConstant.RatedKazi
                    ? "btn activition"
                    : "btn"
                }
                onClick={() => setActiveNow(KaziConstant.RatedKazi)}
              >
                <p className="tp__o">Best Rated</p>
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
                <ActiveKazi tabNow={activieNow} />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tabs;
