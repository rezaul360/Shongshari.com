import { useReducer, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ProfileServices from "../../api/ProfileServices";
import { customPosition } from "../../utils/Modals";

function EducationModal() {
  let [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      institute_name: "",
      year_started: "",
      year_ended: "",
      description: "",
      education_certificate: "",
      degree: "",
    }
  );

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setState({
      institute_name: "",
      year_started: "",
      year_ended: "",
      description: "",
      education_certificate: "",
      degree: "",
    });

    setShow(false);
  };
  const handleShow = () => setShow(true);
  const inputChange = (e) => {
    const target = e.target;
    const name = target.name;
    let value = target.value;
    // console.log(name);
    if (name === "education_certificate") {
      value = target.files[0];
      setState({
        [name]: value,
      });
    } else if (name === "year_ended") {
      // console.log("value", value);
      // console.log("state.year_started", value > state.year_started);
      state.year_started > value
        ? customPosition(
            "center",
            "error",
            "End date can not be bigger than start date"
          )
        : setState({
            [name]: value,
          });
    }

    setState({
      [name]: value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const inputData = {
      institute_name: state.institute_name,
      year_started: state.year_started,
      year_ended: state.year_ended,
      description: state.description,
      education_certificate: state.education_certificate,
      degree: state.degree,
    };

    let formdata = new FormData();
    Object.keys(inputData).map((key) => {
      formdata.append(key, inputData[key]);
    });
    const res = await ProfileServices.Education(formdata);
    if (res.status === 201) {
      customPosition("center", "success", "Success");
      setState({
        institute_name: "",
        year_started: "",
        year_ended: "",
        description: "",
        education_certificate: "",
        degree: "",
      });
      handleClose();
    } else if (res.status === (422 || 500)) {
      customPosition("center", "error", res?.data?.message.toString());
      // });
    }
  };

  return (
    <div className="input-info-box mt-30 ">
      <div className="header">Education</div>

      <button type="button" className="btn custom-button" onClick={handleShow}>
        Update
      </button>
      <div className=" d-flex justify-content-center">
        <Modal
          show={show}
          onHide={handleClose}
          className="modal filter-p"
          id="exampleModalCenter2"
        >
          <div className="modal-content logi__modal">
            <Modal.Header
              closeButton
              className=" justify-content-between align-items-center logiHeader"
            >
              <Modal.Title
                className="modal-title text-center logiTitle"
                id="exampleModalCenterTitle"
              >
                Education
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body education-modal">
              <div class="content">
                <div class="row">
                  <div class="col-md-12">
                    <div class="my-input-box">
                      <label for="">Institute name</label>
                      <input
                        type="text"
                        name="institute_name"
                        placeholder="Title or Place"
                        value={state.institute_name}
                        onChange={inputChange}
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="my-input-box">
                      <label for="">Degree name</label>
                      <input
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        value={state.degree}
                        onChange={inputChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="my-input-box">
                      <label htmlFor="">Year Started</label>
                      <input
                        name="year_started"
                        onChange={inputChange}
                        type={"date"}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="my-input-box">
                      <label htmlFor="">Year End</label>
                      <input
                        name="year_ended"
                        onChange={inputChange}
                        type={"date"}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="my-input-box">
                      <label for="">Description</label>
                      <textarea
                        name="description"
                        id=""
                        value={state.description}
                        onChange={inputChange}
                        placeholder="Description"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="my-input-box">
                      <label for="">Educational Certificate</label>
                      <br />
                      <label class="btn rounded-2 p-3 text-white" for="dircser">
                        <i class="fas fa-plus mr-2"></i>Upload Certificate{" "}
                      </label>
                      <input
                        id="dircser"
                        name="education_certificate"
                        // value={state.education_certificate}
                        onChange={inputChange}
                        type="file"
                        // hidden
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </div>
          <Modal.Footer className="modalFooter">
            <Button className="mr-5 danger w-25" onClick={handleClose}>
              Close
            </Button>
            <Button className="btn w-50 primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default EducationModal;
