import { Button } from "components";

import styles from "./Home.module.scss"

export default function Home() {
	return (
		<div className={styles.home}>
			<section>
				<h1>
					<span>Knowledge Futures Group</span> is building the foundation for collective understanding
					of our world.
				</h1>
				<div className={styles.hype}>
					<div>
						We’re empowering communities to control their publication workflow
						end-to-end with <span className={styles.project}>PubPub</span>.
					</div>
					<div>
						We’re spotlighting voices and ideas behind the push to make public knowledge
						a public good with <span className={styles.project}>Commonplace</span>.
					</div>
					<div>We’re connecting the world’s knowledge with the <span className={styles.project}>Underlay</span>.</div>
					<div>
						We’re supporting collective action towards more equitable, effective, and
						sustainable publishing models with our Campaign for <span className={styles.project}>Community Publishing</span>.
					</div>
				</div>
			</section>
			<section>
				<div>
					Knowledge Futures Group is a 501c3 nonprofit building open source technology and
					collaborating with communities of practice to design and build the
					infrastructure needed for diverse, equitable, and sustainable knowledge futures.
				</div>
				<Button href="/work" text="See all our work" />
			</section>
			<section>
				<h2>Our Impact</h2>
			</section>
			<section>
				<h2>Get Involved</h2>
				<p>
					Knowledge Futures Group builds and sustains technology for the production,
					curation, and preservation of knowledge in service of the public good. We're
					powered by partners and contributors that are dedicated to stewarding healthy
					and equitable knowledge futures.
				</p>
				<Button href="get-involved" text="Join us" />
			</section>
		</div>
	);
}
