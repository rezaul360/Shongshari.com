import React from "react";
import { useSelector } from "react-redux";
import membershipConstant from "../constants";
import OneMonth from "./OneMonth";
import OneYear from "./OneYear";
import SixMonth from "./SixMonth";
import ThreeMonth from "./ThreeMonth";
// Months
const Plane = ({ PlaneNow }) => {
  const { membershipPackData } = useSelector((state) => state.memberPackValue);
  const oneMonthData = membershipPackData.filter(
    (data) => data.type == "1 month"
  );
  const threeMonthData = membershipPackData.filter(
    (data) => data.type == "3 Months"
  );
  const sixMonthData = membershipPackData.filter(
    (data) => data.type == "6 Months"
  );
  const oneYearData = membershipPackData.filter(
    (data) => data.type == "1 Year"
  );

  let module = "";
  if (PlaneNow === membershipConstant.OneMonth)
    module = <OneMonth oneMonth={oneMonthData} />;
  else if (PlaneNow === membershipConstant.ThreeMonth)
    module = <ThreeMonth threeMonth={threeMonthData} />;
  else if (PlaneNow === membershipConstant.SixMonth)
    module = <SixMonth sixMonth={sixMonthData} />;
  else if (PlaneNow === membershipConstant.OneYear)
    module = <OneYear oneYear={oneYearData} />;

  return <div>{module}</div>;
};

export default Plane;
