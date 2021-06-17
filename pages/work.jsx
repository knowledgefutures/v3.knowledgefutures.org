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
			"Connecting the world’s knowledge with a protocol for describing and sharing strongly types data.",
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
		link: "",
	},
	{
		title: "Campaign for Comunity Publishing",
		description:
			"Events, workshops, and convening to support collective action towards more equitable, effective, and sustainable publishing models.",
		link: "",
	},
];
export default function Work() {
	return (
		<div className={styles.work}>
			<h1>Our Work</h1>
			<p>
				Knowledge Futures Group is structured around the belief that technology is not
				sufficient for the complex, post-normal challenges of our time. Our approach to
				these problems is a bottom-up community-led development process that encompasses
				convening and publication. Each activity strengthens the other, providing a more
				holistic, equitable, considered approach to sustainable technology development.
			</p>
			<p>
				We are living in a time when knowledge and our ability to understand the world
				around us is increasingly being locked down, siloed, and restricted. We understand
				our role to help unlock knowledge, to connect it, to make it more accessible.
				Fundamentally, we believe that you can’t do that effectively, and don’t have the
				power to drive change, if you are unable to control the infrastructure you rely on.
				As such, our work focuses on empowering communities to take control of the
				end-to-end knowledge production processes their work exists within. Doing so is a
				technical, social, and cultural action - and our work reflects that.
			</p>
			<div className={styles.projects}>
				{projects.map((project) => {
					return (
						<a href={project.link} className={styles.project} key={project.title}>
							<div className={styles.title}>{project.title}</div>
							<div className={styles.description}>{project.description}</div>
						</a>
					);
				})}
			</div>
		</div>
	);
}
