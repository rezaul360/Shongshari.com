import { useSelector } from "react-redux";
import { getType } from "../../../utils/functions";
import AgentProfile from "./agent/AgentProfile";
import AgentServiceIndex from "./agent/AgentServiceIndex";
import Contact from "./agent/Contact";
import KaziCase from "./Kazi/Case";
import KaziContact from "./Kazi/KaziContact";
import KaziProfileIndex from "./Kazi/KaziProfileIndex";
import KaziServiceCom from "./Kazi/KaziServiceCom";
import Case from "./lawyer/case/Case";

import LawyerProfile from "./lawyer/LawyerProfile";
import LawyerServiceCom from "./lawyer/services/LawyerServiceCom";
import AgentUserIndex from "./user/agent/AgentUserIndex";
import UserKaziIndex from "./user/kazi/UserKaziIndex";
import LawyerUserIndex from "./user/lawyer/LawyerUserIndex";
import { MemoUserInfoIndex } from "./user/UserInfoIndex";

function Index() {
  let loginType = getType();
  const { sidebar, profileHeader } = useSelector((state) => state.profileValue);

  let profileNow = "";
  if (loginType == 1) {
    profileNow = <MemoUserInfoIndex />;
  } else if (loginType == 2) {
    profileNow = <LawyerProfile />;
  } else if (loginType == 3) {
    profileNow = <KaziProfileIndex />;
  } else if (loginType == 6) {
    profileNow = <AgentProfile />;
  }
  // console.log("sidebar :>> ", sidebar);
  let moduleNow = <h4>Loading...................</h4>;
  if (sidebar === "profile") {
    moduleNow = profileNow;
  } else if (sidebar === "Agent") {
    moduleNow = <AgentUserIndex />;
  } else if (sidebar === "Lawyer") {
    moduleNow = <LawyerUserIndex />;
  } else if (sidebar === "AgentServices") {
    moduleNow = <AgentServiceIndex />;
  } else if (sidebar === "AgentCase") {
    moduleNow = <Contact />;
  } else if (sidebar === "LawyerServices") {
    moduleNow = <LawyerServiceCom />;
  } else if (sidebar === "LawyerCase") {
    moduleNow = <Case />;
  } else if (sidebar === "Kazi") {
    moduleNow = <UserKaziIndex />;
  } else if (sidebar === "KaziServices") {
    moduleNow = <KaziServiceCom />;
  } else if (sidebar === "KaziCase") {
    moduleNow = <KaziCase />;
  } else if (sidebar === "KaziContract") {
    moduleNow = <KaziContact />;
  }

  return (
    <div className="col-xl-8 col-md-7 " id="profile">
      <div className="page-title">{profileHeader}</div>

      {moduleNow}
    </div>
  );
}

export default Index;
