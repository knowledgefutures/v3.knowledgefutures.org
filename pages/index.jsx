import { Button } from "components";

import styles from "./Home.module.scss";

const projects = [
	{
		key: "pubpub",
		title: "PubPub",
		description:
			"We’re empowering communities to control their publication workflow end-to-end with ",
		link: "https://www.pubpub.org",
	},
	{
		key: "commonplace",
		title: "Commonplace",
		description:
			"We’re spotlighting voices and ideas behind the push to make public knowledge a public good with ",
		link: "https://commonplace.knowledgefutures.org",
	},
	{
		key: "underlay",
		title: "Underlay",
		description: "We’re connecting the world’s knowledge with the ",
		link: "https://www.underlay.org",
	},
	{
		key: "cp",
		title: "Community Publishing",
		description:
			"We’re supporting collective action towards better publishing with our campaign for ",
		link: "https://communitypublishing.pubpub.org",
	},
];
export default function Home() {
	return (
		<div className={styles.home}>
			<section>
				<h1>
					<span>Knowledge Futures Group</span> builds infrastructure for a more effective,
					equitable, and sustainable knowledge economy.
				</h1>
				<div className={styles.hype}>
					{projects.map((project) => {
						return (
							<a key={project.key} className={styles.hypeItem} href={project.link}>
								<div className={styles.block}>
									<img
										className={styles.logoAux}
										src={`/images/projects/${project.key}-aux.svg`}
									/>
									<img
										className={styles.logo}
										src={`/images/projects/${project.key}.svg`}
									/>
									<img
										className={styles.logoHover}
										src={`/images/projects/${project.key}-hover.svg`}
									/>
								</div>
								<span>
									{project.description}
									<span className={styles.project}>{project.title}</span>.
								</span>
							</a>
						);
					})}
				</div>
			</section>
			<section>
				<h2>
					Knowledge Futures Group is a 501c3 nonprofit building open source technology and
					collaborating with communities of practice to design and build the public
					digital infrastructure needed for effective, equitable, and sustainable
					knowledge futures.
				</h2>
				<Button href="/about" text="Our Story" />
			</section>
			<section className={styles.impact}>
				<h2>Our Impact</h2>
				<div className={styles.impactContent}>
					<div className={styles.numbers}>
						<div className={styles.number}>
							<span>25,000+</span> users contributing to
						</div>
						<div className={styles.number}>
							<span>30,000+</span> pubs across
						</div>
						<div className={styles.number}>
							<span>3,000+</span> publishing communities
						</div>
					</div>
					<div className={styles.news}>
						<div>Recent Highlights</div>
						<ul>
							<li>
								<a
									className="hoverline"
									href="https://notes.knowledgefutures.org/pub/3sujny74"
								>
									C4DISC and PubPub Release Antiracism Toolkit for Organizations
								</a>
							</li>
							<li>
								<a
									className="hoverline"
									href="https://commonplace.knowledgefutures.org/business-of-knowing"
								>
									The Business of Knowing: Bringing about [infra]structural change
									to knowledge communication.
								</a>
							</li>
							<li>
								<a
									className="hoverline"
									href="https://docmaps.knowledgefutures.org/pub/bwem5bja"
								>
									Open science organizations collaborate on Docmaps — the
									foundation for a distributed peer review ecosystem
								</a>
							</li>
							<li>
								<a
									className="hoverline"
									href="https://notes.knowledgefutures.org/pub/u9lfii22"
								>
									Three PubPub Communities Ackowledged by 2021 Prose Awards
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<section>
				<h2>Get Involved</h2>
				<div className={styles.involved}>
					<div className={styles.text}>
						<p>
							Knowledge Futures Group builds and sustains technology for the
							production, curation, and preservation of knowledge in service of the
							public good. We're powered by partners and contributors that are
							dedicated to stewarding healthy and equitable knowledge futures.
						</p>
						<Button href="join" text="Join us" />
					</div>
					<div className={styles.image} />
				</div>
			</section>
		</div>
	);
}
