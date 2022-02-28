import React, { useState } from "react";
import Header from "../components/header";
import Link from "next/link";
import Router from "next/router";
import md5 from "md5";
import axios from "axios";

const LoginCompleted = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [selectedTab, setSelectedTab] = useState("lender");

	const login = async () => {
		const { data } = await axios.post(
			"https://qiof3kyyq0.execute-api.us-west-2.amazonaws.com/production/p2p-api-resource",
			{
				method: "login",
				email: email,
				password: md5(password),
				type: selectedTab,
			}
		);

		console.log(data);
		if (data.status == "1") {
			if (data.type == "lender") {
				Router.push("/kyc_lender");
			} else if (data.type == "borrower") {
				Router.push("/kyc_borrower");
			}
		} else {
			alert(data.message);
		}
	};

	return (
		<div>
			<Header />
			<div className="ex-2-header header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1 style={{ fontSize: 40 }}>Log In</h1>
							<p>
								You don&apos;t have a password? Then please{" "}
								<a className="white" href="/signup ">
									Sign Up
								</a>
							</p>
							<div
								style={{
									marginBottom: 20,
									margin: "20px auto",
								}}
							>
								<button
									className="btn-solid-lg page-scroll"
									onClick={() => setSelectedTab("lender")}
								>
									LENDER
								</button>
								<button
									className="btn-solid-lg page-scroll"
									onClick={() => setSelectedTab("borrower")}
									style={{ marginLeft: 20 }}
								>
									BORROWER
								</button>
							</div>
							{selectedTab === "lender" ? (
								// Lender Tab
								<div className="form-container">
									<div
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
												placeholder="Lender Email"
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
												placeholder="Lender password"
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
							) : (
								// Borrower Tab
								<div className="form-container">
									<div
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
												placeholder="Borrower Email"
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
												placeholder="Borrower Password"
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
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoginCompleted;
