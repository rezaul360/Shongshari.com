import { useDispatch } from "react-redux";
import { sidebarNow } from "../../../../redux/actions/ProfileAction";
// import { sidebarNow } from "../../../redux/actions/ProfileAction";

function LawyerSidebar({ sidebar, id }) {
  // console.log("id", id);
  //   const { sidebar } = useSelector((state) => state.profileValue);
  let dispatch = useDispatch();

  return (
    <div className="accordion o__userSideBar" id="accordionExample">
      <div className="card ">
        <div className="card-header " id="headingOne">
          <button
            className="o__userCard"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <div className="icon">
              <i className="fas fa-user"></i>
            </div>
            <span>My Profile</span>
            <div className="t-icon">
              <i className="fas fa-plus"></i>
              <i className="fas fa-minus"></i>
            </div>
          </button>
        </div>

        <div
          id="collapseOne"
          className="collapse show"
          aria-labelledby="headingOne"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul className="links">
              <li onClick={() => dispatch(sidebarNow("profile"))}>
                <a className={sidebar === "profile" ? "active" : ""}>
                  Profile Info
                </a>
              </li>
              <li onClick={() => dispatch(sidebarNow("LawyerServices"))}>
                <a className={sidebar === "LawyerServices" ? "active" : ""}>
                  Services
                </a>
              </li>
              <li onClick={() => dispatch(sidebarNow("LawyerCase"))}>
                <a className={sidebar === "LawyerCase" ? "active" : ""}>Case</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card ">
        <div className="card-header " id="headingTwo">
          <button
            className="collapsed o__userCard"
            type="button"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <div className="icon">
              <i className="fas fa-cogs"></i>
            </div>
            <span>Account</span>
            <div className="t-icon">
              <i className="fas fa-plus"></i>
              <i className="fas fa-minus"></i>
            </div>
          </button>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul className="links">
              <li>
                <a href="user-account-info.html">Account Info</a>
              </li>
              <li>
                <a href="user-change-pass.html">Change Password</a>
              </li>
              <li>
                <a href="user-privicy-setting.html">Privacy Settings</a>
              </li>
              <li>
                <a href="user-verify-account.html">Verified account</a>
              </li>
              <li>
                <a href="user-close-account.html">Close Account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card ">
        <div className="card-header " id="headingThree">
          <button
            className="collapsed o__userCard"
            type="button"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <div className="icon">
              <i className="far fa-credit-card"></i>
            </div>
            <span>Subscriptions & Payments</span>
            <div className="t-icon">
              <i className="fas fa-plus"></i>
              <i className="fas fa-minus"></i>
            </div>
          </button>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <ul className="links">
              <li>
                <a href="user-billing.html">Billing & Payout</a>
              </li>
              <li>
                <a href="user-plan.html">Upgrade Membership Plan</a>
              </li>
              <li>
                <a href="user-purchase.html">View Purchase History</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LawyerSidebar;
