import React from "react";
import Head from "next/head";

const Footer = () => {
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
			<div className="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="footer-col first">
								<h4>About Tivo</h4>
								<p className="p-small">
									We're passionate about designing and
									developing one of the best marketing apps in
									the market
								</p>
							</div>
						</div>
						<div className="col-md-4">
							<div className="footer-col middle">
								<h4>Important Links</h4>
								<ul className="list-unstyled li-space-lg p-small">
									<li className="media">
										<i className="fas fa-square"></i>
										<div className="media-body">
											Our business partners{" "}
											<a
												className="white"
												href="#your-link"
											>
												startupguide.com
											</a>
										</div>
									</li>
									<li className="media">
										<i className="fas fa-square"></i>
										<div className="media-body">
											Read our{" "}
											<a
												className="white"
												href="terms-conditions.html"
											>
												Terms & Conditions
											</a>
											,{" "}
											<a
												className="white"
												href="privacy-policy.html"
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
											22 Innovative, San Francisco, CA
											94043, US
										</div>
									</li>
									<li className="media">
										<i className="fas fa-envelope"></i>
										<div className="media-body">
											<a
												className="white"
												href="mailto:contact@tivo.com"
											>
												contact@tivo.com
											</a>{" "}
											<i className="fas fa-globe"></i>
											<a
												className="white"
												href="#your-link"
											>
												www.tivo.com
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
								Copyright © 2020{" "}
								<a href="https://inovatik.com">
									Template by Inovatik
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
