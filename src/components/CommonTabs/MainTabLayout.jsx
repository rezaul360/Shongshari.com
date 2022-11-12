import React, { useEffect, useState } from "react";
import agentConstant from "../agent/AgentConstant";
import KaziConstant from "../kazi/kaziPage/KaziConstant";
import LawyerConstant from "../lawyer/LawyerConstant";
import ActivNow from "./ActivNow";

const MainTabLayout = ({ module }) => {
  const [activieNow, setActiveNow] = useState(null);
  const [suggestClick, setSuggestClick] = useState(true);
  const [topClick, setTopClick] = useState(false);

  const [ratedClick, setRatedClick] = useState(false);

  useEffect(() => {
    if (module == "Lawyer") {
      setActiveNow(LawyerConstant.SuggestedLawyer);
    }
    if (module == "kazi") {
      setActiveNow(KaziConstant.SuggesteedKazi);
    }
    if (module == "agent") {
      setActiveNow(agentConstant.SuggesteedAgent);
    }
  }, [module]);
  //   const changeTab = (tab) => {
  //     setActiveNow(tab);
  //   };

  const suggested = () => {
    setSuggestClick(true);
    setRatedClick(false);
    setTopClick(false);
    if (module == "Lawyer") {
      setActiveNow(LawyerConstant.SuggestedLawyer);
    } else if (module == "agent") {
      setActiveNow(agentConstant.SuggesteedAgent);
    } else if (module == "kazi") {
      setActiveNow(KaziConstant.SuggesteedKazi);
    }
  };
  const Top = () => {
    setRatedClick(false);
    setSuggestClick(false);
    setTopClick(true);
    if (module == "Lawyer") {
      setActiveNow(LawyerConstant.TopLawyer);
      // console.log("hello top lawyer");
    } else if (module == "agent") {
      setActiveNow(agentConstant.TopAgent);
    } else if (module == "kazi") {
      setActiveNow(KaziConstant.TopKazi);
    }
  };
  const Rated = () => {
    setSuggestClick(false);
    setRatedClick(true);
    setTopClick(false);
    if (module == "Lawyer") {
      // console.log("hello Rated lawyer");
      setActiveNow(LawyerConstant.RatedLawyer);
    } else if (module == "agent") {
      setActiveNow(agentConstant.RatedAgent);
    } else if (module == "kazi") {
      setActiveNow(KaziConstant.RatedKazi);
    }
  };

  return (
    <>
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
                  className={suggestClick ? "btn activition" : "btn"}
                  onClick={suggested}
                >
                  <p className="tp__o">Suggested For You</p>
                </button>
                <button
                  id="headingTwo"
                  className={topClick ? "btn activition" : "btn"}
                  onClick={Top}
                >
                  <p className="tp__o">Top</p>
                </button>
                <button
                  id="headingThree"
                  className={ratedClick ? "btn activition" : "btn"}
                  onClick={Rated}
                >
                  <p className="tp__o"> Top Rated</p>
                </button>
              </div>
            </div>
            <div
              className="top-profile-maim wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="container">
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="top-div text-center">
                    {/* <ActivNow tabNow={activieNow} /> */}
                    <ActivNow tabNow={activieNow} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainTabLayout;
