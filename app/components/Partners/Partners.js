import React from 'react';

require('./partners.scss');

const Partners = () => {
	const partners = [
		{ title: 'MIT Press', img: '/partners/mitp.png' },
		{ title: 'MacArthur Foundation', img: '/partners/macarthur.png' },
		{ title: 'Protocol Labs', img: '/partners/prot.png' },
		{ title: 'Reid Hoffman', img: '/partners/reid.png' },
		{ title: 'Sloan Foundation', img: '/partners/sloan.png' },
		{ title: 'Siegel Family Foundation', img: '/partners/siegel.png' },
	];

	return (
		<div className="partners">
			{partners.map((partner) => {
				return (
					<div className="partner" key={partner.title}>
						<img src={partner.img} alt={partner.title} />
					</div>
				);
			})}
		</div>
	);
};

export default Partners;
