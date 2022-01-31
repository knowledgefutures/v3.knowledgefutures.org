import React from "react";

import styles from "./Footer.module.scss";

const Footer = function () {
	return (
		<div className={styles.footer}>
			<div>
				<a href="/">
					<img
						className={styles.logo}
						src="/logoFull.svg"
						alt="Knowledge Futures Group Logo"
					/>
				</a>

				<div className={styles.details}>
					<p>
						Knowledge Futures, Inc. is a 501(c)(3) nonprofit organization registered in
						Massachusetts.
					</p>
					<div className={styles.addressBlock}>
						<div>
							<p>245 Main St, Floor 2</p>
							<p>Cambridge, MA 02142</p>
						</div>
						<div className={styles.social}>
							<a href="https://twitter.com/kfutures">
								<img src="/images/twitter.png" />
							</a>
							<a href="/join#code">
								<img src="/images/github.png" />
							</a>
							{/* <a href="/">
								<img src="/images/twitter.png" />
							</a> */}
						</div>
					</div>
				</div>
			</div>
			<div className={styles.links}>
				<ul>
					<li>
						<a href="/work">Our Work</a>
					</li>
					<li>
						<a href="/membership">Become a Member</a>
					</li>
					<li>
						<a href="/join#code">Open Source</a>
					</li>
					<li>
						<a href="/jobs">Jobs</a>
					</li>
				</ul>
				<ul>
					<li>
						<a href="/about">Our Story</a>
					</li>
					<li>
						<a href="/about#team">Team</a>
					</li>
					<li>
						<a href="/join#newsletters">Newsletters</a>
					</li>
					<li>
						<a href="mailto:hello@knowledgefutures.org" target="_blank" rel="noopener noreferrer">Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
