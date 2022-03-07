import React from "react";
import Head from "next/head";

const admin_footer = () => {
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
								<h4>ADMINS</h4>
								<ul className="list-unstyled li-space-lg p-small">
									<li className="media">
										<i className="fas fa-square"></i>
										<div className="media-body">
											<a
												className="white"
												href="https://www.linkedin.com/in/samyuktha-rajesh-061471201/"
											>
												Samyuktha Rajesh
											</a>
										</div>
									</li>
									<li className="media">
										<i className="fas fa-square"></i>
										<div className="media-body">
											<a
												className="white"
												href="https://www.linkedin.com/in/mukdha-sivani-r-0407a4210/"
											>
												Mukdha Sivani R
											</a>
										</div>
									</li>
									<li className="media">
										<i className="fas fa-square"></i>
										<div className="media-body">
											<a
												className="white"
												href="https://www.linkedin.com/in/dharunika-namagiri-852a55200/."
											>
												Dharunika Namagiri B V
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

export default admin_footer;
