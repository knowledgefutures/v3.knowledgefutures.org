import Head from "next/head";
import { Header, Footer } from "components";

import "./app.scss";

function MyApp({ Component, pageProps }) {
	return (
		<div className="app">
			<Head>
				<title>Knowledge Futures Group</title>
				<link rel="shortcut icon" href="/favicon.png" />
				<link rel="stylesheet" href="https://use.typekit.net/hyi2otq.css" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header />
			<div id="main-content" tabIndex={-1}>
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	);
}

export default MyApp;
