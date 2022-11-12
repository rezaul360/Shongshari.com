const TopPartner = () => {
  return (
    <div className="row">
      <div className="col-xl-4 col-md-6 mb-2 px-2">
        <div className="single-slider">
          <div className="img o__profileCardImg">
            {/* <img src={pexels} alt="" /> */}
          </div>
          <div className="inner-content inner__contentSlide">
            <h4 className="name">
              Rifat Ara
              <span style={{ color: "#ff337c" }}>24</span>
            </h4>
            <span>Model</span>
            <p>Noakhali, Bangladesh</p>
          </div>
          <div className="info__cardUp">
            <div className="info__cardImg">
              {/* <img src={pexels} alt="" /> */}
            </div>
            <h4 style={{ color: "white" }} className="name">
              Rifat Ara
              <span>24</span>
            </h4>
            <ul>
              <li>
                <p>
                  <span>Occupation</span> Lorem, ipsum dolor.
                </p>
              </li>
              <li>
                <p>
                  <span>Location</span> Lorem, ipsum.
                </p>
              </li>
              <li>
                <p>
                  <span>Home Town</span> Lorem ipsum dolor sit amet.
                </p>
              </li>
              <li>
                <p>
                  <span>Education</span> Lorem ipsum dolor sit.
                </p>
              </li>
              <li>
                <p>
                  <span>Religion</span> Muslim
                </p>
              </li>
            </ul>
            <div className="info__social">
              <a href="#">
                <i className="fas fa-user"></i>
              </a>
              <a href="#">
                <i className="fas fa-comment"></i>
              </a>
              <a href="#">
                <i className="fas fa-heart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPartner;
