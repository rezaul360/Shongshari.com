import React, { useEffect, useReducer, useState } from "react";
import { Table } from "react-bootstrap";

import { useDispatch } from "react-redux";

import LawyerService from "../../../../../api/lawyerService";
import { LawyerComponentNowAction } from "../../../../../redux/actions/Lawyer/LayerAction";
import Loading from "../../../../../utils/Loading";
import { customPosition } from "../../../../../utils/Modals";
import Review from "../agent/Review";

export const MyHiredLawyers = function () {
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
      updateAgent: false,
      review: false,
    }
  );
  let getagentListData = async () => {
    let res = await LawyerService.myLawyer();
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
      updateAgent: false,
      update: false,
    });
  };

  useEffect(() => {
    getagentListData();
  }, []);

  let reviewHire = (id) => {
    setState({ review: !state.review, id: id });
  };
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
    let res = await LawyerService.myCaseUpdate(formdata, state.id);
    // console.log("res", res);
    if (res.status === 201) {
      customPosition("center", "success", res.data.message);
      getagentListData();
      setState({
        name: "",
        fee: "",
        status: "",
        details: "",
        attachment: "",
        updateAgent: false,
        update: false,
      });

      // lawyerServices();
      getagentListData();
    } else {
      customPosition("center", "error", res.data.message);
    }
  };

  const updateFunction = (id) => {
    setState({ updateAgent: !state.updateAgent, update: true, id: id });
    // setState({ });
    let updateData = agents.data.find((con) => id === con.id);
    // console.log("object :>> ", updateData);

    setState({
      name: updateData.name,
      details: updateData.details,
      attachment: updateData.attachment,
    });
  };

  let bodyTable = "";
  if (agents?.data) {
    bodyTable = agents.data.map((list) => (
      <tr>
        <td>{list.Lawyer}</td>
        <td>{list.title}</td>
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
            Update
          </button>
          <button className="delete" onClick={() => updateFunction(list.id)}>
            Payment
          </button>
          <button className="delete mx-2" onClick={() => reviewHire(list.id)}>
            Review
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
          <th>Lawyer name</th>
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
  if (state.updateAgent) {
    caseNow = updateInputs;
  } else {
    caseNow = <div style={{ overflow: "auto" }}>{table}</div>;
  }

  return (
    <div>
      <div className="texts-button my-2">
        {state.updateAgent ? (
          <button
            style={{ width: "20%", margin: "0" }}
            onClick={closeBtnPressed}
          >
            Close update
          </button>
        ) : (
          <button
            style={{ width: "20%", margin: "0" }}
            onClick={() =>
              dispatch(LawyerComponentNowAction("componentLawyer"))
            }
          >
            Go back
          </button>
        )}
      </div>
      <>{caseNow}</>
      {state.review ? <Review id={state.id} type={2} name={"Lawyer"} /> : ""}
    </div>
  );
};

export const MemoMyHiredLawyersList = React.memo(MyHiredLawyers);
