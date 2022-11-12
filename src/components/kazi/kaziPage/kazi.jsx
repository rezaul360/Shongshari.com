import CommonHeaderLayout from "../../layout/CommonHeaderLayout";
import MainLayout from "../../layout/MainLayout";
import KaziPageBody from "./kaziPageBody";
// import kaziBody from "./kaziBody";

function Kazi() {
  return (
    <MainLayout>
      <div className="main-body">
        <CommonHeaderLayout name={"Kazi"} />
        {/* <kaziBody /> */}
        <KaziPageBody />
      </div>
    </MainLayout>
  );
}

export default Kazi;
