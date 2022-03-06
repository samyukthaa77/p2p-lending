import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "../components/admin_header";
import Footer from "../components/admin_footer";


const document_verify = () => {
    return (
        <>
			<Header />
    
	        <div class="spinner-wrapper">
                <div class="spinner">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </div>
            <header id="header" class="ex-header">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>DOCUMENT VERIFICATION</h1>
                        </div> 
                    </div> 
                </div> 
            </header>
            <div class="ex-basic-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumbs">
                                <a href="/admin_dashboard">Home</a><i class="fa fa-angle-double-right"></i><span>Borrower Approval</span>
                            </div>
                        </div> 
                    </div>
                </div> 
            </div>

            <div class="ex-basic-2">
                <div class="container">
                    <div class="row">
                             
                        <div class="text-container">
                            <h3> FOR BORROWERS </h3>
                            <main>
                                <table border ='1.5'>
                                  <tr>
                                    <th>S.No</th>
                                    <th>Borrower Name</th>
                                    <th>PAN</th>
                                    <th>Address Proof</th>
                                    <th>Employment Proof</th>
                                    <th>Bank Passbook</th>
                                    <th>Approval</th>
                                  </tr>
                                  <tr>
                                    <td>1</td>
                                    <td>Maria Anders</td>
                                    <td>Germany</td>
                                    <td>Alfreds Futterkiste</td>
                                    <td>Maria Anders</td>
                                    <td>Maria Anders</td>
                                    <td><a class="btn-outline-approve" href="/">Approve</a><br></br> <a class="btn-outline-decline" href="/">Decline</a></td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>Francisco Chang</td>
                                    <td>Mexico</td>
                                    <td>Alfreds Futterkiste</td>
                                    <td>Maria Anders</td>
                                    <td>Germany</td>
                                    <td><a class="btn-outline-approve" href="/">Approve</a><br></br> <a class="btn-outline-decline" href="/">Decline</a></td>
                                  </tr>
                                </table>
                            </main>
                        </div>
                        <div class="text-container">
                        <h3> FOR LENDERS </h3>
                            <main>
                                <table border ='1.5'>
                                  <tr>
                                    <th>S.No</th>
                                    <th>Lender Name</th>
                                    <th>PAN</th>
                                    <th>Aadhar Card</th>
                                    <th>Bank Passbook</th>
                                    <th>Approval</th>
                                  </tr>
                                  <tr>
                                    <td>1</td>
                                    <td>Maria Anders</td>
                                    <td>Germany</td>
                                    <td>Maria Anders</td>
                                    <td>Maria Anders</td>
                                    <td><a class="btn-outline-approve" href="/">Approve</a><br></br> <a class="btn-outline-decline" href="/">Decline</a></td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>Francisco Chang</td>
                                    <td>Mexico</td>
                                    <td>Maria Anders</td>
                                    <td>Germany</td>
                                    <td><a class="btn-outline-approve" href="/">Approve</a><br></br> <a class="btn-outline-decline" href="/">Decline</a></td>
                                  </tr>
                                </table>
                            </main>
                        </div>
                        
                    </div> 
                    <a class="btn-outline-reg" href="/admin_dashboard">BACK</a>
                </div> 
            </div> 
        


            
            <Footer/>


    
    	
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

export default document_verify;