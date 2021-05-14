import React, { useState } from "react";
import styles from "./Team.module.scss";
import teamjson from "./team.json";

const Team = () => {
	const [active, setActive] = useState("all");

	return (
		<div className={styles.team}>
			<div className={styles.switcher}>
				All · Staff · Board · Advisors
			</div>
			<div className={styles.people}>
				{teamjson.map((person) => {
					const { name, image, title, external } = person;
					return (
						<div className={styles.person} key={name}>
							<img src={image} alt={name} />
							<div className={styles.name}>{name}</div>
							{title.map((item) => {
								return <div className={styles.title}>{item}</div>;
							})}
							{external &&
								external.map((item) => {
									return <div className={styles.external}>{item}</div>;
								})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Team;
