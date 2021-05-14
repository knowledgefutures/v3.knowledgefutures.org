import React from "react";
import PropTypes from 'prop-types';
import styles from "./Button.module.scss";

const propTypes = {
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

const Button = ({href, text}) => {
	return (
		<a className={styles.button} href={href}>
			{text}
		</a>
	);
};

Button.propTypes = propTypes;
export default Button;
