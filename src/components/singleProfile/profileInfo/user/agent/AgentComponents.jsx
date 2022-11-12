import { useDispatch } from "react-redux";
import { AgentComponentNowAction } from "../../../../../redux/actions/Agent/AgentAction";
import { profileHeaderNow } from "../../../../../redux/actions/ProfileAction";

function AgentComponents() {
  let dispatch = useDispatch();
  let changeModule = (componentValue, headerName) => {
    dispatch(AgentComponentNowAction(componentValue));
    dispatch(profileHeaderNow(headerName));
  };
  return (
    <div className="d-flex flex-wrap">
      <div
        className="cardList1"
        onClick={() => changeModule("agentList", "Agent List")}
      >
        <span>Agent List</span>
      </div>
      <div
        className="cardList1"
        onClick={() => changeModule("topagentList", "Top Agent List")}
      >
        <span>Top Agent List</span>
      </div>
      <div
        className="cardList1"
        onClick={() =>
          changeModule("suggestedagentList", "Suggested Agent List")
        }
      >
        <span>Suggested Agent List</span>
      </div>
      <div
        className="cardList1"
        onClick={() => changeModule("ratedagentList", "Rated Agent List")}
      >
        <span>Rated Agent List</span>
      </div>
      <div
        className="cardList1"
        onClick={() => changeModule("myHiredagentList", "My Hired Agent List")}
      >
        <span>My Hired Agent List</span>
      </div>
    </div>
  );
}

export default AgentComponents;
