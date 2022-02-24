import React, { useState } from "react";
import Header from "../components/header";
import Link from "next/link";
import Router from "next/router";
import md5 from "md5";
import axios from "axios";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = async () => {
		const { data } = await axios.post(
			"https://qiof3kyyq0.execute-api.us-west-2.amazonaws.com/production/p2p-api-resource",
			{
				method: "login",
				email: email,
				password: md5(password),
			}
		);

		console.log(data);
		if (data.status == "1") {
			Router.push("/");
		} else {
			alert(data.message);
		}
	};

	
	
	return (
		<>
			<Header />

			<header id="header" className="ex-2-header">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<h1>Log In</h1>
							<p>
								{"Don't have a password? Then "}
								<Link href="/signup">
									<a className="white">Sign Up</a>
								</Link>
							</p>
							
							
						</div>
					</div>
				</div>
			</header>
			<body class="form">
    
    			<div>
        			<div>
            			<div >
                			<div class="form-container">
                    			<div class="form-group">

                            			<div id="admin_login" class="form ">
											<div className="field-wrapper input">
												<label for="mail-id">MAIL-ID</label>
												<input
													type="email"
													className="form-control-input"
													placeholder="Mail"
													id="lemail"
													class="form-control"
													required
													value={email}
													onChange={(e) =>
														setEmail(e.target.value)
													}
												/>		
												<label
													className="label-control"
													htmlFor="lemail"
												>
													Email
												</label>
												<div className="help-block with-errors"></div>
											</div>
                                			<div id="password-field" class="field-wrapper input mb-2">
                                    			<div class="d-flex justify-content-between">
                                        			<label for="password">ADMIN PASSWORD</label>
                                    			</div>
                                    			<input id="password" name="password" type="password" class="form-control" placeholder="Password"></input>
                                			</div>
                                			<div class="d-sm-flex justify-content-between">
                                    			<div class="field-wrapper">
                                        			<button type="submit" class="btn btn-primary" value="">Log In</button>
                                    			</div>
                                			</div>

                            			</div>
                        			

                    			</div>                    
                			</div>
            			</div>
        			</div>
    			</div>
				
        
    			

    			

			</body>
		</>
	);
	
};

export default Login;
