import React, { useState } from "react";

import Header from "../components/header";

const LoginCompleted = () => {
  const [selectedTab, setSelectedTab] = useState("lender");

  return (
    <div>
      <Header />
      <div className="ex-2-header header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Log In</h1>
              <p>
                You don&apos;t have a password? Then please{" "}
                <a className="white" href="/signupgit ">
                  Sign Up
                </a>
              </p>
              <div style={{ marginBottom: 20, margin: "20px auto" }}>
                <button
                  className="btn-solid-lg page-scroll"
                  onClick={() => setSelectedTab("lender")}
                >
                  LENDER
                </button>
                <button
                  className="btn-solid-lg page-scroll"
                  onClick={() => setSelectedTab("borrower")}
                  style={{ marginLeft: 20 }}
                >
                  BORROWER
                </button>
              </div>
              {selectedTab === "lender" ? (
                // Lender Tab
                <div className="form-container">
                  <form
                    id="logInForm"
                    data-toggle="validator"
                    data-focus="false"
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control-input"
                        id="lemail"
                        required
                      />
                      <label className="label-control" htmlFor="lemail">
                        Lender Email
                      </label>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control-input"
                        id="lpassword"
                        required
                      />
                      <label className="label-control" htmlFor="lpassword">
                        Lender Password
                      </label>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control-submit-button"
                      >
                        LOG IN
                      </button>
                    </div>
                    <div className="form-message">
                      <div
                        id="lmsgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                    </div>
                  </form>
                </div>
              ) : (
                // Borrower Tab
                <div className="form-container">
                  <form
                    id="logInForm"
                    data-toggle="validator"
                    data-focus="false"
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control-input"
                        id="lemail"
                        required
                      />
                      <label className="label-control" htmlFor="lemail">
                        Borrower Email
                      </label>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control-input"
                        id="lpassword"
                        required
                      />
                      <label className="label-control" htmlFor="lpassword">
                        Borrower Password
                      </label>
                      <div className="help-block with-errors"></div>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control-submit-button"
                      >
                        LOG IN
                      </button>
                    </div>
                    <div className="form-message">
                      <div
                        id="lmsgSubmit"
                        className="h3 text-center hidden"
                      ></div>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCompleted;
