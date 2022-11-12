import { useEffect, useReducer, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import FollowServices from "../../api/FollowServices";
import PostServices from "../../api/PostServices";
import { customPosition } from "../../utils/Modals";
import PostModal from "../modal/PostModal";

function Activity({ singleData }) {
  const [postModal, setPostModal] = useState(false);
  let handlePostModalShow = () => setPostModal(true);
  let handlePostModalHide = () => setPostModal(false);

  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      feeling: "",
      post_image: "",
      status: "",
      type: "",
      timeline: "",
      totalData: 0,
      page: 1,
    }
  );

  let timelineList = async (page) => {
    let res = await FollowServices.timeline(page);
    if (res.status === 200) {
      setState({ timeline: res.data, totalData: res.data.message });
    }
    // console.log("res :>> ", res);
  };

  // console.log("state.totalData", state.totalData);

  useEffect(() => {
    timelineList(state.page);
  }, []);

  const inputChange = (event) => {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    if (name === "post_image") {
      value = target.files[0];
      setState({
        [name]: value,
      });
    }
    setState({
      [name]: value,
    });
  };

  let fetchMoreData = () => {
    console.log("object :>> ");
    setState({ page: state.page + 1 });
    timelineList(state.page);
  };

  const submitPost = async () => {
    // console.log("state :>> ", state);
    let formdata = new FormData();
    Object.keys(state).map((key) => {
      formdata.append(key, state[key]);
    });

    let res = await PostServices.savePost(formdata);
    if (res.status === 201) {
      customPosition("center", "success", "Post uploaded");
      setState({
        feeling: "",
        post_image: "",
        status: "",
        type: "",
      });
      handlePostModalHide();
    } else {
      customPosition("center", "error", "Post not uploaded. Try again!");
    }
  };
  let timeline = "";
  if (state.timeline.data) {
    // console.log("object :>> ", state.timeline?.data);
    timeline = state.timeline.data.map((data) => (
      <div className="profile-single-post" key={data.id}>
        <div className="p-s-p-header-area">
          <div className="img">
            <img src={data?.profile_image} alt="" />
            <div className="active-online"></div>
          </div>
          <h6 className="name">{data.posted_by}</h6>
          <span className="is-varify">
            <i className="fas fa-check"></i>
          </span>
          <span className="usewrname">Feeling:{data.feeling}</span>
          <span className="post-time">. {data.posted_at}</span>
        </div>
        <div className="p-s-p-content">
          <p>{data.status}</p>
          <img src={data?.post_image} alt="" />
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
      <div className="write-post-area">
        <div className="write-area">
          <img src={singleData?.profile_photo} alt="" />
          <textarea
            placeholder={`What's on your mind, ${singleData?.username}`}
            name="status"
            onChange={inputChange}
          ></textarea>
        </div>
        <div className="submit-area">
          <div className="left">
            <a className="upload-btn" onClick={handlePostModalShow}>
              <i className="fas fa-paperclip"></i>
            </a>
            <div className="select-area">
              <select
                className="nice-select select-bar"
                name="type"
                onChange={inputChange}
              >
                <option selected disabled>
                  Select type
                </option>
                <option value={1} selected>
                  Public
                </option>
                <option value={2}>Private</option>
              </select>
            </div>
          </div>
          <PostModal
            show={postModal}
            handlePostModalShow={handlePostModalShow}
            handlePostModalHide={handlePostModalHide}
          />
          <div className="right" onClick={submitPost}>
            <a
              href="#"
              className="custom-button"
              style={{ padding: "0px 20px !important" }}
            >
              Post
            </a>
          </div>
        </div>
        {state.timeline?.data?.length ? (
          <InfiniteScroll
            dataLength={state.timeline?.data?.length}
            next={fetchMoreData}
            hasMore={state.timeline?.data?.length !== state.totalData}
            loader={<h4>Loading...</h4>}
          >
            {timeline}
          </InfiniteScroll>
        ) : (
          ""
        )}
      </div>

      <a href="#" className="load-more">
        Load More..
      </a>
    </>
  );
}

export default Activity;
