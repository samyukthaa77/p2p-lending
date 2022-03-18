/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import axios from "axios";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

import Header from "../components/header";

const Borrower_dashboard = () => {
	const [selectedTab, setSelectedTab] = useState(0);

	const [id, setId] = useState("");
	const [loan_type, setLoanType] = useState("");
	const [amount, setAmount] = useState("");
	const [contact_no, setContactNo] = useState("");
	const [job_title, setJobTitle] = useState("");
	const [monthly_income, setMonthlyIncome] = useState("");
	const [income_source, setIncomeSource] = useState("");
	const [employer_name, setEmployerName] = useState("");
	const [employer_contact, setEmployerContact] = useState("");

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [pan, setPan] = useState("");
	const [aadhar, setAadhar] = useState("");
	const [bank_acc, setBankAcc] = useState("");

	const apply_loan = async () => {
		const { data } = await axios.post(
			"https://qiof3kyyq0.execute-api.us-west-2.amazonaws.com/production/p2p-api-resource",
			{
				method: "apply_loan",
				id: id,
				type: loan_type,
				amount: amount,
				contact_no: contact_no,
				job_title: job_title,
				monthly_income: monthly_income,
				income_source: income_source,
				employer_name: employer_name,
				employer_contact: employer_contact,
			}
		);

		console.log(data);
	};

	const guarantor_details = async () => {
		const { data } = await axios.post(
			"https://qiof3kyyq0.execute-api.us-west-2.amazonaws.com/production/p2p-api-resource",
			{
				method: "guarantor_details",
				id: id,
				name: name,
				email: email,
				contact_no: contact_no,
				pan: pan,
				aadhar: aadhar,
				bank_acc: bank_acc,
			}
		);

		console.log(data);
	};

	return (
		<>
			<Header />
			<div id="features" className="tabs" style={{ marginTop: 100 }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="above-heading">Borrower</div>
							<h2 className="h2-heading">DASHBOARD</h2>
							<p className="p-heading">
								Quick and Hassle free Funding with Low Interest
								Rate and No Prepayment Penalty
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<Tabs
								selectedTabClassName="active"
								selectedIndex={selectedTab}
								onSelect={(index) => setSelectedTab(index)}
							>
								<TabList className="nav nav-tabs">
									<Tab
										className="nav-link"
										style={{ cursor: "pointer" }}
									>
										<i className="fas fa-list"></i>Apply
										Loan
									</Tab>
									<Tab
										className="nav-link"
										style={{ cursor: "pointer" }}
									>
										<i className="fas fa-chart-bar"></i>Loan
										Progress
									</Tab>
									<Tab
										className="nav-link"
										style={{ cursor: "pointer" }}
									>
										<i className="fas fa-envelope-open-text"></i>
										Guarantor Details
									</Tab>
								</TabList>
								<TabPanel className="tab-pane fade show active">
									{/* APPLY LOAN */}
									<div className="row">
										<div className="col-lg-6">
											<div className="image-container">
												<img
													className="img-fluid"
													src="images/apply loan.svg"
													alt="alternative"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="text-container">
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="nloantype"
														required
														placeholder="User ID"
														value={id}
														onChange={(e) =>
															setId(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="nloantype"
														required
														placeholder="Loan Type"
														value={loan_type}
														onChange={(e) =>
															setLoanType(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="nloanamt"
														required
														placeholder="Loan Amount"
														value={amount}
														onChange={(e) =>
															setAmount(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="nphno"
														required
														placeholder="Contact Number"
														value={contact_no}
														onChange={(e) =>
															setContactNo(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="njobtitle"
														required
														placeholder="Job Title"
														value={job_title}
														onChange={(e) =>
															setJobTitle(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="nincome"
														required
														placeholder="Monthly Net income"
														value={monthly_income}
														onChange={(e) =>
															setMonthlyIncome(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="nincomesource"
														required
														placeholder="Income Source"
														value={income_source}
														onChange={(e) =>
															setIncomeSource(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="nempname"
														required
														placeholder="Employer Name"
														value={employer_name}
														onChange={(e) =>
															setEmployerName(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="nempno"
														required
														placeholder="Employer Contact"
														value={employer_contact}
														onChange={(e) =>
															setEmployerContact(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<a
													className="btn-solid-reg popup-with-move-anim"
													href="#"
													onClick={apply_loan}
												>
													APPLY
												</a>
											</div>
										</div>
									</div>
								</TabPanel>
								<TabPanel className="tab-pane fade show active">
									{/* LOAN PROGRESS */}
									<div className="row">
										<div className="col-lg-6">
											<div className="image-container">
												<img
													className="img-fluid"
													src="images/progress.svg"
													alt="alternative"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="text-container">
												<h3>Analytics Control Panel</h3>
												<p>
													Analytics control panel is
													important for every
													marketing team so it's beed
													implemented from the begging
													and designed to produce
													reports based on very little
													input information.
												</p>
												<ul className="list-unstyled li-space-lg">
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															If you set it up
															correctly you will
															get acces to great
															intel
														</div>
													</li>
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															Easy to integrate in
															your websites and
															landing pages
														</div>
													</li>
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															The generated
															reports are
															important for your
															strategy
														</div>
													</li>
												</ul>
												<button
													className="btn-solid-reg popup-with-move-anim"
													onClick={() =>
														setSelectedTab(0)
													}
												>
													LIGHTBOX
												</button>
											</div>
										</div>
									</div>
								</TabPanel>
								<TabPanel className="tab-pane fade show active">
									{/* GUARANTOR DETAILS */}
									<div className="row">
										<div className="col-lg-6">
											<div className="image-container">
												<img
													className="img-fluid"
													src="images/guarantor.svg"
													alt="alternative"
													style={{
														height: 400,
														width: 600,
														objectFit: "contain",
													}}
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="text-container">
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="nid"
														required
														placeholder="Borrower ID"
														value={id}
														onChange={(e) =>
															setId(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="nname"
														required
														placeholder="Name"
														value={name}
														onChange={(e) =>
															setName(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="nemail"
														required
														placeholder="Email"
														value={email}
														onChange={(e) =>
															setEmail(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<div className="form-group">
													<input
														type="text"
														className="form-control-input"
														id="nphno"
														required
														placeholder="Contact Number"
														value={contact_no}
														onChange={(e) =>
															setContactNo(
																e.target.value
															)
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
														placeholder="PAN"
														value={pan}
														onChange={(e) =>
															setPan(
																e.target.value
															)
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
														placeholder="Aadhar Number"
														value={aadhar}
														onChange={(e) =>
															setAadhar(
																e.target.value
															)
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
															setBankAcc(
																e.target.value
															)
														}
													/>
													<div className="help-block with-errors"></div>
												</div>
												<a
													className="btn-solid-reg popup-with-move-anim"
													href="#"
													onClick={guarantor_details}
												>
													UPDATE PROFILE
												</a>
											</div>
										</div>
									</div>
								</TabPanel>
							</Tabs>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Borrower_dashboard;
