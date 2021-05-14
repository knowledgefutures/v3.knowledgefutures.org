import { Button } from "components";
export default function Home() {
	return (
		<div>
			<section>
				<h1>
					Knowledge Futures Group is building the foundation for collective understanding
					of our world.
				</h1>
				<div>
					<div>
						We’re empowering communities to control their publication workflow
						end-to-end with PubPub
					</div>
					<div>
						We’re spotlighting voices and ideas behind the push to make public knowledge
						a public good with Commonplace.
					</div>
					<div>We’re connecting the world’s knowledge with the Underlay</div>
					<div>
						We’re supporting collective action towards more equitable, effective, and
						sustainable publishing models with our Campaign for Community Publishing.
					</div>
				</div>
			</section>
			<section>
				<h2>
					Knowledge Futures Group is a 501c3 nonprofit dedicated to building open source
					technology and gathering communities of practice to collaboratively design and
					build the infrastructure needed for diverse, equitable, and sustainable
					knowledge futures.
				</h2>
				<Button href="/work" text="See all our work" />
			</section>
			<section>
				<h2>Our Impact</h2>
			</section>
			<section>
				<h2>Get involved</h2>
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
