import { Button } from "components";
import NewsList from "components/NewsList/NewsList";

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
		description: "We're connecting the world's knowledge with the ",
		link: "https://www.underlay.org",
	},
	// {
	// 	key: "cp",
	// 	title: "Community Publishing",
	// 	description:
	// 		"We’re supporting collective action towards better publishing with our campaign for ",
	// 	link: "https://communitypublishing.pubpub.org",
	// },
];
const members = [
	{ href: "https://mitpress.mit.edu/", image: "/members/mitp.png" },
	{ href: "https://www.chop.edu/", image: "/members/chop.png" },
	{ href: "https://aas.org/", image: "/members/aas.png" },
	{ href: "https://www.gatesfoundation.org/", image: "/members/gates.png" },
	{ href: "https://www.lib.ncsu.edu/", image: "/members/ncs.svg" },
	{ href: "https://www.arcadiascience.com/", image: "/members/arcadia.svg" },
	
	
	{ href: "https://punctumbooks.com/", image: "/members/punctum.png" },
	{ href: "https://citap.unc.edu/", image: "/members/citap.png" },
	{ href: "https://c4disc.org/", image: "/members/c4disc.png" },
	{ href: "https://libraries.mit.edu/", image: "/members/mitl.png" },
	{ href: "https://www.tilburguniversity.edu/", image: "/members/tilburg.svg" },
	{ href: "https://copim.ac.uk/", image: "/members/copim.png" },
];
export default function Home() {
	return (
		<div className={styles.home}>
			<section className={styles.atf}>
				<h1>Infrastructure for public knowledge</h1>
				<p className={styles.subTitle}>
					<span>Knowledge Futures</span> builds public digital infrastructure that enables
					documents, data, and conversations to be used more effectively.
				</p>
				<Button className={styles.ctaButton} href="/membership" text={"Work with us"} />
				<p className={styles.testimonialText}>
					Our work is done alongside our 50+ members, including:
				</p>
				<div className={styles.logos}>
					{members.map((member)=>{
						return <a  key={member.image} href={member.href}><img src={member.image} /></a>
					})}
				</div>
			</section>
			<section className={styles.work}>
				<h2>Our Work</h2>
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
				<h2>
					Knowledge Futures is a 501c3 nonprofit building open source technology and
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
						<NewsList />
						<Button
							href="https://notes.knowledgefutures.org/kf-news"
							text="Read more"
							light={false}
						/>
					</div>
				</div>
			</section>
			<section>
				<h2>Get Involved</h2>
				<div className={styles.involved}>
					<div className={styles.text}>
						<p>
							Knowledge Futures builds and sustains technology for the
							production, curation, and preservation of knowledge in service of the
							public good. We're powered by members that are dedicated to stewarding
							healthy and equitable knowledge futures.
						</p>
						<Button href="/membership" text="Become a Member" />
					</div>
					<div className={styles.image} />
				</div>
			</section>
		</div>
	);
}
