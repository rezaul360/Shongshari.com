import { useSelector } from "react-redux";

const SuggestedKazi = () => {
  const { suggestedKaziData } = useSelector((state) => state.kaziValue);
  // console.log(suggestedKaziData?.data?.length, "suggestedKaziData");
  const suggestData =
    suggestedKaziData?.data?.length > 0 ? suggestedKaziData.data : [1];
  console.log(suggestData, "suge");
  return (
    <div className="row">
      {suggestData.map((suggest, index) => (
        <div className="col-xl-4 col-md-6 mb-2 px-2">
          <div className="single-slider">
            <div className="img o__profileCardImg">
              {/* <img src={pexels} alt="img" /> */}
            </div>
            <div className="inner-content inner__contentSlide">
              <h4 className="name">
                {suggest?.name}
                {/* <span style={{ color: "#FF710D" }}>24</span> */}
              </h4>
              {/* <span>Model</span> */}
              <p>{suggest?.phone}</p>
            </div>
            <div className="info__cardUp info__cardUp3">
              <div className="info__cardImg">
                {/* <img src={pexels} alt="img" /> */}
              </div>
              <h4 style={{ color: "white" }} className="name">
                {suggest?.name}
              </h4>
              <ul>
                <li>
                  <p>
                    <span>Email</span> {suggest?.email}
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone</span> {suggest?.phone}
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
      ))}
    </div>
  );
};

export default SuggestedKazi;

/* 





    
*/
