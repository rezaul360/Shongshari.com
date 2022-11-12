import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileServices from "../../../../api/ProfileServices";
import { AgentCategoryAction } from "../../../../redux/actions/Agent/AgentAction";
// import { LawyerCategoryAction } from "../../../../redux/actions/Agent/LayerAction";
import {
  cityFunction,
  singleAgentProfileFunction,
} from "../../../../redux/actions/ProfileAction";
import { customPosition } from "../../../../utils/Modals";

function AgentProfileInput({ singleAgentData, id }) {
  let dispatch = useDispatch();
  const { city } = useSelector((state) => state.profileValue);
  const { agentCategory } = useSelector((state) => state.AgentValue);
  // console.log("agentCategory :>> ", agentCategory);
  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",

      name: "",

      city_id: "",

      gender: "",

      agent_category_id: "",
    }
  );

  useEffect(() => {
    dispatch(cityFunction());
    dispatch(AgentCategoryAction());
  }, [dispatch]);

  useEffect(() => {
    if (singleAgentData) {
      setState({
        email: singleAgentData?.email,
        name: singleAgentData?.name,
        fee: singleAgentData?.fee,
        phone: singleAgentData?.phone,
        gender: singleAgentData?.gender,
        birthplace: singleAgentData?.birthplace,
        city_id: singleAgentData?.city_id,
        agent_category_id: singleAgentData?.category?.id,
        // city: singleAgentData?.city?.id,
      });
    }
  }, [singleAgentData]);

  const inputChange = (e) => {
    const target = e.target;
    const name = target.name;
    let value = target.value;
    setState({
      [name]: value,
    });
  };

  let citySelect = "";
  if (city?.data) {
    citySelect = city.data.map((upazila, index) => (
      <option
        key={index}
        value={upazila.id}
        selected={upazila.id == state.city_id}
      >
        {upazila.name}
      </option>
    ));
  }

  let lawyerCategorySelect = "";
  if (agentCategory?.length > 0) {
    lawyerCategorySelect = agentCategory.map((upazila, index) => (
      <option
        key={index}
        value={upazila.id}
        selected={upazila.id == state.agent_category_id}
      >
        {upazila.name}
      </option>
    ));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("aboutProfile :>> ", aboutProfile);

    // console.log("data :>> ", data);
    let res = await ProfileServices.updateAgentProfile(state);
    // console.log("res", res);
    if (res.status === 201) {
      dispatch(singleAgentProfileFunction(id));
      customPosition("center", "success", res.data.message);
    } else {
      customPosition("center", "error", res.data.message);
    }
  };

  return (
    <>
      <div className="input-info-box mt-30">
        <div className="header">About your Profile</div>
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="my-input-box">
                <label>Agent Name</label>
                <input
                  type="text"
                  name={"name"}
                  value={state.name}
                  placeholder="Agent Profile Name"
                  onChange={inputChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="my-input-box">
                <label>Agent Category</label>
                <select name="category_id" id="" onChange={inputChange}>
                  <option disabled selected>
                    Select Category
                  </option>
                  {lawyerCategorySelect}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label>Agent Email</label>
                <input
                  type="text"
                  placeholder="Agent Email "
                  name={"email"}
                  value={state.email}
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label>Agent phone</label>
                <input
                  type="text"
                  placeholder="Agent Phone "
                  name={"phone"}
                  value={state.phone}
                  onChange={inputChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="my-input-box">
                <label>City</label>
                <select name="city_id" id="" onChange={inputChange}>
                  <option disabled selected>
                    Select City
                  </option>
                  {citySelect}
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="my-input-box">
                <label>Agent Fee</label>
                <input
                  type="number"
                  name={"fee"}
                  value={state.fee}
                  placeholder="Agent fee"
                  onChange={inputChange}
                />
              </div>
            </div>

            <div className="buttons  mt-30">
              <button
                type="submit"
                className="custom-button"
                onClick={handleSubmit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgentProfileInput;
