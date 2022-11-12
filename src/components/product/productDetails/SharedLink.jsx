import React from "react";

function SharedLink() {
  return (
    <div className="product-single-share">
      <label>Share link</label>
      <ul className="footer-brand">
        <li>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="#" className="active">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-pinterest"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SharedLink;
