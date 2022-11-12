import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPostFunction } from "../../redux/actions/PostAction";
function Profile({ singleData }) {
  // console.log("singleData :>> ", singleData);

  const { userPostData } = useSelector((state) => state.PostSlices);
  let dispatch = useDispatch();

  useMemo(() => dispatch(userPostFunction()), [dispatch]);

  // console.log("userPostData", userPostData);

  let posts = "";

  if (userPostData.data && singleData?.username) {
    posts = userPostData.data.map((post) => (
      <div className="profile-single-post">
        <div className="p-s-p-header-area">
          <div className="img">
            <img src={singleData?.profile_photo} alt="" />
            <div className="active-online"></div>
          </div>
          <h6 className="name">{post.posted_by}</h6>
          <span className="is-varify">
            <i className="fas fa-check"></i>
          </span>
          {/* <span className="usewrname">{singleData?.email}</span> */}
          <span className="post-time">. {post.posted_at}</span>
        </div>
        <div className="p-s-p-content">
          {/* <p>
            {post.posted_by} was feeling {post.feeling}
          </p> */}
          <p>{post.status}</p>

          <img src={post?.post_image} alt="" />
        </div>
        <div className="p-s-p-content-footer">
          <div className="left">
            <a href="#" className="comment">
              Comment
            </a>
            <a href="#" className="link">
              <i className="far fa-star"></i>
            </a>
          </div>
          <div className="right">
            <a href="#" className="link">
              <i className="far fa-star"></i>
            </a>
            <select className="nice-select select-bar">
              <option value="">ALL</option>
              <option value="">NEW</option>
              <option value="">OLD</option>
              <option value="">POPULAR</option>
            </select>
          </div>
        </div>
      </div>
    ));
  }
  return (
    <>
      <div class="info-box">
        <div class="header">
          <h4 class="title">Base</h4>
        </div>
        <div class="content">
          <ul class="infolist">
            <li>
              <span>User Name</span>
              <span>{singleData?.username}</span>
            </li>
            <li>
              <span>First Name</span>
              <span>{singleData?.first_name}</span>
            </li>
            <li>
              <span>Last Name</span>
              <span>{singleData?.last_name}</span>
            </li>
            <li>
              <span>Birthday</span>
              <span>{singleData?.birthdate}</span>
            </li>
            <li>
              <span>I am a</span>
              <span>
                {singleData?.gender
                  ? singleData?.gender === 1
                    ? "Male"
                    : "Female"
                  : ""}
              </span>
            </li>
            <li>
              <span>Looking for a</span>
              <span>Woman</span>
            </li>
            <li>
              <span>Marital status</span>
              <span>
                {singleData?.relation_status
                  ? singleData?.relation_status === 1
                    ? "Married"
                    : "Unmarried"
                  : ""}
              </span>
            </li>
            <li>
              <span>Country</span>
              <span>{singleData?.country?.name}</span>
            </li>
            <li>
              <span>City</span>
              <span>{singleData?.city?.name}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="info-box">
        <div class="header">
          <h4 class="title">My posts</h4>
        </div>
        <div class="content">{posts}</div>
      </div>
    </>
  );
}

export default Profile;
