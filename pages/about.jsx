import { Button, Team } from "components";

import styles from "./about.module.scss";

export default function About() {
	return (
		<div className={styles.about}>
			<section>
				<h2>Our story</h2>

				<p className={styles.fullPanelP}>
					The Knowledge Futures Group is an independent nonprofit organization powered by
					academic, industry, and advocacy groups. Together we build and support products
					and protocols to make knowledge open and accessible to all.
				</p>
				<div className={styles.panels}>
					<div>
						<p>
							Founded as a partnership between the MIT Press and the MIT Media Lab,
							Knowledge Futures Group was created to provide sustainable tools and
							technologies relied on by libraries, presses, museums, activist
							organizations, researchers, and others whose knowledge work seeks to
							serve collective understanding and the public. What began as work on
							publishing tools by a set of grad students grew to realize the systemic
							challenges faced by public-oriented groups when the only available
							infrastructure was designed with misaligned incentives and unjust power
							dynamics.
						</p>
						<p>
							Today, we are committed to building a full-stack of technology protocols
							and products that demonstrate an effective, equitable, and sustainable
							knowledge economy is possible. We work with partners to design for
							interoperability and to catalyze a distributed ecosystem of development.
						</p>
					</div>
					<div className={styles.side}>
						<h4>Annual Reports</h4>
						<div>2019-2020: PDF · Web</div>
					</div>
				</div>
				{/* Supporting orgs */}
				<div>List our supporting partners and their logos here.</div>
			</section>

			<section>
				<h2>How we work</h2>
				<div className={styles.panels}>
					<div>
						<p>
							Knowledge Futures Group is guided by a set of values that drive and
							focus the work we do. From hiring, to product development, to day-to-day
							interpersonal relationships, these values serve as the ground truth for
							how we work.
						</p>
						<p>
							<b>Accessibility</b>: We believe that just because knowledge is
							available doesn’t mean it’s truly accessible. We put ourselves in
							others’ positions to understand the barriers that prevent knowledge from
							being truly accessible to diverse groups around the world.
						</p>

						<p>
							<b>Conscientiousness</b>: We value honesty and good-faith efforts to
							fulfill our duties and obligations as highly as success in its own
							right.
						</p>

						<p>
							<b>Curiosity</b>: We approach challenges with an honest, experimental,
							problem-solving mindset. We bring an intellectual curiosity that
							explores problem spaces with openness and intrigue in ways that lead to
							important new ideas.
						</p>

						<p>
							<b>Egalitarianism</b>: We acknowledges that all people deserve equality
							and fairness regardless of the individual circumstances of their life.
							We recognize that teams, especially distributed ones, are made of people
							who bring different perspectives, opportunities, and cultures that add
							to the strength of the team.
						</p>

						<p>
							<b>Systemic outlook</b>: We prioritize solutions that tackle problems in
							systemic ways rather than iterating solely at the margins. We think
							systematically when we approach problems, rather than solely thinking
							locally.
						</p>

						<p>
							<b>Sustainability</b>: We value solutions that are sustainable and
							durable for the long-term, even if they’re more difficult, over ones
							that are more expedient but less sustainable.
						</p>
					</div>

					<div className={styles.side}>
						<h4>Handbook & Policies</h4>
						<ul>
							<li>Handbook</li>
							<li>DEI Policy</li>
							<li>etc</li>
						</ul>
					</div>
				</div>
			</section>
			<section>
				<h2>Statement of Independence</h2>
				<p>
					Knowledge Futures, Inc is an independent, nonprofit 501(c)(3) organization. We
					are committed to the independence and autonomy of Knowledge Future’s products
					and communities. We do not accept funding that would affect our ability to
					pursue work free of external interference, and we protect the independence of
					our staff, communities, and partners in their intellectual activities and
					relationships.
				</p>
			</section>
			<section>
				<h2 id="team">Team</h2>
				<Team />
			</section>
		</div>
	);
}
