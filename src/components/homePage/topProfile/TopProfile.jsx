import React, { useEffect, useReducer } from "react";


import TopProfileConstant from "./constants";
import Slider from "./Slider";

function TopProfile() {
  const [state, setstate] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      profileNow: TopProfileConstant.SUGGESTFORYOU,
    }
  );
  
  let changeProfileNow = (profile) => setstate({ profileNow: profile });

  return (
    <section className="top-slider-section">
      <div id="accordion">
        <div className="container sr__proBottom wow fadeInUp">
          <div className="top-profile-header">
            <h4>Top Profile</h4>
          </div>
          <div className="top-profile-tab d-flex justify-content-between">
            <button
              className={
                state.profileNow === TopProfileConstant.SUGGESTFORYOU
                  ? "btn activition"
                  : "btn"
              }
              onClick={() => changeProfileNow(TopProfileConstant.SUGGESTFORYOU)}
            >
              <p className="tp__o">Suggested For You</p>
            </button>
            <button
              onClick={() => changeProfileNow(TopProfileConstant.TOPBRIDE)}
              className={
                state.profileNow === TopProfileConstant.TOPBRIDE
                  ? "btn activition"
                  : "btn"
              }
            >
              <p className="tp__o">Top Bride</p>
            </button>
            <button
              onClick={() => changeProfileNow(TopProfileConstant.TOPGROOM)}
              className={
                state.profileNow === TopProfileConstant.TOPGROOM
                  ? "btn activition"
                  : "btn"
              }
            >
              <p className="tp__o">Top Groom</p>
            </button>
          </div>
        </div>
        <div className="top-profile-maim wow fadeInUp" data-wow-delay="0.5s">
          <div className="container">
            <Slider profileNow={state.profileNow} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopProfile;
