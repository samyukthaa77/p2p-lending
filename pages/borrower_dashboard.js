import React, { useState } from "react";
import Header from "../components/header";
import axios from "axios";

const Borrower_dashboard = () => {
	const [id, setId] = useState("");
	const [loan_type, setLoanType] = useState("");
	const [amount, setAmount] = useState("");
	const [contact_no, setContactNo] = useState("");
	const [job_title, setJobTitle] = useState("");
	const [monthly_income, setMonthlyIncome] = useState("");
	const [income_source, setIncomeSource] = useState("");
	const [employer_name, setEmployerName] = useState("");
	const [employer_contact, setEmployerContact] = useState("");

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

	return (
		<>
			<Header />
			<div id="features" class="tabs" style={{ marginTop: 100 }}>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="above-heading">Borrower</div>
							<h2 class="h2-heading">DASHBOARD</h2>
							<p class="p-heading">
								Quick and Hassle free Funding with Low Interest
								Rate and No Prepayment Penalty
							</p>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<ul
								class="nav nav-tabs"
								id="argoTabs"
								role="tablist"
							>
								<li class="nav-item">
									<a
										class="nav-link active"
										id="nav-tab-1"
										data-toggle="tab"
										href="#tab-1"
										role="tab"
										aria-controls="tab-1"
										aria-selected="true"
									>
										<i class="fas fa-list"></i>Apply Loan
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										id="nav-tab-2"
										data-toggle="tab"
										href="#tab-2"
										role="tab"
										aria-controls="tab-2"
										aria-selected="false"
									>
										<i class="fas fa-chart-bar"></i>Loan
										Progress
									</a>
								</li>
								<li class="nav-item">
									<a
										class="nav-link"
										id="nav-tab-3"
										data-toggle="tab"
										href="#tab-3"
										role="tab"
										aria-controls="tab-3"
										aria-selected="false"
									>
										<i class="fas fa-envelope-open-text"></i>
										Guarantor Details
									</a>
								</li>
							</ul>

							<div class="tab-content" id="argoTabsContent">
								<div
									class="tab-pane fade show active"
									id="tab-1"
									role="tabpanel"
									aria-labelledby="tab-1"
								>
									{/* APPLY LOAN */}
									<div class="row">
										<div class="col-lg-6">
											<div class="image-container">
												<img
													class="img-fluid"
													src="images/apply loan.svg"
													alt="alternative"
												/>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="text-container">
												<div class="form-group">
													<input
														type="text"
														class="form-control-input"
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
													<div class="help-block with-errors"></div>
												</div>
												<div class="form-group">
													<input
														type="text"
														class="form-control-input"
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
													<div class="help-block with-errors"></div>
												</div>
												<div class="form-group">
													<input
														type="text"
														class="form-control-input"
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
													<div class="help-block with-errors"></div>
												</div>
												<div class="form-group">
													<input
														type="text"
														class="form-control-input"
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
													<div class="help-block with-errors"></div>
												</div>
												<div class="form-group">
													<input
														type="text"
														class="form-control-input"
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
													<div class="help-block with-errors"></div>
												</div>
												<div class="form-group">
													<input
														type="text"
														class="form-control-input"
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
													<div class="help-block with-errors"></div>
												</div>
												<div class="form-group">
													<input
														type="text"
														class="form-control-input"
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
													<div class="help-block with-errors"></div>
												</div>
												<div class="form-group">
													<input
														type="text"
														class="form-control-input"
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
													<div class="help-block with-errors"></div>
												</div>
												<div class="form-group">
													<input
														type="text"
														class="form-control-input"
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
													<div class="help-block with-errors"></div>
												</div>
												<a
													class="btn-solid-reg popup-with-move-anim"
													href="#"
													onClick={apply_loan}
												>
													APPLY
												</a>
											</div>
										</div>
									</div>
								</div>
								<div
									class="tab-pane fade"
									id="tab-2"
									role="tabpanel"
									aria-labelledby="tab-2"
								>
									{/* LOAN PROGRESS */}
									<div class="row">
										<div class="col-lg-6">
											<div class="image-container">
												<img
													class="img-fluid"
													src="images/progress.svg"
													alt="alternative"
												/>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="text-container">
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
												<ul class="list-unstyled li-space-lg">
													<li class="media">
														<i class="fas fa-square"></i>
														<div class="media-body">
															If you set it up
															correctly you will
															get acces to great
															intel
														</div>
													</li>
													<li class="media">
														<i class="fas fa-square"></i>
														<div class="media-body">
															Easy to integrate in
															your websites and
															landing pages
														</div>
													</li>
													<li class="media">
														<i class="fas fa-square"></i>
														<div class="media-body">
															The generated
															reports are
															important for your
															strategy
														</div>
													</li>
												</ul>
												<a
													class="btn-solid-reg popup-with-move-anim"
													href="#details-lightbox-3"
												>
													LIGHTBOX
												</a>
											</div>
										</div>
									</div>
								</div>
								<div
									class="tab-pane fade"
									id="tab-3"
									role="tabpanel"
									aria-labelledby="tab-3"
								>
									{/* GUARANTOR DETAILS */}
									<div class="row">
										<div class="col-lg-6">
											<div class="image-container">
												<img
													class="img-fluid"
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
										<div class="col-lg-6">
											<div class="text-container">
												<div class="form-group">
													<input
														type="text"
														class="form-control-input"
														id="nname"
														required
													/>
													<label
														class="label-control"
														for="nname"
													>
														Name
													</label>
													<div class="help-block with-errors"></div>
												</div>
												<div class="form-group">
													<input
														type="text"
														class="form-control-input"
														id="nemail"
														required
													/>
													<label
														class="label-control"
														for="nemail"
													>
														Email
													</label>
													<div class="help-block with-errors"></div>
												</div>
												<div class="form-group">
													<input
														type="text"
														class="form-control-input"
														id="nphno"
														required
													/>
													<label
														class="label-control"
														for="nphno"
													>
														Phone Number
													</label>
													<div class="help-block with-errors"></div>
												</div>
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
												<a
													class="btn-solid-reg popup-with-move-anim"
													href="#details-lightbox-2"
												>
													UPDATE PROFILE
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<script src="js/jquery.min.js"></script>
			<script src="js/popper.min.js"></script>
			<script src="js/bootstrap.min.js"></script>
			<script src="js/jquery.easing.min.js"></script>
			<script src="js/swiper.min.js"></script>
			<script src="js/jquery.magnific-popup.js"></script>
			<script src="js/validator.min.js"></script>
			<script src="js/scripts.js"></script>
		</>
	);
};
export default Borrower_dashboard;
