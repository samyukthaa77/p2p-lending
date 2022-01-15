import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/header";
import Link from "next/link";
import axios from "axios";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = async () => {
		const { data } = await axios.post(
			"https://qiof3kyyq0.execute-api.us-west-2.amazonaws.com/production/p2p-api-resource",
			{
				method: "login",
				email: email,
				password: SHA256(password),
			}
		);

		console.log(data);
	};

	return (
		<>
			<Header />

			<header id="header" className="ex-2-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1>Log In</h1>
							<p>
								{"You don't have a password? Then please "}
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
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
										<label
											className="label-control"
											htmlFor="lemail"
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
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
										/>
										<label
											className="label-control"
											htmlFor="lpassword"
										>
											Password
										</label>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<button
											type="submit"
											className="form-control-submit-button"
											onClick={login}
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
