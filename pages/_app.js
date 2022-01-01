import Head from "next/head";
import Script from "next/Script";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>

				<meta
					name="deScription"
					content="Tivo is a HTML landing page template built with Bootstrap to help you crate engaging presentations for SaaS apps and convert visitors into users."
				/>
				<meta name="author" content="Inovatik" />

				<link
					href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700&display=swap&subset=latin-ext"
					rel="stylesheet"
				/>
				<link href="css/bootstrap.css" rel="stylesheet" />
				<link href="css/fontawesome-all.css" rel="stylesheet" />
				<link href="css/swiper.css" rel="stylesheet" />
				<link href="css/magnific-popup.css" rel="stylesheet" />
				<link href="css/styles.css" rel="stylesheet" />

				<link rel="icon" href="images/favicon.png" />
			</Head>
			<Component {...pageProps} />
			<Script src="js/jquery.min.js"></Script>
			<Script src="js/popper.min.js"></Script>
			<Script src="js/bootstrap.min.js"></Script>
			<Script src="js/jquery.easing.min.js"></Script>
			<Script src="js/swiper.min.js"></Script>
			<Script src="js/jquery.magnific-popup.js"></Script>
			<Script src="js/validator.min.js"></Script>
			<Script src="js/Scripts.js"></Script>
		</>
	);
}

export default MyApp;
