import { useEffect, useReducer } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import AuthServices from "../../api/AuthServices";
import appStore from "../../assets/img/appstore.webp";
import pic1 from "../../assets/img/play-store-logo-nisi-filters-australia-11.png";
import {
  authenticatedFunction,
  loginModalShowAction,
  typeFunction,
} from "../../redux/actions/AuthAction";
import { setToken, setType } from "../../utils/functions";

import { customPosition } from "../../utils/Modals";

function LoginModal({}) {
  const { authenticated, loginShow } = useSelector((state) => state.authValue);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let dispatch = useDispatch();
  const KAZI = "Kazi";
  const USER = "User";
  const LAWYER = "Lawyer";
  // const AGENT = "Agent";
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      modalNow: KAZI,
      user_role: USER ? 1 : KAZI ? 3 : LAWYER ? 2 : "",
      email: "",
      password: "",
    }
  );

  let inputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ [name]: value });
  };

  useEffect(() => {
    if (location.pathname === "/login") {
      dispatch(loginModalShowAction(true));
    }
  }, [dispatch, location.pathname]);

  const handleClose = () => {
    dispatch(loginModalShowAction(false));

    window.history.back();
  };

  let inputSubmit = async (e) => {
    e.preventDefault();
    let data = {
      user_role:
        state.modalNow === USER
          ? 1
          : state.modalNow === KAZI
          ? 3
          : state.modalNow === LAWYER
          ? 2
          : "",
      email: state.email,
      password: state.password,
    };
    let res = await AuthServices.login(data);

    // console.log("res", res);

    if (res.status === 200) {
      customPosition("center", "success", "Successfully logged in");
      setState({
        email: "",
        user_role: "",
        password: "",
      });
      // console.log("res.data.token", res.data.token);
      setToken(res.data.token);
      dispatch(authenticatedFunction(true));
      dispatch(typeFunction(res.data.data.user_type));
      setType(res.data.data.user_type);

      // console.log(from);
      navigate(from, { replace: true });
      // navigate(`/profile/info/${res.data.data.profile_id}`);
      dispatch(loginModalShowAction(false));
    } else if (res.status === (422 || 500)) {
      // let errors = Object.values(res?.data?.errors);
      // console.log("errors", errors);
      // errors.forEach((element) => {
      customPosition("center", "error", res?.data?.message.toString());
      // });
    }
    // console.log("state :>> ", state);
  };

  let changeInput = (data) => setState({ modalNow: data });

  return (
    <>
      <div className=" d-flex justify-content-center">
        <Modal show={loginShow} onHide={handleClose} className="modal filter-p">
          <div className=" modal-content logi__modal">
            <Modal.Header
              closeButton
              className=" justify-content-between align-items-center logiHeader"
            >
              <Modal.Title
                className="modal-title text-center logiTitle"
                id="exampleModalCenterTitle"
              >
                Login Here
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <div className="join-now-box p-0">
                <div className="single-option logiFooter age justify-content-center flex-column">
                  {/* <h6>Login as</h6>
                  <div className="lawKA">
                    <button
                      className="custom-button"
                      onClick={() => changeInput(USER)}
                    >
                      User
                    </button>
                    <button
                      className="custom-button"
                      onClick={() => changeInput(LAWYER)}
                    >
                      Lawyer
                    </button>
                    <button
                      className="custom-button"
                      onClick={() => changeInput(KAZI)}
                    >
                      Kazi
                    </button>
                    {/* <button
  const { authenticated, loginShow } = useSelector((state) => state.authValue);
  const navigate = useNavigate();
  const location = useLocation();

  let dispatch = useDispatch();
  const KAZI = "Kazi";
  const USER = "User";
  const LAWYER = "Lawyer";
  const AGENT = "Agent";
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      modalNow: KAZI,
      user_role: USER ? 1 : KAZI ? 3 : LAWYER ? 2 : "",
      email: "",
      password: "",
    }
  );

  let inputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState({ [name]: value });
  };

  useEffect(() => {
    if (location.pathname === "/login") {
      dispatch(loginModalShowAction(true));
    }
  }, []);

  const handleClose = () => {
    dispatch(loginModalShowAction(false));
    navigate("/");
  };

  let inputSubmit = async (e) => {
    e.preventDefault();
    let data = {
      user_role:
        state.modalNow === USER
          ? 1
          : state.modalNow === KAZI
          ? 3
          : state.modalNow === LAWYER
          ? 2
          : "",
      email: state.email,
      password: state.password,
    };
    let res = await AuthServices.login(data);

    if (res.status === 200) {
      customPosition("center", "success", "Successfully logged in");
      setState({
        email: "",
        user_role: "",
        password: "",
      });

      // console.log("res", res.data.token);
      setType(res.data.data.user_type);
      setToken(res.data.token);
      dispatch(authenticatedFunction(true));

      // let type = "";

      // type =
      //   res.data.data.user_type === 1
      //     ? "USER"
      //     : res.data.data.user_type === 2
      //     ? "LAWYER"
      //     : res.data.data.user_type === 3
      //     ? "KAZI"
      //     : "";
      // console.log("type", type);

      // navigate(`/profile/info/${res.data.data.profile_id}`);
      dispatch(loginModalShowAction(false));
    } else if (res.status === (422 || 500)) {
      // let errors = Object.values(res?.data?.errors);
      // console.log("errors", errors);
      // errors.forEach((element) => {
      customPosition("center", "error", res?.data?.message.toString());
      // });
    }
    // console.log("state :>> ", state);
  };

  let changeInput = (data) => setState({ modalNow: data });

  return (
    <>
      <div className=" d-flex justify-content-center">
        <Modal show={loginShow} onHide={handleClose} className="modal filter-p">
          <div className=" modal-content logi__modal">
            <Modal.Header
              closeButton
              className=" justify-content-between align-items-center logiHeader"
            >
              <Modal.Title
                className="modal-title text-center logiTitle"
                id="exampleModalCenterTitle"
              >
                Login Here
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <div className="join-now-box p-0">
                <div className="single-option logiFooter age justify-content-center flex-column">
                  <h6>Login as</h6>
                  <div className="lawKA">
                    <button
                      className="custom-button"
                      onClick={() => changeInput(USER)}
                    >
                      User
                    </button>
                    <button
                      className="custom-button"
                      onClick={() => changeInput(LAWYER)}
                    >
                      Lawyer
                    </button>
                    <button
                      className="custom-button"
                      onClick={() => changeInput(KAZI)}
                    >
                      Kazi
                    </button>
                    {/* <button
                      className="custom-button"
                      onClick={() => changeInput(AGENT)}
                    >
                      Agent
                    </button> */}
                  {/* </div> */}
                  <div className="my-3">
                    {/* <h4>{state.modalNow}</h4> */}
                    <input
                      type={"email"}
                      className="my-2"
                      name="email"
                      value={state.email}
                      onChange={inputChange}
                    />
                    <input
                      type={"password"}
                      name="password"
                      value={state.password}
                      onChange={inputChange}
                    />
                    <button className="my-2 loginBtn" onClick={inputSubmit}>
                      Login
                    </button>
                  </div>
                </div>
                <div className="logiFooter">
                  <h6>Get the app</h6>
                  <div className="logiApp">
                    <a href="#">
                      <img src={appStore} alt="" />
                    </a>
                    <a href="#">
                      <img src={pic1} alt="" />
                    </a>
                  </div>
                  <button className="custom-button mt-3">Sign up</button>
                </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default LoginModal;

/* 

   <Modal.Body className="modal-body">
			  <div className="join-now-box p-0">
				<div className="single-option justify-content-center">
				  <button className="logiItem custom-button">
					<span>Log in with Google</span>
					<span className="logiGoogle">
					  <img src={google} alt="google" />
					</span>
				  </button>
				</div>
				<div className="single-option gender justify-content-center">
				  <button className="logiItem custom-button">
					<span>Log in with Facebook</span>
					<span className="logiGoogle">
					  <img src={facebook} alt="google" />
					</span>
				  </button>
				</div>
				<div className="single-option age justify-content-center">
				  <button className="logiItem custom-button">
					<span>Log in with phone number</span>
					<span className="logiGoogle">
					  <i className="ri-chat-1-fill"></i>
					</span>
				  </button>
				</div>
				<div className="single-option logiFooter age justify-content-center flex-column">
				  <h6>Login as</h6>
				  <div className="lawKA">
					<button className="custom-button">Lawyer</button>
					<button className="custom-button">Kazi</button>
					<button className="custom-button">Agent</button>
				  </div>
				</div>
				<div className="logiFooter">
				  <h6>Get the app</h6>x
				  <button className="custom-button mt-3">Sign up</button>
				</div>
			  </div>
			</Modal.Body>
*/
