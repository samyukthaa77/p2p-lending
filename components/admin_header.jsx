import React from "react";
import Head from "next/head";
import Link from "next/link";

const admin_header = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
				<div className="container">
					<Link href="/">
						<a className="navbar-brand logo-image">
							<img
								src="images/credere.PNG"
								alt="alternative"
								style={{
									width: 200,
									height: 100,
									objectFit: "contain",
								}}
							/>
						</a>
					</Link>

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
								<Link href="/admin_dashboard">
									<a className="nav-link page-scroll">
										HOME{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</Link>
							</li>
							<li className="nav-item">
								<a
									className="nav-link page-scroll"
									href="/b_display"
								>
									BORROWERS
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link page-scroll"
									href="/l_display"
								>
									LENDERS
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default admin_header;
