import { useSelector } from "react-redux";
const SuggestedAgent = () => {
  const { suggestedAgentData } = useSelector((state) => state.AgentValue);
  // console.log(suggestedAgentData, "suggestedAgentData");
  return (
    <>
      <div className="row">
        {suggestedAgentData?.data?.map((suggest, index) => (
          <div className="col-xl-4 col-md-6 mb-2 px-2">
            <div className="single-slider">
              <div className="img o__profileCardImg">
                <img src={suggest?.profile_photo} alt="img" />
              </div>
              <div className="inner-content inner__contentSlide">
                <h4 className="name">{suggest?.name}</h4>

                <p>{suggest?.phone}</p>
              </div>
              <div className="info__cardUp info__cardUp4">
                <div className="info__cardImg">
                  <img src={suggest?.profile_photo} alt="img" />
                </div>
                <h4 style={{ color: "white" }} className="name">
                  {suggest?.name}
                </h4>
                <ul>
                  <li>
                    <p>
                      <span>Fee</span> {suggest?.fee}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>phone</span> {suggest?.phone}
                    </p>
                  </li>
                  <li>
                    <p>
                      <span>Email</span> {suggest?.email}
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
    </>
  );
};

export default SuggestedAgent;
