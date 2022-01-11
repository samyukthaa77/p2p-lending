import React from "react";
import Head from "next/head";
import Header from "../components/header";

const Login = () => {
	return (
		<>
			<Header />

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
