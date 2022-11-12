import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { topAgentAction,suggestedAgentAction,RatedAgentAction} from "../../../redux/actions/Agent/AgentAction";
import agentConstant from "../AgentConstant";
import RatedAgent from "./RatedAgent";
import SuggestedAgent from "./SuggestedAgent";
import TopAgent from "./TopAgent";

const ActiveAgent = ({ tabNow }) => {
const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(topAgentAction())
        dispatch(suggestedAgentAction())
        dispatch(RatedAgentAction())

    },[])

  let module = "";
  if (tabNow === agentConstant.SuggesteedAgent) module = <SuggestedAgent />;
  else if (tabNow === agentConstant.RatedAgent) module = <RatedAgent />;
  else if (tabNow === agentConstant.TopAgent) module = <TopAgent />;
  // else if (PlaneNow === membershipConstant.OneYear)
  //   module = <OneYear oneYear={oneYearData} />;

  return <div>{module}</div>;
};

export default ActiveAgent;
