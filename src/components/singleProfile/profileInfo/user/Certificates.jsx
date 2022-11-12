import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileServices from "../../../../api/ProfileServices";
import { certificateData } from "../../../../redux/actions/ProfileAction";
import { CertificateTypes } from "../../../../utils/type";
import { toastifyAlertError, toastifyAlertSuccess } from "../../../toast/toast";

// import { toastifyAlertError, toastifyAlertSuccess } from "../toast/toast";

function Certificates() {
  const { certificates } = useSelector((state) => state.profileValue);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(certificateData());
  }, []);

  let medicalCerificate = "";
  let marriageCerificate = "";
  let nid = "";

  if (certificates?.data) {
    medicalCerificate = certificates?.data.filter(
      (certificate) =>
        certificate.status === CertificateTypes.MEDICAL_CERTIFICATE
    );

    marriageCerificate = certificates?.data.filter(
      (certificate) =>
        certificate.status === CertificateTypes.MARRIAGE_CERTIFICATE
    );
    nid = certificates?.data.filter(
      (certificate) => certificate.status === CertificateTypes.NID
    );
  }

  //console.log("medicalCerificate :>> ", medicalCerificate);

  const inputCertificate = async (e) => {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    const fileUploaded = e.target.files[0];
    // //console.log("name :>> ", name);
    let image = document.getElementById(name);
    image.src = URL.createObjectURL(fileUploaded);
    let upload = {
      marraige_image: fileUploaded,
      status:
        name === "medical_certificate"
          ? CertificateTypes.MEDICAL_CERTIFICATE
          : name === "marraige_image"
          ? CertificateTypes.MARRIAGE_CERTIFICATE
          : CertificateTypes.NID,
    };
    let formdata = new FormData();
    Object.keys(upload).map((key) => {
      formdata.append(key, upload[key]);
    });
    let res = await ProfileServices.CreateCertificateService(formdata);
    if (res.status === 201) {
      dispatch(certificateData());
      toastifyAlertSuccess("Certificate Added", "top-right");
    } else if (res.status === 422) {
      toastifyAlertError(res.data.message, "top-right");
    }
  };

  let module = "Loading............";

  if (certificates?.data) {
    module = (
      <div className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="my-input-box row">
              <div className="col-md-6">
                <label htmlFor="">Medical Certificate</label>
                <br />

                <label
                  className="btn rounded-2 p-3 text-white"
                  onClick={() =>
                    document.getElementById("medicalCertificate").click()
                  }
                >
                  <img
                    src={
                      medicalCerificate[medicalCerificate.length - 1]
                        ?.marraige_image || ""
                    }
                    alt=""
                    id="medical_certificate"
                    style={{
                      margin: "3px",
                      width: "200px",
                      height: "80px",
                    }}
                  />
                  <i className="fas fa-plus mr-2"></i>Upload Certificate
                </label>
                <input
                  id="medicalCertificate"
                  type="file"
                  hidden
                  name="medical_certificate"
                  onChange={inputCertificate}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="">Marriage Certificate</label>
                <br />
                <label
                  className="btn rounded-2 p-3 text-white"
                  onClick={() =>
                    document.getElementById("marriageCertificate").click()
                  }
                  // htmlFor="mrgcser"
                >
                  <img
                    src={
                      marriageCerificate[marriageCerificate.length - 1]
                        ?.marraige_image || ""
                    }
                    alt=""
                    id="marraige_image"
                    style={{
                      margin: "3px",
                      width: "200px",
                      height: "80px",
                    }}
                  />
                  <i className="fas fa-plus mr-2"></i>Upload Certificate
                </label>

                <input
                  id="marriageCertificate"
                  type="file"
                  hidden
                  name="marraige_image"
                  onChange={inputCertificate}
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="my-input-box row">
              <div className="col-md-6">
                <label htmlFor="">Verify ID</label>
                <br />

                <label
                  className="btn rounded-2 p-3 text-white"
                  // htmlFor="dircser"
                  onClick={() => document.getElementById("nidPhoto").click()}
                >
                  <img
                    src={nid[nid.length - 1]?.marraige_image || ""}
                    alt=""
                    id="nid_photo"
                    style={{
                      margin: "3px",
                      width: "200px",
                      height: "80px",
                    }}
                  />
                  <i className="fas fa-plus mr-2"></i>Upload NID/Passport
                </label>
                <input
                  // id="dircser"
                  id="nidPhoto"
                  type="file"
                  hidden
                  name="nid_photo"
                  onChange={inputCertificate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="input-info-box mt-30">
      <div className="header">Certificates</div>
      {module}
    </div>
  );
}

export default Certificates;
