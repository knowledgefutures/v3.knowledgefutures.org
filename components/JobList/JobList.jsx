import React from "react";
import { Menu, MenuItem } from "components";

import jobs from "./jobs";

const JobList = function () {
	return (
		<Menu>
			{jobs.map((job) => {
				const { link, title, commitment, location } = job;
				return (
					<MenuItem
						key={title}
						link={link}
						content={
							<React.Fragment>
								<h4>{title}</h4>
								{commitment} • {location}
							</React.Fragment>
						}
					/>
				);
			})}
		</Menu>
	);
};

export default JobList;
