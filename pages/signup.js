import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Header from "../components/header";
import Link from "next/link";

export default function Home() {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	const signUp = async () => {
		const { data } = await axios.post(
			"https://qiof3kyyq0.execute-api.us-west-2.amazonaws.com/production/p2p-api-resource",
			{
				method: "register",
				email: email,
				name: name,
				password: password,
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
							<h1>Sign Up</h1>
							<p>
								Fill out the form below to sign up for Tivo.
								Already signed up? Then just{" "}
								<Link href="/login">
									<a className="white">Log In</a>
								</Link>
							</p>
							<div className="form-container">
								<div className="form-group">
									<input
										type="email"
										className="form-control-input"
										id="semail"
										required
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
									<label
										className="label-control"
										htmlFor="semail"
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
										value={name}
										onChange={(e) =>
											setName(e.target.value)
										}
									/>
									<label
										className="label-control"
										htmlFor="sname"
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
										value={password}
										onChange={(e) =>
											setPassword(e.target.value)
										}
									/>
									<label
										className="label-control"
										htmlFor="spassword"
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
									I agree with Tivos{" "}
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
										onClick={signUp}
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
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
