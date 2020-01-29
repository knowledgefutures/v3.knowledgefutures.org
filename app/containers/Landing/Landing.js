import React from 'react';
import ProductList from 'components/ProductList/ProductList';
import Footer from 'components/Footer/Footer';

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
					<h2 className="section-title" style={{ color: '#05bcbc' }}>A Brighter Future</h2>
					<p>
						The battle over the control of knowledge is a defining struggle of our time.
						We imagine a future where the infrastructure to create, access, curate, and
						build upon knowledge is controlled by researchers, journalists, libraries,
						publishers, museums, and other organizations that serve the public's
						interest. The KFG works to build this future by developing core pieces of
						the infrastructure, advocating through writing and events, and providing
						opportunities for research and sustainable development.
					</p>
				</div>
				<div className="block">
					<h2 className="section-title" style={{ color: '#312dff' }}>Powered by Partners</h2>
					<p>
						The Knowledge Futures Group, founded as a partnership between the MIT Press
						and the MIT Media Lab, is a not-for-profit consortium of academic, industry,
						and advocacy organizations. Together we build and support products to make
						knowledge open and accessible to all.
					</p>
				</div>
			</section>

			<section className="products">
				<div className="side-logo line-down">
					<img src="/icon.png" alt="kfg logo" />
				</div>
				<h2 className="section-title">Products</h2>
				<ProductList />
			</section>
			<Footer />
		</div>
	);
};

export default Landing;
