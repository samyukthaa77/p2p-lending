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
									<h1>SaaS App HTML Landing Page</h1>
									<p className="p-large">
										Use Tivo to automate your marketing
										actions in order to reach a much larger
										audience
									</p>
									<a
										className="btn-solid-lg page-scroll"
										href="sign-up.html"
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
											src="images/header-software-app.png"
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

			<div className="slider-1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="slider-container">
								<div className="swiper-container image-slider">
									<div className="swiper-wrapper">
										<div className="swiper-slide">
											<img
												className="img-fluid"
												src="images/customer-logo-1.png"
												alt="alternative"
											/>
										</div>
										<div className="swiper-slide">
											<img
												className="img-fluid"
												src="images/customer-logo-2.png"
												alt="alternative"
											/>
										</div>
										<div className="swiper-slide">
											<img
												className="img-fluid"
												src="images/customer-logo-3.png"
												alt="alternative"
											/>
										</div>
										<div className="swiper-slide">
											<img
												className="img-fluid"
												src="images/customer-logo-4.png"
												alt="alternative"
											/>
										</div>
										<div className="swiper-slide">
											<img
												className="img-fluid"
												src="images/customer-logo-5.png"
												alt="alternative"
											/>
										</div>
										<div className="swiper-slide">
											<img
												className="img-fluid"
												src="images/customer-logo-6.png"
												alt="alternative"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="cards-1">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="above-heading">DESCRIPTION</div>
							<h2 className="h2-heading">
								Marketing Automation Will Bring More Qualified
								Leads
							</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="card">
								<div className="card-image">
									<img
										className="img-fluid"
										src="images/description-1.png"
										alt="alternative"
									/>
								</div>
								<div className="card-body">
									<h4 className="card-title">
										Lists Builder
									</h4>
									<p>
										It's very easy to start creating email
										lists for your marketing actions. Just
										create your Tivo account
									</p>
								</div>
							</div>

							<div className="card">
								<div className="card-image">
									<img
										className="img-fluid"
										src="images/description-2.png"
										alt="alternative"
									/>
								</div>
								<div className="card-body">
									<h4 className="card-title">
										Campaign Tracker
									</h4>
									<p>
										{
											"Campaigns is a feature we've developed since the beginning because it's at the core of Tivo's functionalities"
										}
									</p>
								</div>
							</div>

							<div className="card">
								<div className="card-image">
									<img
										className="img-fluid"
										src="images/description-3.png"
										alt="alternative"
									/>
								</div>
								<div className="card-body">
									<h4 className="card-title">
										Analytics Tool
									</h4>
									<p>
										Tivo collects customer data in order to
										help you analyse different situations
										and take required action
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
							<h2 className="h2-heading">Marketing Automation</h2>
							<p className="p-heading">
								Take your business strategy to the next level
								and automatize your marketing tasks to save time
								for product development. Tivo can provide
								results in less than 2 weeks
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
										<i className="fas fa-list"></i>List
										Builder
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
										Campaigns
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
										Analytics
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
													src="images/features-1.png"
													alt="alternative"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="text-container">
												<h3>
													List Building Is Easier Than
													Ever
												</h3>
												<p>
													It's very easy to start
													using Tivo. You just need to
													fill out and submit the{" "}
													<a
														className="blue page-scroll"
														href="sign-up.html"
													>
														Sign Up Form
													</a>{" "}
													and you will receive access
													to the app and all of its
													features in no more than
													24h.
												</p>
												<ul className="list-unstyled li-space-lg">
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															Create and embed on
															websites newsletter
															sign up forms
														</div>
													</li>
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															Manage forms and
															landing pages for
															your services
														</div>
													</li>
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															Add and remove
															subscribers using
															the control panel
														</div>
													</li>
												</ul>
												<a
													className="btn-solid-reg popup-with-move-anim"
													href="#details-lightbox-1"
												>
													LIGHTBOX
												</a>
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
													src="images/features-2.png"
													alt="alternative"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="text-container">
												<h3>
													Campaigns Monitoring Tools
												</h3>
												<p>
													Campaigns monitoring is a
													feature we've developed
													since the beginning because
													it's at the core of Tivo and
													basically to any marketing
													activity focused on results.
												</p>
												<ul className="list-unstyled li-space-lg">
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															Easily plan
															campaigns and
															schedule their
															starting date
														</div>
													</li>
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															Start campaigns and
															follow their
															evolution closely
														</div>
													</li>
													<li className="media">
														<i className="fas fa-square"></i>
														<div className="media-body">
															Evaluate campaign
															results and optimize
															future actions
														</div>
													</li>
												</ul>
												<a
													className="btn-solid-reg popup-with-move-anim"
													href="#details-lightbox-2"
												>
													LIGHTBOX
												</a>
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
													src="images/features-3.png"
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
												<a
													className="btn-solid-reg popup-with-move-anim"
													href="#details-lightbox-3"
												>
													LIGHTBOX
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

			<Footer />
		</>
	);
};

export default Home;
