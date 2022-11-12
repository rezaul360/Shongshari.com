import React from "react";
import Wave from "../../layout/Wave";
import CourseDetailsBody from "./CourseDetailsBody";
import CourseDetailsHeader from "./CourseDetailsHeader";

function CourseDetailsIndex() {
  return (
    <>
      <section className="breadcrumb-area profile-bc-area">
        <Wave />
        <CourseDetailsHeader />
      </section>
      <CourseDetailsBody />
    </>
  );
}

export default CourseDetailsIndex;
