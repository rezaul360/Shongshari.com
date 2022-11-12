import { useEffect, useReducer, useState } from "react";
import { Table } from "react-bootstrap";
// import LawyerService from "../../../../../api/lawyerService";
// import { customPosition } from "../../../../../utils/Modals";
import AgentService from "../../../../api/agentService";
import LawyerService from "../../../../api/lawyerService";
import { customPosition } from "../../../../utils/Modals";

function AgentServiceIndex() {
  const [addService, setaddService] = useState(false);
  const [servicesValue, setservicesValue] = useState(false);
  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      details: "",
      price: "",
      image: "",
      name: "",
      agentServiceValues: "",
      agentUpdate: false,
      id: "",
    }
  );

  let services = async () => {
    let res = await LawyerService.ServiceList();
    if (res.status === 200) {
      setservicesValue(res.data);
    }
    // console.log("res", res);
  };
  let agentServices = async () => {
    let res = await AgentService.AgentServiceList();
    if (res.status === 200) {
      setState({ agentServiceValues: res.data });
    }
  };
  // console.log("agentServiceValues :>> ", state.agentServiceValues);
  useEffect(() => {
    services();
    agentServices();
  }, []);
  const inputChange = (e) => {
    const target = e.target;
    const name = target.name;
    let value = target.value;
    // console.log(name);
    if (name === "image") {
      value = target.files[0];
      setState({
        [name]: value,
      });
    }

    setState({
      [name]: value,
    });
  };

  let closeInputs = () => {
    if (state.agentUpdate) {
      setaddService(false);
      setState({ agentUpdate: false });
      services();
    } else if (addService) {
      setaddService(false);
      setState({ agentUpdate: false, details: "", price: "", service_id: "", name: "" });
      // services();
    } else if (!addService) {
      setaddService(true);
      setState({ agentUpdate: false, details: "", price: "", service_id: "", name: "" });
      services();
    }
  };

  let updateService = (id) => {
    setState({ agentUpdate: !state.agentUpdate, id: id });
    let updateData = state.agentServiceValues.data.find((con) => id === con.id);
    console.log("object :>> ", updateData);

    setState({
      details: updateData.details,
      price: updateData.price,
      name: updateData?.name,
      image: updateData?.image,
      id: updateData?.id,
    });
  };
  const handleSubmit = async (e) => {
    let dataVal = {
      details: state.details,
      price: state.price,
      name: state?.name,
      image: state?.image,
    };
    let api = (data, id) => {
      return state.agentUpdate
        ? AgentService.updateAgentService(data, id)
        : AgentService.AddService(data);
    };
    let formdata = new FormData();
    Object.keys(dataVal).map((key) => formdata.append(key, dataVal[key]));
    let res = await api(formdata, state.id);
    console.log("res", res);
    if (res.status === 201) {
      customPosition("center", "success", res.data.message);

      setState({
        name: "",
        price: "",
        details: "",
        agentUpdate: false,
      });
      setaddService(false);
      agentServices();
    } else {
      customPosition("center", "error", res.data.message);
    }
  };
  //   console.log("!state.agentUpdate  :>> ", state.agentUpdate);
  let deleteService = async (id) => {
    let res = await AgentService.delete(id);
    if (res.status === 201) {
      customPosition("center", "success", res.data.message);
      agentServices();
    } else {
      customPosition("center", "error", res.data.message);
    }
  };

  let inputs = (
    <div className="inputValue">
      <input
        name="name"
        type={"text"}
        value={state.name}
        placeholder="Add service name"
        onChange={inputChange}
      />
      <input
        name="price"
        className="my-3"
        type={"number"}
        placeholder="Add service Price"
        value={state.price}
        onChange={inputChange}
      />
      <input
        name="details"
        type={"text"}
        value={state.details}
        placeholder=" Add service Details"
        onChange={inputChange}
      />
      <input
        className="my-3"
        name="image"
        type={"file"}
        placeholder="image"
        onChange={inputChange}
      />

      <button className="btn-large mx-auto my-4" onClick={handleSubmit}>
        Save service
      </button>
    </div>
  );

  let serviceNow = "";
  let table = "";
  if (state.agentServiceValues.data) {
    table = (
      <div className="">
        <Table striped responsive bordered hover>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Price</th>
              <th>Details</th>
              <th>Image</th>

              {/* <th colspan="2">Service description</th> */}
              <th>Activity</th>
            </tr>
          </thead>
          {state.agentServiceValues.data.map((law) => (
            <tbody>
              <tr>
                <td>{law.name}</td>
                <td>{law.price}</td>
                <td>{law.details}</td>
                <td width={100}>
                  <img src={law.image} alt="" />
                </td>

                {/* <td colspan="2">{law.service.description}</td> */}
                <td className="d-flex">
                  <button
                    className="mx-2 delete"
                    onClick={() => deleteService(law.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="mx-2 delete"
                    onClick={() => {
                      updateService(law.id);
                    }}
                  >
                    Update
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
  }
  if (addService || state.agentUpdate) {
    serviceNow = inputs;
  } else {
    serviceNow = table;
  }
  return (
    <>
      <div className="input-info-box mt-30">
        <div className="header d-flex justify-content-between">
          <h3 className="mr-2 align-self-center">Agent Services</h3>
          <button className="btn-large" onClick={closeInputs}>
            {!addService && !state.agentUpdate ? "Add" : "Close"} service
          </button>
        </div>

        <div className="content">{serviceNow}</div>
      </div>
    </>
  );
}

export default AgentServiceIndex;
