import React from 'react';

require('./footer.scss');

const Footer = function() {
	const joins = [
		{
			name: 'Twitter',
			link: 'https://twitter.com/kfutures',
			text: 'Follow @kfutures',
			image: '/images/twitter.png',
		},
		{
			name: 'Newsletter',
			link: 'https://eepurl.com/gJzIjD',
			text: 'Product and team updates',
			image: '/images/newsletter.png',
		},
		{
			name: 'Donate',
			link:
				'https://www.paypal.com/donate/?token=lA0gFzquMe0DV9PJaWsd8ZH7IoSp65luATWnr6nVzsg33w5yxCoo4XCU4pSyuqcFAmzzIm&country.x=US&locale.x=',
			text: 'Through our 501(c)3 fiscal sponsor',
			image: '/images/dollar.png',
		},
		{
			name: 'Jobs',
			link: '/jobs',
			text: 'Join the team',
			image: '/images/jobs.png',
		},
	];
	return (
		<div className="footer">
			<section>
				<div className="side-logo">
					<img src="/icon.png" alt="kfg logo" />
				</div>
				<h2 className="section-title">Get Involved</h2>
				<div className="join-blocks">
					{joins.map((item) => {
						return (
							<a className="join-item" href={item.link}>
								<img src={item.image} alt="imge" />
								<div>
									<div className="name">{item.name}</div>
									<div>{item.text}</div>
								</div>
							</a>
						);
					})}
				</div>
			</section>
		</div>
	);
};

export default Footer;
