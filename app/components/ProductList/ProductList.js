import React from 'react';

require('./productList.scss');

const ProjectRow = function() {
	const products = [
		{
			title: 'PubPub',
			link: 'https://www.pubpub.org',
			color: '#E1A200',
			description:
				'PubPub is an open authoring and publishing platform. It socializes the process of knowledge creation by integrating conversation, annotation, and versioning into short and long-form digital publication.',
			image: '/images/projects/pubpub.png',
			partners: 'The MIT Press',
		},
		{
			title: 'Underlay',
			link: 'https://www.underlay.org',
			color: '#00ABE1',
			description:
				'The Underlay is a free and open source system for structuring, storing, and aggregating open, distributed knowledge.',
			image: '/images/projects/underlay.png',
			partners: '',
		},
		{
			title: 'The Commonplace',
			link: 'https://commonplace.knowledgefutures.org',
			color: '#00BFB4',
			description:
				'The Commonplace is a publication of the Knowledge Futures Group. It serves as a conversation and idea hub for mission-aligned individuals and organizations working to make knowledge open for the public good.',
			image: '/images/projects/underlay.png',
			partners: '',
		},
	];

	return (
		<div className="product-list">
			{products.map((product, index) => {
				const { title, link, color, description, partners } = product;
				return (
					<div className="product-item" key={title}>
						<div className="item-number">
							0{index + 1}
						</div>
						<div className="item-box">
							<div className="item-title" style={{ color }}>{title}</div>
							<div className="item-text">
								<div className="description">{description}</div>
								{partners && (
									<div className="partner-list">
										Primary Partner: {partners}
									</div>
								)}
							</div>
							<a href={link} style={{ background: color }}>Visit: <b>{title}</b></a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ProjectRow;
