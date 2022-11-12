import MainTabLayout from "../../CommonTabs/MainTabLayout";
import Filter from "./Filter";
import Tabs from "./KaziTabs";

function KaziPageBody() {
  return (
    <section className="findPartner banner-section">
      <div className="container">
        <div className="row">
          <Filter module="kazi" />
          {/* <Tabs /> */}
          <MainTabLayout module={"kazi"} />
        </div>
      </div>
    </section>
  );
}

export default KaziPageBody;
