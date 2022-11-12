import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import si4 from "../../../assets/img/si4.png";
import si5 from "../../../assets/img/si5.png";
import si6 from "../../../assets/img/si6.png";
import si7 from "../../../assets/img/si7.png";

function PeopleAlreadyJoin() {
  // let [msgCount, setMsgCount] = useState(100);
  // let [regCount, setRegCount] = useState(200);
  // let [activeUserCount, setctiveUserCount] = useState(300);
  // let [msgCount,setMsgCount]=useState(0)

  const animateValue = (name, start, duration) => {
    let end;

    if (name == "msg") {
      end = 500;
    } else if (name == "reg") {
      end = 300;
    } else if ((name = "activeUser")) {
      end = 50;
    } else if ((name = "ndSignup")) {
      end = 50;
    }

    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    // let obj = elm;

    let timer = setInterval(function () {
      current += increment;
      // obj.innerHTML = current;
      if (name == "msg") {
        document.getElementById("msg").innerText = current;
      } else if (name == "reg") {
        document.getElementById("reg").innerText = current;
      } else if (name == "activeUser") {
        document.getElementById("activeUser").innerText = current;
      } else if (name == "ndSignup") {
        document.getElementById("ndSignup").innerText = current;
      }

      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  // document.getElementById("ndSignup").innerHTML = 10;

  // animateValue("ndSignup", 0, 1000);
  // animateValue("msg", 0, 1000);
  // animateValue("reg", 0, 1000);
  // animateValue("activeUser", 0, 1000);

  // window.addEventListener("scroll", scrolFun);

  // console.log(msgCount, "msgCount");

  return (
    <section className="statistics-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="statistics__title text-center mb-4">
              <h2 className="mb-2">455,326,234</h2>
              <h6>People joined already!</h6>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="statistics__box wow fadeInUp" data-wow-delay="0.1s">
              <div className="statistics__img mb-3">
                <img src={si4} alt="si4" />
              </div>
              <div className="statistics__countdown">
                <h3 className="counter-item">
                  <span className="odometer" id="msg" data-odometer-final="355">
                    000
                  </span>{" "}
                  M
                </h3>
                <span className="stat__text">Messages sent per day</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="statistics__box wow fadeInUp" data-wow-delay="0.2s">
              <div className="statistics__img mb-3">
                <img src={si5} alt="si4" />
              </div>
              <div className="statistics__countdown">
                <h3 className="counter-item">
                  <span className="odometer" id="reg" data-odometer-final="456">
                    000
                  </span>{" "}
                  M
                </h3>
                <span className="stat__text">Registered users worldwide</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="statistics__box wow fadeInUp" data-wow-delay="0.3s">
              <div className="statistics__img mb-3">
                <img src={si6} alt="si4" />
              </div>
              <div className="statistics__countdown">
                <h3 className="counter-item">
                  <span
                    className="odometer"
                    id="activeUser"
                    data-odometer-final="45"
                  >
                    000
                  </span>{" "}
                  M
                </h3>
                <span className="stat__text">Monthly active users</span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="statistics__box wow fadeInUp" data-wow-delay="0.4s">
              <div className="statistics__img mb-3">
                <img src={si7} alt="si4" />
              </div>
              <div className="statistics__countdown">
                <h3 className="counter-item">
                  <span
                    className="odometer"
                    id="ndSignup"
                    data-odometer-final="355"
                  ></span>{" "}
                  K
                </h3>
                <span className="stat__text">New daily sign ups</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PeopleAlreadyJoin;
