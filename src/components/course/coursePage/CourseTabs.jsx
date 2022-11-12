import React from "react";
import img6 from "../../../assets/img/img6.png";
import thumb from "../../../assets/img/thumb.png";
import CourseConstant from "./Constants";
import SuggestedCourse from "./SuggestedCourse";
import TopRatedCourse from "./TopRatedCourse";

import TopRated from "./TopRated";

function CourseTabs({ tabNow }) {
  // console.log("tabShow", tabNow);
  return (
    <div className="top-profile-maim wow fadeInUp" data-wow-delay="0.5s">
      <div className="container">
        <div
          id="collapseOne"
          className={
            tabNow === CourseConstant.SUGGEST ? "collapse show" : "collapse"
          }
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <SuggestedCourse />
        </div>
        <div
          id="collapseTwo"
          className={
            tabNow === CourseConstant.TOP ? "collapse show" : "collapse"
          }
          aria-labelledby="headingTwo"
          data-parent="#accordion"
        >
          <TopRated />
        </div>
        <div
          id="collapseThree"
          className={
            tabNow === CourseConstant.BESTRATED ? "collapse show" : "collapse"
          }
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <TopRatedCourse />
        </div>
      </div>
    </div>
  );
}

export default CourseTabs;
