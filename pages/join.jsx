import Head from "next/head";

import { Button } from "components";

import styles from "./join.module.scss";

export default function Join() {
	return (
		<div className={styles.join}>
			<Head>
				<title>Get Involved · Knowledge Futures</title>
			</Head>
			<h1>Get Involved</h1>
			<p>
				Knowledge Futures is a distributed community of people around the globe dedicated to
				stewarding healthy and equitable knowledge futures.
			</p>

			<section id="code">
				<div>
					<h2>Open Source</h2>
					<p>
						All of our development and roadmapping is open source and we invite your
						contribution. Visit our Github Organization pages to begin contributing.
					</p>
					<div className={styles.buttonGroup}>
						<Button href="https://github.com/pubpub" text="PubPub on Github" />
						<Button href="https://github.com/underlay" text="Underlay on Github" />
					</div>
				</div>
				<div className={styles.leftPad} />
			</section>

			{/* <section>
				<div>
					<h2>Events</h2>
					<p>
						We hold regular events focused on the co-design of our products and
						campaigns.{" "}
					</p>
					<div className={styles.buttonGroup}>
						<Button
							href="https://communitypublishing.pubpub.org/events"
							text="Community Publishing Events"
						/>
					</div>
				</div>
			</section> */}

			<section>
				<div>
					<h2>Partners and Funders</h2>
					<p>
						Join Knowledge Futures in co-designing the processes and tools that will
						enhance our capacity for collective understanding and lead to more
						equitable, effective, and sustainable futures.
					</p>
					<div className={styles.buttonGroup}>
						<Button
							href="mailto:partners@knowledgefutures.org"
							text="Contact the Partnership Team"
							opensNewTab={true}
						/>
					</div>
				</div>
			</section>

			<section id="newsletters">
				<div>
					<h2>Stay up to Date</h2>
					<p>
						Subscribe to hear from Knowledge Futures about PubPub development updates,
						news about our organization and partners, and writing and events related to
						the building of and cultures around open knowledge communication.
					</p>
					<div className={styles.buttonGroup}>
						<Button href="http://eepurl.com/gXZNhn" text="Subscribe To Our Newsletter" />
					</div>
				</div>
				<div className={styles.rightPad} />
			</section>

			<section>
				<div>
					<h2>Careers</h2>
					<p>
						We’re building a team of self-motivated, intellectually curious, and kind
						people that like to operate with a problem-solving mindset. We’re dedicated
						to each individual’s personal growth and take every team member and their
						ideas seriously.
					</p>
					<div className={styles.buttonGroup}>
						<Button href="/jobs" text="Open Positions" />
					</div>
				</div>
			</section>
		</div>
	);
}
