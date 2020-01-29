import React from 'react';
import Helmet from 'react-helmet';
import Footer from 'components/Footer/Footer';
import Team from './Team';
import Partners from './Partners';

require('./about.scss');

const About = function() {
	return (
		<div id="about">
			<Helmet>
				<title>About · Knowledge Futures Group</title>
			</Helmet>
			<section>
				<div className="side-logo line-up">
					<img src="/icon.png" alt="kfg logo" />
				</div>
				<h2 className="section-title">About</h2>
				<p>
					The Knowledge Futures Group, founded as a partnership between the MIT Press and MIT Media Lab, builds and sustains technology for the production,
					curation, and preservation of knowledge in service of the public good.
				</p>
			</section>

			<section className="values-wrapper grey-bg">
				<h2 className="section-title">Our Values</h2>
				<div className="values">
					<div className="value">
						<h3 className="section-title" style={{ color: '#312DFF' }}>
							Accessibility
						</h3>
						<p>
							We believe that for infrastructure to be relevant and competitive, it
							must be simple and inexpensive to deploy and use. Our networks, tools,
							and advocacy focus on lowering the time, technical, and cost barriers to
							participation – and on including everyone in the knowledge ecosystem.
						</p>
					</div>
					<div className="value">
						<h3 className="section-title" style={{ color: '#F5841C' }}>
							Bottom-up
						</h3>
						<p>
							We believe that bringing researchers and institutions closer to the
							infrastructure they use is the key to durable change. Our projects
							deploy community-driven practices to solve real problems.
						</p>
					</div>
					<div className="value">
						<h3 className="section-title" style={{ color: '#10B047' }}>
							Sustainability
						</h3>
						<p>
							We believe that infrastructure must have a plan for long-term
							sustainability in order to be reliable. Through a diversity of
							consortium partnerships, philanthropic donations, and revenue-generating
							models, we craft a robust sustainability landscape. We focus on
							developing business models that foster sustainable infrastructure.
						</p>
					</div>
				</div>
			</section>

			<section className="team-wrapper">
				<div className="side-logo line-down">
					<img src="/icon.png" alt="kfg logo" />
				</div>
				<h2 className="section-title">Our Team</h2>
				<p>
					The KFG is powered
					by partners dedicated to stewarding healthy and equitable knowledge futures. The
					core team brings experience from academy, industry, and advocacy. The theory of
					change we follow consists of diverse, bottom-up contributions from our partners
					and our community at large. We strive to move stewardship of key knowledge
					infrastructure towards institutions whose missions align with the interests of
					the public.
				</p>
				<Team />
				<h2 className="section-title">Partners</h2>
				<Partners />
			</section>
			<Footer />
		</div>
	);
};

export default About;
