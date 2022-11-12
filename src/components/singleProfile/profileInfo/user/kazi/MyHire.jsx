import { useEffect, useReducer, useState } from "react";
import { Table } from "react-bootstrap";

import { useDispatch } from "react-redux";

import KaziService from "../../../../../api/kaziService";

import { KaziComponentAction } from "../../../../../redux/actions/kazi/Kazi";
import { profileHeaderNow } from "../../../../../redux/actions/ProfileAction";
import Loading from "../../../../../utils/Loading";
import { customPosition } from "../../../../../utils/Modals";
import Review from "../agent/Review";

const MyHire = () => {
  let dispatch = useDispatch();
  const [agents, setagents] = useState();
  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      fee: "",
      details: "",
      attachment: "",
      id: "",
      updateKazi: false,
      review: false,
    }
  );
  let getKaziListData = async () => {
    let res = await KaziService.myKazi();
    // console.log("res :>> ", res);
    if (res.status === 200) {
      setagents(res.data);
    }
  };

  let closeBtnPressed = () => {
    setState({
      name: "",
      details: "",
      attachment: "",
      updateKazi: false,
      update: false,
    });
  };

  useEffect(() => {
    getKaziListData();
  }, []);

  const inputChange = (event) => {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    if (name === "attachment") {
      //   console.log("object :>> ", target.files[0]);
      value = target.files[0];
      setState({
        [name]: value,
      });
    }
    setState({
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    let data = {
      name: state.name,
      details: state.details,
      attachment: state.attachment,
    };
    // console.log("data :>> ", data);
    let formdata = new FormData();
    Object.keys(data).map((key) => {
      formdata.append(key, data[key]);
    });
    let res = await KaziService.myKaziContactUpdate(formdata, state.id);
    // console.log("res", res);
    if (res.status === 201) {
      customPosition("center", "success", res.data.message);
      getKaziListData();
      setState({
        name: "",
        fee: "",
        status: "",
        details: "",
        attachment: "",
        updateKazi: false,
        update: false,
      });

      // lawyerServices();
      getKaziListData();
    } else {
      customPosition("center", "error", res.data.message);
    }
  };

  const updateFunction = (id) => {
    setState({ updateKazi: !state.updateKazi, update: true, id: id });
    // setState({ });
    let updateData = agents.data.find((con) => id === con.id);
    console.log("object :>> ", updateData);

    setState({
      name: updateData.name,
      details: updateData.details,
      attachment: updateData.attachment,
    });
  };
  let reviewHire = (id) => {
    setState({ review: !state.review, id: id });
  };
  let bodyTable = "";
  if (agents?.data) {
    bodyTable = agents.data.map((list) => (
      <tr>
        <td
          style={
            {
              // fontSize: "25px",
              // textAlign: "center",
              // fontFamily: "Poppins",
              // fontWeight: 600,
            }
          }
        >
          {list.kazi_name}
        </td>
        <td>{list.name}</td>
        <td>{list.fee}</td>
        <td>
          <h3 className="status">{list.status}</h3>
        </td>
        <td>{list.details}</td>

        <td>
          <img style={{ width: "100px" }} src={list.attachment} alt="" />
        </td>
        <td className="d-flex">
          <button
            className="delete mx-2"
            onClick={() => updateFunction(list.id)}
          >
            <i class="fa-solid fa-pen"></i>
          </button>
          <button className="delete" onClick={() => updateFunction(list.id)}>
            Payment
          </button>
          <button className="delete mx-2" onClick={() => reviewHire(list.id)}>
            {!state.review ? "Review" : "Close"}
          </button>
        </td>
      </tr>
    ));
  }

  let updateInputs = (
    <div className="inputValue">
      <input
        name="name"
        className="my-3"
        type={"text"}
        placeholder="Enter Name"
        value={state.name}
        onChange={inputChange}
      />

      <input
        name="details"
        type={"text"}
        value={state.details}
        placeholder="Enter Details"
        onChange={inputChange}
      />
      <img
        src={state.attachment}
        alt=""
        style={{ width: "100px", height: "100px", margin: "10px" }}
      />
      <input
        name="attachment"
        className="my-3"
        type={"file"}
        onChange={inputChange}
      />

      <div className="text-center">
        <button className="btn-large mx-auto my-4" onClick={handleSubmit}>
          Update Contact
        </button>
      </div>
    </div>
  );
  let table = (
    <Table striped bordered hover className="table-case">
      <thead>
        <tr>
          <th>Agent name</th>
          <th>Case name</th>
          <th>Fee</th>
          <th>Status</th>
          <th>Details</th>
          <th>Attachment</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{bodyTable}</tbody>
    </Table>
  );

  let caseNow = <Loading />;
  if (state.updateKazi) {
    caseNow = updateInputs;
  } else {
    caseNow = <div style={{ overflow: "auto" }}>{table}</div>;
  }

  return (
    <div>
      <div className="texts-button my-2">
        {state.updateKazi ? (
          <button
            style={{ width: "20%", margin: "0" }}
            onClick={closeBtnPressed}
          >
            <i class="fa-solid fa-circle-xmark"></i> close
          </button>
        ) : (
          <button
            style={{ width: "20%", margin: "0" }}
            onClick={() => {
              dispatch(KaziComponentAction("componentKazi"));
              dispatch(profileHeaderNow("Kazi Profile Info"));
            }}
          >
            <i class="fa-solid fa-backward"></i> Back
          </button>
        )}
      </div>
      <>
        {caseNow}
        {state.review ? <Review id={state.id} type={3} name={"Kazi"} /> : ""}
      </>
    </div>
  );
};

export default MyHire;
