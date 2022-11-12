import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LawyerTopAction,
  LawyerRatedAction,
  LawyerSuggestedAction,
} from "../../../redux/actions/Lawyer/LayerAction";
import LawyerConstant from "../LawyerConstant";
import RatedLawyer from "./RatedLawyer";
import SuggestedLawyer from "./SuggestedLawyer";
import TopLawyer from "./TopLawyer";

const ActiveLawyer = ({ tabNow }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LawyerTopAction());
    dispatch(LawyerRatedAction());
    dispatch(LawyerSuggestedAction());
  }, []);



  let module = "";
  if (tabNow === LawyerConstant.SuggestedLawyer) module = <SuggestedLawyer/>;
  else if (tabNow === LawyerConstant.TopLawyer) module = <TopLawyer />;
  else if (tabNow === LawyerConstant.RatedLawyer) module = <RatedLawyer />;
  // else if (PlaneNow === membershipConstant.OneYear)
  //   module = <OneYear oneYear={oneYearData} />;

  return <div>{module}</div>;
};

export default ActiveLawyer;
