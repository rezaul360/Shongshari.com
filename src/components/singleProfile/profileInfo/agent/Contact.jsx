import { useEffect, useReducer, useState } from "react";
import { Table } from "react-bootstrap";
// import LawyerService from "../../../../../api/lawyerService";
// import { customPosition } from "../../../../../utils/Modals";
import AgentService from "../../../../api/agentService";
import { customPosition } from "../../../../utils/Modals";

function Contact() {
  const [addService, setaddService] = useState(false);

  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      agentContactList: [],
      name: "",
      fee: "",
      status: "",
      details: "",
      attachment: "",
      id: "",
      update: false,
    }
  );

  let contactServices = async () => {
    let res = await AgentService.contactList();
    if (res.status === 200) {
      setState({ agentContactList: res.data });
    }
  };
  useEffect(() => {
    contactServices();
  }, []);

  const updateFunction = (id) => {
    setaddService(!addService);
    setState({ update: true, id: id });
    // setState({ });
    let updateData = state.agentContactList.data.filter((con) => id === con.id);
    // console.log("object :>> ", updateData);

    setState({ fee: updateData[0].fee, status: updateData[0].status });
  };
  const closeButton = () => {
    setaddService(!addService);
    setState({
      title: "",
      fee: "",
      status: "",
      details: "",
      attachment: "",
      update: false,
    });
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
      fee: state.fee,
      status: state.status,
    };

    // console.log("data :>> ", data);

    let res = await AgentService.contactUpdate(data, state.id);
    // console.log("res", res);
    if (res.status === 201) {
      customPosition("center", "success", res.data.message);
      contactServices();
      setState({
        title: "",
        fee: "",
        status: "",
        details: "",
        attachment: "",
      });
      setaddService(false);
      contactServices();
    } else {
      customPosition("center", "error", res.data.message);
    }
  };
  //   console.log("lawyerCaseList :>> ", state.lawyerCaseList);
  let bodyTable = "";
  if (state.agentContactList?.data) {
    bodyTable = state.agentContactList.data.map((list) => (
      <tr>
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
          <button className="delete" onClick={() => updateFunction(list.id)}>
            Update
          </button>
        </td>
      </tr>
    ));
  }

  let updateInputs = (
    <div className="inputValue">
      <input
        name="fee"
        className="my-3"
        type={"number"}
        placeholder="Fee"
        value={state.fee}
        onChange={inputChange}
      />
      <select name="status" className="my-3" onChange={inputChange}>
        <option value={1} selected={state.status === 1}>
          Pending
        </option>
        <option value={2} selected={state.status === 2}>
          On Going
        </option>
        <option value={3} selected={state.status === 3}>
          Done
        </option>
      </select>
      <button className="btn-large mx-auto my-4" onClick={handleSubmit}>
        {state.update ? "Update" : "Save"} Contact
      </button>
    </div>
  );

  let table = (
    <Table striped bordered responsive hover className="table-case">
      <thead>
        <tr>
          <th>Title</th>
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

  let caseNow = "";
  if (addService) {
    caseNow = updateInputs;
  } else {
    caseNow = table;
  }
  return (
    <>
      <div className="input-info-box mt-30">
        <div className="header d-flex justify-content-between">
          <h3 className="mr-2 align-self-center">Agent Contacts</h3>
          {state.update ? (
            <button className="btn-large" onClick={closeButton}>
              Close contact
            </button>
          ) : (
            ""
          )}
        </div>

        <div className="content">{caseNow}</div>
      </div>
    </>
  );
}

export default Contact;
