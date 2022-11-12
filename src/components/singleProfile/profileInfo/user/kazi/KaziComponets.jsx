import { useDispatch } from "react-redux";
import { KaziComponentAction } from "../../../../../redux/actions/kazi/Kazi";
import { profileHeaderNow } from "../../../../../redux/actions/ProfileAction";

const KaziComponets = () => {
  let dispatch = useDispatch();
  let changeModule = (componentValue, headerName) => {
    dispatch(KaziComponentAction(componentValue));
    dispatch(profileHeaderNow(headerName));
  };
  return (
    <div className="d-flex flex-wrap">
      <div
        className="cardList1"
        onClick={() => changeModule("KaziList", "Kazi List")}
      >
        <span>Kazi List</span>
      </div>
      <div
        className="cardList1"
        onClick={() => changeModule("TopKaziList", "Top Kazi List")}
      >
        <span>Top Kazi List</span>
      </div>
      <div
        className="cardList1"
        onClick={() => changeModule("SuggestedKaziList", "Suggested Kazi List")}
      >
        <span>Suggested Kazi List</span>
      </div>
      <div
        className="cardList1"
        onClick={() => changeModule("RatedKaziList", "Rated Kazi List")}
      >
        <span>Rated Kazi List</span>
      </div>
      <div
        className="cardList1"
        onClick={() => changeModule("MyHiredKaziList", "My Hired Kazi List")}
      >
        <span>My Hired Kazi List</span>
      </div>
    </div>
  );
};

export default KaziComponets;
