import React from "react";
import { Menu, MenuItem } from "components";
import styles from "./NewsList.module.scss";

import news from "./news";


const NewsList = function () {
	return (
		<ul className={styles.news}>
			{news.map((news) => {
				const { link, title, description, image } = news;
				return (
					<li key={link}>
								<a className="hoverline" href={link}>{title}</a>
					</li>
				);
			})}
		</ul>
	);
};

export default NewsList;
