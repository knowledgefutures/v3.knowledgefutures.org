import React from 'react';
import Helmet from 'react-helmet';
import dateFormat from 'dateformat';
import { Menu, MenuItem } from 'components/Menu/Menu';
import news from '../../data/news';

const News = function() {
	return (
		<div id="container">
			<Helmet>
				<title>News · KFG</title>
			</Helmet>

			<section>
				<div className="side-logo line-up">
					<img src="/icon.png" alt="kfg logo" />
				</div>
				<h2 className="section-title">News</h2>
				<p>
					Knowledge Futures Group news, accouncements, and more. Follow us{' '}
					<a href="https://twitter.com/kfutures">@kfutures</a> for a live feed of updates.
				</p>
				<hr />
				<Menu>
					{news
						.sort((foo, bar) => {
							const fooDate = new Date(foo.date);
							const barDate = new Date(bar.date);
							if (fooDate < barDate) {
								return 1;
							}
							if (fooDate > barDate) {
								return -1;
							}
							return 0;
						})
						.map((newsItem) => {
							const { date, title, link } = newsItem;
							return (
								<MenuItem
									key={title}
									link={link}
									content={
										<React.Fragment>
											<div className="title">
												{dateFormat(new Date(date), 'mmm dd, yyyy')}
											</div>
											{title}
										</React.Fragment>
									}
								/>
							);
						})}
				</Menu>
			</section>
		</div>
	);
};

export default News;
