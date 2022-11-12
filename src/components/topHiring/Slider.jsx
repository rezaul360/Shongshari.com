import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  topAgentAction,
  topKaziAction,
  topLawyerAction,
} from "../../redux/actions/sliders/BackgroundSliderAction";
import Agent from "./Agent";
import TophiringConstant from "./constants";
import Kazi from "./Kazi";
import Lawyer from "./Lawyer";

function Slider({ profileNow }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(topKaziAction());
    dispatch(topLawyerAction());
    dispatch(topAgentAction());
  }, []);
  let module = "";
  if (profileNow === TophiringConstant.LAWYER) module = <Lawyer />;
  else if (profileNow === TophiringConstant.AGENT) module = <Agent />;
  else if (profileNow === TophiringConstant.KAZI) module = <Kazi />;

  return <div>{module}</div>;
}

export default Slider;
