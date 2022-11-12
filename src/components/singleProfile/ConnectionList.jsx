import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FollowServices from "../../api/FollowServices";
import ProfileServices from "../../api/ProfileServices";
import { customPosition } from "../../utils/Modals";
import SingleMessengerModal from "../modal/SingleMessengerModal";

function ConnectionList() {
  const [followers, setfollowers] = useState();
  const [show, setshow] = useState(false);
  const [profile, setProfile] = useState(false);

  const showModal = (profileData, data) => {
    setProfile(profileData);
    setshow(data);
  };

  let followersList = async () => {
    let res = await FollowServices.connectList();
    if (res.status === 200) {
      setfollowers(res.data);
    }
    // console.log("res :>> ", res);
  };

  const sendRequest = async (receive_id) => {
    // console.log("object :>> ", receive_id);
    // if (id === 2) {
    let res = await ProfileServices.sendRequest({ profile_id: receive_id });

    // console.log("res :>> ", res);
    if (res.status === 201) {
      customPosition("center", "success", "Request send");
    } else if (res.status === 500) {
      customPosition("center", "error", res.data.message);
    } else {
      customPosition("center", "success", "Already connected");
    }
  };
  useEffect(() => {
    followersList();
  }, []);

  let profiles = "";
  if (followers?.data) {
    profiles = followers.data.map((follow) => (
      <div className="col-md-6">
        <div
          class="single-friend"
          key={follow.id}
          style={{
            backgroundImage: `url(${follow.profile?.cover_photo})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img src={follow.profile?.profile_photo} alt="" />
          {/* <Link to={`/profile/${follow.id}`} className="name"> */}
          <div
            class=""
            style={{
              background: "#f0f8ffbf",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <h4>{follow.profile?.username}</h4>
            {/* <div class="isvarify">
                <i class="fas fa-check-circle"></i>
              </div> */}

            {/* <p class="date">{follow.birthdate}</p> */}
            {/* <button
              class="orangeBtn"
              // onClick={() => sendRequest(follow.id)}
            >
              Chat
            </button> */}
            <div
              className="d-flex"
              style={{
                alignItems: "baseline",
                gap: "20px",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <i
                onClick={() => showModal(follow.profile, true)}
                class="fa-brands fa-rocketchat"
                style={{
                  color: "#fff",
                  cursor: "pointer",
                  background: "black",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              ></i>
              <Link
                // class="orangeBtn"
                to={`/profile/${follow.profile?.id}`}
                // onClick={() => sendRequest(follow.id)}
              >
                <i
                  class="fa-solid fa-user"
                  style={{
                    color: "#fff",
                    cursor: "pointer",
                    background: "black",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                ></i>
              </Link>
            </div>
          </div>
          {/* </Link> */}
        </div>
      </div>
    ));
  }
  return (
    <div class="profile-friends">
      <div className="row">
        {profiles}
        <SingleMessengerModal
          show={show}
          showModal={showModal}
          profile={profile}
        />
      </div>
    </div>
  );
}

export default ConnectionList;
