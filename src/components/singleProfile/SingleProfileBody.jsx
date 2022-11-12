import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleProfileFunction } from "../../redux/actions/ProfileAction";
import Activity from "./Activity";
import ConnectionList from "./ConnectionList";
import FollowersList from "./FollowersList";
import LeftProfile from "./LeftProfile";
import Profile from "./Profile";
import ProfileAside from "./ProfileAside";
import SwipeMatchList from "./SwipeMatchList";
import TopProfile from "./TopProfile";

function SingleProfileBody() {
  const { singleData, topProfile } = useSelector((state) => state.profileValue);

  // console.log("singleData :>> ", singleData);
  let { id } = useParams();
  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(singleProfileFunction(id));
  }, [dispatch, id]);

  let tabNow = "Loading";

  if (topProfile === "Activity") {
    tabNow = <Activity singleData={singleData} />;
  } else if (topProfile === "Profile") {
    tabNow = <Profile singleData={singleData} />;
  } else if (topProfile === "Followers") {
    tabNow = <FollowersList singleData={singleData} />;
  } else if (topProfile === "matches") {
    tabNow = <SwipeMatchList singleData={singleData} />;
  } else if (topProfile === "Connections") {
    tabNow = <ConnectionList singleData={singleData} />;
  }
  return (
    <section className="profile-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-5 col-md-7">
            <LeftProfile singleData={singleData} />
          </div>
          <div className="col-xl-5 col-lg-6">
            <div className="profile-main-content">
              <TopProfile />
              {tabNow}
            </div>
          </div>
          <div className="col-xl-3 col-lg-5 col-md-7">
            <ProfileAside />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProfileBody;
