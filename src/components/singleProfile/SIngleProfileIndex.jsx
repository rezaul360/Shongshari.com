import CommonHeaderLayout from "../layout/CommonHeaderLayout";
import SingleProfileBody from "./SingleProfileBody";

function SIngleProfileIndex() {
  return (
    <div className="main-body">
      <CommonHeaderLayout name={"Single Profile"} />
      <SingleProfileBody />
      {/* <PartnerPageBody /> */}
    </div>
  );
}

export default SIngleProfileIndex;
