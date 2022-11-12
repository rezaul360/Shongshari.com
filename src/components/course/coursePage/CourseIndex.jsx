import { useReducer } from "react";
import CommonHeaderLayout from "../../layout/CommonHeaderLayout";
import CourseConstant from "./Constants";
import CourseTabs from "./CourseTabs";
import FilterCourse from "./FilterCourse";

function CourseIndex() {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      tabNow: CourseConstant.SUGGEST,
    }
  );

  let changeTab = (tab) => {
    setState({ tabNow: tab });
  };
  // console.log("state.tabNow :>> ", state.tabNow);
  return (
    <>
      <div className="main-body">
        <CommonHeaderLayout name={"Course"} />
        <section className="findPartner banner-section">
          <div className="container">
            <div className="row">
              <FilterCourse />
              <div className="col-lg-9">
                <section className="top-slider-section">
                  <div id="accordion">
                    <div className="container sr__proBottom wow fadeInUp">
                      <div
                        id="topProfile__space"
                        className="top-profile-tab d-flex justify-content-between"
                      >
                        <button
                          onClick={() => changeTab(CourseConstant.SUGGEST)}
                          className={
                            state.tabNow === CourseConstant.SUGGEST
                              ? "btn activition"
                              : "btn"
                          }
                        >
                          <p className="tp__o">Suggested For You</p>
                        </button>
                        <button
                          id="headingTwo"
                          className={
                            state.tabNow === CourseConstant.TOP
                              ? "btn activition"
                              : "btn"
                          }
                          onClick={() => changeTab(CourseConstant.TOP)}
                        >
                          <p className="tp__o">Top</p>
                        </button>
                        <button
                          id="headingThree"
                          className={
                            state.tabNow === CourseConstant.BESTRATED
                              ? "btn activition"
                              : "btn"
                          }
                          onClick={() => changeTab(CourseConstant.BESTRATED)}
                        >
                          <p className="tp__o">Best Rated</p>
                        </button>
                      </div>
                    </div>
                    <CourseTabs tabNow={state.tabNow} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CourseIndex;
