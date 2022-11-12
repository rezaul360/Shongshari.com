import { Link } from "react-router-dom";
import Wave from "./Wave";

function CommonHeaderLayout({ name }) {
  return (
    <section className="breadcrumb-area profile-bc-area">
      <Wave />
      <div className="container">
        <div className="content">
          <h2 className="title extra-padding">{name}</h2>
          <ul className="breadcrumb-list extra-padding">
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>{name}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CommonHeaderLayout;
