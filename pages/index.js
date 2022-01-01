import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<div className="spinner-wrapper">
				<div className="spinner">
					<div className="bounce1"></div>
					<div className="bounce2"></div>
					<div className="bounce3"></div>
				</div>
			</div>

			<nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
				<div className="container">
					<a className="navbar-brand logo-image" href="index.html">
						<img src="images/logo.svg" alt="alternative" />
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarsExampleDefault"
						aria-controls="navbarsExampleDefault"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-awesome fas fa-bars"></span>
						<span className="navbar-toggler-awesome fas fa-times"></span>
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarsExampleDefault"
					>
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a
									className="nav-link page-scroll"
									href="index.html#header"
								>
									HOME{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link page-scroll"
									href="index.html#features"
								>
									FEATURES
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link page-scroll"
									href="index.html#details"
								>
									DETAILS
								</a>
							</li>

							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle page-scroll"
									href="index.html#video"
									id="navbarDropdown"
									role="button"
									aria-haspopup="true"
									aria-expanded="false"
								>
									VIDEO
								</a>
								<div
									className="dropdown-menu"
									aria-labelledby="navbarDropdown"
								>
									<a
										className="dropdown-item"
										href="article-details.html"
									>
										<span className="item-text">
											ARTICLE DETAILS
										</span>
									</a>
									<div className="dropdown-items-divide-hr"></div>
									<a
										className="dropdown-item"
										href="terms-conditions.html"
									>
										<span className="item-text">
											TERMS CONDITIONS
										</span>
									</a>
									<div className="dropdown-items-divide-hr"></div>
									<a
										className="dropdown-item"
										href="privacy-policy.html"
									>
										<span className="item-text">
											PRIVACY POLICY
										</span>
									</a>
								</div>
							</li>

							<li className="nav-item">
								<a
									className="nav-link page-scroll"
									href="index.html#pricing"
								>
									PRICING
								</a>
							</li>
						</ul>
						<span className="nav-item">
							<a className="btn-outline-sm" href="log-in.html">
								LOG IN
							</a>
						</span>
					</div>
				</div>
			</nav>

			<header id="header" className="ex-2-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1>Sign Up</h1>
							<p>
								Fill out the form below to sign up for Tivo.
								Already signed up? Then just{" "}
								<a className="white" href="log-in.html">
									Log In
								</a>
							</p>
							<div className="form-container">
								<form
									id="signUpForm"
									data-toggle="validator"
									data-focus="false"
								>
									<div className="form-group">
										<input
											type="email"
											className="form-control-input"
											id="semail"
											required
										/>
										<label
											className="label-control"
											for="semail"
										>
											Email
										</label>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control-input"
											id="sname"
											required
										/>
										<label
											className="label-control"
											for="sname"
										>
											Name
										</label>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control-input"
											id="spassword"
											required
										/>
										<label
											className="label-control"
											for="spassword"
										>
											Password
										</label>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group checkbox">
										<input
											type="checkbox"
											id="sterms"
											value="Agreed-to-Terms"
											required
										/>
										I agree with Tivo's{" "}
										<a href="privacy-policy.html">
											Privacy Policy
										</a>{" "}
										and{" "}
										<a href="terms-conditions.html">
											Ter&apos;s Conditions
										</a>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<button
											type="submit"
											className="form-control-submit-button"
										>
											SIGN UP
										</button>
									</div>
									<div className="form-message">
										<div
											id="smsgSubmit"
											className="h3 text-center hidden"
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
}
