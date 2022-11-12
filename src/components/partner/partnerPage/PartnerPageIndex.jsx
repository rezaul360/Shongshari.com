import CommonHeaderLayout from "../../layout/CommonHeaderLayout";
import PartnerPageBody from "./PartnerPageBody";

function PartnerPageIndex() {
  return (
    <div className="main-body">
      <CommonHeaderLayout name={"Find Your Partner"} />
      <PartnerPageBody />
    </div>
  );
}

export default PartnerPageIndex;
