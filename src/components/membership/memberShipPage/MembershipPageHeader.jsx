import { Link } from "react-router-dom";
import Wave from "../../layout/Wave";

function MembershipPageHeader() {
  return (
    <section className="breadcrumb-area profile-bc-area">
      <Wave />
      <div className="container">
        <div className="content">
          <h2 className="title extra-padding">Mebbership</h2>
          <ul className="breadcrumb-list extra-padding">
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>Membership</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MembershipPageHeader;
