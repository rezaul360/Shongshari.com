import { useEffect, useState } from "react";
import ProfileServices from "../../../api/ProfileServices";
// import friend from "../../../assets/img/profile/friend1.png";
import { getSearchedData } from "../../../utils/functions";
import { customPosition } from "../../../utils/Modals";
// {friend}

function SearchedMembersBody() {
  const [users, setusers] = useState();
  let getSearched = getSearchedData();
  // console.log("getSearched", JSON.parse(getSearched));

  let getData = async () => {
    let res = await ProfileServices.findPartner(JSON.parse(getSearched));
    // console.log("res", res);
    if (res.status === 200) {
      setusers(res.data);
    }
  };

  // console.log("users", users);
  useEffect(() => {
    getData();
  }, []);

  const sendRequest = async (id, receive_id) => {
    if (id === 2) {
      let res = await ProfileServices.sendRequest({ profile_id: receive_id });

      // console.log("res :>> ", res);
      if (res.status === 201) {
        customPosition("center", "success", "Request send");
      } else if (res.status === 500) {
        customPosition("center", "error", res.data.message);
      }
      // if(){}
    } else {
      customPosition("center", "success", "Already connected");
    }
  };
  let user = "";
  if (users?.data) {
    user = users.data.map((u) => (
      <div className="col-lg-3" key={`${u.id}`}>
        <div
          className="single-friend"
          style={{
            backgroundImage: `url(${u.profile.cover_photo})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img src={u.profile.profile_photo} alt="" />
          <div className="content">
            <a href="user-profile.php" className="name">
              {u.profile.username}
            </a>
            <p className="date">{u.profile.email}</p>
          </div>
          <button
            className="orangeBtn"
            onClick={() => sendRequest(u.status, u.profile.id)}
          >
            {u.status === 2 ? "Not connected" : "Connnected"}
          </button>
        </div>
      </div>
    ));
  }
  return (
    <section className="community-section inner-page">
      <div className="container">
        <div className="row">
          <h2>Your searched result:</h2>
          {/* <div className="col-lg-12">
            <div className="top-filter">
              <div className="left">
                <a
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  <i className="fas fa-sliders-h"></i> Filter your search
                </a>
              </div>
              <div className="right">
                <span className="span">Order By :</span>
                <div className="filter-right">
                  <select className="nice-select select-bar">
                    <option value="">Latest Active</option>
                    <option value="">NEW</option>
                    <option value="">OLD</option>
                    <option value="">POPULAR</option>
                  </select>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="row">{user}</div>
        {/* <div className="row">
          <div className="col-lg-12">
            <div className="pagination-area text-center">
              <a href="#">
                <i className="fas fa-angle-double-left"></i>
                <span></span>
              </a>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#" className="active">
                3
              </a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">
                <i className="fas fa-angle-double-right"></i>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default SearchedMembersBody;
