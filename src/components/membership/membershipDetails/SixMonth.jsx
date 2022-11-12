import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WOW from "wowjs";

const SixMonth = ({ sixMonth }) => {
  // console.log(sixMonth, "sixMonth");
  useEffect(() => {
    new WOW.WOW({
      live: true,
    }).init();
  }, []);
  return (
    <div className="top-profile-maim wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div id="collapseThree" className="collapse show">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-plan memDown">
                <h4
                  style={{ color: "#0984e3" }}
                  className="number number2 mb-2"
                >
                  {/* <sup>$</sup>4.99 */}
                  Free
                </h4>
                <h4 className="number mb-2">
                  <sup>$</sup> {sixMonth[0]?.fee}
                </h4>
                <p>Save 0% on 6 Month</p>
                <Link
                  to={`/checkout/membership/${sixMonth[0]?.id}`}
                  className="custom-button mb-4"
                >
                  Buy Now!
                </Link>
                <ul className="stamet">
                  <li>
                    <i className="ri-check-double-line" /> 10 Chat Request
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> 10 Swap Every 24 Hour
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> 100 Message Per Day
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-plan memDown">
                <h4 style={{ color: "gold" }} className="number number2 mb-2">
                  {/* <sup>$</sup>4.99 */}
                  Gold
                </h4>
                <h4 className="number mb-2">
                  <sup>$</sup>
                  {sixMonth[1]?.fee}
                </h4>
                <p>Save 22% on 6 Month</p>
                <Link
                  to={`/checkout/membership/${sixMonth[1]?.id}`}
                  className="custom-button mb-4"
                >
                  Buy Now!
                </Link>
                <ul className="stamet">
                  <li>
                    <i className="ri-check-double-line" /> Unlimited Chat
                    Request
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Unlimited swaps
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Unlimited Message
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Video Chat 30 Minutes
                    a Day
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Timeline Post
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Course Discount 25%
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Upload marrige
                    Certificate
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Free Kazi Contact
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-plan memDown">
                <h4
                  style={{ color: "#76C043" }}
                  className="number number2 mb-2"
                >
                  {/* <sup>$</sup>4.99 */}
                  Diamond
                </h4>
                <h4 className="number mb-2">
                  <sup>$</sup>
                  {sixMonth[2]?.fee}
                </h4>
                <p>Save 26% on 6 Month</p>
                <Link
                  to={`/checkout/membership/${sixMonth[2]?.id}`}
                  className="custom-button mb-4"
                >
                  Buy Now!
                </Link>
                <ul className="stamet">
                  <li>
                    <i className="ri-check-double-line" /> All Features Of Gold
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> + 2 Hours of Video
                    Chat
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> + 50% Course Fee Off
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> + 5% Shopping
                    Discount
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> + 5% Dicount on
                    Lawyer Fee
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> + 10% Dicount on
                    Agent Fee
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-plan memDown">
                <h4
                  style={{ color: "#00cec9" }}
                  className="number number2 mb-2"
                >
                  Platinum
                </h4>
                <h4 className="number mb-2">
                  <sup>$</sup>
                  {sixMonth[3]?.fee}
                </h4>
                <p>Save 28% on 6 Month</p>
                <Link
                  to={`/checkout/membership/${sixMonth[3]?.id}`}
                  className="custom-button mb-4"
                >
                  Buy Now!
                </Link>
                <ul className="stamet">
                  <li>
                    <i className="ri-check-double-line" /> All Features Of
                    Diamond
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> + 4 Hours of Video
                    Chat
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> + Course Fee Free
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> + 10% Shopping
                    Discount
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> + 10% Dicount on
                    Lawyer Fee
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> + 20% Dicount on
                    Agent Fee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixMonth;
