import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AgentService from "../../api/agentService";
import KaziService from "../../api/kaziService";
import LawyerService from "../../api/lawyerService";
import { singleAgentAction } from "../../redux/actions/Agent/AgentAction";
import { singleKaziAction } from "../../redux/actions/kazi/Kazi";
import { singleLawyerAction } from "../../redux/actions/Lawyer/LayerAction";
import { customPosition } from "../../utils/Modals";
import LoginModal from "../modal/LoginModal";

const BookingIndex = () => {
  const { singleKaziData } = useSelector((state) => state.kaziValue);
  const { singleAgentData } = useSelector((state) => state.AgentValue);
  const { authenticated, loading } = useSelector((state) => state.authValue);

  const { singleLawyerData } = useSelector((state) => state.LawyerValue);
  const [Loginshow, setLoginShow] = useState(false);

  const handleLoginClose = () => setLoginShow(false);
  const handleLoginShow = () => setLoginShow(true);

  const { id, module } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (module == "kazi") {
      dispatch(singleKaziAction(id));
    } else if (module == "agent") {
      dispatch(singleAgentAction(id));
    } else if (module == "lawyer") {
      dispatch(singleLawyerAction(id));
    }
  }, [module]);

  const singleData =
    module == "kazi"
      ? singleKaziData
      : module == "agent"
      ? singleAgentData
      : singleLawyerData;

  const handleHire = async (id) => {
    if (!authenticated) {
      handleLoginShow();
    } else {
      if (module == "kazi") {
        const res = await KaziService.hire(id);
        if (res.status == 201) {
          customPosition("center", "success", res.data?.message);
        }
      } else if (module == "agent") {
        const res = await AgentService.hire(id);
        if (res.status == 201) {
          customPosition("center", "success", res.data?.message);
        }
      } else if (module == "lawyer") {
        const res = await LawyerService.hire(id);
        if (res.status == 201) {
          customPosition("center", "success", res.data?.message);
        }
      }
    }
  };

  return (
    <>
      <section className="blog-page single-blog-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="user-setting-section p-0 m-0">
                <div className="input-info-box">
                  <div className="booking__info mb-5">
                    <div className="bking__img">
                      <img src={singleData?.profile_photo} alt="bking__img" />
                    </div>
                    <div className="bking__content">
                      <ul>
                        <li>
                          <p>
                            <span>Name</span> {singleData?.username}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Email</span> {singleData?.email}
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Location</span> Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Architecto minus ea
                          </p>
                        </li>
                        <li>
                          <p>
                            <span>Ongoing Case</span> 5
                          </p>
                        </li>
                      </ul>
                      <div className="buttons">
                        <span style={{ marginRight: "20px" }}>$5200</span>
                        <button
                          type="submit"
                          class="custom-button"
                          onClick={() => handleHire(id)}
                        >
                          Hire
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bking__review mb-4 p-3">
                    <div className="review__star mb-3">
                      <h4>Case History</h4>
                    </div>
                    <div className="client__review">
                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <div className="case__his">
                            <h5 className="border-bottom mb-2">Case 1</h5>
                            <p className="m-0">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Dolorum placeat quasi vel aspernatur saepe
                              accusantium magnam perspiciatis sed deserunt
                              soluta?
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="case__his">
                            <h5 className="border-bottom mb-2">Case 2</h5>
                            <p className="m-0">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Dolorum placeat quasi vel aspernatur saepe
                              accusantium magnam perspiciatis sed deserunt
                              soluta?
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="case__his">
                            <h5 className="border-bottom mb-2">Case 3</h5>
                            <p className="m-0">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Dolorum placeat quasi vel aspernatur saepe
                              accusantium magnam perspiciatis sed deserunt
                              soluta?
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="case__his">
                            <h5 className="border-bottom mb-2">Case 4</h5>
                            <p className="m-0">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Dolorum placeat quasi vel aspernatur saepe
                              accusantium magnam perspiciatis sed deserunt
                              soluta?
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="case__his">
                            <h5 className="border-bottom mb-2">Case 5</h5>
                            <p className="m-0">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Dolorum placeat quasi vel aspernatur saepe
                              accusantium magnam perspiciatis sed deserunt
                              soluta?
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                          <div className="case__his">
                            <h5 className="border-bottom mb-2">Case 6</h5>
                            <p className="m-0">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Dolorum placeat quasi vel aspernatur saepe
                              accusantium magnam perspiciatis sed deserunt
                              soluta?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bking__review mb-4">
                    <div className="review__star mb-3">
                      <span className="re">
                        Reviews/
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                      </span>
                      <span>(35)</span>
                    </div>
                    <div className="client__review">
                      <ul>
                        <li>
                          <div className="review__star mb-2">
                            <span className="mb-2 d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                            </span>
                            <h5>Good Service</h5>
                            <p>
                              <span>Date</span> 2/25/2021
                            </p>
                            <p>
                              "Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Nam cum aliquam dignissimos
                              iste, beatae eos necessitatibus consequatur illo
                              libero aliquid."
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="review__star mb-2">
                            <span className="mb-2 d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                            </span>
                            <h5>Good Service</h5>
                            <p>
                              <span>Date</span> 2/25/2021
                            </p>
                            <p>
                              "Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Nam cum aliquam dignissimos
                              iste, beatae eos necessitatibus consequatur illo
                              libero aliquid."
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="review__star mb-2">
                            <span className="mb-2 d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                            </span>
                            <h5>Good Service</h5>
                            <p>
                              <span>Date</span> 2/25/2021
                            </p>
                            <p>
                              "Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Nam cum aliquam dignissimos
                              iste, beatae eos necessitatibus consequatur illo
                              libero aliquid."
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="review__star mb-2">
                            <span className="mb-2 d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                            </span>
                            <h5>Good Service</h5>
                            <p>
                              <span>Date</span> 2/25/2021
                            </p>
                            <p>
                              "Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Nam cum aliquam dignissimos
                              iste, beatae eos necessitatibus consequatur illo
                              libero aliquid."
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="review__star mb-2">
                            <span className="mb-2 d-block">
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                              <i className="ri-star-fill"></i>
                            </span>
                            <h5>Good Service</h5>
                            <p>
                              <span>Date</span> 2/25/2021
                            </p>
                            <p>
                              "Lorem ipsum dolor sit amet consectetur
                              adipisicing elit. Nam cum aliquam dignissimos
                              iste, beatae eos necessitatibus consequatur illo
                              libero aliquid."
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bking__review p-3">
                    <div className="client__review mb-3">
                      <h4>Chat with lawyer</h4>
                    </div>
                    <div className="chat__user">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="chat__input">
                            <textarea
                              name="chat"
                              id="chat"
                              cols="30"
                              rows="10"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LoginModal
        show={Loginshow}
        handleClose={handleLoginClose}
        handleShow={handleLoginShow}
      />
    </>
  );
};

export default BookingIndex;
