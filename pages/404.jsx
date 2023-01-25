import Head from "next/head";

import styles from "./404.module.scss";

export default function NotFound() {
	return (
		<div className={styles.notFound}>
			<Head>
				<title>404 Not Found · Knowledge Futures</title>
			</Head>
			<h1>Page Not Found</h1>
			<img src="/images/404.svg" />
		</div>
	);
}
