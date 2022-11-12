import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { singleKaziAction } from "../../../../redux/actions/kazi/Kazi";

import KaziContact from "./KaziContact";

import KaziProfileDetails from "./KaziProfileImage";

import KaziProfileInput from "./KaziProfileInput";
import KaziServiceCom from "./KaziServiceCom";

const KaziProfileIndex = () => {
  const { singleKaziData } = useSelector((state) => state.kaziValue);
  let { id } = useParams();

  const { sidebar } = useSelector((state) => state.profileValue);

  // console.log("singleLawyerData :>> ", sidebar);
  let dispatch = useDispatch();
  useMemo(() => {
    dispatch(singleKaziAction(id));
  }, [dispatch, id]);

  let now = "";
  if (sidebar === "profile") {
    now = <KaziProfileInput singleKaziData={singleKaziData} id={id} />;
  } else if (sidebar === "Services") {
    now = <KaziServiceCom />;
  } else if (sidebar === "KaziContract") {
    now = <KaziContact />;
  }
  return (
    <div>
      <KaziProfileDetails singleKaziData={singleKaziData} id={id} />
      {now}
    </div>
  );
};
export default KaziProfileIndex;
