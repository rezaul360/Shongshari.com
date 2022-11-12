import { useEffect, useReducer, useState } from "react";
import { Table } from "react-bootstrap";
import LawyerService from "../../../../../api/lawyerService";
import { customPosition } from "../../../../../utils/Modals";

function Case() {
  const [addService, setaddService] = useState(false);

  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      lawyerCaseList: [],
      name: "",
      fee: "",
      status: "",
      details: "",
      attachment: "",
      id: "",
    }
  );

  let lawyerServices = async () => {
    let res = await LawyerService.CaseList();
    if (res.status === 200) {
      console.log(res)
      setState({ lawyerCaseList: res.data });
    }
  };
  useEffect(() => {
    lawyerServices();
  }, []);

  const updateFunction = (id) => {
    setaddService(!addService);
    setState({ id: id });
  };
  const closeButton = () => {
    setaddService(!addService);
    setState({
      title: "",
      fee: "",
      status: "",
      details: "",
      attachment: "",
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
      name: state.title,
      fee: state.fee,
      status: state.status,
      details: state.details,
      attachment: state.attachment,
    };
    console.log("data :>> ", data);
    let formdata = new FormData();
    Object.keys(data).map((key) => {
      formdata.append(key, data[key]);
    });
    let res = await LawyerService.CaseUpdate(formdata, state.id);
    // console.log("res", res);
    if (res.status === 201) {
      customPosition("center", "success", res.data.message);
      lawyerServices();
      setState({
        title: "",
        fee: "",
        status: "",
        details: "",
        attachment: "",
      });
      setaddService(false);
      lawyerServices();
    } else {
      customPosition("center", "error", res.data.message);
    }
  };
  console.log("lawyerCaseList :>> ", state.lawyerCaseList);
  let bodyTable = "";
  if (state.lawyerCaseList?.data) {
    bodyTable = state.lawyerCaseList.data.map((list) => (
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
          {/* <button className="mx-2 delete">Details</button>p */}
          <button className="delete" onClick={() => updateFunction(list.id)}>
            Update
          </button>
        </td>
      </tr>
    ));
  }

  let updateInputs = (
    <div className="inputValue">
      {/* {serviceSelect} */}
      {/* <input
        name="title"
        className="my-3"
        type={"text"}
        placeholder="Title"
        value={state.title}
        onChange={inputChange}
      /> */}
      <input
        name="fee"
        className="my-3"
        type={"number"}
        placeholder="Fee"
        value={state.fee}
        onChange={inputChange}
      />
      <select name="status" className="my-3" onChange={inputChange}>
        <option value={1} selected>
          Pending
        </option>
        <option value={2}>On Going</option>
        <option value={3}>Done</option>
      </select>
      {/* <input
        name="details"
        type={"text"}
        value={state.details}
        placeholder="details"
        onChange={inputChange}
      />
      <input
        name="attachment"
        className="my-3"
        type={"file"}
        onChange={inputChange}
      /> */}

      <button className="btn-large mx-auto my-4" onClick={handleSubmit}>
        Add service
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
          <h3 className="mr-2 align-self-center">Lawyer Cases</h3>
          {addService ? (
            <button className="btn-large" onClick={closeButton}>
              Close Case
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

export default Case;
