import React from "react";

function FilterProduct() {
  return (
    <div className="col-lg-3 p-xl-0 mb-4 mb-lg-0">
      <div
        id="join-now-box2"
        className="join-now-box wow fadeInRight"
        data-wow-offset="30"
        data-wow-delay="0.9s"
      >
        <div className="single-option join-header justify-content-center">
          <div
            id="single-option2"
            className="single-option location border-0 p-1"
          >
            <div className="s-input d-flex align-items-center">
              <input
                className="bg-white"
                type="text"
                name="location"
                id="location"
              />
            </div>
            <p className="title text-white ml-2 search_find">Search</p>
          </div>
        </div>
        <div id="single-option3" className="single-option">
          <p className="title mb-2">Category</p>
          <div id="option2" className="option">
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Personal" />
              <label htmlFor="Personal">Data Science</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Family" />
              <label htmlFor="Family">Business</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Estate" />
              <label htmlFor="Estate">Computer Science</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Contract" />
              <label htmlFor="Contract">Personal Development</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Information" />
              <label htmlFor="Information">Information Technology</label>
            </div>
          </div>
        </div>
        <div id="single-option3" className="single-option">
          <p className="title mb-2">Price</p>

          <div className="shopPrice">
            <input type="text" name="location" id="location" />
            <span>-</span>
            <input type="text" name="location" id="location" />
          </div>
        </div>
        <div id="single-option3" className="single-option">
          <p className="title mb-2">Course</p>
          <div id="option2" className="option">
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Bankruptcy" />
              <label htmlFor="Bankruptcy">Education Champion</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Business" />
              <label htmlFor="Business">Instruction Imagine</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Constitutional" />
              <label htmlFor="Constitutional">Teaching Lab</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Tax" />
              <label htmlFor="Tax">Tutor Mode</label>
            </div>
          </div>
        </div>
        <div id="single-option3" className="single-option">
          <p className="title mb-2">Rating</p>
          <div id="option2" className="option">
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="star5" />
              <label htmlFor="star5">5 Star</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="star4" />
              <label htmlFor="star4">4 Star</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="star3" />
              <label htmlFor="star3">3 Star</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="star2" />
              <label htmlFor="star2">2 Star</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="star1" />
              <label htmlFor="star1">1 Star</label>
            </div>
          </div>
        </div>
        <div id="single-option3" className="single-option">
          <p className="title mb-2">Duration</p>
          <div id="option2" className="option">
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="d5" />
              <label htmlFor="d5">6 month</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="d4" />
              <label htmlFor="d4">4 month</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="d3" />
              <label htmlFor="d3">3 month</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="d2" />
              <label htmlFor="d2">2 month</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="d1" />
              <label htmlFor="d1">1 month</label>
            </div>
          </div>
        </div>

        <div className="joun-button">
          <form action="#">
            <button type="submit" className="custom-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;
