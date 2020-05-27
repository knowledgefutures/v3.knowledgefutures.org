import React from 'react';
import PropTypes from 'prop-types';

require('./team.scss');

const propTypes = {
	useContributors: PropTypes.boolean,
	useAlumni: PropTypes.boolean,
};

const defaultProps = {
	useContributors: false,
	useAlumni: false,
};

const Team = (props) => {
	const { useContributors, useAlumni } = props;
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
			name: 'Quincy Childs',
			title: ['Editorial Assistant'],
			image: '/people/quincy.jpg',
		},
		{
			name: 'Terry Ehling',
			title: ['Board Member'],
			external: ['MIT Press, Director for Strategic Initiatives '],
			image: '/people/terry.jpg',
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
			name: 'Deepak Jagdish',
			title: ['Design Lead'],
			image: '/people/deepak.jpg',
		},
		{
			name: 'Peter Kaufman',
			title: ['Strategic Development'],
			external: ['MIT'],
			image: '/people/peter.jpg',
		},
		{
			name: 'SJ Klein',
			title: ['Underlayer', 'Board Member'],
			image: '/people/sj.jpg',
		},
		{
			name: 'Jessica Polka',
			title: ['Affiliate'],
			external: ['ASAPBio, Executive Director'],
			image: '/people/jessica.jpg',
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
			name: 'Zach Verdin',
			title: ['Strategic Development Manager'],
			image: '/people/zach.jpg',
		},
	];

	const contributors = [
		{
			name: 'Thomas Renkert',
			title: [''],
			external: ['Heidelberg University'],
			image: '/people/thomas.jpg',
		},
		{
			name: 'Sarah Schwettmann',
			title: [''],
			external: ['MIT Brain & Cognitive Sciences'],
			image: '/people/sarahSchwettmann.jpg',
		},
		{
			name: 'James Weis',
			title: [''],
			external: ['MIT Media Lab'],
			image: '/people/jamesWeis.jpg',
		},
	];

	const alumni = [
		{
			name: 'Travis Cohen',
			title: [''],
			image: '/people/travisCohen.jpg',
		},
		{
			name: 'Sarah Kearns',
			title: [''],
			image: '/people/sarahKearns.jpg',
		},
		{
			name: 'Jabari King',
			title: [''],
			image: '/people/jabariKing.jpg',
		},
	];

	let people = team;
	if (useContributors) {
		people = contributors;
	}
	if (useAlumni) {
		people = alumni;
	}
	return (
		<div className="team">
			{people.map((person) => {
				const { name, image, title, external } = person;
				return (
					<div className="person" key={name}>
						<img src={image} alt={name} />
						<div className="name">{name}</div>
						{title.map((item) => {
							return <div className="title">{item}</div>;
						})}
						{external &&
							external.map((item) => {
								return <div className="title external">{item}</div>;
							})}
					</div>
				);
			})}
		</div>
	);
};

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;
export default Team;
