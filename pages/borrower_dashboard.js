import React, { useState } from "react";

import Header from "../components/header";

const b_dashboard = () => {

	return (
		<>
			<Header />
       <div id="features" class="tabs"style={{ marginTop: 100 }}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="above-heading">BORROWER</div>
                    <h2 class="h2-heading">DASHBOARD</h2>
                    <p class="p-heading">Quick and Hassle free Funding with Low Interest Rate and No Prepayment Penalty</p>
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">

                  
                    <ul class="nav nav-tabs" id="argoTabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i class="fas fa-list"></i>Apply Loan</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i class="fas fa-chart-bar"></i>Loan Details</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i class="fas fa-envelope-open-text"></i>Guarantor Details</a>
                        </li>
                    </ul>
                
                    <div class="tab-content" id="argoTabsContent">

                    
                        <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="image-container">
                                        <img class="img-fluid" src="images/apply loan.svg" alt="alternative"/>
                                    </div>
                                </div> 
                                <div class="col-lg-6">
                                    <div class="text-container">
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="nloantype"
											required
										/>
										<label
											class="label-control"
											for="nloantype"
										>
											Loan Type
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="nloanamt"
											required
										/>
										<label
											class="label-control"
											for="nloanamt"
										>
											Loan Amount
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="nphno"
											required
										/>
										<label
											class="label-control"
											for="nphno"
										>
											Phone Number
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="njobtitle"
											required
										/>
										<label
											class="label-control"
											for="njobtitle"
										>
											Job Title
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="nincome"
											required
										/>
										<label
											class="label-control"
											for="nincome"
										>
											Income ( Monthly Net Income)
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="nincomesource"
											required
										/>
										<label
											class="label-control"
											for="nincomesource"
										>
											Income Source
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="nempname"
											required
										/>
										<label
											class="label-control"
											for="nempname"
										>
											Employer Name
										</label>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="nempno"
											required
										/>
										<label
											class="label-control"
											for="nempno"
										>
											Employer Phone Number
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                        <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox-1">APPLY</a>
                                    </div> 
                                </div>
                            </div> 
                        </div> 
                        <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
                        <div class="row">
                                <div class="col-lg-6">
                                    <div class="image-container">
                                        <img class="img-fluid" src="images/progress.svg" alt="alternative" />
                                    </div> 
                                </div>
                                <div class="col-lg-6">
                                    <div class="text-container">
									<p>No loans applied yet</p>
                                        <a class="btn-solid-reg page-scroll" href="#tab-1">Apply Loan</a>
                                    </div> 
                                </div>
                            </div> 
                        </div>
                        <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
                        <div class="row">
                                <div class="col-lg-6">
                                    <div class="image-container">
                                        <img class="img-fluid" src="images/guarantor.svg" alt="alternative"  style={{height:400 ,width:600,objectFit:"contain"}}/>
                                    </div>
                                </div> 
                                <div class="col-lg-6">
                                    <div class="text-container">
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="nname"
											required
										/>
										<label
											class="label-control"
											for="nname"
										>
											Name
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="nemail"
											required
										/>
										<label
											class="label-control"
											for="nemail"
										>
											Email
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="nphno"
											required
										/>
										<label
											class="label-control"
											for="nphno"
										>
											Phone Number
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                    <div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtPANCard"
											required
										/>
										<label
											class="label-control"
											for="nPAN"
										>
											Permanent Account Number
										</label>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtAadhaarnumber"
											required
										/>
										<label
											class="label-control"
											for="nAadhaarnumber"
										>
											Aadhaar Number
										</label>
										<div class="help-block with-errors"></div>
									</div>
									<div class="form-group">
										<input
											type="text"
											class="form-control-input"
											id="txtBankAcc"
											required
										/>
										<label
											class="label-control"
											for="nBankacc"
										>
											Bank Account Number
										</label>
										<div class="help-block with-errors"></div>
									</div>
                                        <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox-2">UPDATE PROFILE</a>
                                    </div> 
                                </div> 
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
	export default b_dashboard;