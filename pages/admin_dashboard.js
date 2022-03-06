import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/admin_header";
import Footer from "../components/admin_footer";

const admin_dashboard = () => {
    return(
        <>
            <Header />
            <div id="pricing" class="cards-2"style={{ marginTop: 100 }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <h2 class="h2-heading">ADMIN DASHBOARD</h2>
                        </div> 
                    </div>
                    <div class="image-container">
                        <img 
                            class="img-fluid" 
                            src="images/admin.svg" 
                            alt="alternative"
                            height ="300"
                            width="300"
                        />
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
            
                            
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-title">LOAN APPROVAL</div>
                                    <div class="frequency">Review the Loan</div>
                                    <div class="divider"></div>
                                    
                                    <div class="button-wrapper">
                                        <a class="btn-solid-reg page-scroll" href="/loan_approval">OVERVIEW LOANS</a>
                                    </div>
                                </div>
                            </div> 
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-title">USER APPROVAL</div>
                                    <div class="frequency">Borrowers & Lenders</div>
                                    <div class="divider"></div>
                                    
                                    <div class="button-wrapper">
                                        <a class="btn-solid-reg page-scroll" href="/borrower_approval">CHECK BORROWERS</a>
                                    </div>
                                    <br></br>
                                    <div class="button-wrapper">
                                        <a class="btn-solid-reg page-scroll" href="/lender_approval">CHECK LENDERS</a>
                                    </div>
                                </div>
                            </div> 
                            <div class="card">
                                <div class="card-body">
                                    <div class="card-title">DOCUMENT VERIFICATION</div>
                                    <div class="frequency">Look in every nuke and corner!</div>
                                    <div class="divider"></div>
                                    <div class="button-wrapper">
                                        <a class="btn-solid-reg page-scroll" href="/document_verify">VERIFY DOCUMENTS</a>
                                    </div>
                                </div>
                            </div> 
            
                        </div> 
                    </div> 
                </div> 
            </div>
            <Footer /> 

        </>
    );
};

export default admin_dashboard;