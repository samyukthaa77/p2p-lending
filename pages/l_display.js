import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/admin_header";
import Footer from "../components/admin_footer";

const l_display = () => {
	return (
		<>
			<Header />
			<div id="pricing" className="cards-2">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<br></br>
							<br></br>
							<br></br>
							<div className="above-heading">
								DISPLAY DETAILS OF
							</div>
							<h2 className="h2-heading">LENDERS</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-body">
									<div className="card-title">BASIC</div>
									<div className="price">
										<span className="currency">$</span>
										<span className="value">Free</span>
									</div>
									<div className="frequency">
										14 days trial
									</div>
									<div className="divider"></div>
									<ul className="list-unstyled li-space-lg">
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												Email Marketing Module
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												User Control Management
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												List Building And Cleaning
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												Collected Data Reports
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												Planning And Evaluation
											</div>
										</li>
									</ul>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="#details-1"
										>
											VIEW{" "}
										</a>
									</div>
								</div>
							</div>
							<div className="card">
								<div className="card-body">
									<div className="card-title">ADVANCED</div>
									<div className="price">
										<span className="currency">$</span>
										<span className="value">29.99</span>
									</div>
									<div className="frequency">monthly</div>
									<div className="divider"></div>
									<ul className="list-unstyled li-space-lg">
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												Email Marketing Module
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												User Control Management
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												List Building And Cleaning
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												Collected Data Reports
											</div>
										</li>
										<li className="media">
											<i className="fas fa-times"></i>
											<div className="media-body">
												Planning And Evaluation
											</div>
										</li>
									</ul>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="#details-1"
										>
											VIEW
										</a>
									</div>
								</div>
							</div>

							<div className="card">
								<div className="card-body">
									<div className="card-title">COMPLETE</div>
									<div className="price">
										<span className="currency">$</span>
										<span className="value">39.99</span>
									</div>
									<div className="frequency">monthly</div>
									<div className="divider"></div>
									<ul className="list-unstyled li-space-lg">
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												Email Marketing Module
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												User Control Management
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												List Building And Cleaning
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												Collected Data Reports
											</div>
										</li>
										<li className="media">
											<i className="fas fa-check"></i>
											<div className="media-body">
												Planning And Evaluation
											</div>
										</li>
									</ul>
									<div className="button-wrapper">
										<a
											className="btn-solid-reg page-scroll"
											href="sign-up.html"
										>
											VIEW
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<a className="btn-outline-reg" href="/admin_dashboard">
					BACK
				</a>
			</div>
			<div
				id="details-1"
				className="lightbox-basic zoom-anim-dialog mfp-hide"
			>
				<div className="container">
					<div className="row">
						<button
							title="Close (Esc)"
							type="button"
							className="mfp-close x-button"
						>
							×
						</button>

						<div className="col-lg-4">
							<h3>List Building</h3>
							<h5>Core service</h5>
							<p>
								It's very easy to start using Tivo. You just
								need to fill out and submit the Sign Up Form and
								you will receive access to the app.
							</p>
							<ul className="list-unstyled li-space-lg">
								<li className="media">
									<i className="fas fa-square"></i>
									<div className="media-body">
										List building framework
									</div>
								</li>
								<li className="media">
									<i className="fas fa-square"></i>
									<div className="media-body">
										Easy database browsing
									</div>
								</li>
								<li className="media">
									<i className="fas fa-square"></i>
									<div className="media-body">
										User administration
									</div>
								</li>
								<li className="media">
									<i className="fas fa-square"></i>
									<div className="media-body">
										Automate user signup
									</div>
								</li>
								<li className="media">
									<i className="fas fa-square"></i>
									<div className="media-body">
										Quick formatting tools
									</div>
								</li>
								<li className="media">
									<i className="fas fa-square"></i>
									<div className="media-body">
										Fast email checking
									</div>
								</li>
							</ul>
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

export default l_display;
