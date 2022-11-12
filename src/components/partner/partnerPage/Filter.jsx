function Filter() {
  return (
    <div className="col-lg-3 p-0">
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
        <div className="single-option">
          <p className="title">Searching For</p>
          <div className="option" style={{ marginLeft: "36px" }}>
            <div className="s-input mr-2">
              <select className="select-bar">
                <option value="">Myself</option>
                <option value="">My Brother</option>
                <option value="">My Son</option>
                <option value="">My Daughter</option>
                <option value="">My Relative</option>
                <option value="">Friend</option>
              </select>
            </div>
          </div>
        </div>
        <div id="single-option2" className="single-option">
          <p className="title">I am a</p>
          <div className="option">
            <div className="s-input mr-2">
              <input type="radio" name="gender2" id="male2" />
              <label htmlFor="male2">Male</label>
            </div>
            <div className="s-input">
              <input type="radio" name="gender2" id="female2" />
              <label htmlFor="female2">Female</label>
            </div>
          </div>
        </div>
        <div id="single-option2" className="single-option gender">
          <p className="title">Seeking a</p>
          <div className="option">
            <div className="s-input mr-2">
              <input type="radio" name="seeking" id="males" />
              <label htmlFor="males">Man</label>
            </div>
            <div className="s-input">
              <input type="radio" name="seeking" id="females" />
              <label htmlFor="females">Woman</label>
            </div>
          </div>
        </div>
        <div id="single-option2" className="single-option religion">
          <p className="title">Religion</p>
          <div className="option w-100">
            <div className="s-input w-100">
              <select className="select-bar w-100">
                <option value="">Muslim</option>
                <option value="">Hindu</option>
                <option value="">Khrist</option>
              </select>
            </div>
          </div>
        </div>
        <div id="single-option2" className="single-option age">
          <p className="title">Ages</p>
          <div className="option">
            <div className="s-input mr-2">
              <select className="select-bar">
                <option value="">18</option>
                <option value="">20</option>
                <option value="">24</option>
              </select>
            </div>
            <div className="separator">-</div>
            <div className="s-input ml-2">
              <select className="select-bar">
                <option value="">30</option>
                <option value="">35</option>
                <option value="">40</option>
              </select>
            </div>
          </div>
        </div>
        <div id="single-option2" className="single-option location">
          <p className="title">Location</p>
          <div className="s-input d-flex align-items-center loca">
            <input type="text" name="location" id="location" />
          </div>
        </div>
        <div id="single-option2" className="single-option location">
          <p className="title">Skin Tone</p>
          <div className="option w-100">
            <div className="s-input w-100">
              <select className="select-bar w-100">
                <option value="">Brown</option>
                <option value="">Black</option>
                <option value="">Beige</option>
                <option value="">White</option>
                <option value="">Pink</option>
              </select>
            </div>
          </div>
        </div>
        <div id="single-option2" className="single-option location">
          <p className="title">Ancestry</p>
          <div className="option w-100">
            <div className="s-input w-100">
              <select className="select-bar w-100">
                <option value="">Chowdhury</option>
                <option value="">Khan</option>
                <option value="">Talukdhar</option>
                <option value="">Mondal</option>
              </select>
            </div>
          </div>
        </div>
        <div id="single-option2" className="single-option location">
          <p className="title">Hometown</p>
          <div className="s-input d-flex align-items-center loca">
            <input type="text" name="location" id="location" />
          </div>
        </div>
        <div id="single-option2" className="single-option location">
          <p className="title">Education Level</p>
          <div className="s-input d-flex align-items-center loca">
            <input type="text" name="location" id="location" />
          </div>
        </div>
        <div id="single-option2" className="single-option location">
          <p className="title">Occupation</p>
          <div className="s-input d-flex align-items-center loca">
            <input type="text" name="location" id="location" />
          </div>
        </div>
        <div id="single-option3" className="single-option age">
          <p className="title mb-2">Monthly Earning</p>
          <div className="shopPrice">
            <input type="number" name="min" id="min" placeholder="Min" />
            <span>-</span>
            <input type="number" name="max" id="max" placeholder="Max" />
            <button>
              <i className="ri-arrow-right-s-fill"></i>
            </button>
          </div>
        </div>
        <div id="single-option2" className="single-option location">
          <p className="title">Hobbies</p>
          <div className="s-input d-flex align-items-center">
            <input type="text" name="location" id="location" />
          </div>
        </div>
        <div id="single-option2" className="single-option gender">
          <p className="title">Physical Disabilities</p>
          <div className="option ml-2">
            <div className="s-input mr-2">
              <input type="radio" name="Physical" id="yes" />
              <label htmlFor="yes">yes</label>
            </div>
            <div className="s-input">
              <input type="radio" name="Physical" id="no" />
              <label htmlFor="no">no</label>
            </div>
          </div>
        </div>
        <div className="joun-button">
          <form action="search-result.php">
            <button type="submit" className="custom-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filter;
