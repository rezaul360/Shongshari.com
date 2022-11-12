import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileServices from "../../../../api/ProfileServices";
import { LawyerCategoryAction } from "../../../../redux/actions/Lawyer/LayerAction";
import {
  cityFunction,
  singleLawyerProfileFunction,
} from "../../../../redux/actions/ProfileAction";
import { customPosition } from "../../../../utils/Modals";

function LawyerProfileInput({ singleLawyerData, id }) {
  let dispatch = useDispatch();
  const { city } = useSelector((state) => state.profileValue);
  const { lawyerCategory } = useSelector((state) => state.LawyerValue);
  // console.log("lawyerCategory :>> ", lawyerCategory);
  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      intro: "",
      name: "",
      country_id: "",
      city_id: "",
      birthdate: "",
      gender: "",
      birthplace: "",
      category_id: "",
    }
  );

  useEffect(() => {
    dispatch(cityFunction());
    dispatch(LawyerCategoryAction());
  }, [dispatch]);

  useEffect(() => {
    if (singleLawyerData) {
      setState({
        email: singleLawyerData?.email,
        name: singleLawyerData?.name,
        fee: singleLawyerData?.fee,
        phone: singleLawyerData?.phone,
        gender: singleLawyerData?.gender,
        birthplace: singleLawyerData?.birthplace,
        city_id: singleLawyerData?.city_id,
        country_id: singleLawyerData?.country?.id,
        category_id: singleLawyerData?.category_id,
        // city: singleLawyerData?.city?.id,
      });
    }
  }, [singleLawyerData]);

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
  if (lawyerCategory?.length > 0) {
    lawyerCategorySelect = lawyerCategory.map((upazila, index) => (
      <option
        key={index}
        value={upazila.id}
        selected={upazila.id == state.category_id}
      >
        {upazila.name}
      </option>
    ));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("aboutProfile :>> ", aboutProfile);

    // console.log("data :>> ", data);
    let res = await ProfileServices.updateLawyerProfile(state);
    // console.log("res", res);
    if (res.status === 201) {
      dispatch(singleLawyerProfileFunction(id));
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
                <label>Lawyer Name</label>
                <input
                  type="text"
                  name={"name"}
                  value={state.name}
                  placeholder="Lawyer Profile Name"
                  onChange={inputChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="my-input-box">
                <label>Lawyer Category</label>
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
                <label>Lawyer Email</label>
                <input
                  type="text"
                  placeholder="Lawyer Email "
                  name={"email"}
                  value={state.email}
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label>Lawyer phone</label>
                <input
                  type="text"
                  placeholder="Lawyer Phone "
                  name={"phone"}
                  value={state.phone}
                  onChange={inputChange}
                />
              </div>
            </div>

            {/* <div className="col-md-6">
              <div className="my-input-box">
                <label>Gender</label>
                <select onChange={inputChange} name="gender">
                  <option disabled selected>
                    Select Gender
                  </option>
                  <option value={1} selected={state.gender === 1}>
                    Male
                  </option>
                  <option value={2} selected={state.gender === 2}>
                    Female
                  </option>
                  <option value={3} selected={state.gender === 3}>
                    Others
                  </option>
                </select>
              </div>
            </div> */}

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
                <label>Lawyer Fee</label>
                <input
                  type="number"
                  name={"fee"}
                  value={state.fee}
                  placeholder="Lawyer fee"
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

export default LawyerProfileInput;
