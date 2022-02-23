import React from "react";
import Head from "next/head";
import Header from "../components/header";

const Kyc_lender = () => {
	return (
		<>
			<Header />
			<div class="form" style={{ marginTop: 100 }}>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="text-container">
								<div class="above-heading">LENDER</div>
								<h2> KNOW YOUR CUSTOMER</h2>
								<form
									id="newsletterForm"
									data-toggle="validator"
									data-focus="false"
								>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtPANCard"
											required
										/>
										<label
											class="label-control"
											for="nPAN"
										>
											Permanent Account Number
										</label>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtAadhaarnumber"
											required
										/>
										<label
											class="label-control"
											for="nAadhaarnumber"
										>
											Aadhaar Number
										</label>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtBankAcc"
											required
										/>
										<label
											class="label-control"
											for="nBankacc"
										>
											Bank Account Number
										</label>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtAge"
											required
										/>
										<label
											class="label-control"
											for="nAge"
										>
											Age
										</label>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
									<label for="DOB" style={{marginRight:30}}>Date of birth:{""} </label>
                                    <input type="date" id="DOB" name="DOB"></input>
									</div>
									<div class="form-group checkbox">
										<input
											type="checkbox"
											id="nterms"
											value="Agreed-to-Terms"
											required
										/>
										I've read and agree to 
										<a href="privacy-policy.html">
											Privacy Policy
										</a>
										and
										<a href="terms-conditions.html">
											Terms Conditions
										</a>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<button
											type="submit"
											class="form-control-submit-button"
										>
											SUBMIT
										</button>
									</div>
									<div class="form-message">
										<div
											id="nmsgSubmit"
											class="h3 text-center hidden"
										></div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Kyc_lender;
