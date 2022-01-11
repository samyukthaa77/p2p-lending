import React from "react";
import Head from "next/head";

const Header = () => {
	return (
		<>
			<div class="spinner-wrapper">
				<div class="spinner">
					<div class="bounce1"></div>
					<div class="bounce2"></div>
					<div class="bounce3"></div>
				</div>
			</div>

			<nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
				<div class="container">
					<a class="navbar-brand logo-image" href="index.html">
						<img src="images/logo.svg" alt="alternative" />
					</a>

					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarsExampleDefault"
						aria-controls="navbarsExampleDefault"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-awesome fas fa-bars"></span>
						<span class="navbar-toggler-awesome fas fa-times"></span>
					</button>

					<div
						class="collapse navbar-collapse"
						id="navbarsExampleDefault"
					>
						<ul class="navbar-nav ml-auto">
							<li class="nav-item">
								<a class="nav-link page-scroll" href="#header">
									HOME <span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link page-scroll"
									href="#features"
								>
									FEATURES
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link page-scroll" href="#details">
									DETAILS
								</a>
							</li>

							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle page-scroll"
									href="#video"
									id="navbarDropdown"
									role="button"
									aria-haspopup="true"
									aria-expanded="false"
								>
									VIDEO
								</a>
								<div
									class="dropdown-menu"
									aria-labelledby="navbarDropdown"
								>
									<a
										class="dropdown-item"
										href="article-details.html"
									>
										<span class="item-text">
											ARTICLE DETAILS
										</span>
									</a>
									<div class="dropdown-items-divide-hr"></div>
									<a
										class="dropdown-item"
										href="terms-conditions.html"
									>
										<span class="item-text">
											TERMS CONDITIONS
										</span>
									</a>
									<div class="dropdown-items-divide-hr"></div>
									<a
										class="dropdown-item"
										href="privacy-policy.html"
									>
										<span class="item-text">
											PRIVACY POLICY
										</span>
									</a>
								</div>
							</li>

							<li class="nav-item">
								<a class="nav-link page-scroll" href="#pricing">
									PRICING
								</a>
							</li>
						</ul>
						<span class="nav-item">
							<a class="btn-outline-sm" href="log-in.html">
								LOG IN
							</a>
						</span>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
