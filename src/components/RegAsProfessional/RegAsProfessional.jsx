const RegAsProfessional = () => {
  return (
    <div className="main-body">
      <section className="log-reg">
        <div className="top-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <a href="index.html" className="backto-home">
                  <i className="fas fa-chevron-left" /> Back to peyamba
                </a>
              </div>
              <div className="col-lg-7 ">
                <div className="logo">
                  <img src="assets/images/logo2.png" alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="log-reg-inner">
                <div className="section-header">
                  <h2 className="title">Welcome to PEYAMBA</h2>
                  <p>
                    Let's create your profile! Just fill in the fields below,
                    and we’ll get a new account.{" "}
                    <a href="login.php">already have an account.</a>
                  </p>
                  <div className="row">
                    <div className="col-md-6 pb-4">
                      <div className="o__register">
                        <label htmlFor>Registration</label>
                        <div className="option">
                          <div className="s-input nice-select-wraper">
                            <select className="select-bar o__registerOption">
                              <option value>User</option>
                              <option value>Lawyer</option>
                              <option value>Agent</option>
                              <option value>Kazi</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-content">
                    <form action="#">
                      <h4 className="content-title">Account Details</h4>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>First Name*</label>
                          <input
                            type="text"
                            className="my-form-control"
                            placeholder="Enter Your First Name"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Last Name*</label>
                          <input
                            type="text"
                            className="my-form-control"
                            placeholder="Enter Your Last Name"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Registration For*</label>
                          <div className="option">
                            <div className="s-input nice-select-wraper">
                              <select className="select-bar">
                                <option value>Myself</option>
                                <option value>My Brother</option>
                                <option value>My Sister</option>
                                <option value>My Son</option>
                                <option value>My Daughter</option>
                                <option value>My Relative</option>
                                <option value>Friend</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Ancestry</label>
                          <input
                            type="email"
                            className="my-form-control"
                            placeholder="Enter Your Ancestry"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Marital Status*</label>
                          <div className="option">
                            <div className="s-input nice-select-wraper">
                              <select className="select-bar">
                                <option value>Single</option>
                                <option value>Married</option>
                                <option value>Divorce</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Religion</label>
                          <input
                            type="email"
                            className="my-form-control"
                            placeholder="Enter Your Religion"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>I am a*</label>
                          <div className="option">
                            <div className="s-input mr-3">
                              <input type="radio" name="gender1" id="males1" />
                              <label for="males1">Man</label>
                            </div>
                            <div className="s-input">
                              <input
                                type="radio"
                                name="gender1"
                                id="females1"
                              />
                              <label for="females1">Woman</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Looking for a*</label>
                          <div className="option">
                            <div className="s-input mr-3">
                              <input type="radio" name="gender2" id="males" />
                              <label for="males">Man</label>
                            </div>
                            <div className="s-input">
                              <input type="radio" name="gender2" id="females" />
                              <label for="females">Woman</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Account*</label>
                          <div className="option">
                            <div className="s-input mr-3">
                              <input type="radio" name="gender3" id="males3" />
                              <label for="males3">Free Account</label>
                            </div>
                            <div className="s-input">
                              <input
                                type="radio"
                                name="gender3"
                                id="females3"
                              />
                              <label for="females3">Premium Account</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Use Refer Code</label>
                          <input
                            type="text"
                            className="my-form-control"
                            placeholder="Enter Your Refer Code"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Email*</label>
                          <input
                            type="email"
                            className="my-form-control"
                            placeholder="Enter Your Email"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Phone*</label>
                          <input
                            type="text"
                            className="my-form-control"
                            placeholder="Enter Your Phone Number"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label htmlFor>Password*</label>
                          <input
                            type="text"
                            className="my-form-control"
                            placeholder="Enter Your Password"
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor>Confirm Password*</label>
                          <input
                            type="text"
                            className="my-form-control"
                            placeholder="Enter Your Password"
                          />
                        </div>
                      </div>
                      <button
                        className="custom-button"
                        data-toggle="modal"
                        data-target="#email-confirm"
                      >
                        Create Your Profile
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegAsProfessional;
