import { Link } from "react-router-dom";
import CommonHeaderLayout from "../../layout/CommonHeaderLayout";
import AgentBody from "./AgentBody";

function Agent() {
  let header = (
    <div className="container">
      <div className="content">
        <h2 className="title extra-padding">Find Your Agent</h2>
        <ul className="breadcrumb-list extra-padding">
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          <li>find your agent</li>
        </ul>
      </div>
    </div>
  );
  return (
    <div className="main-body">
      <CommonHeaderLayout name={"Agent"} />
      <AgentBody />
    </div>
  );
}

export default Agent;
