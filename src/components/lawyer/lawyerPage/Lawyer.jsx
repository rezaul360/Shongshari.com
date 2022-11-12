import CommonHeaderLayout from "../../layout/CommonHeaderLayout";
import MainLayout from "../../layout/MainLayout";
import LawyerBody from "./LawyerBody";

function Lawyer() {
  return (
    <MainLayout>
      <div className="main-body">
        <CommonHeaderLayout name={"Lawyer"} />
        <LawyerBody />
      </div>
    </MainLayout>
  );
}

export default Lawyer;
