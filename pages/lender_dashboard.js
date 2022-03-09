import React, { useState } from "react";

import Header from "../components/header";

const l_dashboard = () => {
	return (
		<>
			<Header />
			<div id="features" className="tabs" style={{ marginTop: 100 }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="above-heading">LENDER</div>
							<h2 className="h2-heading">DASHBOARD</h2>
							<p className="p-heading">
								Quick and Hassle free Funding with Low Interest
								Rate and No Prepayment Penalty
							</p>
						</div>
					</div>
					<center>
						{" "}
						<img
							src="images/lender_dashboard.svg"
							alt="alternative"
							height="700"
							width="700"
						/>{" "}
					</center>
				</div>
			</div>

			<div id="pricing" className="cards-2">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="h2-heading">BORROWER PROFILES</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-body">
									<div className="card-title">
										Personal Loan
									</div>
									<div className="price">
										<span className="currency">₹</span>
										<span className="value">20,000</span>
									</div>
									<div className="frequency">
										Loan Id - 03
									</div>
									<div className="divider"></div>
									<ul className="list-unstyled li-space-lg">
										<p>Rate of Interest : 16%</p>
										<p>Tenure : 60 Days</p>
										<p>Occupation: Salaried Employee</p>
									</ul>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="sign-up.html"
										>
											INVEST
										</a>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-body">
									<div className="card-title">
										Education Loan
									</div>
									<div className="price">
										<span className="currency">₹</span>
										<span className="value">50,000</span>
									</div>
									<div className="frequency">
										Loan Id - 08
									</div>
									<div className="divider"></div>
									<ul className="list-unstyled li-space-lg">
										<p>Rate of Interest : 16%</p>
										<p>Tenure : 4 Months</p>
										<p>Occupation: Student</p>
									</ul>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="sign-up.html"
										>
											INVEST
										</a>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="label"></div>
								<div className="card-body">
									<div className="card-title">
										Medical Emergency Loan
									</div>
									<div className="price">
										<span className="currency">₹</span>
										<span className="value">45,000</span>
									</div>
									<div className="frequency">
										Loan Id - 11
									</div>
									<div className="divider"></div>
									<ul className="list-unstyled li-space-lg">
										<p>Rate of Interest : 16%</p>
										<p>Tenure : 6 Months</p>
										<p>Occupation: Self Employed</p>
									</ul>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="sign-up.html"
										>
											INVEST
										</a>
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
export default l_dashboard;
