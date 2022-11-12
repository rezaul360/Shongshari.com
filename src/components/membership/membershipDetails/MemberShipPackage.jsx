import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import leftImage from "../../../assets/img/membership/left-img.png";
import rightImage from "../../../assets/img/membership/right-img.png";
import { memberShipAction } from "../../../redux/actions/membership/membership";
import membershipConstant from "../constants";
import Plane from "./Plane";

export const MemberShipPackage = () => {
  const [activieNow, setActiveNow] = useState(membershipConstant.OneMonth);
  const changePlane = (plane) => {
    setActiveNow(plane);
  };
  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(memberShipAction());
  }, [dispatch]);
  return (
    <>
      <div className="row pt-4">
        <div className="col-lg-12">
          <div className="pricing-plan-wrapper">
            <img className="left-img" src={leftImage} alt="img" />
            <img className="right-img" src={rightImage} alt="img" />
            <section className="top-slider-section">
              <div id="accordion">
                <div className="container sr__proBottom">
                  <div className="top-profile-header">
                    <h4>Membership Packages</h4>
                  </div>
                  <div
                    id="topProfile__space"
                    className="top-profile-tab d-flex justify-content-between"
                  >
                    <button
                      className={
                        activieNow === membershipConstant.OneMonth
                          ? "btn activition"
                          : "btn"
                      }
                      onClick={() => changePlane(membershipConstant.OneMonth)}
                    >
                      <p className="tp__o">1 Month</p>
                    </button>
                    <button
                      className={
                        activieNow === membershipConstant.ThreeMonth
                          ? "btn activition"
                          : "btn"
                      }
                      onClick={() => changePlane(membershipConstant.ThreeMonth)}
                    >
                      <p className="tp__o">3 Month</p>
                    </button>
                    <button
                      className={
                        activieNow === membershipConstant.SixMonth
                          ? "btn activition"
                          : "btn"
                      }
                      onClick={() => changePlane(membershipConstant.SixMonth)}
                    >
                      <p className="tp__o">6 Month</p>
                    </button>
                    <button
                      className={
                        activieNow === membershipConstant.OneYear
                          ? "btn activition"
                          : "btn"
                      }
                      onClick={() => changePlane(membershipConstant.OneYear)}
                    >
                      <p className="tp__o">1 year</p>
                    </button>
                  </div>
                </div>
                <Plane PlaneNow={activieNow} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export const MemberShipPackageMemo = React.memo(MemberShipPackage);
