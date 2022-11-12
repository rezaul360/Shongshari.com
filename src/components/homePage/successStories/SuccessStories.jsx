import React from "react";
import LoveFaith from "./LoveFaith";
import SuccessStoriesSlider from "./SuccessStoriesSlider";

function SuccessStories() {
  return (
    <section className="home2-sucess-stories-section o__lovePath">
      <LoveFaith />
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="swiper o__storiesSlider">
              <SuccessStoriesSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuccessStories;
