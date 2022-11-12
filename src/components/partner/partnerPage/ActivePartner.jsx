import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  topPartnerAction,
  newestPartnerAction,
  suggestedPartnerAction,
} from "../../../redux/actions/findPartner/findPartnerAction";
import PartnerConstant from "../PartnerConstant";
import NewestPartner from "./Newest";

import Nearest from "./Newest";
import SuggestedPartner from "./SuggestedPartner";
import TopPartner from "./TopPartner";

const ActivePartner = ({ tabNow }) => {
  const dispatch = useDispatch();

  //   useEffect(() => {}, []);
  useEffect(() => {
    dispatch(topPartnerAction());
    dispatch(newestPartnerAction());
    dispatch(suggestedPartnerAction());
  }, []);

  let module = "";
  if (tabNow === PartnerConstant.SuggestedPartner)
    module = <SuggestedPartner />;
  else if (tabNow === PartnerConstant.NearestPartner)
    module = <NewestPartner />;
  else if (tabNow === PartnerConstant.TopPartner) module = <TopPartner />;
  // else if (PlaneNow === membershipConstant.OneYear)
  //   module = <OneYear oneYear={oneYearData} />;

  return <div>{module}</div>;
};

export default ActivePartner;
