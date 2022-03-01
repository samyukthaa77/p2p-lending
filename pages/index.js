import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => {
	return (
		<>
			<Header />

			<header id="header" className="header">
				<div className="header-content">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 col-xl-5">
								<div className="text-container">
									<h1>Smarter & Better Investment Asset Class</h1>
									<p className="p-large">
									Get online personal loans at attractive interest rates
									through P2P Lending
									</p>
									<p className="p-large">
									Opportunity to earn high returns by lending money online to verified borrowers
									</p>
									<a
										className="btn-solid-lg page-scroll"
										href="/signup"
									>
										SIGN UP
									</a>
								</div>
							</div>
							<div className="col-lg-6 col-xl-7">
								<div className="image-container">
									<div className="img-wrapper">
										<img
											className="img-fluid"
											src="images/p2plending.png"
											alt="alternative"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<svg
				className="header-frame"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				viewBox="0 0 1920 310"
			>
				<defs>
					<style>.cls-1fill:#5f4def;</style>
				</defs>
				<title>header-frame</title>
				<path
					className="cls-1"
					d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z"
				/>
			</svg>

			<div id = "P2P"className="cards-1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="above-heading">WHAT IS</div>
							<h2 className="h2-heading">
								Peer To Peer Lending?	
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-image">
									<img
										className="img-fluid"
										src="images/description-1.svg"
										alt="alternative"
									/>
								</div>
								<div className="card-body">
									<h4 className="card-title">
										Alternate Financing Model
									</h4>
									<p>
										{
											"It is a financial innovation which connects verified borrowers seeking loans with investors looking to earn higher returns on their investments.Investors have the option to lend small amounts to multiple borrowers to diversify their investments."
										}
									</p>
								</div>
							</div>

							<div className="card">
								<div className="card-image">
									<img
										className="img-fluid"
										src="images/description2.svg"
										alt="alternative"
									/>
								</div>
								<div className="card-body">
									<h4 className="card-title">
										Quick Hasel Free
									</h4>
									<p>
										{
											"It provides a seamless user experience in terms of ease of transaction, ability to view detailed account statements, transaction analysis, and many more features"
										}
									</p>
								</div>
							</div>

							<div className="card">
								<div className="card-image">
									<img
										className="img-fluid"
										src="images/description-3.svg"
										alt="alternative"
									/>
								</div>
								<div className="card-body">
									<h4 className="card-title">
										Transparent & Secure
									</h4>
									<p>
									 The platform puts in place one of the highest data security and safety standards to keep your data protected and confidential at all times.
									 RBI has already taken a cognizance of this innovation and come up with regulations for the sector.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="features" className="tabs">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="above-heading">FEATURES</div>
							<h2 className="h2-heading">Why Credere ?</h2>
							<p className="p-heading">
							Get P2P Loans at Attractive Interest Rates on Peer to Peer Lending Platform without any Prepayment Charges
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<ul
								className="nav nav-tabs"
								id="argoTabs"
								role="tablist"
							>
								<li className="nav-item">
									<a
										className="nav-link active"
										id="nav-tab-1"
										data-toggle="tab"
										href="#tab-1"
										role="tab"
										aria-controls="tab-1"
										aria-selected="true"
									>
										<i className="fas fa-list"></i>Borrower
										Benefits
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="nav-tab-2"
										data-toggle="tab"
										href="#tab-2"
										role="tab"
										aria-controls="tab-2"
										aria-selected="false"
									>
										<i className="fas fa-envelope-open-text"></i>
										Lender Benefits
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										id="nav-tab-3"
										data-toggle="tab"
										href="#tab-3"
										role="tab"
										aria-controls="tab-3"
										aria-selected="false"
									>
										<i className="fas fa-chart-bar"></i>
										Salient Features
									</a>
								</li>
							</ul>

							<div className="tab-content" id="argoTabsContent">
								<div
									className="tab-pane fade show active"
									id="tab-1"
									role="tabpanel"
									aria-labelledby="tab-1"
								>
									<div className="row">
										<div className="col-lg-6">
											<div className="image-container">
												<img
													className="img-fluid"
													src="images/features-1.svg"
													alt="alternative"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="text-container">
												<h3>
													Why Borrow at Credere ?
												</h3>
												
												<ul className="list-unstyled li-space-lg">
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
														Borrowers can get P2P loans at attractive interest rates 
														and assess their profile based on 40+ parameters 
														using credit score model.
														</div>
													</li>
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
														The Borrowers can simply prepay their loans at their own 
														convenience without any charges whatsoever 
														and as many times as they wish.
														</div>
													</li>
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															Borrowers gain help from guarantors for repaying the money in the worst case scenarios.
														</div>
													</li>
												</ul>
												<Link href="\signup">
														<a className="btn-solid-reg popup-with-move-anim">Sign Up</a>
												</Link>
											</div>
										</div>
									</div>
								</div>

								<div
									className="tab-pane fade"
									id="tab-2"
									role="tabpanel"
									aria-labelledby="tab-2"
								>
									<div className="row">
										<div className="col-lg-6">
											<div className="image-container">
												<img
													className="img-fluid"
													src="images/features-2.svg"
													alt="alternative"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="text-container">
												<h3>
													Why Invest at Crēdere?
												</h3>
												
												<ul className="list-unstyled li-space-lg">
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
														It provides investors an opportunity to invest as
														 per their preference.
														</div>
													</li>
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															A lookthrough of various verified borrower's profile
														</div>
													</li>
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
														A provision of legal recovery support for all loans lent on our platform. 
														We have a well-defined process in place to ensure a hassle-free experience for investors.
														</div>
													</li>
												</ul>
												<Link href="\signup">
														<a className="btn-solid-reg popup-with-move-anim">Sign Up</a>
												</Link>
											</div>
										</div>
									</div>
								</div>

								<div
									className="tab-pane fade"
									id="tab-3"
									role="tabpanel"
									aria-labelledby="tab-3"
								>
									<div className="row">
										<div className="col-lg-6">
											<div className="image-container">
												<img
													className="img-fluid"
													src="images/features-3.svg"
													alt="alternative"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="text-container">
												<h3>Uniqueness </h3>
											
												<ul className="list-unstyled li-space-lg">
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															Support from Guarantors
														</div>
													</li>
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															Automatic Disbursal of required money for different investments
														</div>
													</li>
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															Loans at attractive interest rates
														</div>
													</li>
												</ul>
												<Link href="\signup">
														<a className="btn-solid-reg popup-with-move-anim">Sign Up</a>
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />

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

export default Home;
