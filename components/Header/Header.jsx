import React from "react";
import { useRouter } from "next/router";
import styles from "./Header.module.scss";

const Header = () => {
	const router = useRouter();
	const activeMatch = (string) => {
		return router.pathname.indexOf(string) === 0 ? styles.active : "";
	};

	const links = [
		["Our Work", "/work"],
		["Membership", "/membership"],
		["About", "/about"],
	];

	return (
		<nav className={styles.header}>
			<div className={styles.banner}>
				<a href="/jobs">
					We're hiring! Help move knowledge forward with our thoughtfully remote, 4-day
					workweek, values-driven team.
				</a>
			</div>
			<div className={styles.content}>
				<a className={styles.title} href="/">
					<img src="/logo.svg" alt="Knowledge Futures logo" />
				</a>
				<div className={styles.nav}>
					{links.map((link) => {
						return (
							<a key={link[1]} href={link[1]} className={activeMatch(link[1])}>
								{link[0]}
							</a>
						);
					})}
				</div>
			</div>
		</nav>
	);
};

export default Header;
