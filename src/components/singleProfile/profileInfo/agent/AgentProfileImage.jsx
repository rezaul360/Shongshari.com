import { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import ProfileServices from "../../../../api/ProfileServices";
import { singleLawyerProfileFunction } from "../../../../redux/actions/ProfileAction";
import { customPosition } from "../../../../utils/Modals";

function AgentProfileImage({ singleAgentData, id }) {
  console.log("singleAgentData", singleAgentData);
  // const [state, setState] = useState();
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      profile_photo: "",
      cover_photo: "",
      name: "",
      phone: "",
      agent_category_id: "",
      email: "",
      fee: 0,
    }
  );

  useEffect(() => {
    if (singleAgentData?.name) {
      setState({
        profile_photo: singleAgentData?.profile_photo,
        cover_photo: "",
        name: singleAgentData?.name,
        phone: singleAgentData?.phone,
        agent_category_id: singleAgentData?.category?.id,
        email: singleAgentData?.email,
        fee: singleAgentData?.fee,
      });
    }
  }, [singleAgentData]);
  let dispatch = useDispatch();
  const inputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const fileUploaded = e.target.files[0];
    setState(fileUploaded);
    let image = document.getElementById(name);
    // console.log("image :>> ", name);

    image.src = URL.createObjectURL(fileUploaded);
    inputFileChange(fileUploaded, name);
  };

  const inputFileChange = async (data, name) => {
    let upload = {
      [name]: data,
      name: state.name,
      phone: state?.phone,
      city_id: 1,
      email: state?.email,
      fee: state?.fee,
      agent_category_id: state?.agent_category_id,
    };

    // console.log("upload :>> ", upload);

    let formdata = new FormData();
    Object.keys(upload).map((key) => {
      formdata.append(key, upload[key]);
    });

    let res = await ProfileServices.agentUpdateProfile(formdata);

    if (res.status === 201) {
      customPosition("center", "success", "Image uploaded");
      dispatch(singleLawyerProfileFunction(id));
    } else {
      customPosition("center", "error", "Image not uploaded. Try again");
    }
  };
  let profile = "";
  if (singleAgentData?.name) {
    let profilePhoto = singleAgentData.profile_photo ?? "";
    let coverPhoto = singleAgentData.cover_photo ?? "";
    profile = (
      <div className="row">
        <div className="col-lg-6">
          <div className="profile-about-box">
            <div className="top-bg">
              <img
                id="cover_photo"
                src={coverPhoto}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
            <div className="p-inner-content">
              <div className="profile-img">
                <img
                  id="profile_photo"
                  style={{ width: "100%", height: "100%" }}
                  src={profilePhoto}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="up-photo-card mb-30"
            onClick={() => document.getElementById("picture").click()}
          >
            <div className="icon">
              <i className="fas fa-user"></i>
            </div>
            <div className="content">
              <h4>Change Profile picture</h4>
              <span>120x120p size minimum</span>
              <input
                id="picture"
                type="file"
                accept="image/*;capture=camera"
                hidden
                name="profile_photo"
                onChange={inputChange}
              />
            </div>
          </div>
          <div
            className="up-photo-card"
            onClick={() => document.getElementById("pictureCover").click()}
          >
            <div className="icon">
              <i className="fas fa-image"></i>
            </div>
            <div className="content">
              <h4>Change Cover</h4>
              <span>1200x300p size minimum</span>
              <input
                id="pictureCover"
                type="file"
                accept="image/*;capture=camera"
                hidden
                name="cover_photo"
                onChange={inputChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{profile}</>;
}

export default AgentProfileImage;
