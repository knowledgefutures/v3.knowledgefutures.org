import Head from "next/head";

import styles from "./work.module.scss";

const projects = [
	{
		title: "PubPub",
		description:
			"A platform that empowers communities to control their end-to-end publication workflow.",
		link: "https://www.pubpub.org",
	},
	{
		title: "Underlay",
		description:
			"Connecting the world’s knowledge with a protocol for describing and sharing strongly typed data.",
		link: "https://www.underlay.org",
	},
	{
		title: "Commonplace",
		description:
			"A publication spotlighting voices and ideas leading the conversation behind making public knowledge a public good.",
		link: "https://commonplace.knowledgefutures.org",
	},
	{
		title: "Docmaps",
		description:
			"A community-endorsed protocol for representing publication processes in a machine-readable, discoverable, and extensible format.",
		link: "https://docmaps.knowledgefutures.org",
	},
	// {
	// 	title: "Campaign for Community Publishing",
	// 	description:
	// 		"Events, workshops, and convening to support collective action towards more equitable, effective, and sustainable publishing models.",
	// 	link: "https://communitypublishing.pubpub.org",
	// },
];
export default function Work() {
	return (
		<div className={styles.work}>
			<Head>
				<title>Our Work · Knowledge Futures</title>
			</Head>
			<h1>Our Work</h1>
			<p>
				Knowledge Futures is organized around the belief that technology is not
				sufficient for the complex,{" "}
				<a href="https://commonplace.knowledgefutures.org/pub/6qqfgms5">post-normal</a>{" "}
				challenges of our time. Our strategy for activating lasting change without
				compromising public trust and innovation is fueled by bottom-up community-led
				development process that encompasses convening and publication. Each pursuit is
				conveived to provide a more equitable approach to sustainable technology
				development.
			</p>
			<p>
				We live in a time when our ability to understand the world around us is being
				monopolized. The stakes of unlocking knowledge, enhancing connections, and improving
				accessibility cannot be overstated. Fundamentally, we believe communities can't do
				that effectively — and don't have the power to drive change — if they're unable to
				collaboratively build the essential infrastructure relied on. As such, our work
				focuses on empowering communities to take control of the end-to-end knowledge
				production processes their work exists within, and help sustain public knowledge
				infrastructure for a foreseeable future.
			</p>

			<section className={styles.projects}>
				{projects.map((project) => {
					return (
						<a href={project.link} className={styles.project} key={project.title}>
							<div className={styles.title}>{project.title}</div>
							<div className={styles.description}>{project.description}</div>
						</a>
					);
				})}
			</section>
		</div>
	);
}
