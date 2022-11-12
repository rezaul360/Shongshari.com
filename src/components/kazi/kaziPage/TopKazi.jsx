import { useSelector } from "react-redux";

const TopKazi = () => {
  const { topKaziData } = useSelector((state) => state.kaziValue);
  // ratedKaziData topKaziData
  // console.log(topKaziData, "suggestedKaziData");
  const topData = topKaziData?.data?.length > 0 ? topKaziData.data : [1];
  console.log(topKaziData);
  return (
    <div className="row">
      {topData?.map((top, index) => (
        <div className="col-xl-4 col-md-6 mb-2 px-2">
          <div className="single-slider">
            <div className="img o__profileCardImg">
              {/* <img src={pexels} alt="img" /> */}
            </div>
            <div className="inner-content inner__contentSlide">
              <h4 className="name">{top?.name}</h4>

              <p>{top?.phone}</p>
            </div>
            <div className="info__cardUp info__cardUp3">
              <div className="info__cardImg">
                {/* <img src={pexels} alt="img" /> */}
              </div>
              <h4 style={{ color: "white" }} className="name">
                {top?.name}
              </h4>
              <ul>
                <li>
                  <p>
                    <span>Phone</span> {top?.phone}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email</span> {top?.email}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Fee</span>
                    {top?.fee}
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

export default TopKazi;
