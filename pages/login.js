import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Link from "next/link";

const Login = () => {
	return (
		<>
			<Header />

			<header id="header" className="ex-2-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1>Log In</h1>
							<p>
								You don't have a password? Then please{" "}
								<Link href="/signup">
									<a className="white">Sign Up</a>
								</Link>
							</p>
							<div className="form-container">
								<form
									id="logInForm"
									data-toggle="validator"
									data-focus="false"
								>
									<div className="form-group">
										<input
											type="email"
											className="form-control-input"
											id="lemail"
											required
										/>
										<label
											className="label-control"
											for="lemail"
										>
											Email
										</label>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control-input"
											id="lpassword"
											required
										/>
										<label
											className="label-control"
											for="lpassword"
										>
											Password
										</label>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<button
											type="submit"
											className="form-control-submit-button"
										>
											LOG IN
										</button>
									</div>
									<div className="form-message">
										<div
											id="lmsgSubmit"
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
};

export default Login;
