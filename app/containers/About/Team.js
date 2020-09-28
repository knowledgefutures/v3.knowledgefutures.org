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
			title: ['Marketing Fellow'],
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
			external: ['MIT Open Learning, Strategic Initiatives'],
			image: '/people/peter.jpg',
		},
		{
			name: 'Sarah Kember',
			title: [],
			external: ['Goldsmiths Press, Director'],
			image: '/people/sarahKember.jpg',
		},
		{
			name: 'SJ Klein',
			title: ['Underlayer', 'Board Member'],
			image: '/people/sj.jpg',
		},
		{
			name: 'Eric McDaniel',
			title: ['Senior Software Engineer'],
			image: '/people/eric.jpg',
		},
		{
			name: 'Jessica Polka',
			title: [],
			external: ['ASAPBio, Executive Director'],
			image: '/people/jessica.jpg',
		},
		{
			name: 'Ian Reynolds',
			title: ['Senior Software Engineer'],
			image: '/people/ian.jpg',
		},
		{
			name: 'Travis Rich',
			title: ['Executive Director', 'Board Member'],
			image: '/people/travis.jpg',
		},
		{
			name: 'Gabe Stein',
			title: ['Head of Operations', 'Board Member'],
			image: '/people/gabe.jpg',
		},
		{
			name: 'Dawit Tegbaru',
			title: ['Editorial Manager'],
			image: '/people/dawit.jpg',
		},
		{
			name: 'Allison Vanouse',
			title: ['Editorial Fellow'],
			image: '/people/allisonV.jpg',
		},
		{
			name: 'Zach Verdin',
			title: ['Head of Strategic Programs'],
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
		{
			name: 'Tim Holdsworth',
			title: [''],
			image: '/people/timH.jpg',
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
