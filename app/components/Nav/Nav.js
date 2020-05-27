import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

require('./nav.scss');

const propTypes = {
	location: PropTypes.object.isRequired,
};

const NavBar = function(props) {
	const { location } = props;
	const activeMatch = (string) => {
		return classNames({ active: location.pathname.indexOf(string) === 0})
	}

	return (
		<nav className="navbar">
			<div className="left">
				<Link to="/">
					<img src="/logoText.svg" alt="KFG Logo" />
				</Link>
			</div>
			<div className="right">
				<Link to="/news" className={activeMatch('/news')}>News</Link>
				<Link to="/events" className={activeMatch('/events')}>Events</Link>
				<Link to="/jobs" className={activeMatch('/jobs')}>Jobs</Link>
				<Link to="/about" className={activeMatch('/about')}>About</Link>
			</div>
		</nav>
	);
};

NavBar.propTypes = propTypes;
export default NavBar;
