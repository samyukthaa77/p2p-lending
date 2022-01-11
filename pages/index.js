import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/header";

const Home = () => {
	return (
		<>
			<Header />

			<header id="header" class="header">
				<div class="header-content">
					<div class="container">
						<div class="row">
							<div class="col-lg-6 col-xl-5">
								<div class="text-container">
									<h1>SaaS App HTML Landing Page</h1>
									<p class="p-large">
										Use Tivo to automate your marketing
										actions in order to reach a much larger
										audience
									</p>
									<a
										class="btn-solid-lg page-scroll"
										href="sign-up.html"
									>
										SIGN UP
									</a>
								</div>
							</div>
							<div class="col-lg-6 col-xl-7">
								<div class="image-container">
									<div class="img-wrapper">
										<img
											class="img-fluid"
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
				class="header-frame"
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
					class="cls-1"
					d="M0,283.054c22.75,12.98,53.1,15.2,70.635,14.808,92.115-2.077,238.3-79.9,354.895-79.938,59.97-.019,106.17,18.059,141.58,34,47.778,21.511,47.778,21.511,90,38.938,28.418,11.731,85.344,26.169,152.992,17.971,68.127-8.255,115.933-34.963,166.492-67.393,37.467-24.032,148.6-112.008,171.753-127.963,27.951-19.26,87.771-81.155,180.71-89.341,72.016-6.343,105.479,12.388,157.434,35.467,69.73,30.976,168.93,92.28,256.514,89.405,100.992-3.315,140.276-41.7,177-64.9V0.24H0V283.054Z"
				/>
			</svg>

			<div class="slider-1">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="slider-container">
								<div class="swiper-container image-slider">
									<div class="swiper-wrapper">
										<div class="swiper-slide">
											<img
												class="img-fluid"
												src="images/customer-logo-1.png"
												alt="alternative"
											/>
										</div>
										<div class="swiper-slide">
											<img
												class="img-fluid"
												src="images/customer-logo-2.png"
												alt="alternative"
											/>
										</div>
										<div class="swiper-slide">
											<img
												class="img-fluid"
												src="images/customer-logo-3.png"
												alt="alternative"
											/>
										</div>
										<div class="swiper-slide">
											<img
												class="img-fluid"
												src="images/customer-logo-4.png"
												alt="alternative"
											/>
										</div>
										<div class="swiper-slide">
											<img
												class="img-fluid"
												src="images/customer-logo-5.png"
												alt="alternative"
											/>
										</div>
										<div class="swiper-slide">
											<img
												class="img-fluid"
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

			<div class="cards-1">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="above-heading">DESCRIPTION</div>
							<h2 class="h2-heading">
								Marketing Automation Will Bring More Qualified
								Leads
							</h2>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-12">
							<div class="card">
								<div class="card-image">
									<img
										class="img-fluid"
										src="images/description-1.png"
										alt="alternative"
									/>
								</div>
								<div class="card-body">
									<h4 class="card-title">Lists Builder</h4>
									<p>
										It's very easy to start creating email
										lists for your marketing actions. Just
										create your Tivo account
									</p>
								</div>
							</div>

							<div class="card">
								<div class="card-image">
									<img
										class="img-fluid"
										src="images/description-2.png"
										alt="alternative"
									/>
								</div>
								<div class="card-body">
									<h4 class="card-title">Campaign Tracker</h4>
									<p>
										Campaigns is a feature we've developed
										since the beginning because it's at the
										core of Tivo's functionalities
									</p>
								</div>
							</div>

							<div class="card">
								<div class="card-image">
									<img
										class="img-fluid"
										src="images/description-3.png"
										alt="alternative"
									/>
								</div>
								<div class="card-body">
									<h4 class="card-title">Analytics Tool</h4>
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

			<div id="features" class="tabs">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="above-heading">FEATURES</div>
							<h2 class="h2-heading">Marketing Automation</h2>
							<p class="p-heading">
								Take your business strategy to the next level
								and automatize your marketing tasks to save time
								for product development. Tivo can provide
								results in less than 2 weeks
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
										<i class="fas fa-list"></i>List Builder
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
										<i class="fas fa-envelope-open-text"></i>
										Campaigns
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
										<i class="fas fa-chart-bar"></i>
										Analytics
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
									<div class="row">
										<div class="col-lg-6">
											<div class="image-container">
												<img
													class="img-fluid"
													src="images/features-1.png"
													alt="alternative"
												/>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="text-container">
												<h3>
													List Building Is Easier Than
													Ever
												</h3>
												<p>
													It's very easy to start
													using Tivo. You just need to
													fill out and submit the{" "}
													<a
														class="blue page-scroll"
														href="sign-up.html"
													>
														Sign Up Form
													</a>{" "}
													and you will receive access
													to the app and all of its
													features in no more than
													24h.
												</p>
												<ul class="list-unstyled li-space-lg">
													<li class="media">
														<i class="fas fa-square"></i>
														<div class="media-body">
															Create and embed on
															websites newsletter
															sign up forms
														</div>
													</li>
													<li class="media">
														<i class="fas fa-square"></i>
														<div class="media-body">
															Manage forms and
															landing pages for
															your services
														</div>
													</li>
													<li class="media">
														<i class="fas fa-square"></i>
														<div class="media-body">
															Add and remove
															subscribers using
															the control panel
														</div>
													</li>
												</ul>
												<a
													class="btn-solid-reg popup-with-move-anim"
													href="#details-lightbox-1"
												>
													LIGHTBOX
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
									<div class="row">
										<div class="col-lg-6">
											<div class="image-container">
												<img
													class="img-fluid"
													src="images/features-2.png"
													alt="alternative"
												/>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="text-container">
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
												<ul class="list-unstyled li-space-lg">
													<li class="media">
														<i class="fas fa-square"></i>
														<div class="media-body">
															Easily plan
															campaigns and
															schedule their
															starting date
														</div>
													</li>
													<li class="media">
														<i class="fas fa-square"></i>
														<div class="media-body">
															Start campaigns and
															follow their
															evolution closely
														</div>
													</li>
													<li class="media">
														<i class="fas fa-square"></i>
														<div class="media-body">
															Evaluate campaign
															results and optimize
															future actions
														</div>
													</li>
												</ul>
												<a
													class="btn-solid-reg popup-with-move-anim"
													href="#details-lightbox-2"
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
									<div class="row">
										<div class="col-lg-6">
											<div class="image-container">
												<img
													class="img-fluid"
													src="images/features-3.png"
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
							</div>
						</div>
					</div>
				</div>
			</div>
			<svg
				class="footer-frame"
				data-name="Layer 2"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				viewBox="0 0 1920 79"
			>
				<defs>
					<style></style>
				</defs>
				<title>footer-frame</title>
				<path
					class="cls-2"
					d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z"
					transform="translate(0 -0.188)"
				/>
			</svg>
			<div class="footer">
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<div class="footer-col first">
								<h4>About Tivo</h4>
								<p class="p-small">
									We're passionate about designing and
									developing one of the best marketing apps in
									the market
								</p>
							</div>
						</div>
						<div class="col-md-4">
							<div class="footer-col middle">
								<h4>Important Links</h4>
								<ul class="list-unstyled li-space-lg p-small">
									<li class="media">
										<i class="fas fa-square"></i>
										<div class="media-body">
											Our business partners{" "}
											<a class="white" href="#your-link">
												startupguide.com
											</a>
										</div>
									</li>
									<li class="media">
										<i class="fas fa-square"></i>
										<div class="media-body">
											Read our{" "}
											<a
												class="white"
												href="terms-conditions.html"
											>
												Terms & Conditions
											</a>
											,{" "}
											<a
												class="white"
												href="privacy-policy.html"
											>
												Privacy Policy
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="col-md-4">
							<div class="footer-col last">
								<h4>Contact</h4>
								<ul class="list-unstyled li-space-lg p-small">
									<li class="media">
										<i class="fas fa-map-marker-alt"></i>
										<div class="media-body">
											22 Innovative, San Francisco, CA
											94043, US
										</div>
									</li>
									<li class="media">
										<i class="fas fa-envelope"></i>
										<div class="media-body">
											<a
												class="white"
												href="mailto:contact@tivo.com"
											>
												contact@tivo.com
											</a>{" "}
											<i class="fas fa-globe"></i>
											<a class="white" href="#your-link">
												www.tivo.com
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="copyright">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<p class="p-small">
								Copyright © 2020{" "}
								<a href="https://inovatik.com">
									Template by Inovatik
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
