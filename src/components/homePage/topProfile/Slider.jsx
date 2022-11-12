import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  topProfileBrideAction,
  topProfileGroomAction,
  topProfileSuggestAction,
} from "../../../redux/actions/sliders/BackgroundSliderAction";
import TopProfileConstant from "./constants";
import SuggestedSlider from "./SuggestedSlider";
import TopBrideSlide from "./TopBrideSlider";
import TopGroomSlide from "./TopGroomSlider";
import WithoutLoginSuggested from "./WithoutLoginSuggested";

function Slider({ profileNow }) {
  let dispatch = useDispatch();
  const { authenticated, loading } = useSelector((state) => state.authValue);

  useMemo(() => {
    dispatch(topProfileSuggestAction());
    dispatch(topProfileBrideAction());
    dispatch(topProfileGroomAction());
  }, []);
  let SuggestedProfile = authenticated ? (
    <SuggestedSlider />
  ) : (
    <WithoutLoginSuggested />
  );
  let module = "";
  if (profileNow === TopProfileConstant.SUGGESTFORYOU)
    module = SuggestedProfile;
  else if (profileNow === TopProfileConstant.TOPBRIDE)
    module = <TopBrideSlide />;
  else if (profileNow === TopProfileConstant.TOPGROOM)
    module = <TopGroomSlide />;

  return <div>{module}</div>;
}

export default Slider;
