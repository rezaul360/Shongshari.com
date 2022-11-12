import { useEffect, useState } from "react";
import FollowServices from "../../api/FollowServices";

function FollowingList() {
  const [followers, setfollowers] = useState();
  let followersList = async () => {
    let res = await FollowServices.followingList();
    if (res.status === 200) {
      setfollowers(res.data);
    }
    // console.log("res :>> ", res);
  };

  useEffect(() => {
    followersList();
  }, []);

  let profiles = "";
  if (followers?.data) {
    profiles = followers.data.map((follow) => (
      <div class="single-friend">
        <img src={follow.profile_photo} alt="" />
        <div class="content">
          <a href="community-single.html" class="name">
            {follow.name}
            <div class="isvarify">
              <i class="fas fa-check-circle"></i>
            </div>
          </a>
          <p class="date">{follow.birthdate}</p>
          <a href="community-single.html" class="connnect-btn">
            Connected
          </a>
        </div>
      </div>
    ));
  }
  return <div class="profile-friends">{profiles}</div>;
}

export default FollowingList;
