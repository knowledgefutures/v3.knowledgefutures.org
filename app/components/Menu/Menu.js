import React from 'react';
import PropTypes from 'prop-types';

require('./menu.scss');

/* Menu Component */
/* -------------- */
const menuProps = {
	children: PropTypes.node.isRequired,
};

export const Menu = function(props) {
	const { children } = props;
	return <ul className="menu">{children}</ul>;
};
Menu.propTypes = menuProps;


/* MenuItem Component */
/* ------------------ */
const menuItemProps = {
	content: PropTypes.node.isRequired,
	link: PropTypes.string.isRequired,
};

export const MenuItem = function(props) {
	const { content, link } = props;
	return (
		<li>
			<a href={link}>{content}</a>
		</li>
	);
};

MenuItem.propTypes = menuItemProps;
