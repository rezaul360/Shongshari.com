import MainTabLayout from "../../CommonTabs/MainTabLayout";
import Filter from "../../lawyer/lawyerPage/Filter";
import AgentTabs from "./AgentTabs";

function AgentBody() {
  return (
    <section className="findPartner banner-section">
      <div className="container">
        <div className="row">
          <Filter />
          {/* <AgentTabs/> */}
          <MainTabLayout module={"agent"} />
        </div>
      </div>
    </section>
  );
}

export default AgentBody;
