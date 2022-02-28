import React, { useState } from "react";

import Header from "../components/header";

const l_dashboard = () => {

	return (
		<>
			<Header />
       <div id="features" class="tabs"style={{ marginTop: 100 }}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="above-heading">LENDER</div>
                    <h2 class="h2-heading">DASHBOARD</h2>
                    <p class="p-heading">Quick and Hassle free Funding with Low Interest Rate and No Prepayment Penalty</p>
                </div> 
            </div> 
            <center> <img  src="images/lender_dashboard.svg" alt="alternative" height="700" width="700" /> </center> 
        </div> 
    </div> 

    <div id="pricing" class="cards-2">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2 class="h2-heading">BORROWER PROFILES</h2>
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">

                  
                    <div class="card">
                        <div class="card-body">
                            <div class="card-title">Personal Loan</div>
                            <div class="price"><span class="currency">₹</span><span class="value">20,000</span></div>
                            <div class="frequency">Loan Id - 03</div>
                            <div class="divider"></div>
                            <ul class="list-unstyled li-space-lg">
                            <p>Rate of Interest : 16%</p>
                            <p>Tenure : 60 Days</p> 
                            <p>Occupation: Salaried Employee</p> 
                            </ul>
                            <div class="button-wrapper">
                                <a class="btn-solid-reg page-scroll" href="sign-up.html">INVEST</a>
                            </div>
                        </div>
                    </div> 
                    <div class="card">
                        <div class="card-body">
                            <div class="card-title">Education Loan</div>
                            <div class="price"><span class="currency">₹</span><span class="value">50,000</span></div>
                            <div class="frequency">Loan Id - 08</div>
                            <div class="divider"></div>
                            <ul class="list-unstyled li-space-lg">
                            <p>Rate of Interest : 16%</p>
                            <p>Tenure : 4 Months</p> 
                            <p>Occupation: Student</p> 
                            </ul>
                            <div class="button-wrapper">
                                <a class="btn-solid-reg page-scroll" href="sign-up.html">INVEST</a>
                            </div>
                        </div>
                    </div> 
                    <div class="card">
                       <div class="label">
                        </div> 
                        <div class="card-body">
                            <div class="card-title">Medical Emergency Loan</div>
                            <div class="price"><span class="currency">₹</span><span class="value">45,000</span></div>
                            <div class="frequency">Loan Id - 11</div>
                            <div class="divider"></div>
                            <ul class="list-unstyled li-space-lg">
                            <p>Rate of Interest : 16%</p>
                            <p>Tenure : 6 Months</p> 
                            <p>Occupation: Self Employed</p> 
                            </ul>
                            <div class="button-wrapper">
                                <a class="btn-solid-reg page-scroll" href="sign-up.html">INVEST</a>
                            </div>
                        </div>
                    </div>

                </div> 
            </div> 
        </div>
    </div>  
         
    <script src="js/jquery.min.js"></script> 
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script> 
    <script src="js/jquery.easing.min.js"></script> 
    <script src="js/swiper.min.js"></script> 
    <script src="js/jquery.magnific-popup.js"></script> 
    <script src="js/validator.min.js"></script> 
    <script src="js/scripts.js"></script> 

    </>
    );
    };
	export default l_dashboard;