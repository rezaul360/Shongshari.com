import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleAgentProfileFunction } from "../../../../redux/actions/ProfileAction";
import AgentProfileImage from "./AgentProfileImage";
import AgentProfileInput from "./AgentProfileInput";
import AgentServiceIndex from "./AgentServiceIndex";
import Contact from "./Contact";

function AgentProfile() {
  const { singleAgentData, sidebar } = useSelector(
    (state) => state.profileValue
  );
  // const { sidebar } = useSelector((state) => state.profileValue);

  // console.log("ssingleAgentDataidebar :>> ", singleAgentData);
  let { id } = useParams();
  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(singleAgentProfileFunction(id));
  }, [dispatch, id]);

  let now = "";
  if (sidebar === "profile") {
    now = <AgentProfileInput singleAgentData={singleAgentData} id={id} />;
  } else if (sidebar === "Services") {
    now = <AgentServiceIndex />;
  } else if (sidebar === "Contact") {
    now = <Contact />;
  }
  return (
    <div>
      <AgentProfileImage singleAgentData={singleAgentData} id={id} />
      {now}
    </div>
  );
}

export default AgentProfile;
