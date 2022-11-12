import { useReducer } from "react";
import { Button, Modal } from "react-bootstrap";
import PostServices from "../../api/PostServices";
import { customPosition } from "../../utils/Modals";
function PostModal({ show, handlePostModalShow, handlePostModalHide }) {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      feeling: "",
      post_image: "",
      status: "",
      type: "",
    }
  );

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
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

      <Modal show={show} onHide={handlePostModalHide}>
        <Modal.Header closeButton>
          <Modal.Title>Write post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="write-post-area">
            <div className="my-3">
              <label>Tell what you feel</label>
              <input type="text" name="feeling" onChange={inputChange} />
            </div>
            <div className="write-area">
              <textarea
                placeholder="What's on your mind,Vernon"
                name="status"
                onChange={inputChange}
              ></textarea>
            </div>
            <div>
              <label>Add photo or video</label>
              <input
                type="file"
                id="files"
                name="post_image"
                onChange={inputChange}
                multiple
              />
            </div>
            <div className="select-area my-2">
              <select
                className="nice-select select-bar"
                name="type"
                onChange={inputChange}
              >
                <option selected>Select type</option>
                <option value={1} selected>
                  Public
                </option>
                <option value={2}>Private</option>
              </select>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={submitPost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostModal;
