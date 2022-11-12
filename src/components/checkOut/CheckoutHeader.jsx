import React from "react";
import { Link } from "react-router-dom";
import Wave from "../layout/Wave";

const CheckoutHeader = () => {
  return (
    <section className="breadcrumb-area profile-bc-area">
      <Wave />
      <div className="container">
        <div className="content">
          <h2 className="title extra-padding">check out</h2>
          <ul className="breadcrumb-list extra-padding">
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            <li>checkout</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CheckoutHeader;
