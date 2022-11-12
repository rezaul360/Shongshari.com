import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  RatedAgentAction,
  suggestedAgentAction,
  topAgentAction,
} from "../../redux/actions/Agent/AgentAction";
import {
  RatedKaziAction,
  suggestedKaziAction,
  topKaziAction,
} from "../../redux/actions/kazi/Kazi";
import {
  LawyerRatedAction,
  LawyerSuggestedAction,
  LawyerTopAction,
} from "../../redux/actions/Lawyer/LayerAction";
import agentConstant from "../agent/AgentConstant";
import SuggestedAgent from "../agent/agentPage/SuggestedAgent";
import TopAgent from "../agent/agentPage/TopAgent";
import KaziConstant from "../kazi/kaziPage/KaziConstant";
import RatedKazi from "../kazi/kaziPage/RatedKazi";
import SuggestedKazi from "../kazi/kaziPage/SuggestedKazi";
import TopKazi from "../kazi/kaziPage/TopKazi";
import LawyerConstant from "../lawyer/LawyerConstant";
import RatedLawyer from "../lawyer/lawyerPage/RatedLawyer";
import SuggestedLawyer from "../lawyer/lawyerPage/SuggestedLawyer";
import TopLawyer from "../lawyer/lawyerPage/TopLawyer";

const ActivNow = ({ tabNow }) => {
  // console.clear();
  // console.log(tabNow, "tabnow");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topKaziAction());
    dispatch(suggestedKaziAction());
    dispatch(RatedKaziAction());

    dispatch(LawyerTopAction());
    dispatch(LawyerRatedAction());
    dispatch(LawyerSuggestedAction());

    dispatch(topAgentAction());
    dispatch(suggestedAgentAction());
    dispatch(RatedAgentAction());
  }, []);

  let module = "";
  if (tabNow === KaziConstant.SuggesteedKazi) module = <SuggestedKazi />;
  else if (tabNow === KaziConstant.RatedKazi) module = <RatedKazi />;
  else if (tabNow === KaziConstant.TopKazi) module = <TopKazi />;
  // Agent
  else if (tabNow === agentConstant.RatedAgent) module = <RatedKazi />;
  else if (tabNow === agentConstant.SuggesteedAgent)
    module = <SuggestedAgent />;
  else if (tabNow === agentConstant.TopAgent) module = <TopAgent />;
  // lawyer
  else if (tabNow === LawyerConstant.RatedLawyer) module = <RatedLawyer />;
  else if (tabNow === LawyerConstant.SuggestedLawyer)
    module = <SuggestedLawyer />;
  else if (tabNow === LawyerConstant.TopLawyer) module = <TopLawyer />;

  // else if (PlaneNow === membershipConstant.OneYear)
  //   module = <OneYear oneYear={oneYearData} />;

  return <div>{module}</div>;
};

export default ActivNow;
