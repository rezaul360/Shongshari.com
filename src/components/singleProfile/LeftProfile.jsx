import { useState } from "react";
import profileUp1 from "../../assets/img/profile/up1.jpg";
import profileUp2 from "../../assets/img/profile/up2.jpg";
import profileUp3 from "../../assets/img/profile/up3.jpg";
import profileUp4 from "../../assets/img/profile/up4.jpg";
import profileUp5 from "../../assets/img/profile/up5.jpg";

import profileUp6 from "../../assets/img/profile/up6.jpg";
import MessengerModal from "../modal/MessengerModal";

function LeftProfile({ singleData }) {
  // const { singleData } = useSelector((state) => state.profileValue);
  const [show, setshow] = useState(false);
  const showModal = (data) => setshow(data);

  let profile = <h4>Loading profile</h4>;
  if (singleData?.username) {
    profile = (
      <div className="left-profile-area">
        <div className="profile-about-box">
          <div className="top-bg">
            <img src={singleData.cover_photo} alt="" />
          </div>
          <div className="p-inner-content">
            <div className="profile-img">
              <img
                src={singleData.profile_photo}
                style={{ height: "100%", width: "100%" }}
                alt=""
              />
              <div className="active-online"></div>
            </div>
            <h5 className="name">{singleData.username}</h5>
            <ul className="p-b-meta-one">
              <li>
                <span>{singleData?.age}</span>
              </li>
              <li>
                <span>
                  {" "}
                  <i className="fas fa-map-marker-alt"></i>
                  {singleData?.city?.name}, {singleData?.country.name}
                </span>
              </li>
            </ul>
            <div className="p-b-meta-two">
              {/* <div className="left">
                <div className="icon">
                  <i className="far fa-heart"></i>
                </div>{" "}
                257
              </div> */}
              <div className="right">
                <a href="#" className="custom-button">
                  <i className="fab fa-cloudversify"></i> Get Premium
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-meta-box">
          <ul className="p-m-b">
            <li>
              <a
                onClick={() => showModal(true)}
                data-toggle="modal"
                data-target="#usermessage"
              >
                <i className="far fa-envelope"></i>
                <div className="number">04</div>
              </a>
            </li>
            <li>
              <a href="#" data-toggle="modal" data-target="#usernotification">
                <i className="far fa-bell"></i>
                <div className="number">04</div>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-cogs"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="profile-uplodate-photo">
          <h4 className="p-u-p-header">
            <i className="fas fa-camera"></i> 21 Upload Photos
          </h4>
          <div className="p-u-p-list">
            <div className="my-col">
              <div className="img">
                <img src={profileUp1} alt="" />
                <div className="overlay">
                  <a href={profileUp1} className="img-popup">
                    <i className="fas fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="my-col">
              <div className="img">
                <img src={profileUp2} alt="" />
                <div className="overlay">
                  <a href={profileUp2} className="img-popup">
                    <i className="fas fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="my-col">
              <div className="img">
                <img src={profileUp3} alt="" />
                <div className="overlay">
                  <a href={profileUp3} className="img-popup">
                    <i className="fas fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="my-col">
              <div className="img">
                <img src={profileUp4} alt="" />
                <div className="overlay">
                  <a href={profileUp4} className="img-popup">
                    <i className="fas fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="my-col">
              <div className="img">
                <img src={profileUp5} alt="" />
                <div className="overlay">
                  <a href={profileUp5} className="img-popup">
                    <i className="fas fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="my-col">
              <div className="img">
                <img src={profileUp6} alt="" />
                <div className="overlay">
                  <a href={profileUp6} className="img-popup">
                    <i className="fas fa-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {profile}
      <MessengerModal show={show} showModal={showModal} />
    </>
  );
}

export default LeftProfile;
