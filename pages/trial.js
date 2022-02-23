import React from "react";
import Head from "next/head";
import Header from "../components/header";

const trial = () => {
	return (
		<>
			<Header />
            <div class="form" style={{ marginTop: 100 }}>
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="text-container">
                              <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle page-scroll" href="#video" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">VIDEO</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="article-details.html"><span class="item-text">ARTICLE DETAILS</span></a>
                            <div class="dropdown-items-divide-hr"></div>
                            <a class="dropdown-item" href="terms-conditions.html"><span class="item-text">TERMS CONDITIONS</span></a>
                            <div class="dropdown-items-divide-hr"></div>
                            <a class="dropdown-item" href="privacy-policy.html"><span class="item-text">PRIVACY POLICY</span></a>
                        </div>
                    </li>
                    </div>
						</div>
					</div>
				</div>
			</div>
                    </>
	);
};

export default trial;