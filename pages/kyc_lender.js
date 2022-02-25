import React from "react";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/header";
import axios from "axios";

const Kyc_lender = () => {
	const [id, setId] = useState("");
	const [pan, setPan] = useState("");
	const [aadhar, setAadhar] = useState("");
	const [bank_acc, setBankAcc] = useState("");
	const [dob, setDob] = useState("");

	const kyc_lender = async () => {
		const { data } = await axios.post(
			"https://qiof3kyyq0.execute-api.us-west-2.amazonaws.com/production/p2p-api-resource",
			{
				method: "kyc_lender",
				id: id,
				pan: pan,
				aadhar: bank_acc,
				bank_acc: bank_acc,
				dob: dob,
			}
		);

		console.log(data);
	};

	return (
		<>
			<Header />
			<div className="form" style={{ marginTop: 100 }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="text-container">
								<div className="above-heading">LENDER</div>
								<h2> KNOW YOUR CUSTOMER</h2>
								<div
									id="newsletterForm"
									data-toggle="validator"
									data-focus="false"
								>
									<div className="form-group">
										<input
											type="text"
											className="form-control-input"
											id="txtPANCard"
											required
											placeholder="User ID"
											value={id}
											onChange={(e) =>
												setId(e.target.value)
											}
										/>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control-input"
											id="txtPANCard"
											required
											placeholder="Permanent Account Number"
											value={pan}
											onChange={(e) =>
												setPan(e.target.value)
											}
										/>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control-input"
											id="txtAadhaarnumber"
											required
											placeholder="Aadhar number"
											value={aadhar}
											onChange={(e) =>
												setAadhar(e.target.value)
											}
										/>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control-input"
											id="txtBankAcc"
											required
											placeholder="Bank Account Number"
											value={bank_acc}
											onChange={(e) =>
												setBankAcc(e.target.value)
											}
										/>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<label
											htmlFor="DOB"
											style={{ marginRight: 20 }}
										>
											Date of birth:{" "}
										</label>
										<input
											type="date"
											id="DOB"
											name="DOB"
											value={dob}
											onChange={(e) =>
												setDob(e.target.value)
											}
										></input>
									</div>
									<div className="form-group checkbox">
										<input
											type="checkbox"
											id="nterms"
											value="Agreed-to-Terms"
											required
										/>
										I've read and agree to Credere's
										<a href="privacy-policy.html">
											Privacy Policy
										</a>
										and
										<a href="terms-conditions.html">
											Terms Conditions
										</a>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<button
											type="submit"
											className="form-control-submit-button"
											onClick={kyc_lender}
										>
											SUBMIT
										</button>
									</div>
									<div className="form-message">
										<div
											id="nmsgSubmit"
											className="h3 text-center hidden"
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Kyc_lender;
