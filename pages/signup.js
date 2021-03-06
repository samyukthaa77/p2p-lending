import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import md5 from "md5";
import Header from "../components/header";
import Link from "next/link";
import Router from "next/router";

export default function Signup() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");
	const [selectedTab, setSelectedTab] = useState("lender");

	const signUp = async () => {
		const { data } = await axios.post(
			"https://qiof3kyyq0.execute-api.us-west-2.amazonaws.com/production/p2p-api-resource",
			{
				method: "register",
				email: email,
				name: name,
				password: md5(password),
				type: selectedTab,
			}
		);

		console.log(data);
		if (data.code == "1") {
			Router.push("/login");
		} else {
			alert(data.message);
		}
	};

	return (
		<>
			<Header />

			<header className="ex-2-header header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1 style={{ fontSize: 40 }}>Sign Up</h1>
							<p>
								Already a user? Then{" "}
								<Link href="/login">
									<a className="white">Log In</a>
								</Link>
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
												id="lname"
												required
												placeholder="Lender Name"
												value={name}
												onChange={(e) =>
													setName(e.target.value)
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
												placeholder="Lender Password"
												value={password}
												onChange={(e) =>
													setPassword(e.target.value)
												}
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control-input"
												id="lconfirmpassword"
												required
												placeholder="Lender Confirm Password"
												value={confirmpassword}
												onChange={(e) =>
													setConfirmPassword(
														e.target.value
													)
												}
											/>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<button
												type="submit"
												className="form-control-submit-button"
												onClick={signUp}
											>
												SIGN UP
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
												value={email}
												onChange={(e) =>
													setEmail(e.target.value)
												}
											/>
											<label
												className="label-control"
												htmlFor="lemail"
											>
												Borrower Email
											</label>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control-input"
												id="lname"
												required
												value={name}
												onChange={(e) =>
													setName(e.target.value)
												}
											/>
											<label
												className="label-control"
												htmlFor="lname"
											>
												Borrower Name
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
												Borrower Password
											</label>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control-input"
												id="lconfirmpassword"
												required
												value={confirmpassword}
												onChange={(e) =>
													setConfirmPassword(
														e.target.value
													)
												}
											/>
											<label
												className="label-control"
												htmlFor="lconfirmpassword"
											>
												Borrower Confirm Password
											</label>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<button
												type="submit"
												className="form-control-submit-button"
												onClick={signUp}
											>
												SIGN UP
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
			</header>
		</>
	);
}
