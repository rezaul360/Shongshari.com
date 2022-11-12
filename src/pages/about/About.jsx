import React from 'react';
import Footer from '../../components/headerFooter/Footer';
import Header from '../../components/headerFooter/Header';
import './About.css';
import aboutImg from './../../assets/img/about/about-page-left.html.png';
import icon from './../../assets/img/e-c-u/icon1.png';
import icon1 from './../../assets/img/e-c-u/icon2.png';
import icon2 from './../../assets/img/e-c-u/icon3.png';
import icon3 from './../../assets/img/e-c-u/icon4.png';
import img from './../../assets/img/sucess/img1.jpg';
import img1 from './../../assets/img/sucess/img2.png';
import img2 from './../../assets/img/sucess/img3.png';
import p1 from './../../assets/img/sucess/p1.png';
import p2 from './../../assets/img/sucess/p2.png';
import p3 from './../../assets/img/sucess/p3.png';
import i1 from './../../assets/img/feature/i1.png';
import i2 from './../../assets/img/feature/i2.png';
import i3 from './../../assets/img/feature/i3.png';
import i4 from './../../assets/img/feature/i4.png';
import heartshape from './../../assets/img/join/heartshape.png'
import cover from './../../assets/img/join/img.png'

const About = () => {
    return (
        <div>
            <Header />
            <div>
        <section className="flirting-section about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="img">
                  <img src={aboutImg} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <div className="section-header">
                    <h6 className="sub-title">
                      Get to Know More
                    </h6>
                    <h2 className="title">
                      About us
                    </h2>
                    <p>
                      We are here to build emotion, connect people and create happy stories.Online dating sites are the way to go for people seeking love or to meet singles while they don’t know where to find them. There are lots of online dating sites available which makes it .
                    </p>
                    <br />
                    <p className="mb-0">
                      As a result, the customer service desk recommends that 
                      customers should consider contacting them via their website. We realize that it’s not a simple task to understand what options you have when it comes to contact with their help desk. We, 
                      therefore, find it helpful if we share some of our research work with you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Start-Flirting-Section========== */}
        {/* ========== w-c-u Section Starts ========== */}
        <section className="w-c-u-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="content">
                  <div className="section-header">
                    <h6 className="sub-title">
                      How We’re different
                    </h6>
                    <h2 className="title extra-padding">
                      Why Choose Us?
                    </h2>
                    <p>
                      There are lots of online dating sites available which makes it difficult
                      to choose the one which can give you a serious partner.... 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="single-w-c-u-box">
                  <div className="icon">
                    <img src={icon} alt="" />
                  </div>
                  <h4 className="title">
                    Dating
                  </h4>
                  <p>
                    Dating - Where two people who are attracted to each other spend time together.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-w-c-u-box">
                  <div className="icon">
                    <img src={icon1} alt="" />
                  </div>
                  <h4 className="title">
                    Great Advices
                  </h4>
                  <p>
                    Dating - Where two people who are attracted to each other spend time together.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-w-c-u-box">
                  <div className="icon">
                    <img src={icon2} alt="" />
                  </div>
                  <h4 className="title">
                    24/7Support
                  </h4>
                  <p>
                    Dating - Where two people who are attracted to each other spend time together.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="single-w-c-u-box">
                  <div className="icon">
                    <img src={icon3} alt="" />
                  </div>
                  <h4 className="title">
                    Relationship
                  </h4>
                  <p>
                    Dating - Where two people who are attracted to each other spend time together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========  w-c-u Section Starts ========== */}
        {/* ==========Features-Section========== */}
        <section className="feature-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="content">
                  <div className="section-header">
                    <h6 className="sub-title extra-padding">
                      An Exhaustive List Of
                    </h6>
                    <h2 className="title extra-padding">
                      Amazing Features
                    </h2>
                    <p>
                      To find meaningful connections, dates, and life partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-content-area">
            <div className="left-image">
              <div className="offer">
                <div className="offer-inner-content">
                  <span className="fs">START NOW FOR</span>
                  <h2>
                    FREE
                  </h2>
                  <span className="ss">7 DAY TRIAL</span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-lg-5">
                  <div className="feature-lists">
                    <div className="single-feature-list">
                      <div className="icon">
                        <img src={i1} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Simple to use
                        </h4>
                        <p>
                          Simple steps to follow to have a matching
                          connection.
                        </p>
                      </div>
                    </div>
                    <div className="single-feature-list">
                      <div className="icon">
                        <img src={i2} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Smart Matching
                        </h4>
                        <p>
                          Simple steps to follow to have a matching
                          connection.
                        </p>
                      </div>
                    </div>
                    <div className="single-feature-list">
                      <div className="icon">
                        <img src={i3} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Filter very fast
                        </h4>
                        <p>
                          Simple steps to follow to have a matching
                          connection.
                        </p>
                      </div>
                    </div>
                    <div className="single-feature-list">
                      <div className="icon">
                        <img src={i4} alt="" />
                      </div>
                      <div className="content">
                        <h4 className="title">
                          Cool community
                        </h4>
                        <p>
                          Simple steps to follow to have a matching
                          connection.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Features-Section========== */}
        {/* ==========Join-now-Section========== */}
        <section className="join-now-section">
          <img className={heartshape} alt="" />
          <img className="shape2" src={cover} alt="" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="content">
                  <div className="section-header white-color">
                    <h2 className="title">
                      Best Ways to Find Your
                      True Sole Mate 
                    </h2>
                  </div>
                  <a href="#" className="custom-button">Join Now !</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==========Join-now-Section========== */}
        {/* ==========Success-Stories-Section========== */}
        <section className="sucess-stories-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="content">
                  <div className="section-header">
                    <h6 className="sub-title">
                      Love in faith
                    </h6>
                    <h2 className="title">
                      Success Stories
                    </h2>
                    <p>
                      Aliquam a neque tortor. Donec iaculis auctor turpis. Eporttitor
                      mattis ullamcorper urna. Cras quis elementum
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="single-story-box">
                  <div className="img">
                    <img src={img} alt="" />
                  </div>
                  <div className="content">
                    <div className="author">
                      <img src={p1} alt="" />
                      <span />
                    </div>
                    <h4 className="title">
                      Love horoscope for Cancer
                      There will be...
                    </h4>
                    <p className="date">
                      December 10, 2021
                    </p>
                  </div>
                  <div className="box-footer">
                    <div className="left">
                      <ul className="box-social-links">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="right">
                      <a href="#">
                        Read More<i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-story-box">
                  <div className="img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="content">
                    <div className="author">
                      <img src={p2} alt="" />
                      <span />
                    </div>
                    <h4 className="title">
                      ‘love at first sight’ is all 
                      about initial attraction...
                    </h4>
                    <p className="date">
                      December 11, 2021
                    </p>
                  </div>
                  <div className="box-footer">
                    <div className="left">
                      <ul className="box-social-links">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="right">
                      <a href="#">
                        Read More<i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-story-box">
                  <div className="img">
                    <img src={img2} alt="" />
                  </div>
                  <div className="content">
                    <div className="author">
                      <img src={p3} alt="" />
                      <span />
                    </div>
                    <h4 className="title">
                      What women actually 
                      want to feel on their...
                    </h4>
                    <p className="date">
                      December 14, 2021
                    </p>
                  </div>
                  <div className="box-footer">
                    <div className="left">
                      <ul className="box-social-links">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="right">
                      <a href="#">
                        Read More<i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
            <Footer />
        </div>
    );
};

export default About;