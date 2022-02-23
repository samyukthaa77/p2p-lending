import React from "react";
import Head from "next/head";
import Header from "../components/header";

const Kyc_borrower = () => {
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

								<form
									id="newsletterForm"
									data-toggle="validator"
									data-focus="false"
								>
									<div class="form-group">
										<input
											type="email"
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
											type="email"
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
											type="email"
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
									<div class="form-group checkbox">
										<input
											type="checkbox"
											id="nterms"
											value="Agreed-to-Terms"
											required
										/>
										I've read and agree to Tivo's written
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

export default Kyc_borrower;
