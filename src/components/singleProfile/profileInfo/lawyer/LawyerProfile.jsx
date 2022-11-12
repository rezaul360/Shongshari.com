import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleLawyerProfileFunction } from "../../../../redux/actions/ProfileAction";
import Case from "./case/Case";
import LawyerProfileInput from "./LawyerProfileInput";
import ProfileImage from "./ProfileImage";
import LawyerServiceCom from "./services/LawyerServiceCom";

function LawyerProfile() {
  const { singleLawyerData, sidebar } = useSelector(
    (state) => state.profileValue
  );
  // const { sidebar } = useSelector((state) => state.profileValue);

  console.log("sidebar :>> ", sidebar);
  let { id } = useParams();
  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(singleLawyerProfileFunction(id));
  }, [dispatch, id]);

  let now = "";
  if (sidebar === "profile") {
    now = <LawyerProfileInput singleLawyerData={singleLawyerData} id={id} />;
  } else if (sidebar === "Services") {
    now = <LawyerServiceCom />;
  } else if (sidebar === "Case") {
    now = <Case />;
  }
  return (
    <div>
      <ProfileImage singleLawyerData={singleLawyerData} id={id} />
      {now}
    </div>
  );
}

export default LawyerProfile;
