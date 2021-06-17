import { Button } from "components";

import styles from "./get-involved.module.scss";

export default function GetInvolved() {
	return (
		<div className={styles.getInvolved}>
			<h1>Get Involved</h1>
			<h2>
				Knowledge Futures Group is a distributed community of people around the globe
				dedicated to stewarding healthy and equitable knowledge futures.
			</h2>
			<section>
				<h2>Careers</h2>
				<p>
					We’re building a team of self-motivated, intellectually curious, and kind people
					that like to operate with a problem-solving mindset. We’re dedicated to each
					individual’s personal growth and take every team member and their ideas
					seriously.
				</p>
				<div className={styles.buttonGroup}>
					<Button href="jobs" text="open-positions" />
				</div>
			</section>
			<section>
				<h2>Open Source Contributors</h2>
				<p>
					All of our development and roadmapping is open source and we invite your
					contribution. Visit our Github Organization pages to begin contributing.
				</p>
				<div className={styles.buttonGroup}>
					<Button href="https://github.com/pubpub" text="PubPub on Github" />
					<Button href="https://github.com/underlay" text="Underlay on Github" />
				</div>
			</section>
			<section>
				<h2>Events</h2>
				<p>
					We hold regular events focused on the co-design of our products and campaigns.{" "}
				</p>
				<div className={styles.buttonGroup}>
					<Button href="/" text="Community Publishing Events" />
				</div>
			</section>
			<section>
				<h2>Partners and Funders</h2>
				<p>
					Join Knowledge Futures Group in co-designing the processes and tools that will
					enhance our capacity for collective understanding and lead to more equitable,
					effective, and sustainable futures.
				</p>
				<div className={styles.buttonGroup}>
					<Button
						href="mailto:partners@knowledgefutures.org"
						text="Contact Partnership Team"
					/>
				</div>
			</section>
			<section>
				<h2>Stay up to Date</h2>
				<p>
					We’ll keep you in the loop as we have updates and announcements. We welcome you
					to join the mailing lists we maintain.
				</p>
				<div className={styles.buttonGroup}>
					<Button href="/" text="KFG Newsletter" />
					<Button href="/" text="PubPub Newsletter" />
					<Button href="/" text="PubPub Developer Newsletter" />
				</div>
			</section>
		</div>
	);
}
