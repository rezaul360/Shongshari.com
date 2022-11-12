import axios from "axios";
import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { default as card1, default as card2 } from "../../assets/img/card1.png";

import card3 from "../../assets/img/card2.png";

const ChecoutIndex = () => {
  const { module, id } = useParams();
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      package_id: null,
      trx_id: "123456789",
      prove_document: "",
    }
  );

  useEffect(() => {
    if (module == "membership") {
      setState({ package_id: id });
    }
  }, [module]);

  const inputChange = (event) => {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    if (name === "prove_document") {
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
    e.preventDefault();
    console.log("amar :>> ");
    const inputData = {
      trx_id: state.trx_id,
      prove_document: state.prove_document,
      package_id: state.package_id,
    };

    let formdata = new FormData();
    Object.keys(inputData).map((key) => {
      formdata.append(key, inputData[key]);
    });

    // const res = await membershipService.membershipPacOrder(formdata);

    // if (res.status == 201) {
    //   customPosition("center", "success", res.data.message);
    // } else {
    //   customPosition("center", "error", "Request feild ! Please try again");
    // }
    const formData = {
      cus_name: "Ananda",
      cus_email: "anaada2015@gmail.com",
      cus_phone: "1000",
      amount: "300",
      tran_id: "12312312",
      signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
      store_id: "aamarpaytest",
      currency: "visa",
      desc: "asdsafsaas",
      cus_add1: "53, Gausul Azam Road, Sector-14, Dhaka, Bangladesh",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_country: "Bangladesh",
      // success_url: "http://localhost:3900/callback",
      // fail_url: "http://localhost:3900/callback",
      // cancel_url: "http://localhost:3900/callback",
      type: "json", //This is must required for JSON request
    };
    const { data } = await axios.post(
      "https://sandbox.aamarpay.com/jsonpost.php",
      formData,
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    console.log("data :>> ", data);
    if (data.result !== "true") {
      let errorMessage = "";
      for (let key in data) {
        errorMessage += data[key] + ". ";
      }
      // return res.render("error", {
      //   title: "Error",
      //   errorMessage,
      // });
    }
  };

  return (
    <div>
      <div className="main-body">
        <section className="user-setting-section">
          <div className="container">
            <form onSubmit={handleSubmit} className="row">
              <div className="col-xl-12 col-md-12 ">
                <div className="page-title">Billing &amp; Payout</div>
                <div className="input-info-box mt-30">
                  <div className="header">Provide your payment info</div>
                  <div className="content">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="my-input-box">
                          <label>First Name</label>
                          <input type="text" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="my-input-box">
                          <label>Last Name</label>
                          <input type="text" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="my-input-box">
                          <label>Country</label>
                          <select name="" id="">
                            <option defaultValue="" disabled selected>
                              Select Country
                            </option>
                            <option defaultValue="">United State</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="my-input-box">
                          <label>City</label>
                          <select name="" id="">
                            <option defaultValue="" disabled selected>
                              Select City
                            </option>
                            <option defaultValue="">New Work</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="my-input-box">
                          <label>Email</label>
                          <input type="text" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="my-input-box">
                          <label>Phone</label>
                          <input type="text" placeholder="Phone" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-info-box mt-30">
                  <div className="header">Payment Options</div>
                  <div className="content">
                    <div className="select-payment">
                      <div className="option">
                        <i className="fas fa-check-circle" />
                        <img src={card1} alt="" />
                        Credit Card
                      </div>
                      <div className="option">
                        <i className="fas fa-check-circle" />
                        <img src={card2} alt="" />
                        Debit Card
                      </div>
                      <div className="option">
                        <i className="fas fa-check-circle" />
                        <img src={card3} alt="" />
                        Paypal
                      </div>
                    </div>
                    <div className="header">Enter your Card Details</div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="my-input-box">
                          <label>Card Number</label>
                          <input
                            type="email"
                            placeholder="0000 0000 0000 0000"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="my-input-box">
                          <label>Name</label>
                          <input type="text" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="my-input-box">
                          <label>Expiration</label>
                          <input type="text" placeholder="MM/YY" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="my-input-box">
                          <label>CVV</label>
                          <input type="text" placeholder="CVV" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="my-input-box">
                          <label>Document</label>
                          <input
                            type="file"
                            name="prove_document"
                            onChange={inputChange}
                            placeholder="CVV"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buttons  mt-30">
                  <button type="submit" className="custom-button">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChecoutIndex;
