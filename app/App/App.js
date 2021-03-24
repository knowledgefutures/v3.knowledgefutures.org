import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Route, withRouter, Switch } from 'react-router-dom';
import Landing from 'containers/Landing/Landing';
import About from 'containers/About/About';
import Program from 'containers/Program/Program';
import Jobs from 'containers/Jobs/Jobs';
import Events from 'containers/Events/Events';
import News from 'containers/News/News';
import Kickoff from 'containers/Kickoff/Kickoff';
import Advisory from 'containers/Advisory/Advisory';
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
			</Helmet>

			<Nav location={location} />

			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/programs/:programSlug" component={Program} />
				<Route exact path="/about" component={About} />
				<Route exact path="/jobs" component={Jobs} />
				<Route exact path="/news" component={News} />
				<Route exact path="/events" component={Events} />
				<Route exact path="/kickoff" component={Kickoff} />
				<Route exact path="/advisory-council" component={Advisory} />
				<Route path="/404.html" component={NoMatch} />
				<Route path="/*" component={NoMatch} />
			</Switch>
		</div>
	);
};

App.propTypes = propTypes;
export default withRouter(App);
