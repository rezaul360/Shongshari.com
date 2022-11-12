import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { sidebarNow } from "../../../../redux/actions/ProfileAction";

const KaziSidebar = ({ sidebar, id }) => {
  let dispatch = useDispatch();

  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "profile",
    }
  );

  const isProfileShow = () => {
    if (state.name == "profile") {
      return true;
    }
    return false;
  };

  const isAcountShow = () => {
    if (state.name == "account") {
      return true;
    }
    return false;
  };
  const isPaymentShow = () => {
    if (state.name == "payment") {
      return true;
    }
    return false;
  };

  const show = (name) => {
    setState({ name: name });
    console.log("hello");
  };

  console.log(isProfileShow());
  return (
    <div className="accordion o__userSideBar" id="accordionExample">
      <div className="card ">
        <div className="card-header " id="headingOne">
          <button
            className={isProfileShow() ? `o_userCard` : `o_userCard collapsed`}
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded={isProfileShow()}
            aria-controls="collapseOne"
          >
            <div className="icon">
              <i className="fas fa-user"></i>
            </div>
            <span>My Profile</span>
            <div className="t-icon">
              <i className="fas fa-plus" onClick={() => show("profile")}></i>
              <i className="fas fa-minus"></i>
            </div>
          </button>
        </div>

        <div
          id="collapseOne"
          className={isProfileShow() ? "collapse show" : "collapse"}
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
              <li onClick={() => dispatch(sidebarNow("KaziServices"))}>
                <a className={sidebar === "KaziServices" ? "active" : ""}>
                  Services
                </a>
              </li>
              <li onClick={() => dispatch(sidebarNow("KaziContract"))}>
                <a className={sidebar === "KaziContract" ? "active" : ""}>
                  Contract
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card ">
        <div className="card-header " id="headingTwo">
          <button
            className={isAcountShow() ? `o_userCard` : `o_userCard collapsed`}
            type="button"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded={isAcountShow()}
            aria-controls="collapseTwo"
          >
            <div className="icon">
              <i className="fas fa-cogs"></i>
            </div>
            <span>Account</span>
            <div className="t-icon">
              <i className="fas fa-plus" onClick={() => show("account")}></i>
              <i className="fas fa-minus"></i>
            </div>
          </button>
        </div>
        <div
          id="collapseTwo"
          className={isAcountShow() ? "collapse show" : "collapse"}
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
            className={isPaymentShow() ? `o_userCard` : `o_userCard collapsed`}
            type="button"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded={isPaymentShow()}
            aria-controls="collapseThree"
          >
            <div className="icon">
              <i className="far fa-credit-card"></i>
            </div>
            <span>Subscriptions & Payments</span>
            <div className="t-icon">
              <i className="fas fa-plus" onClick={() => show("payment")}></i>

              <i className="fas fa-minus"></i>
            </div>
          </button>
        </div>
        <div
          id="collapseThree"
          className={isPaymentShow() ? "collapse show" : "collapse"}
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
};

export default KaziSidebar;
