import AgentComponents from "./AgentComponents";

import { useSelector } from "react-redux";
import { MemoAgentList } from "./AgentList";
import { MemoMyHiredAgentsList } from "./MyHiredAgents";
import { MemoRatedAgentList } from "./RatedAgentList";
import { MemoSuggestedAgentList } from "./SuggestedAgent";
import { MemoTopAgentList } from "./TopAgentList";
function AgentUserIndex() {
  const { agentComponentNow } = useSelector((state) => state.AgentValue);
  let moduleNow = "";
  if (agentComponentNow === "componentAgent") {
    moduleNow = <AgentComponents />;
  } else if (agentComponentNow === "agentList") {
    moduleNow = <MemoAgentList />;
  } else if (agentComponentNow === "topagentList") {
    moduleNow = <MemoTopAgentList />;
  } else if (agentComponentNow === "suggestedagentList") {
    moduleNow = <MemoSuggestedAgentList />;
  } else if (agentComponentNow === "ratedagentList") {
    moduleNow = <MemoRatedAgentList />;
  } else if (agentComponentNow === "myHiredagentList") {
    moduleNow = <MemoMyHiredAgentsList />;
  }
  return moduleNow;
}

export default AgentUserIndex;
