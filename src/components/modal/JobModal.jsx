import { useState } from "react";
import { Modal,Button } from "react-bootstrap";

function JobModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    handleClose();
  };
  return (
    <div className="input-info-box mt-30 ">
      <div className="header">Job</div>

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
                Update Job
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body education-modal">
              <div class="content">
                <div class="row">
                  <div class="col-md-12">
                    <div class="my-input-box">
                      <label for="">Title or Place</label>
                      <input type="text" placeholder="Title or Place" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="my-input-box">
                      <label for="">Year Started</label>
                      <select name="" id="">
                        <option value="">2014</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="my-input-box">
                      <label for="">Year End</label>
                      <select name="" id="">
                        <option value="">2017</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="my-input-box">
                      <label for="">Description</label>
                      <textarea
                        name=""
                        id=""
                        placeholder="Description"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="my-input-box">
                      <label for="">Job Certificate</label>
                      <br />
                      <label class="btn rounded-2 p-3 text-white" for="dircser">
                        <i class="fas fa-plus mr-2"></i>Upload Certificate{" "}
                      </label>
                      <input id="dircser" type="file" hidden />
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

export default JobModal;
