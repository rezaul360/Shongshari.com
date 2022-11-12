import CommonHeaderLayout from "../../layout/CommonHeaderLayout";
import MembershipBody from "./MembershipBody";

const MemberShipPageIndex = () => {
  return (
    <div className="main-body">
      <CommonHeaderLayout name={"Membership"} />
      <MembershipBody />
    </div>
  );
};

export default MemberShipPageIndex;
