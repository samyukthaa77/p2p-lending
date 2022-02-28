import React, { useState } from "react";
import Header from "../components/header";
import Link from "next/link";
import Router from "next/router";
import md5 from "md5";
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
				password: md5(password),
				type: "admin",
			}
		);

		console.log(data);
		if (data.status == "1") {
			Router.push("/");
		} else {
			alert(data.message);
		}
	};

	return (
		<>
			<Header />

			<header id="header" className="ex-2-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1 style={{ marginBottom: 40 }}>Admin Log In</h1>
							<div className="form-container">
								<div>
									<div className="form-group">
										<input
											type="email"
											className="form-control-input"
											id="lemail"
											required
											placeholder="Email"
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
										<div className="help-block with-errors"></div>
									</div>
									<div className="form-group">
										<input
											type="text"
											className="form-control-input"
											id="lpassword"
											required
											placeholder="Login"
											value={password}
											onChange={(e) =>
												setPassword(e.target.value)
											}
										/>
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Login;
