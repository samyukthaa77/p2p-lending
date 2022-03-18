import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/admin_header";
import Footer from "../components/admin_footer";

const admin_dashboard = () => {
	return (
		<>
			<Header />
			<div id="pricing" className="cards-2" style={{ marginTop: 100 }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h2 className="h2-heading">ADMIN DASHBOARD</h2>
						</div>
					</div>
					<div className="image-container">
						<img
							className="img-fluid"
							src="images/admin.svg"
							alt="alternative"
							height="300"
							width="300"
						/>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-body">
									<div className="card-title">
										LOAN APPROVAL
									</div>
									<div className="frequency">
										Review the Loan
									</div>
									<div className="divider"></div>

									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="/loan_approval"
										>
											OVERVIEW LOANS
										</a>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-body">
									<div className="card-title">
										USER APPROVAL
									</div>
									<div className="frequency">
										Borrowers & Lenders
									</div>
									<div className="divider"></div>

									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="/borrower_approval"
										>
											CHECK BORROWERS
										</a>
									</div>
									<br></br>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="/lender_approval"
										>
											CHECK LENDERS
										</a>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-body">
									<div className="card-title">
										DOCUMENT VERIFICATION
									</div>
									<div className="frequency">
										Look in every nuke and corner!
									</div>
									<div className="divider"></div>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="/document_verify"
										>
											VERIFY DOCUMENTS
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default admin_dashboard;
