import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  RatedKaziAction,
  suggestedKaziAction,
  topKaziAction,
} from "../../../redux/actions/kazi/Kazi";
import KaziConstant from "./KaziConstant";
import RatedKazi from "./RatedKazi";
import SuggestedKazi from "./SuggestedKazi";
import TopKazi from "./TopKazi";

const ActiveKazi = ({ tabNow }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(topKaziAction());
    dispatch(suggestedKaziAction());
    dispatch(RatedKaziAction());
  }, []);

  let module = "";
  if (tabNow === KaziConstant.SuggesteedKazi) module = <SuggestedKazi />;
  else if (tabNow === KaziConstant.RatedKazi) module = <RatedKazi />;
  else if (tabNow === KaziConstant.TopKazi) module = <TopKazi />;
  // else if (PlaneNow === membershipConstant.OneYear)
  //   module = <OneYear oneYear={oneYearData} />;

  return <div>{module}</div>;
};

export default ActiveKazi;
