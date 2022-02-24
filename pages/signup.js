import { useState } from "react";
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
							<h1>Sign Up</h1>
							<p>
								Already a user? Then{" "}
								<Link href="/main_login">
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
												htmlFor="lemail"
											>
												Lender Email
											</label>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control-input"
												id="lname"
												required
											/>
											<label
												className="label-control"
												htmlFor="lname"
											>
												Lender Name
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
												htmlFor="lpassword"
											>
												Lender Password
											</label>
											<div className="help-block with-errors"></div>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control-input"
												id="lconfirmpassword"
												required
											/>
											<label
												className="label-control"
												htmlFor="lconfirmpassword"
											>
												Lender Confirm Password
											</label>
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
												id="lmsgSubmit"
												className="h3 text-center hidden"
											></div>
										</div>
									</form>
								</div>
							) : (
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
									</form>
								</div>
							)}
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
