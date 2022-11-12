import React from "react";
import CourseHomeHeader from "./CourseHomeHeader";

function CourseHomePageLayout({ children }) {
  return (
    <section className="home2-sucess-stories-section">
      <CourseHomeHeader />
      {children}
    </section>
  );
}

export default CourseHomePageLayout;
