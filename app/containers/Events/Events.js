import React from 'react';
import Helmet from 'react-helmet';
import dateFormat from 'dateformat';
import { Menu, MenuItem } from 'components/Menu/Menu';
import events from '../../data/events';

const Events = function() {
	return (
		<div id="container">
			<Helmet>
				<title>Events · KFG</title>
			</Helmet>

			<section>
				<div className="side-logo line-up">
					<img src="/icon.png" alt="kfg logo" />
				</div>
				<h2 className="section-title">Events</h2>
				<p>
					The Knowledge Futures Group hosts and participates in a number of events. Join
					the community by attending upcoming events below, or stay in the loop with our
					post-event publications.
				</p>
				<p>
					Follow us <a href="https://twitter.com/kfutures">@kfutures</a> for a live feed
					of events and updates.
				</p>

				<hr />
				<Menu>
					{events
						.sort((foo, bar) => {
							return new Date(foo.date) < new Date(bar.date);
						})
						.map((event) => {
							const { date, title, link } = event;
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

export default Events;
