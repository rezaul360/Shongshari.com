import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfileServices from "../../../../api/ProfileServices";
import { singleProfileFunction } from "../../../../redux/actions/ProfileAction";
import { customPosition } from "../../../../utils/Modals";
import EducationModal from "../../../modal/EducationModal";
import AboutProfile from "./AboutProfile";
import Certificates from "./Certificates";
import ProfileImage from "./ProfileImage";

export const UserInfoIndex = function UserInfoIndexF() {
  const { singleData, aboutProfile } = useSelector(
    (state) => state.profileValue
  );
  let { id } = useParams();
  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(singleProfileFunction(id));
  }, [dispatch, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("aboutProfile :>> ", aboutProfile);

    // console.log("data :>> ", data);
    let res = await ProfileServices.updateProfile(aboutProfile);
    // console.log("res", res);
    if (res.status === 201) {
      dispatch(singleProfileFunction(id));
      customPosition("center", "success", res.data.message);
    } else {
      customPosition("center", "error", res.data.message);
    }
  };
  return (
    <>
      <ProfileImage singleData={singleData} />
      <AboutProfile
        singleData={singleData}
        id={id}
        handleSubmit={handleSubmit}
      />
      <EducationModal />
      {/* <JobModal /> */}

      <Certificates />
      <div className="buttons  mt-30">
        <button type="submit" className="custom-button" onClick={handleSubmit}>
          Save Changes
        </button>
        {/* <button className="custom-button2">Discard All</button> */}
      </div>
    </>
  );
};

export const MemoUserInfoIndex = React.memo(UserInfoIndex);
