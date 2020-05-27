import React from 'react';
import ProductList from 'components/ProductList/ProductList';
import Footer from 'components/Footer/Footer';
import Partners from 'components/Partners/Partners';
import programs from '../../data/programs';

require('./landing.scss');

const Landing = function() {
	return (
		<div id="landing-page">
			<section>
				<div className="side-logo line-up">
					<img src="/icon.png" alt="kfg logo" />
				</div>

				<p className="hero">
					The <b>Knowledge Futures Group</b> builds technology for the production,
					curation, and preservation of knowledge in service of the public good.
				</p>
			</section>
			<section className="blocks grey-bg">
				<div className="block">
					<h2 className="section-title">Programs</h2>
					<p>
						The battle over the control of knowledge is a defining struggle of our time.
						We imagine a future where the infrastructure to create, access, curate, and
						build upon knowledge is controlled by researchers, journalists, libraries,
						publishers, museums, and other organizations that serve the public's
						interest. The KFG works to build this future through our programs which
						developing core pieces of infrastructure, advocate through writing and
						events, and providing opportunities for research and sustainable
						development.
					</p>
				</div>
				<div className="programs">
					{programs.map((program) => {
						return (
							<div key={program.title} className="program-block">
								<div className="program-title">{program.title}</div>
								<div className="program-description">{program.description}</div>
								<div className="program-focus">
									<b>Focus Areas: </b>
									{program.focusAreas.map((focus, index, array) => {
										return (
											<span className="focus" key={focus}>
												{focus}
												{index !== array.length - 1 ? ', ' : ''}
											</span>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<section className="products">
				<div className="side-logo line-down">
					<img src="/icon.png" alt="kfg logo" />
				</div>
				<h2 className="section-title">Products</h2>
				<ProductList />
				<h2 className="section-title">Partners and Funders</h2>
				<p>
					The Knowledge Futures Group, founded as a partnership between the MIT Press and
					the MIT Media Lab, is a not-for-profit powered by academic, industry, and
					advocacy organizations. Together we build and support products to make knowledge
					open and accessible to all.
				</p>
				<Partners />
			</section>
			<Footer />
		</div>
	);
};

export default Landing;
