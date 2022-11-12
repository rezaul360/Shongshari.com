import { useSelector } from "react-redux";

const TopAgent = () => {
  const { topAgentData } = useSelector((state) => state.AgentValue);
  // console.log(topAgentData, "topAgentData");
  return (
    <div className="row">
      {topAgentData.data?.map((top, index) => (
        <div className="col-xl-4 col-md-6 mb-2 px-2">
          <div className="single-slider">
            <div className="img o__profileCardImg">
              <img src={top?.profile_photo} alt="img" />
            </div>
            <div className="inner-content inner__contentSlide">
              <h4 className="name">{top?.name}</h4>

              <p>{top?.phone}</p>
            </div>
            <div className="info__cardUp info__cardUp4">
              <div className="info__cardImg">
                <img src={top?.profile_photo} alt="img" />
              </div>
              <h4 style={{ color: "white" }} className="name">
                {top?.name}
              </h4>
              <ul>
                <li>
                  <p>
                    <span>Fee</span> {top?.fee}
                  </p>
                </li>
                <li>
                  <p>
                    <span>phone</span> {top?.phone}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email</span> {top?.email}
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
export default TopAgent;
