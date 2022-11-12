import { Link } from "react-router-dom";

function Filter() {
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
              <label htmlFor="Personal">Personal Injury Lawyer</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Family" />
              <label htmlFor="Family">Family Lawyer</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Estate" />
              <label htmlFor="Estate">Estate Planning Lawyer</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Contract" />
              <label htmlFor="Contract">Contract Lawyer</label>
            </div>
          </div>
        </div>
        <div id="single-option3" className="single-option">
          <p className="title mb-2">Location</p>
          <div id="option2" className="option">
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Dhaka" />
              <label htmlFor="Dhaka">Dhaka</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Chittagong" />
              <label htmlFor="Chittagong">Chittagong</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Comilla" />
              <label htmlFor="Comilla">Comilla</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Rajshahi" />
              <label htmlFor="Rajshahi">Rajshahi</label>
            </div>
          </div>
        </div>
        <div id="single-option3" className="single-option">
          <p className="title mb-2">Remuneration</p>
          <div className="option">
            <div className="s-input mr-2">
              <select className="select-bar remuBar">
                <option value="">30,000</option>
                <option value="">40,000</option>
                <option value="">50,000</option>
              </select>
            </div>
            <div className="separator">-</div>
            <div className="s-input ml-2">
              <select className="select-bar remuBar">
                <option value="">70,000</option>
                <option value="">75,000</option>
                <option value="">80,000</option>
              </select>
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
          <p className="title mb-2">Qualifications</p>
          <div id="option2" className="option">
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Bankruptcy" />
              <label htmlFor="Bankruptcy">Bankruptcy Lawyer</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Business" />
              <label htmlFor="Business">Business Lawyer</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Constitutional" />
              <label htmlFor="Constitutional">Constitutional Lawyer</label>
            </div>
            <div id="s-input2" className="s-input">
              <input type="checkbox" name="gender2" id="Tax" />
              <label htmlFor="Tax">Tax Lawyer</label>
            </div>
          </div>
        </div>
        <div id="single-option3" className="single-option border-0">
          <p className="title w-100">
            Total Case <span className="ml-1">(+25)</span>
          </p>
        </div>
        <div className="joun-button">
          {/* <form action="search-result.php"> */}
          <Link to={"/partner/searched"}>
            <button type="submit" className="custom-button">
              Submit
            </button>
          </Link>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default Filter;
