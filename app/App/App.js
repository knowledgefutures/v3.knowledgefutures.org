import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Route, withRouter, Switch } from 'react-router-dom';
import Landing from 'containers/Landing/Landing';
import About from 'containers/About/About';
import Jobs from 'containers/Jobs/Jobs';
import Events from 'containers/Events/Events';
import News from 'containers/News/News';
import NoMatch from 'containers/NoMatch/NoMatch';
import Nav from 'components/Nav/Nav';

require('./app.scss');

const propTypes = {
	location: PropTypes.object.isRequired,
};

const App = function(props) {
	const { location } = props;
	return (
		<div className="app">
			<Helmet>
				<title>Knowledge Futures Group</title>
				<meta
					name="description"
					content="The KFG builds technology for the production,
					curation, and preservation of knowledge in service of the public good."
				/>
				<link rel="preload" href="/images/morsevert.png" as="image" />
			</Helmet>

			<Nav location={location} />

			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/about" component={About} />
				<Route exact path="/jobs" component={Jobs} />
				<Route exact path="/news" component={News} />
				<Route exact path="/events" component={Events} />
				<Route path="/404.html" component={NoMatch} />
				<Route path="/*" component={NoMatch} />
			</Switch>
		</div>
	);
};

App.propTypes = propTypes;
export default withRouter(App);
