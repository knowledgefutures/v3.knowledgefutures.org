import React from 'react';

require('./team.scss');

const Team = () => {
	const team = [
		{
			name: 'Catherine Ahearn',
			title: ['Head of Content'],
			image: '/people/catherine.jpg',
		},
		{
			name: 'Amy Brand',
			title: ['Board Chair'],
			external: ['MIT Press, Director'],
			image: '/people/amy.jpg',
		},
		{
			name: 'Terry Ehling',
			title: ['Board Member'],
			external: ['MIT Press, Director for Strategic Initiatives '],
			image: '/people/terry.jpg',
		},
		{
			name: 'Deepak Jagdish',
			title: ['Design Lead'],
			image: '/people/deepak.jpg',
		},
		{
			name: 'Joel Gustafson',
			title: ['Software Engineer'],
			external: ['Protocol Labs, Independent Researcher'],
			image: '/people/joel.jpg',
		},
		{
			name: 'Danny Hillis',
			title: ['Underlayer'],
			image: '/people/danny.jpg',
		},
		{
			name: 'SJ Klein',
			title: ['Board Member'],
			image: '/people/sj.jpg',
		},
		{
			name: 'Peter Kaufman',
			title: ['Strategic Development'],
			external: ['MIT'],
			image: '/people/peter.jpg',
		},
		{
			name: 'Jessica Polka',
			title: ['Affiliate'],
			external: ['ASAPBio, Executive Director'],
			image: '/people/jessica.jpg',
		},
		{
			name: 'Heather Staines',
			title: ['Head of Partnerships'],
			image: '/people/heather.jpg',
		},
		{
			name: 'Gabe Stein',
			title: ['Head of Operations', 'Board Member'],
			image: '/people/gabe.jpg',
		},
		{
			name: 'Ian Reynolds',
			title: ['Software Engineer'],
			image: '/people/ian.jpg',
		},
		{
			name: 'Travis Rich',
			title: ['Executive Director', 'Board Member'],
			image: '/people/travis.jpg',
		},
		{
			name: 'Zach Verdin',
			title: ['Strategic Development Manager'],
			image: '/people/zach.jpg',
		},
	];

	return (
		<div className="team">
			{team.map((person) => {
				const { name, image, title, external } = person;
				return (
					<div className="person" key={name}>
						<img src={image} alt={name} />
						<div className="name">{name}</div>
						{title.map((item) => {
							return <div className="title">{item}</div>;
						})}
						{external && external.map((item) => {
							return <div className="title external">{item}</div>;
						})}
					</div>
				);
			})}
		</div>
	);
};

export default Team;
