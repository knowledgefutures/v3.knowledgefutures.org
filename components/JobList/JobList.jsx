import React from "react";
import { Menu, MenuItem } from "components";

import jobs from "./jobs";

const JobList = function () {
	if (!jobs.length) {
		return <p>There are currently no open job listings.</p>
	}
	return (
		<Menu>
			{jobs.map((job) => {
				const { link, title, commitment, location, term } = job;
				return (
					<MenuItem
						key={title}
						link={link}
						content={
							<React.Fragment>
								<h4>{title}</h4>
								{location} • {commitment} • {term}
							</React.Fragment>
						}
					/>
				);
			})}
		</Menu>
	);
};

export default JobList;
