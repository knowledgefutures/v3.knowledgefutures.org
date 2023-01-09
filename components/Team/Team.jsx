import React, { useState } from "react";
import styles from "./Team.module.scss";
import teamjson from "./team.json";

const Team = () => {
	const [active, setActive] = useState("All");
	const activeMatch = (string) => {
		return active.indexOf(string) === 0 ? styles.active : "";
	};
	const categories = ["All", "Staff", "Board", "Advisors"];
	const activePeople = teamjson.filter((person) => {
		return active === "All" || person.groups.includes(active);
	});

	return (
		<div className={styles.team}>
			{/* <div className={styles.switcher}>
				{categories.map((category) => {
					return (
						<span
							className={activeMatch(category)}
							onClick={() => {
								setActive(category);
							}}
						>
							{category}
						</span>
					);
				})}
			</div> */}
			<div className={styles.people}>
				{activePeople.sort((foo, bar) => {
					if (foo.name.toLowerCase() < bar.name.toLowerCase()) {
						return -1;
					}
					if (foo.name.toLowerCase() > bar.name.toLowerCase()) {
						return 1;
					}
				}).map((person) => {
					const { name, image, title, external } = person;
					return (
						<div className={styles.person} key={name}>
							<img src={image} alt={name} />
							<div className={styles.name}>{name}</div>
							{title.map((item) => {
								return (
									<div className={styles.title} key={item}>
										{item}
									</div>
								);
							})}
							{external &&
								external.map((item) => {
									return (
										<div className={styles.external} key={item}>
											{item}
										</div>
									);
								})}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Team;
