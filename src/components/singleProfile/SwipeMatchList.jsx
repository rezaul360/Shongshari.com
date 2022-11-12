import { useEffect, useState } from "react";
import FollowServices from "../../api/FollowServices";
import ProfileServices from "../../api/ProfileServices";
import { customPosition } from "../../utils/Modals";

function SwipeMatchList() {
  const [followers, setfollowers] = useState();
  let followersList = async () => {
    let res = await FollowServices.swipeMatchList();
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
            backgroundImage: `url(${follow.favourite_cover_image})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img src={follow.favourite_image} alt="" />
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
            <h4>{follow.favourite_name}</h4>
            {/* <div class="isvarify">
                <i class="fas fa-check-circle"></i>
              </div> */}

            {/* <p class="date">{follow.birthdate}</p> */}
            <button class="orangeBtn" onClick={() => sendRequest(follow.id)}>
              Connect
            </button>
          </div>
          {/* </Link> */}
        </div>
      </div>
    ));
  }
  return (
    <div class="profile-friends">
      <div className="row">{profiles}</div>
    </div>
  );
}

export default SwipeMatchList;
