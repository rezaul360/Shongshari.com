import { useMemo, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cityFunction } from "../../../redux/actions/ProfileAction";
import { log, setSearchedData } from "../../../utils/functions";
import LoginModal from "../../modal/LoginModal";
function FIndPartner() {
  const navigate = useNavigate();

  const { city } = useSelector((state) => state.profileValue);
  const { authenticated } = useSelector((state) => state.authValue);

  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(cityFunction());
  }, [dispatch]);

  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      minAgeValues: [18, 22, 26, 30, 34],
      maxAgeValues: [38, 42, 46, 50, 54, 58],
      min_age: "",
      max_age: "",
      gender: "",
      city_id: "",
    }
  );

  let minAges = state.minAgeValues.map((m) => (
    <option key={m + 10} value={m}>
      {m}
    </option>
  ));
  let maxAges = state.maxAgeValues.map((m) => (
    <option key={m + 10} value={m}>
      {m}
    </option>
  ));

  const inputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ [name]: value });
  };

  const handleSubmit = () => {
    if (authenticated) {
      const data = {
        min_age: state.min_age,
        max_age: state.max_age,
        gender: state.gender,
        city_id: state.city_id,
      };

      setSearchedData(data);

      navigate("/partner/searched");
    } else {
      navigate("/login");
    }
  };

  let cityVal = "";
  if (city?.data?.length > 0) {
    cityVal = city.data.map((c) => (
      <option key={c.id} value={c.id} selected={c.id == 1}>
        {c.name}
      </option>
    ));
  }
  return (
    <div className="col-xl-4 col-lg-5 col-md-6">
      <div
        id="join-now-box2"
        className="join-now-box wow fadeInRight"
        data-wow-offset="30"
        data-wow-delay="0.9s"
      >
        <div className="single-option join-header justify-content-center">
          <p className="title text-white">Find Your Partner</p>
        </div>
        <div className="single-option">
          <p className="title">Looking For</p>
          <div className="option" style={{ marginLeft: "36px" }}>
            <div className="s-input mr-2">
              <select className="nice-select select-bar">
                <option value="">Myself</option>
                <option value="">My Brother</option>
                <option value="">My Son</option>
                <option value="">My Daughter</option>
                <option value="">My Relative</option>
                <option value="">Friend</option>
              </select>
            </div>
          </div>
        </div>
        <div id="single-option2" className="single-option">
          <p className="title">I am a</p>
          <div className="option">
            <div className="s-input mr-2">
              <input type="radio" name="" id="male2" />
              <label htmlFor="male2">Male</label>
            </div>
            <div className="s-input">
              <input type="radio" name="" id="female2" />
              <label htmlFor="female2">Female</label>
            </div>
          </div>
        </div>
        <div id="single-option2" className="single-option gender">
          <p className="title">Seeking a</p>
          <div className="option">
            <div className="s-input mr-2">
              <input
                type="radio"
                name="gender"
                id="males"
                onChange={inputChange}
                value={1}
              />
              <label htmlFor="males">Man</label>
            </div>
            <div className="s-input">
              <input
                type="radio"
                name="gender"
                id="females"
                onChange={inputChange}
                value={2}
              />
              <label htmlFor="females">Woman</label>
            </div>
          </div>
        </div>
        <div id="single-option2" className="single-option religion">
          <p className="title">Religion</p>
          <div className="option">
            <div className="s-input mr-2">
              <select
                className="select-bar nice-select"
                name="religion"
                onChange={inputChange}
              >
                <option value={1}>Muslim</option>
                <option value={2}>Hindu</option>
                <option value={3}>Christian</option>
              </select>
            </div>
          </div>
        </div>
        <div id="single-option2" className="single-option age">
          <p className="title">Ages</p>
          <div className="option">
            <div className="s-input mr-2">
              <select
                className="select-bar nice-select"
                name="min_age"
                onChange={inputChange}
              >
                {minAges}
              </select>
            </div>
            <div className="separator">-</div>
            <div className="s-input ml-2">
              <select
                className="select-bar nice-select"
                name="max_age"
                onChange={inputChange}
              >
                {maxAges}
              </select>
            </div>
          </div>
        </div>
        <div id="single-option2" className="single-option religion">
          <p className="title">City</p>
          <div className="option">
            <div className="s-input mr-2">
              <select
                className="select-bar nice-select"
                name="city_id"
                onChange={inputChange}
              >
                {cityVal}
              </select>
            </div>
          </div>
        </div>

        <div className="joun-button">
          <button
            type="submit"
            className="custom-button"
            onClick={handleSubmit}
          >
            Join Now!
          </button>
        </div>
      </div>
    </div>
  );
}

export default FIndPartner;
