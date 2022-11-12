import { useEffect, useReducer, useState } from "react";
import { Table } from "react-bootstrap";
import KaziService from "../../../../api/kaziService";
import LawyerService from "../../../../api/lawyerService";
import { customPosition } from "../../../../utils/Modals";
// import KaziSlice from '../../../../redux/slices/KaziSlice';

const KaziServiceCom = () => {
  const [addService, setaddService] = useState(false);
  const [servicesValue, setservicesValue] = useState(false);
  const [updaeService, setUpdateService] = useState(false);
  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      details: "",
      name: "",
      price: "",
      name: "",
      image: "",
      kaziService: [],
      updateId: "",
    }
  );

  let services = async () => {
    let res = await LawyerService.ServiceList();
    if (res.status === 200) {
      setservicesValue(res.data);
    }
  };
  let kaziServices = async () => {
    let res = await KaziService.KaziServiceList();
    if (res.status === 200) {
      setState({ kaziService: res.data });
    }
  };
  // console.log("lawyerServiceValues :>> ", state.lawyerServiceValues);
  useEffect(() => {
    services();

    kaziServices();
  }, [false]);
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
      name: state.name,
      image: state.image,
      price: state.price,
      details: state.details,
    }
    console.log(data)
    let formdata = new FormData();
    Object.keys(data).map((key) => formdata.append(key, data[key]));
    let res = await KaziService.AddService(formdata);
    // console.log("res", res);
    if (res.status === 201) {
      customPosition("center", "success", res.data.message);

      services();

      setaddService(false);
      kaziServices();
    } else {
      customPosition("center", "error", res.data.message);
    }
  };

  const handleAddService = () => {

    setaddService(addService ? false : true);
    setUpdateService(false);
    setState({
      details: "",
      name: "",
      price: "",
      name: "",
      image: "",
      updateId: "",
    });

  };


  const handleUpdateId = (id) => {
    setaddService(true);
    setUpdateService(!addService);
    const findData = state?.kaziService.data.find(
      (sinlgle) => sinlgle.id === id
    );
    setState({
      details: findData.details,
      price: findData.price,
      image: findData.name,
      name: findData.name
      , updateId: id,
    });
  };

  const handleUpdate = async () => {
    console.log(state);
    const data = {
      details: state.details,
      name: state.name,
      price: state.price,
      image: state.image,

      _method: "put",
    };
    if (updaeService) {
      let formdata = new FormData();
      console.log(data)
      Object.keys(data).map((key) => formdata.append(key, data[key]));
      const res = await KaziService.UpdateService(state.updateId, formdata);

      if (res.status === 201) {
        customPosition("center", "success", res.data.message);

        kaziServices();
      }
    }

  };

  const handleDelete = async (id) => {
    const data = {
      _method: "delete",
    };
    const res = await KaziService.deleteService(id, data);

    console.log(res);

    if (res.status === 201) {
      customPosition("center", "success", "Delete Service Successfully");
      kaziServices();
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
        placeholder="name"
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
      {!updaeService ? (
        <button className="btn-large mx-auto my-4" onClick={handleSubmit}>
          Add service
        </button>
      ) : (
        <button className="btn-large mx-auto my-4" onClick={handleUpdate}>
          Update service
        </button>
      )}
    </div>
  );

  let serviceNow = "";
  let table = "";
  if (state?.kaziService.data) {
    table = (
      <div className="">
        <Table striped responsive bordered hover>
          <thead>
            <tr>
              <th>Service Name</th>
              <th>Price</th>
              <th>Details</th>
              {/* <th colspan="2">Service description</th> */}
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          {state.kaziService.data.map((law) => (
            <tbody>
              <tr>
                <td>{law?.name}</td>
                <td>{law.price}</td>
                <td>{law.details}</td>
                <td width={100}>
                  <img className="w-100" src={law?.image} alt="" />
                </td>
                {/* <td colspan="2">{law.service.description}</td> */}
                <td className="d-flex">
                  <button className="mx-2" onClick={() => handleDelete(law.id)}>
                    Delete
                  </button>
                  <button onClick={() => handleUpdateId(law.id)}>Update</button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    );
  }
  if (addService || updaeService) {
    serviceNow = inputs;
  } else {
    serviceNow = table;
  }
  return (
    <>
      <div className="input-info-box mt-30">
        <div className="header d-flex justify-content-between">
          <h3 className="mr-2 align-self-center">Kazi Services</h3>

          <button className="btn-large" onClick={handleAddService}>
            {!addService ? "Add" : "Close"} service
          </button>
        </div>

        <div className="content">{serviceNow}</div>
      </div>
    </>
  );
};

export default KaziServiceCom;
