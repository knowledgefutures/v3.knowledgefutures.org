import React from 'react';
import Helmet from 'react-helmet';

require('./kickoff.scss');

const Kickoff = function() {
	return (
		<div id="kickoff">
			<Helmet>
				<title>Kickoff Notes · Knowledge Futures Group</title>
			</Helmet>
			<div className="side-logo line-up">
				<img src="/icon.png" alt="kfg logo" />
			</div>
			<section>
				<div className="side-logo line-up">
					<img src="/icon.png" alt="kfg logo" />
				</div>

				<h1>Kickoff Notes</h1>
			</section>
			
			<h2>Relevant Writing</h2>
			<ul>
				<li><a href="https://infrastructure.siegelendowment.org/white-paper/">Seigel Family Endowment: Infrastructure Influences Everything</a></li>
				<li><a href="https://hewlett.org/library/beyond-neoliberalism-rethinking-political-economy/">Hewlett Foundation's Larry Kramer: Beyond Neoliberalism</a></li>
				<li><a href="https://commonplace.knowledgefutures.org/pub/6qqfgms5/release/1">Science for the Post-Normal Age</a></li>
				<li><a href="/reports/annualReport2020.pdf">KFG Annual Report: 2020</a></li>
				<li><a href="https://commonplace.knowledgefutures.org">Commonplace</a>: A publication of the Knowledge Futures Group to discuss the digital infrastructure, policies, and cultures needed to distribute, constellate, and amplify knowledge for the public good.</li>
			</ul>

			<h2>Presentation Talking Points</h2>
			<ul>
				<li>Began by building publishing tools after frustration with traditional options.</li>
				<li>Were surprised to see the number of public-oriented groups whose operations and actions were dictated by misaligned commercial tools.</li>
				<li>Launched the KFG, first within MIT then as an independent nonprofit, to build public digital infrastructure to support these mission-oriented communities.</li>
				<li>We build digital platforms and protocols, but spend a lot of time trying to understand why non-profit public digital infrastructure is so rare. A complex question, but we've found 3 important cycles:</li>
				<li>Cycle 1: Relative availability of capital for non-profit tech compared to for-profit tech. The volume of activity is just skewed away from organizations that would create public digital infrastructure.</li>
				<li>Cycle 2: Due to comparative underfunding, many projects die out in a way that leads to corporate capture and cooption of the mission.</li>
				<li>Cycle 3: Public-oriented groups react to underfunding and corporate capture by hyper-specializing. This leads to a fragmented ecosystem that is poorly equippped to address broad, complex challenges faced by society.</li>
				<li>Our next year is dedicated to learning how public digital infrastructure can break out of these cycles. </li>
				<li>A recent insight of ours is to focus on empowering philanthropic grantees to succeed in their programmatic work (whereas they may otherwise be stymied by commercial infrastructure or forced to spend all their resources on bespoke tech development).</li>
				<li>Co-developing with diverse communities allows us to create infrastructure that is affordable and broadly applicable - offering new on-ramps to communities that have otherwise been marginalized and excluded. </li>
				<li>Selection of which communities we co-develop with is critical to ensure we don't recreate existing system inequities.</li>
				<li>The story boils down to:
					<ol>
						<li>Mission-driven communities are too frequently limited in their potential because they are beholden to infrastructure that is driven by misaligned incentives.</li>
						<li>The KFG is focused on empowering those communities with affordable, mission-aligned infrastructure and integration into larger ecosystems</li>
						<li>The selection of communities we partner with is critical to ensure we build equitable, accessible, sustainable infrastructure.</li>
					</ol>
				</li>
			</ul>

			<h2>Products</h2>
			<ul>
				<li>
					<a href="https://www.pubpub.org">PubPub</a>: An open source platform for
					community publishing
					<p><a href="https://notes.knowledgefutures.org/pub/2020-yir/release/1">2020 Year in Review</a> • <a href="https://github.com/orgs/pubpub/projects/9">Open Roadmap</a></p>
				</li>
			</ul>

			<h2>Protocols</h2>
			<ul>
				<li>
					<a href="https://www.underlay.org">Underlay</a>: A protocol for distributed
					knowledge graphs
				</li>
				<li>
					<a href="https://docmaps.knowledgefutures.org">Docmaps</a>: A protocol for
					representing documents and their associated processes in a machine-readable,
					discoverable, and extensible format.
				</li>
			</ul>

			<h2>Sample Communities</h2>
			<p>Below are a sample of the 2,000+ communities we support.</p>
			<ul>
				<li>Case Study: <a href="https://mit-serc.pubpub.org/">MIT Case Studies in Social and Ethical Responsibilities of Computing</a></li>
				<li>Library: <a href="https://covid-19.mitpress.mit.edu/">MIT Press on COVID-19</a></li>
				<li>Books: <a href="https://phone-and-spear.pubpub.org/">Phone & Spear</a> • <a href="https://www.sustainabilityscience.org/">Sustainability Science</a> • <a href="https://www.frankenbook.org/">Frankenbook</a></li>
				<li>Journals: <a href="https://hdsr.mitpress.mit.edu/">Harvard Data Science Review</a> • <a href="https://www.sonicscope.org/">Sonic Scope</a> • <a href="https://tmb.apaopen.org/">APA Open: Technology, Mind, and Behavior</a></li>
				<li>Government Policy: <a href="https://participa.conl.mx/">Borradores de la nueva versión del Plan Estratégico</a></li>
				<li>Conference: <a href="https://spreadingfacts.pubpub.org/">#SpreadingFacts</a> </li>
				<li>Student publications: <a href="https://association.aap.cornell.edu/">Cornell AAP ASSOCIATION</a> • <a href="https://gradfoodstudies.pubpub.org/">Graduate Journal of Food Studies</a></li>
				<li>Learning series: <a href="https://fermentology.pubpub.org/">NC State Public Science Lab: Fermentology</a></li>
				<li>Community resources: <a href="https://africarxiv.pubpub.org/">AfricArXiv</a></li>
				<li>Reports: <a href="https://mitoataskforce.pubpub.org/">MIT Open Access Task Force</a>  </li>
				<li>Open review: <a href="https://mitpressonpubpub.mitpress.mit.edu/data-feminism">Data Feminism</a></li>
				<li>Museum: <a href="https://universitymuseums.pubpub.org/">University Museums, Iowa State University</a> </li>
				<li>Independent Press: <a href="https://www.mediastudies.pres">mediastudies.press</a></li>
			</ul>

			<h2>Goals for the Year</h2>
			<ul>
				<li>
					Grow our Board of Directors beyond its founding group with a gender imbalance of
					less than 10% and over 50% American racial minority.
				</li>
				<li>
					Establish constructive co-development relationships with an additional 3
					public-oriented communities/organizations who are excluded from mainstream
					knowledge pathways and are tackling post-normal challenges.
				</li>
				<li>
					Co-develop and publish a strategy document outlining the benefits and tactics
					for mission-aligned infrastructure investment and catalyzation that is read by
					over 15,000 visitors.
				</li>
				<li>
					Improve operational practices and organizational stability through partner guidance
					and expertise.
				</li>
			</ul>

			<h2>Contact</h2>
			<ul>
				<li>
					<a href="mailto:hello@knowledgefutures.org">hello@knowledgefutures.org</a>
				</li>
				<li>
					<a href="https://twitter.com/kfutures">@kfutures</a>
				</li>
				<li>
					<a href="https://twitter.com/pubpub">@pubpub</a>
				</li>
				<img className="team" alt="A recent snapshot of the KFG Team" src="/images/recentTeam.jpg" />
			</ul>
		</div>
	);
};

export default Kickoff;
