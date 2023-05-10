import React from "react";
import PropTypes from "prop-types";
import styles from "./MembershipForm.module.scss";

const propTypes = {};

const MembershipForm = () => {
	return (
		<div className={styles.membershipForm}>
			<form
				action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
				method="POST"
			>
				<input type="hidden" name="oid" value="00D8V00000279YI" />
				<input type="hidden" name="retURL" value="http://knowledgefutures.org" />
				<label htmlFor="first_name">First Name</label>
				<input
					id="first_name"
					maxLength="40"
					name="first_name"
					size="20"
					type="text"
					required
				/>

				<label htmlFor="last_name">Last Name</label>
				<input
					id="last_name"
					maxLength="80"
					name="last_name"
					size="20"
					type="text"
					required
				/>

				<label htmlFor="email">Email</label>
				<input id="email" maxLength="80" name="email" size="20" type="text" required />

				<label htmlFor="company">Organization</label>
				<input id="company" maxLength="40" name="company" size="20" type="text" required />

				<label htmlFor="city">City</label>
				<input id="city" maxLength="40" name="city" size="20" type="text" required />

				<label htmlFor="country">Country</label>
				<input id="country" maxLength="40" name="country" size="20" type="text" required />

				<input
					type="hidden"
					id="lead_source"
					name="lead_source"
					value="Web - KF Member Page"
				/>
				<input type="submit" name="submit" value="Submit" />
			</form>
		</div>
	);
};

MembershipForm.propTypes = propTypes;
export default MembershipForm;
