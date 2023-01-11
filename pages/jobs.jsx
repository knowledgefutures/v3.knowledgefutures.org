import Head from "next/head";

import { JobList } from "components";

export default function Jobs() {
	return (
		<div>
			<Head>
				<title>Jobs · Knowledge Futures Group</title>
			</Head>
			<h1>Jobs</h1>
			<p>
				Knowledge Futures Group, founded as a partnership between the MIT Press and the MIT
				Media Lab, is a non-profit institution builds infrastructure for a more effective,
				equitable, and sustainable knowledge economy. Help move knowledge forward with our
				thoughtfully remote, 4-day workweek, values-driven team.
			</p>
			<hr style={{ margin: "50px 0px" }} />
			<h2>Open Listings</h2>
			<JobList />
			<hr style={{ margin: "50px 0px" }} />
			<h2>Working With Us</h2>
			<ul>
				<li>
					<strong>Work 4 days per week with a thoughtfully distributed team:</strong> we
					were a remote team before it was a global necessity, and put a lot of effort
					into making the remote experience a great one. Last summer, we experimented with
					working 4 days per week (8 hours per day), and never looked back. Learn more
					about how we work in our{" "}
					<a href="https://notes.knowledgefutures.org/pub/cqih29xa" target="_blank">
						Handbook
					</a>
					. As it becomes safe to travel and gather again, we are resuming our roughly
					biannual in-person team retreats at fun locations throughout the U.S., which
					began with our Vermont retreat in the fall of 2021.
				</li>
				<li>
					<strong>Join a diverse, values-driven team:</strong> during the pandemic, we{" "}
					<a
						href="https://notes.knowledgefutures.org/anti-racism-structural-justice"
						target="_blank"
					>
						rewrote our company policies
					</a>{" "}
					from the ground up to focus on equity, structural justice, and employee
					satisfaction. We value accessibility, conscientiousness, curiosity, equity,
					systemic thinking, and sustainability over growth at all costs.
				</li>
				<li>
					<strong>Enjoy industry-standard benefits and perks:</strong> unlimited PTO with
					a yearly minimum, your own computer of choice, and the ability to work 4 days
					per week, fully remote — with regular in-person team retreats as safety allows —
					with a team that prioritizes remote participation.
				</li>
				<li>
					<strong>
						Contribute to our larger mission at the Knowledge Futures Group:
					</strong>{" "}
					we’re building a future where the infrastructure to create and access knowledge
					is controlled by people who serve the public interest, starting with core
					projects like PubPub and The Underlay. As a KFG team member, you’ll be able to
					contribute to those efforts as well, and we’ll support any ambitions you might
					have to publish in our journal, the Commonplace, and beyond.
				</li>
				<li>
					Lastly, if you’re excited about working with us, but don’t see the exact role
					for you, please{" "}
					<a
						href="mailto:hiring@knowledgefutures.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						get in touch
					</a>
					. We’re open to creating roles for the right people.{" "}
				</li>
			</ul>
		</div>
	);
}
