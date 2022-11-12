import React from "react";
import { Link } from "react-router-dom";
import shape1 from "../../assets/img/footer/f-shape.png";
import shape2 from "../../assets/img/footer/flower01.png";
import nIcon from "../../assets/img/footer/n-icon.png";
import shape3 from "../../assets/img/footer/right-shape.png";

function Footer() {
  return (
    <footer className="footer-section mt-3">
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <img className="shape1" src={shape1} alt="img" />
      <img className="shape2" src={shape2} alt="img" />
      <img className="shape3" src={shape3} alt="img" />
      <div className="newslater-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="newslater-container">
                <div className="newslater-wrapper">
                  <div className="icon">
                    <img className="w-75" src={nIcon} alt="img" />
                  </div>
                  <p className="text">
                    Sign up to receive a monthly email on the latest news!
                  </p>
                  <form className="newslater-form">
                    <input type="text" placeholder="Your Email Address" />
                    <button type="submit">
                      <i className="fab fa-telegram-plane"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-links">
          <div className="row">
            <div className="col-lg-12">
              <hr className="hr" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="link-wrapper one">
                <h4 className="f-l-title">Our Information</h4>
                <ul className="f-solial-links">
                  <li>
                    <Link to="/about">
                      <i className="fas fa-angle-double-right"></i> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <i className="fas fa-angle-double-right"></i> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Customer
                      Reviews
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Success
                      Stories
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Business
                      License
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="link-wrapper two">
                <h4 className="f-l-title">My Account</h4>
                <ul className="f-solial-links">
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Manage
                      Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Safety Tips
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Account
                      Varification
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Safety &
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Membership
                      Level
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="link-wrapper three">
                <h4 className="f-l-title">help center</h4>
                <ul className="f-solial-links">
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Help centre
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i>Quick Start
                      Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i>Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i>Associate
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="link-wrapper four">
                <h4 className="f-l-title">legal</h4>
                <ul className="f-solial-links">
                  <li>
                    <Link to="/privacy">
                      <i className="fas fa-angle-double-right"></i> Privacy
                      policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> End User
                      Agreements
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Refund
                      Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Cookie
                      policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fas fa-angle-double-right"></i> Report abuse
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <hr className="hr2" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="copyr-text">
                <span>Copyright © 2021.All Rights Reserved By</span>
                <Link className="ml-1" to="/">
                  shongshari.com
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="footer-social-links">
                <li>
                  <Link to="/">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <i className="fab fa-dribbble"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
