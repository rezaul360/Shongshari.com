import Filter from "../../kazi/kaziPage/Filter";
import Tabs from "./PartnerTab";

function PartnerPageBody() {
  return (
    <section className="findPartner banner-section">
      <div className="container">
        <div className="row">
          <Filter />
          <Tabs />
        </div>
      </div>
    </section>
  );
}

export default PartnerPageBody;
