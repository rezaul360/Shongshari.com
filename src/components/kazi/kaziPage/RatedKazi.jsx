import { useSelector } from "react-redux";

const RatedKazi = () => {
  const { ratedKaziData } = useSelector((state) => state.kaziValue);
  // ratedKaziData topKaziData
  // console.log(ratedKaziData, "ratededKaziData");
  const kaziRated = ratedKaziData?.data?.lenght > 0 ? ratedKaziData?.data : [1];
  // console.log(kaziRated);
  return (
    <div className="row">
      {kaziRated.map((rated, index) => (
        <div className="col-xl-4 col-md-6 mb-2 px-2">
          <div className="single-slider">
            <div className="img o__profileCardImg">
              {/* <img src={pexels} alt="img" /> */}
            </div>
            <div className="inner-content inner__contentSlide">
              <h4 className="name">
                {rated?.name}
                {/* <span style={{ color: "#FF710D" }}>24</span> */}
              </h4>

              <p>Phone:{rated?.phone}</p>
            </div>
            <div className="info__cardUp info__cardUp3">
              <div className="info__cardImg">
                {/* <img src={pexels} alt="img" /> */}
              </div>
              <h4 style={{ color: "white" }} className="name">
                {rated?.name}
              </h4>
              <ul>
                <li>
                  <p>
                    <span>phone</span> {rated?.phone}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email</span>
                    {rated?.email}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Fee</span> {rated?.fee}
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
      ))}
    </div>
  );
};

export default RatedKazi;
