import React from "react";
import Head from "next/head";

const Footer = () => {
	return (
		<>
			
			<div id = "footer" className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="footer-col first">
								<h4>About Crēdere</h4>
								<p className="p-small">
									{
										"An emerging peer to peer lending platform supporting both the borrowers with diverse loan options and the lenders with added on benefits to support verified borrowers"
									}
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="footer-col middle">
								<h4>Others</h4>
								<ul className="list-unstyled li-space-lg p-small">
									<li className="media">
										<i className="fas fa-square"></i>
										<div className="media-body">
											<a
												className="white"
												href="#your-link"
											>
												Fair Practices Code
											</a>
										</div>
									</li>
									<li className="media">
										<i className="fas fa-square"></i>
										<div className="media-body">
											<a
												className="white"
												href="https://en.wikipedia.org/wiki/Terms_of_service"
											>
												Terms & Conditions
											</a>
										</div>
									</li>
									<li className="media">
										<i className="fas fa-square"></i>
										<div className="media-body">
											<a
												className="white"
												href="https://en.wikipedia.org/wiki/Privacy_policy#:~:text=A%20privacy%20policy%20is%20a,a%20customer%20or%20client's%20data.&text=Their%20privacy%20laws%20apply%20not,private%20enterprises%20and%20commercial%20transactions."
											>
												Privacy Policy
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							<div className="footer-col last">
								<h4>Contact</h4>
								<ul className="list-unstyled li-space-lg p-small">
									<li className="media">
										<i className="fas fa-map-marker-alt"></i>
										<div className="media-body">
											Kumaraguru College Of Technology , Coimbatore
										</div>
									</li>
									<li className="media">
										<i className="fas fa-envelope"></i>
										<div className="media-body">
											<a
												className="white"
												href="mailto:mukdhasivani.20cs@kct.ac.in"
											>
												Mail Us
											</a>{" "}
											<i className="fas fa-globe"></i>
											<a
												className="white"
												href="#http://localhost:3000/"
											>
												Visit Our Website
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="copyright">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<p className="p-small">
							© Copyright 2022 - All Rights Reserved{" "}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
