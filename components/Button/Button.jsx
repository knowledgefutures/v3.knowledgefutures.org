import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const propTypes = {
	href: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	opensNewTab: PropTypes.bool,
};

const Button = ({ href, text, opensNewTab = false }) => {
	return (
		<a
			className={styles.button}
			href={href}
			target={opensNewTab ? "_blank" : null}
			rel={opensNewTab ? "noopener noreferrer" : undefined}
		>
			{text}
		</a>
	);
};

Button.propTypes = propTypes;
export default Button;
