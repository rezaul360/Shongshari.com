import { useState } from "react";
import { useDispatch } from "react-redux";

import agentConstant from "../AgentConstant";
import ActiveAgent from "./ActiveAgent";

// {pexels}
function AgentTabs() {
  const [activieNow, setActiveNow] = useState(agentConstant.SuggesteedAgent);
  const changeTab = (tab) => {
    setActiveNow(tab);
  };
  let dispatch = useDispatch();
  // useMemo(() => {
  //   dispatch(memberShipAction());
  // }, [dispatch]);
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
                  activieNow === agentConstant.SuggesteedAgent
                    ? "btn activition"
                    : "btn"
                }
                onClick={() => setActiveNow(agentConstant.SuggesteedAgent)}
              >
                <p className="tp__o">Suggested For You</p>
              </button>
              <button
                id="headingTwo"
                className={
                  activieNow === agentConstant.TopAgent
                    ? "btn activition"
                    : "btn"
                }
                onClick={() => setActiveNow(agentConstant.TopAgent)}
              >
                <p className="tp__o">Top</p>
              </button>
              <button
                id="headingThree"
                className={
                  activieNow === agentConstant.RatedAgent
                    ? "btn activition"
                    : "btn"
                }
                onClick={() => setActiveNow(agentConstant.RatedAgent)}
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
                  <ActiveAgent tabNow={activieNow} />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgentTabs;
