import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  aboutProfileFunction,
  cityFunction,
  countryFunction,
  hobbyListFunction,
  jobListFunction,
  skinToneFunction,
} from "../../../../redux/actions/ProfileAction";

function AboutProfile({ singleData, id, handleSubmit }) {
  let dispatch = useDispatch();
  const { city, country, skinTone, jobs, hobbies } = useSelector(
    (state) => state.profileValue
  );

  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      intro: "",
      username: "",
      first_name: "",
      last_name: "",

      country_id: "",
      city_id: "",
      birthdate: "",
      relation_status: "",
      medical_history: "",
      ancestry: "",
      political_view: "",
      favourite_show: "",
      favourite_sport: "",
      profile_type: "0",
      skin_tone_id: "",
      qualities_looking: "",
      gender: "",
      birthplace: "",
      favourite_band: "",
      hobby_id: "",
    }
  );

  useEffect(() => {
    dispatch(countryFunction());
    dispatch(cityFunction());
    dispatch(skinToneFunction());
    dispatch(jobListFunction());
    dispatch(hobbyListFunction());
  }, [dispatch]);

  const inputChange = (e) => {
    const target = e.target;
    const name = target.name;
    let value = target.value;
    setState({
      [name]: value,
    });
  };
  useEffect(() => {
    if (singleData) {
      setState({
        skin_tone_id: singleData.skin_tone,
        email: singleData.email,
        username: singleData.username,
        first_name: singleData.first_name,
        last_name: singleData.first_name,

        intro: singleData.intro,
        birthdate: singleData.birthdate?.split("-").reverse().join("-"),
        gender: singleData.gender,
        // political_view: singleData.favourite_show,
        favourite_show: singleData.favourite_show,
        favourite_sport: singleData.favourite_sport,
        political_view: singleData.political_view,
        birthplace: singleData.birthplace,
        favourite_band: singleData.favourite_band,
        medical_history: singleData.medical_history,
        ancestry: singleData.ancestry,
        hobby_id: singleData.hobby_id,
        religion: singleData.religion,
        relation_status: singleData.relation_status,
        job_id: singleData.job_id,
        country_id: singleData.country?.id,
        city: singleData.city?.id,
      });
    }
  }, [singleData]);
  // console.log("state.birthdate", state.birthdate);

  useEffect(() => {
    setTimeout(() => {
      dispatch(aboutProfileFunction(state));
    }, 3000);
  }, [dispatch, state]);
  let countrySelect = "";

  if (country?.data) {
    countrySelect = country?.data.map((country, index) => (
      <option
        key={index}
        value={country.id}
        selected={state.country_id == country.id}
      >
        {country.name}
      </option>
    ));
  }

  let citySelect = "";
  if (city?.data && state.country_id) {
    citySelect = city.data
      .filter((city) => city.country_id == state.country_id)
      .map((upazila, index) => (
        <option
          key={index}
          value={upazila.id}
          selected={upazila.id == state.city}
        >
          {upazila.name}
        </option>
      ));
  }

  let jobsSelect = "";
  if (jobs?.data) {
    jobsSelect = jobs.data.map((country, index) => (
      <option
        key={index}
        value={country.id}
        selected={state.job_id == country.id}
      >
        {country.name}
      </option>
    ));
  }

  let skinSelect = "";
  if (skinTone?.data) {
    skinSelect = skinTone.data.map((country, index) => (
      <option
        key={index}
        value={country.id}
        selected={country.id === state.skin_tone_id}
      >
        {country.name}
      </option>
    ));
  }

  let hobbySelect = "";

  if (hobbies.data) {
    hobbySelect = hobbies.data.map((country, index) => (
      <option
        key={index}
        value={country.id}
        selected={country.id === state.hobby_id}
      >
        {country.name}
      </option>
    ));
  }

  return (
    <>
      <div className="input-info-box mt-30">
        <div className="header">About your Profile</div>
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="my-input-box">
                <label>User Name</label>
                <input
                  type="text"
                  name={"username"}
                  value={state.username}
                  placeholder="Profile Name"
                  onChange={inputChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="my-input-box">
                <label>User First Name</label>
                <input
                  type="text"
                  name={"first_name"}
                  value={state.first_name}
                  placeholder="first Name"
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label>User Last Name</label>
                <input
                  type="text"
                  name={"last_name"}
                  value={state.last_name}
                  placeholder="Last Name"
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label>User Email</label>
                <input
                  type="text"
                  placeholder="Public Email "
                  name={"email"}
                  value={state.email}
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="my-input-box">
                <textarea
                  onChange={inputChange}
                  name="intro"
                  value={state.intro}
                  placeholder="Write a little description about you..."
                ></textarea>
              </div>
            </div>

            <div className="col-md-6">
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
            </div>

            <div className="col-md-6">
              <div className="my-input-box">
                <label>Country</label>
                <select name="country_id" id="" onChange={inputChange}>
                  <option disabled selected>
                    Select Country
                  </option>
                  {countrySelect}
                </select>
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
                <label>Skin tone</label>
                <select name="skin_tone_id" id="" onChange={inputChange}>
                  <option disabled selected>
                    Select Skin tone
                  </option>
                  {skinSelect}
                </select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="my-input-box">
                <label>Job</label>
                <select name="job_id" id="" onChange={inputChange}>
                  <option disabled selected>
                    Select job
                  </option>
                  {jobsSelect}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label>Religion</label>
                <select name="religion" onChange={inputChange}>
                  <option disabled selected>
                    Select Religion
                  </option>
                  <option value={1} selected={state.hobby_id == 1}>
                    Islam
                  </option>
                  <option value={2} selected={state.hobby_id == 2}>
                    Hindu
                  </option>
                  <option value={3} selected={state.hobby_id == 3}>
                    BUDDHIST
                  </option>

                  <option value={4} selected={state.hobby_id == 4}>
                    CHRISTIAN
                  </option>
                  <option value={5}>Other</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label>Birthday</label>
                <input
                  type="date"
                  name="birthdate"
                  value={state.birthdate}
                  onChange={inputChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label>Status</label>
                <select
                  name="relation_status"
                  // value={state.relation_status}
                  id=""
                  onChange={inputChange}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option value="1" selected={state.relation_status == 1}>
                    Married
                  </option>
                  <option value="2" selected={state.relation_status == 2}>
                    Unmarried
                  </option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label>Birthplace</label>
                <input
                  type="text"
                  placeholder="Birthplace"
                  onChange={inputChange}
                  name="birthplace"
                  value={state.birthplace}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="input-info-box mt-30">
        <div className="header">Personal Choose</div>
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="my-input-box">
                <label>Ancestry</label>
                <input
                  type="text"
                  name="ancestry"
                  value={state.ancestry}
                  placeholder="Your Ancestry"
                  onChange={inputChange}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="my-input-box">
                <label>Profile type</label>
                <select
                  name="profile_type"
                  value={state.profile_type}
                  id=""
                  onChange={inputChange}
                >
                  <option disabled selected>
                    Select
                  </option>
                  <option value="0">ACTIVE</option>
                  <option value="1">RESTRICTED</option>
                  <option value="2">SUSPENDED</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label>Hobby</label>
                <select name="hobby_id" id="" onChange={inputChange}>
                  <option disabled selected>
                    Select Hobby
                  </option>
                  {hobbySelect}
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="my-input-box">
                <label>Political Point Of View</label>
                <input
                  name="political_view"
                  value={state.political_view}
                  type="text"
                  onChange={inputChange}
                  placeholder="Write Your Point Of View "
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="my-input-box">
                <label>Medical History</label>
                <textarea
                  name="medical_history"
                  value={state.medical_history}
                  onChange={inputChange}
                  placeholder="Write a little description about your medical history..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="input-info-box mt-30">
        <div className="header">Interests</div>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="my-input-box">
                <label>Favourite TV Shows</label>
                <textarea
                  name="favourite_show"
                  value={state.favourite_show}
                  onChange={inputChange}
                  placeholder="Favourite TV Shows"
                ></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="my-input-box">
                <label>Favourite Music Bands / Artists</label>
                <textarea
                  name="favourite_band"
                  onChange={inputChange}
                  value={state.favourite_band}
                  placeholder="Favourite Music Bands / Artists"
                ></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="my-input-box">
                <label>Favourite Games </label>
                <textarea
                  name="favourite_sport"
                  value={state.favourite_sport}
                  onChange={inputChange}
                  placeholder="Favourite Games "
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutProfile;
