import { useDispatch, useSelector } from "react-redux";
import { topProfileNow } from "../../redux/actions/ProfileAction";

function TopProfile() {
  const { topProfile } = useSelector((state) => state.profileValue);
  let dispatch = useDispatch();

  return (
    <ul className="top-menu">
      <li>
        <a
          className={topProfile === "Activity" ? `active` : ""}
          onClick={() => dispatch(topProfileNow("Activity"))}
        >
          Activity
        </a>
      </li>
      <li>
        <a
          className={topProfile === "Profile" ? `active` : ""}
          onClick={() => dispatch(topProfileNow("Profile"))}
        >
          Profile
        </a>
      </li>
      <li>
        <a
          className={topProfile === "Followers" ? `active` : ""}
          onClick={() => dispatch(topProfileNow("Followers"))}
        >
          Followers
          <div className="num">04</div>
        </a>
      </li>
      <li>
        <a
          className={topProfile === "matches" ? `active` : ""}
          onClick={() => dispatch(topProfileNow("matches"))}
        >
          My matches
          <div className="num">04</div>
        </a>
      </li>
      <li>
        <a
          className={topProfile === "Connections" ? `active` : ""}
          onClick={() => dispatch(topProfileNow("Connections"))}
        >
          Connections
          {/* <div className="num">04</div> */}
        </a>
      </li>
    </ul>
  );
}

export default TopProfile;
