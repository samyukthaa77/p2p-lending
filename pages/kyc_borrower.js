import React from "react";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/header";
import axios from "axios";

const Kyc_borrower = () => {
	const [id, setId] = useState("");
	const [address, setAddress] = useState("");
	const [addressproof, setAddressProof] = useState("");
	const [relationship, setRelationship] = useState("");
	const [occupation, setOccupation] = useState("");
	const [pan, setPan] = useState("");
	const [aadhar, setAadhar] = useState("");
	const [income, setIncome] = useState("");
	const [age, setAge] = useState("");
	const [emp_proof, setEmpProof] = useState("");
	const [bank_acc, setBankAcc] = useState("");
	const [dob, setDob] = useState("");

	const kyc_borrower = async () => {
		const { data } = await axios.post(
			"https://qiof3kyyq0.execute-api.us-west-2.amazonaws.com/production/p2p-api-resource",
			{
				method: "kyc_borrower",
				id: id,
				address: address,
				addressproof: addressproof,
				relationship: relationship,
				occupation: occupation,
				pan: pan,
				aadhar: bank_acc,
				income: income,
				age: age,
				emp_proof: emp_proof,
				bank_acc: bank_acc,
				dob: dob,
			}
		);

		console.log(data);
	};

	return (
		<>
			<Header />

			<div class="form" style={{ marginTop: 100 }}>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="text-container">
								<div class="above-heading">BORROWER</div>
								<h2>KNOW YOUR CUSTOMER</h2>

								<div
									id="newsletterForm"
									data-toggle="validator"
									data-focus="false"
								>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="nAddress"
											required
											placeholder="User ID"
											value={id}
											onChange={(e) =>
												setId(e.target.value)
											}
										/>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="nAddress"
											required
											placeholder="Address"
											value={address}
											onChange={(e) =>
												setAddress(e.target.value)
											}
										/>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtProofadd"
											required
											placeholder="Proof of Address"
											value={addressproof}
											onChange={(e) =>
												setAddressProof(e.target.value)
											}
										/>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<label
											for="DOB"
											style={{
												marginRight: 30,
												marginLeft: 5,
											}}
										>
											Date of birth:{""}{" "}
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
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtrelation"
											required
											placeholder="Son/Daughter/Wife/Husband of"
											value={relationship}
											onChange={(e) =>
												setRelationship(e.target.value)
											}
										/>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtOccupation"
											required
											placeholder="Occupation"
											value={occupation}
											onChange={(e) =>
												setOccupation(e.target.value)
											}
										/>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtPANCard"
											required
											placeholder="Permanent Account Number"
											value={pan}
											onChange={(e) =>
												setPan(e.target.value)
											}
										/>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtAadhaarnumber"
											required
											placeholder="Aadhar number"
											value={aadhar}
											onChange={(e) =>
												setAadhar(e.target.value)
											}
										/>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtannualincome"
											required
											placeholder="Annual Income"
											value={income}
											onChange={(e) =>
												setIncome(e.target.value)
											}
										/>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtAge"
											required
											placeholder="Age"
											value={age}
											onChange={(e) =>
												setAge(e.target.value)
											}
										/>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtEmproof"
											required
											placeholder="Employment Proof"
											value={emp_proof}
											onChange={(e) =>
												setEmpProof(e.target.value)
											}
										/>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtBankAcc"
											required
											placeholder="Bank Account Number"
											value={bank_acc}
											onChange={(e) =>
												setBankAcc(e.target.value)
											}
										/>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group checkbox">
										<input
											type="checkbox"
											id="nterms"
											value="Agreed-to-Terms"
											required
										/>
										I've read and agree to Credere's written{" "}
										<a href="privacy-policy.html">
											Privacy Policy
										</a>{" "}
										and{" "}
										<a href="terms-conditions.html">
											Terms Conditions
										</a>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<button
											type="submit"
											class="form-control-submit-button"
											onClick={kyc_borrower}
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Kyc_borrower;
