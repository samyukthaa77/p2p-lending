import React from "react";
import Head from "next/head";

const admin_footer = () => {
	return (
		<>
			<svg
				className="footer-frame"
				data-name="Layer 2"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="none"
				viewBox="0 0 1920 79"
			>
				<defs>
					<style jsx>{`
						.cls-1 {
							fill: #5f4def;
						}
					`}</style>
				</defs>
				<title>footer-frame</title>
				<path
					className="cls-2"
					d="M0,72.427C143,12.138,255.5,4.577,328.644,7.943c147.721,6.8,183.881,60.242,320.83,53.737,143-6.793,167.826-68.128,293-60.9,109.095,6.3,115.68,54.364,225.251,57.319,113.58,3.064,138.8-47.711,251.189-41.8,104.012,5.474,109.713,50.4,197.369,46.572,89.549-3.91,124.375-52.563,227.622-50.155A338.646,338.646,0,0,1,1920,23.467V79.75H0V72.427Z"
					transform="translate(0 -0.188)"
				/>
			</svg>
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
