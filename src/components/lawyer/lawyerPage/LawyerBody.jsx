import MainTabLayout from "../../CommonTabs/MainTabLayout";
import Filter from "./Filter";
import Tabs from "./LawyerTab";

function LawyerBody() {
  return (
    <section className="findPartner banner-section">
      <div className="container">
        <div className="row">
          <Filter module="lawyer" />
          {/* <Tabs /> */}
          <MainTabLayout module={"Lawyer"} />
        </div>
      </div>
    </section>
  );
}

export default LawyerBody;
