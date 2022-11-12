import { useSelector } from "react-redux";
const RatedAgent = () => {
  const { ratedAgentData } = useSelector((state) => state.AgentValue);
  // console.log(ratedAgentData, "ratedAgentData");
  return (
    <div className="row">
      {ratedAgentData.data?.map((rated, index) => (
        <div className="col-xl-4 col-md-6 mb-2 px-2">
          <div className="single-slider">
            <div className="img o__profileCardImg">
              <img src={rated?.profile_photo} alt="img" />
            </div>
            <div className="inner-content inner__contentSlide">
              <h4 className="name">{rated?.name}</h4>

              <p>{rated?.phone}</p>
            </div>
            <div className="info__cardUp info__cardUp4">
              <div className="info__cardImg">
                <img src={rated?.profile_photo} alt="img" />
              </div>
              <h4 style={{ color: "white" }} className="name">
                {rated?.name}
              </h4>
              <ul>
                <li>
                  <p>
                    <span>Fee</span> {rated?.fee}
                  </p>
                </li>
                <li>
                  <p>
                    <span>phone</span> {rated?.phone}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email</span> {rated?.email}
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

export default RatedAgent;
