import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/admin_header";
import Footer from "../components/admin_footer";


const b_display = () => {
    return (
        <>
			<Header />
                <div id="pricing" class="cards-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <br></br>
                                <br></br>
                                <br></br>
                                <div class="above-heading">DISPLAY DETAILS OF</div>
                                <h2 class="h2-heading">BORROWERS</h2>
                            </div> 
                        </div> 
                        <div class="row">
                            <div class="col-lg-12">

                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-title">Name</div>
                                        <div class="frequency">ID - </div>
                                        <div class="divider"></div>
                                        <ul class="list-unstyled li-space-lg">
                                            <p>Mobile Number : </p>
                                            <p>Email - Id : </p>
                                            <p>Occupation : </p>
                                            <p>No. of Loans Taken : </p>
                                            <p>Current Loan Date :</p>
                                            <p>Interest : </p>
                                            <p>Lender Name : </p>
                                            <p>Loan Progress : </p>
                                        </ul>
                                        <div class="button-wrapper">
                                            <a class="btn-solid-reg page-scroll" href="#details-1">VIEW </a>
                                        </div>
                                    </div>
                                </div> 
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-title">Name</div>
                                        <div class="frequency">ID - </div>
                                        <div class="divider"></div>
                                        <ul class="list-unstyled li-space-lg">
                                            <p>Mobile Number : </p>
                                            <p>Email - Id : </p>
                                            <p>Occupation : </p>
                                            <p>No. of Loans Taken : </p>
                                            <p>Current Loan Date :</p>
                                            <p>Interest : </p>
                                            <p>Lender Name : </p>
                                            <p>Loan Progress : </p>
                                        </ul>
                                        <div class="button-wrapper">
                                            <a class="btn-solid-reg page-scroll" href="#details-1">VIEW </a>
                                        </div>
                                    </div>
                                </div> 
                                
                                <div class="card">
                                    <div class="card-body">
                                        <div class="card-title">Name</div>
                                        <div class="frequency">ID -</div>
                                        <div class="divider"></div>
                                        <ul class="list-unstyled li-space-lg">
                                            <p>Mobile Number : </p>
                                            <p>Email - Id : </p>
                                            <p>Occupation : </p>
                                            <p>No. of Loans Taken : </p>
                                            <p>Current Loan Date :</p>
                                            <p>Interest : </p>
                                            <p>Lender Name : </p>
                                            <p>Loan Progress : </p>
                                        </ul>
                                        <div class="button-wrapper">
                                            <a class="btn-solid-reg page-scroll" href="#details-1">VIEW </a>
                                        </div>
                                    </div>
                                </div> 

                            </div> 
                        </div>
                    </div> 
                    <a class="btn-outline-reg" href="/admin_dashboard">BACK</a>
                </div>
                <div id="details-1" class="lightbox-basic zoom-anim-dialog mfp-hide">
                    <div class="container">
                        <div class="row">
                            <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
                            
                            <div class="col-lg-4">
                                <h3>List Building</h3>
                                <h5>Core service</h5>
                                <p>It's very easy to start using Tivo. You just need to fill out and submit the Sign Up Form and you will receive access to the app.</p>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        <i class="fas fa-square"></i><div class="media-body">List building framework</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i><div class="media-body">Easy database browsing</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i><div class="media-body">User administration</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i><div class="media-body">Automate user signup</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i><div class="media-body">Quick formatting tools</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i><div class="media-body">Fast email checking</div>
                                    </li>
                                </ul>
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

            <Footer/>


    
    	
            
        </>
    );
};

export default b_display;