import { Button, Team } from "components";

import styles from "./about.module.scss";

export default function About() {
	return (
		<div className={styles.about}>
			<section>
				<h2>Our story</h2>

				<p>
					The Knowledge Futures Group, founded as a partnership between the MIT Press and
					the MIT Media Lab, is a nonprofit organization powered by academic, industry,
					and advocacy groups. Together we build and support products to make knowledge
					open and accessible to all.
				</p>
				<div className={styles.panels}>
					<div>
						<p>
							The Knowledge Futures Group, founded as a partnership between the MIT
							Press and the MIT Media Lab, is a nonprofit organization powered by
							academic, industry, and advocacy groups. Together we build and support
							products to make knowledge open and accessible to all.
						</p>
						<p>
							The Knowledge Futures Group, founded as a partnership between the MIT
							Press and the MIT Media Lab, is a nonprofit organization powered by
							academic, industry, and advocacy groups. Together we build and support
							products to make knowledge open and accessible to all.
						</p>
						<p>
							The Knowledge Futures Group, founded as a partnership between the MIT
							Press and the MIT Media Lab, is a nonprofit organization powered by
							academic, industry, and advocacy groups. Together we build and support
							products to make knowledge open and accessible to all.
						</p>
					</div>
					<div className={styles.side}>
						<h4>Annual Reports</h4>
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
							The Knowledge Futures Group, founded as a partnership between the MIT
							Press and the MIT Media Lab, is a nonprofit organization powered by
							academic, industry, and advocacy groups. Together we build and support
							products to make knowledge open and accessible to all.
						</p>
						<p>
							<b>Accessibility</b>: We believe that just because knowledge is available
							doesn’t mean it’s truly accessible. We put ourselves in others’
							positions to understand the barriers that prevent knowledge from being
							truly accessible to diverse groups around the world.
						</p>

						<p>
							<b>Conscientiousness</b>: We value honesty and good-faith efforts to fulfill
							our duties and obligations as highly as success in its own right.
						</p>

						<p>
							<b>Curiosity</b>: We approach challenges with an honest, experimental,
							problem-solving mindset. We bring an intellectual curiosity that
							explores problem spaces with openness and intrigue in ways that lead to
							important new ideas.
						</p>

						<p>
							<b>Egalitarianism</b>: We acknowledges that all people deserve equality and
							fairness regardless of the individual circumstances of their life. We
							recognize that teams, especially distributed ones, are made of people
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
							<b>Sustainability</b>: We value solutions that are sustainable and durable for
							the long-term, even if they’re more difficult, over ones that are more
							expedient but less sustainable.
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
					The Knowledge Futures Group, founded as a partnership between the MIT Press and
					the MIT Media Lab, is a nonprofit organization powered by academic, industry,
					and advocacy groups. Together we build and support products to make knowledge
					open and accessible to all.
				</p>
			</section>
			<section>
				<h2 id="team">Team</h2>
				<Team />
				{/* Switcher for All, Staff (word? ‘Core’), Board, Advisory Council */}
			</section>
		</div>
	);
}
