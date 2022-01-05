import React from "react";
import Head from "next/head";
import Navbar from "./navbar";

const Login = () => {
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
								<a
									class="nav-link page-scroll"
									href="index.html#header"
								>
									HOME <span class="sr-only">(current)</span>
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link page-scroll"
									href="index.html#features"
								>
									FEATURES
								</a>
							</li>
							<li class="nav-item">
								<a
									class="nav-link page-scroll"
									href="index.html#details"
								>
									DETAILS
								</a>
							</li>

							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle page-scroll"
									href="index.html#video"
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
								<a
									class="nav-link page-scroll"
									href="index.html#pricing"
								>
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

			<header id="header" class="ex-2-header">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<h1>Log In</h1>
							<p>
								You don't have a password? Then please{" "}
								<a class="white" href="../">
									Sign Up
								</a>
							</p>
							<div class="form-container">
								<form
									id="logInForm"
									data-toggle="validator"
									data-focus="false"
								>
									<div class="form-group">
										<input
											type="email"
											class="form-control-input"
											id="lemail"
											required
										/>
										<label
											class="label-control"
											for="lemail"
										>
											Email
										</label>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="lpassword"
											required
										/>
										<label
											class="label-control"
											for="lpassword"
										>
											Password
										</label>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<button
											type="submit"
											class="form-control-submit-button"
										>
											LOG IN
										</button>
									</div>
									<div class="form-message">
										<div
											id="lmsgSubmit"
											class="h3 text-center hidden"
										></div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Login;
