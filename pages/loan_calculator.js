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
      setMonthlyPayment((+loanAmount * (1 + +interestRate / 100)) / +numMonths);
    };
    return (
		<>
			<Header />
            <div id="details" class="basic-1">
        <div class="container" style={{ marginTop: 100 }}>
            <div class="row">
                <div class="col-lg-6">
                    <div class="text-container">
                      <h2>LOAN CALCULATOR</h2>
                        <div className="calculator">
                          <form onSubmit={calculate}>
                          <div class="form-group">
										<input
											type="text"
											class="form-control-input"
											value={loanAmount}
                                            onChange={(e) => setLoanAmount(e.target.value)}
											required
										/>
										<label
											class="label-control"
										>
											Loan Amount
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
                                            value={interestRate}
                                            onChange={(e) => setInterestRate(e.target.value)}
											required
										/>
										<label
											class="label-control"
										>
											Interest Rate
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
                                            value={numMonths}
                                            onChange={(e) => setNumMonth(e.target.value)}
											required
										/>
										<label
											class="label-control"
										>
											Number of months to pay off loan
										</label>
										<div class="help-block with-errors"></div>
									</div>
                            <button type="submit">Calculate Monthly Payment</button>
                          </form>
                          <div class="form-group">
                          <p>Monthly Payment: {monthlyPayment.toFixed(2)}</p>
                          <div class="help-block with-errors"></div>
                          </div>
                        </div>
                    </div> 
                </div>
                <div class="col-lg-6">
                    <div class="image-container">
                        <img class="img-fluid" src="images/Calculator.svg" alt="alternative"/>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
    </>
    );
    };


										
									