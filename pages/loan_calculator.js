import React, { useState } from "react";

import Header from "../components/header";

export default function calculator() {
	const [loanAmount, setLoanAmount] = useState(0);
	const [interestRate, setInterestRate] = useState(0);
	const [numMonths, setNumMonth] = useState(0);
	const [monthlyPayment, setMonthlyPayment] = useState(0);
	const calculate = (e) => {
		e.preventDefault();
		const formValid =
			+loanAmount >= 0 &&
			0 <= +interestRate &&
			+interestRate <= 100 &&
			+numMonths > 0;
		if (!formValid) {
			return;
		}
		setMonthlyPayment(
			(+loanAmount * (1 + +interestRate / 100)) / +numMonths
		);
	};
	return (
		<>
			<Header />
			<div id="details" className="basic-1">
				<div className="container" style={{ marginTop: 100 }}>
					<div className="row">
						<div className="col-lg-6">
							<div className="text-container">
								<h2>LOAN CALCULATOR</h2>
								<div classNameName="calculator">
									<form onSubmit={calculate}>
										<div className="form-group">
											<input
												type="text"
												className="form-control-input"
												value={loanAmount}
												onChange={(e) =>
													setLoanAmount(
														e.target.value
													)
												}
												required
											/>
											<label className="label-control">
												Loan Amount
											</label>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control-input"
												value={interestRate}
												onChange={(e) =>
													setInterestRate(
														e.target.value
													)
												}
												required
											/>
											<label className="label-control">
												Interest Rate
											</label>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control-input"
												value={numMonths}
												onChange={(e) =>
													setNumMonth(e.target.value)
												}
												required
											/>
											<label className="label-control">
												Number of months to pay off loan
											</label>
											<div className="help-block with-errors"></div>
										</div>
										<button type="submit">
											Calculate Monthly Payment
										</button>
									</form>
									<div className="form-group">
										<p>
											Monthly Payment:{" "}
											{monthlyPayment.toFixed(2)}
										</p>
										<div className="help-block with-errors"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="image-container">
								<img
									className="img-fluid"
									src="images/Calculator.svg"
									alt="alternative"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
