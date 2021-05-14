import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
	return (
		<nav className={styles.header}>
			<div className={styles.content}>
				<a className={styles.title} href="/">
					<img src="/logo.svg" alt="Knowledge Futures logo" />
				</a>
				<div className={styles.nav}>
					<a href="/work">Our Work</a>
					<a href="/get-involved">Get Involved</a>
					<a href="/about">About</a>
				</div>
			</div>
		</nav>
	);
};

export default Header;
