import Head from "next/head";
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
					name="description"
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

				<script src="js/jquery.min.js"></script>
				<script src="js/popper.min.js"></script>
				<script src="js/bootstrap.min.js"></script>
				<script src="js/jquery.easing.min.js"></script>
				<script src="js/swiper.min.js"></script>
				<script src="js/jquery.magnific-popup.js"></script>
				<script src="js/validator.min.js"></script>
				<script src="js/scripts.js"></script>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
