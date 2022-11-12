import { useEffect, useState } from "react";
import FollowServices from "../../api/FollowServices";
import ProfileServices from "../../api/ProfileServices";
import { customPosition } from "../../utils/Modals";

function ProfileAside() {
  const [data, setdata] = useState("");
  const [fRequest, setfRequest8] = useState("");

  let getYouMayLike = async () => {
    let res = await ProfileServices.youMayLike();
    if (res.status === 200) {
      setdata(res.data);
    }
    // console.log("res :>> ", res);
  };

  let friendRequests = async () => {
    let res = await FollowServices.findurpartnerRequest();
    if (res.status === 200) {
      setfRequest8(res.data);
    }
    // console.log("res :>> ", res);
  };

  let handleRequest = async (data, id) => {
    let res = await FollowServices.findurpartnerRequestAcceptCancle(
      { status: data },
      id
    );
    // console.log("res :>> ", res);
    if (res.status === 201) {
      customPosition("center", "success", "Request accepted");
      friendRequests();
    } else {
      customPosition("center", "error", "Request rejected");
      friendRequests();
    }
  };

  useEffect(() => {
    getYouMayLike();
    friendRequests();
  }, []);

  const sendRequest = async (id) => {
    let res = await FollowServices.sendRequest({ profile_id: id });
    if (res.status === 201) {
      customPosition("center", "success", "Request send");
    } else {
      customPosition("center", "error", "Request not send");
    }
    // console.log("res :>> ", res);
  };

  let profiles = "";

  if (data.data) {
    // console.log("data.data :>> ", data.data);
    profiles = data.data.map((dat) => (
      <div className="my-col">
        <div className="img">
          <img src={dat?.profile_photo} alt="" />
          <a onClick={() => sendRequest(dat.id)} className="">
            <i className="fas fa-plus"></i>
          </a>
        </div>
      </div>
    ));
  }

  let requests = "No request";
  if (fRequest.data) {
    requests = fRequest.data.map((data) => (
      // <div className="col-md-6">
      <div className="request">
        <div className="left">
          <img src={data?.profile.profile_photo} alt="" />
          <div className="active-online"></div>
        </div>
        <div className="right mt-2">
          <h4 className="title ">{data?.profile.username}</h4>
          {/* <p>Age:{data?.profile.age}</p> */}
        </div>
        <div className="requestBtn">
          <button className="accept" onClick={() => handleRequest(1, data.id)}>
            Accept
          </button>
          <button className="reject" onClick={() => handleRequest(2, data.id)}>
            Reject
          </button>
        </div>
      </div>
      // </div>
    ));
  }
  return (
    <div className="profile-aside-area">
      <div className="other-profile">
        <div className="o-p-header">
          <h6 className="title">Profiles you may like</h6>
        </div>

        <div className="o-p-content">
          <div className="p-u-p-list">{profiles}</div>
        </div>
      </div>

      <div className="chat-request">
        <div className="c-r-heading">
          <h6 className="title">
            <i className="far fa-comments"></i> Friend Request
          </h6>
        </div>
        <div className="c-r-content">
          <div className="c-r-content-list">
            <>{requests}</>
          </div>
          <a href="#" className="load-more">
            load More
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileAside;
