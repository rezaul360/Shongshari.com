import { useEffect, useReducer, useState } from "react";
import { Table } from "react-bootstrap";
import LawyerService from "../../../../../api/lawyerService";
import { customPosition } from "../../../../../utils/Modals";

function LawyerServiceCom() {
  const [addService, setaddService] = useState(false);
  const [servicesValue, setservicesValue] = useState(false);
  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      details: "",
      price: "",
      name: "",
      image: "",
      lawyerServiceValues: "",
      updateId: "",
      isUpdateClick: false
    }
  );

  let services = async () => {
    let res = await LawyerService.ServiceList();
    if (res.status === 200) {
      setservicesValue(res.data);
    }
    // console.log("res", res);
  };
  let lawyerServices = async () => {
    let res = await LawyerService.LawyerServiceList();
    if (res.status === 200) {
      setState({ lawyerServiceValues: res.data });
    }
  };
  // console.log("lawyerServiceValues :>> ", state.lawyerServiceValues);
  useEffect(() => {
    services();
    lawyerServices();
  }, []);
  const inputChange = (e) => {
    const target = e.target;
    const name = target.name;
    let value = target.value;
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

  const handleSubmit = async (e) => {
    const data = {
      details: state.details,
      name: state.name,
      price: state.price,
      image: state.image,

    };
    let formdata = new FormData();
    console.log(data)
    Object.keys(data).map((key) => formdata.append(key, data[key]));

    let res = await LawyerService.AddService(formdata);
    // console.log("res", res);
    if (res.status === 201) {
      customPosition("center", "success", res.data.message);
      services();
      setState({
        price: "",
        details: "",
        name: "",
        image: "",
        isUpdateClick: false,

      });
      setaddService(false);
      lawyerServices();
    } else {
      customPosition("center", "error", res.data.message);
    }
  };

  const handleAddService = () => {

    setaddService(addService ? false : true);

    setState({
      details: "",
      name: "",
      price: "",
      name: "",
      image: "",
      updateId: "",
      isUpdateClick: false,

    });

  };



  const handleUpdateId = (id) => {
    const updateData = state.lawyerServiceValues?.data.find(item => item.id === id)
    setaddService(true);
    setState({
      details: updateData.details,
      price: updateData.price,
      image: updateData.image,
      name: updateData.name,
      isUpdateClick: true,
      updateId: id,
    });

  }

  const submitUpdate = async () => {
    const data = {
      details: state.details,
      name: state.name,
      price: state.price,
      image: state.image,

      _method: "put",
    };
    if (state.isUpdateClick) {
      let formdata = new FormData();
      console.log(data)
      Object.keys(data).map((key) => formdata.append(key, data[key]));
      const res = await LawyerService.updateService(state.updateId, formdata);

      if (res.status === 201) {
        customPosition("center", "success", res.data.message);
        lawyerServices()
        setState({
          isUpdateClick: false
        })
        setaddService(false)
      }
    }

  }

  const handleDelete = async (id) => {

    const data = {
      _method: "delete",
    };
    const res = await LawyerService.deleteService(id, data);



    if (res.status === 201) {
      customPosition("center", "success", "Delete Service Successfully");
      lawyerServices()

    } else {
      customPosition("center", "error", res.data.message);
    }
  };



  let inputs = (
    <div className="inputValue">
      <input
        name="name"
        className="my-3"
        type={"text"}
        placeholder="Name"
        value={state.name}
        onChange={inputChange}
      />

      <input
        name="price"
        className="my-3"
        type={"number"}
        placeholder="Price"
        value={state.price}
        onChange={inputChange}
      />
      <input
        name="details"
        type={"text"}
        value={state.details}
        placeholder="details"
        onChange={inputChange}
      />
      <input
        className="my-3"
        name="image"
        type={"file"}
        placeholder="image"
        onChange={inputChange}
      />

      {!state.isUpdateClick ? (
        <button className="btn-large mx-auto my-4" onClick={handleSubmit}>
          Add service
        </button>
      ) : (
        <button className="btn-large mx-auto my-4" onClick={submitUpdate}>
          Update service
        </button>
      )}
    </div>
  );

  let serviceNow = "";
  let table = "";
  if (state.lawyerServiceValues.data) {
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
          {state.lawyerServiceValues.data.map((law) => (
            <tbody>
              <tr>
                <td>{law?.name}</td>
                <td>{law.price}</td>
                <td>{law.details}</td>
                <td width={100}><img src={law?.image} alt="" /></td>
                {/* <td colspan="2">{law.service.description}</td> */}
                <td className="d-flex">
                  <button className="mx-2" onClick={() => handleDelete(law?.id)}>Delete</button>
                  <button onClick={() => handleUpdateId(law?.id)}>Update</button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
  }
  if (addService || state.isUpdateClick) {
    serviceNow = inputs;
  } else {
    serviceNow = table;
  }
  return (
    <>
      <div className="input-info-box mt-30">
        <div className="header d-flex justify-content-between">
          <h3 className="mr-2 align-self-center">Lawyer Services</h3>
          <button
            className="btn-large"
            onClick={handleAddService}
          >
            {!addService ? "Add" : "Close"} service
          </button>
        </div>

        <div className="content">{serviceNow}</div>
      </div>
    </>
  );
}

export default LawyerServiceCom;
