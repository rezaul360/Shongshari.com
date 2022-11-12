import { useSelector } from "react-redux";
import { getType } from "../../../utils/functions";
import AgentSidebar from "./agent/AgentSidebar";
import KaziSidebar from "./Kazi/KaziSidebar";
import LawyerSidebar from "./lawyer/LawyerSidebar";
import ProfileSidebar from "./ProfileSidebar";

function Sidebar({ id }) {
  // console.log("id", id);
  const { sidebar } = useSelector((state) => state.profileValue);
  let loginType = getType();

  let sidebarNow = "";
  if (loginType == 1) {
    sidebarNow = <ProfileSidebar sidebar={sidebar} id={id} />;
  } else if (loginType == 2) {
    sidebarNow = <LawyerSidebar sidebar={sidebar} id={id} />;
  } else if (loginType == 3) {
    sidebarNow = <KaziSidebar sidebar={sidebar} id={id} />;
  } else if (loginType == 6) {
    sidebarNow = <AgentSidebar sidebar={sidebar} id={id} />;
  }
  return <>{sidebarNow}</>;
}

export default Sidebar;
