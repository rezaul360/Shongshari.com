import { useDispatch } from "react-redux";
import { LawyerComponentNowAction } from "../../../../../redux/actions/Lawyer/LayerAction";
import { profileHeaderNow } from "../../../../../redux/actions/ProfileAction";

function LawyerComponents() {
  let dispatch = useDispatch();
  let changeModule = (componentValue, headerName) => {
    dispatch(LawyerComponentNowAction(componentValue));
    dispatch(profileHeaderNow(headerName));
  };
  return (
    <div className="d-flex flex-wrap">
      <div
        className="cardList1"
        onClick={() => changeModule("lawyerList", "Lawyer List")}
      >
        <span>Lawyer List</span>
      </div>
      <div
        className="cardList1"
        onClick={() => changeModule("toplawyerList", "Top Lawyer List")}
      >
        <span>Top Lawyer List</span>
      </div>
      <div
        className="cardList1"
        onClick={() =>
          changeModule("suggestedlawyerList", "Suggested Lawyer List")
        }
      >
        <span>Suggested Lawyer List</span>
      </div>
      <div
        className="cardList1"
        onClick={() => changeModule("ratedlawyerList", "Rated Lawyer List")}
      >
        <span>Rated Lawyer List</span>
      </div>
      <divlawyer
        className="cardList1"
        onClick={() => changeModule("myHiredlawyerList", "My Case List")}
      >
        <span>My Case List</span>
      </divlawyer>
      <divlawyer
        className="cardList1"
        onClick={() => changeModule("myLawyerFavourite", "My Favourite List")}
      >
        <span>My Favourite List</span>
      </divlawyer>
    </div>
  );
}

export default LawyerComponents;
